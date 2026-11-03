"""Read-only sitemap and internal-link audit. Usage: python3 seo/scripts/crawl.py BASE OUTPUT."""
import json
import sys
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor
from html.parser import HTMLParser

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = ''
        self.h1 = []
        self.meta = {}
        self.canonical = []
        self.links = []
        self.ids = []
        self.active = None
        self.skip = 0
        self.text = []
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in ('title', 'h1'):
            self.active = tag
            if tag == 'h1': self.h1.append('')
        if tag == 'meta': self.meta[a.get('name', a.get('property', ''))] = a.get('content', '')
        if tag == 'link' and a.get('rel') == 'canonical': self.canonical.append(a.get('href'))
        if tag == 'a' and a.get('href'): self.links.append(a['href'])
        if a.get('id'): self.ids.append(a['id'])
        if tag in ('script', 'style'): self.skip += 1
    def handle_endtag(self, tag):
        if tag == self.active: self.active = None
        if tag in ('script', 'style'): self.skip = max(0, self.skip - 1)
    def handle_data(self, s):
        if self.active == 'title': self.title += s
        if self.active == 'h1': self.h1[-1] += s
        if not self.skip: self.text.append(s)

base, output = sys.argv[1:3]
base = base.rstrip('/')
origin = urllib.parse.urlsplit(base).netloc

def fetch(path):
    start = time.monotonic()
    try:
        with urllib.request.urlopen(base + path, timeout=30) as response:
            body = response.read().decode()
            status, final = response.status, response.url
        page = Page()
        page.feed(body)
        result = dict(path=path, status=status, final_url=final, seconds=round(time.monotonic()-start, 2), title=page.title, description=page.meta.get('description'), canonical=page.canonical, robots=page.meta.get('robots'), h1=page.h1, links=page.links, ids=page.ids, meta=page.meta, server_text_chars=len(' '.join(page.text)))
        if path.endswith(('.xml', '.txt')): result['body'] = body
        return result
    except Exception as error:
        return dict(path=path, error=str(error))

sitemap = fetch('/sitemap.xml')
urls = [urllib.parse.urlsplit(item.text).path or '/' for item in ET.fromstring(sitemap['body']).iter() if item.tag.endswith('loc')]
paths = list(dict.fromkeys(urls + ['/ads', '/confirmation', '/robots.txt']))
with ThreadPoolExecutor(6) as pool: rows = list(pool.map(fetch, paths)) + [sitemap]
known = {r['path']: r for r in rows}
# Discover additional linked pages, bounded to this site's origin and without API calls.
for depth in range(3):
    extra = set()
    for row in list(known.values()):
        for link in row.get('links', []):
            u = urllib.parse.urlsplit(urllib.parse.urljoin(base + row['path'], link))
            if u.netloc == origin and not u.path.startswith('/api/') and (u.path or '/') not in known:
                extra.add(u.path or '/')
    if not extra: break
    with ThreadPoolExecutor(4) as pool:
        for row in pool.map(fetch, sorted(extra)): known[row['path']] = row
issues = []
incoming = {p: set() for p in urls}
for row in known.values():
    if row.get('status') != 200: issues.append(dict(path=row['path'], error=row.get('error', row.get('status'))))
    for link in row.get('links', []):
        u = urllib.parse.urlsplit(urllib.parse.urljoin(base + row['path'], link))
        if u.netloc != origin: continue
        target = u.path or '/'
        if target in incoming and row['path'] != target: incoming[target].add(row['path'])
        if u.fragment and target in known and u.fragment not in known[target].get('ids', []): issues.append(dict(path=row['path'], missing_anchor=link))
html = [r for r in known.values() if r.get('h1')]
for field in ('title', 'description'):
    seen = {}
    for row in html:
        value = row.get(field)
        if not value: issues.append(dict(path=row['path'], missing=field))
        elif value in seen: issues.append(dict(path=row['path'], duplicate=field, other=seen[value]))
        else: seen[value] = row['path']
for row in html:
    if len(row['h1']) != 1: issues.append(dict(path=row['path'], h1_count=len(row['h1'])))
    if row['path'] in urls:
        if len(row['canonical']) != 1: issues.append(dict(path=row['path'], canonical=row['canonical']))
        if 'noindex' in (row.get('robots') or ''): issues.append(dict(path=row['path'], noindex=True))
for path, sources in incoming.items():
    if not sources: issues.append(dict(path=path, orphan=True))
result = dict(base=base, sitemap_urls=urls, pages=list(known.values()), incoming={p: sorted(s) for p,s in incoming.items()}, issues=issues)
with open(output, 'w') as f: json.dump(result, f, ensure_ascii=False, indent=2); f.write('\n')
print(json.dumps(dict(urls=len(known), sitemap=len(urls), issues=issues, pages=[{k:r.get(k) for k in ('path','status','seconds','canonical','robots')} for r in known.values()]), ensure_ascii=False))
