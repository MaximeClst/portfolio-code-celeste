"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { apps, FEATURED_SITES, sites, type App, type Site } from "./data";
import { KindTabs, useKind } from "./KindTabs";

export function Realisations() {
  const { kind } = useKind();
  return (
    <section id="realisations" className="scroll-mt-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-violet-300">
            Réalisations
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Ce que j&apos;ai mis en ligne
          </h2>
        </div>
        <KindTabs />
      </div>

      {kind === "sites" ? (
        <>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {sites.slice(0, FEATURED_SITES).map((s) => (
              <SiteCard key={s.title} site={s} />
            ))}
          </div>
          <div className="mt-5 text-center">
            <Link
              href="/works"
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2 text-sm text-foreground/90 transition-colors hover:border-brand/50"
            >
              Voir les {sites.length} réalisations
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {apps.map((a) => (
            <AppCard key={a.title} app={a} />
          ))}
        </div>
      )}
    </section>
  );
}

export function SiteCard({ site }: { site: Site }) {
  // Une étude de cas interne prime sur le lien vers le site du client.
  const linkProps = site.caseStudy
    ? { href: site.caseStudy, "aria-label": `Voir le projet ${site.title}` }
    : {
        href: site.url,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Ouvrir le site ${site.title} dans un nouvel onglet`,
      };
  return (
    <a
      {...linkProps}
      className="group block overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-0.5 hover:border-brand/50"
    >
      <div className="overflow-hidden border-b border-border bg-[#1a1724]">
        <div className="flex gap-1.5 px-3 py-2" aria-hidden>
          <span className="size-2 rounded-full bg-neutral-700" />
          <span className="size-2 rounded-full bg-neutral-700" />
          <span className="size-2 rounded-full bg-neutral-700" />
        </div>
        <Image
          src={site.image}
          alt={`Page d'accueil du site ${site.title}`}
          width={1200}
          height={750}
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-medium">{site.title}</h3>
          <ArrowUpRight
            className="size-4 text-muted-foreground transition-colors group-hover:text-foreground"
            aria-hidden
          />
        </div>
        <p className="mt-0.5 text-sm text-muted-foreground">{site.activity}</p>
        {site.result && (
          <p className="mt-3 inline-flex rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
            {site.result}
          </p>
        )}
      </div>
    </a>
  );
}

export function AppCard({ app }: { app: App }) {
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Voir ${app.title} sur l'App Store`}
      className="group block overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-0.5 hover:border-brand/50"
    >
      <div className="flex items-end justify-center gap-3 overflow-hidden bg-[#1a1724] px-4 pt-6">
        {app.screens.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={300}
            height={650}
            sizes="140px"
            className={
              i === 1
                ? "w-[30%] rounded-t-2xl border-4 border-b-0 border-neutral-900"
                : "w-[30%] translate-y-4 rounded-t-2xl border-4 border-b-0 border-neutral-900 opacity-80"
            }
          />
        ))}
      </div>
      <div className="flex items-center gap-3 p-4">
        <Image
          src={app.icon}
          alt=""
          width={40}
          height={40}
          className="size-10 rounded-xl"
        />
        <div className="min-w-0 flex-1">
          <h3 className="font-medium">{app.title}</h3>
          <p className="text-sm text-muted-foreground">{app.description}</p>
          <p className="mt-2 inline-flex rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
            {app.stores}
          </p>
        </div>
      </div>
    </a>
  );
}
