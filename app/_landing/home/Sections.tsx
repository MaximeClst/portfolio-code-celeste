import { ArrowUpRight, ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { sideProjects } from "./data";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-wider text-violet-300">
      {children}
    </p>
  );
}

export function Intro() {
  return (
    <section>
      <h2 className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
        Des sites et des apps qui font{" "}
        <span className="font-serif font-normal italic text-violet-300">
          venir des clients.
        </span>
      </h2>
      <div className="mt-8 grid grid-cols-3 gap-3">
        <Stat value="12" label="sites en ligne" />
        <Stat value="4" label="apps publiées" />
        <Stat value="+50" label="demandes et clients générés pour mes clients" highlight />
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
  highlight,
}: {
  value: string;
  label: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={
        highlight
          ? "rounded-2xl border border-brand/40 bg-brand/10 p-4 sm:p-5"
          : "rounded-2xl border border-border bg-card p-4 sm:p-5"
      }
    >
      <p className={highlight ? "text-3xl font-semibold text-violet-300 sm:text-4xl" : "text-3xl font-semibold sm:text-4xl"}>
        {value}
      </p>
      <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{label}</p>
    </div>
  );
}

const reviews = [
  {
    quote:
      "Depuis la mise en ligne, le site nous a permis de générer une quinzaine de demandes, dont 4 à 5 se sont concrétisées.",
    name: "Alexandre Eydieux",
    company: "Smart Power System",
  },
  {
    quote:
      "C'est allé très vite pour une première version. Il a fait preuve d'autonomie. Le site est performant !",
    name: "Grégory Maillot",
    company: "VELORUN Festival",
  },
];

export function Reviews() {
  return (
    <section>
      <Eyebrow>Avis clients</Eyebrow>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        Ils en parlent mieux que moi
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {reviews.map((r) => (
          <figure key={r.name} className="rounded-2xl border border-border bg-card p-6">
            <p className="text-amber-300" aria-label="5 étoiles sur 5">
              ★★★★★
            </p>
            <blockquote className="mt-3 font-serif text-xl leading-snug text-foreground">
              « {r.quote} »
            </blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">
              <span className="text-foreground/90">{r.name}</span> · {r.company}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function SideProjects() {
  return (
    <section>
      <Eyebrow>À côté</Eyebrow>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        Ce que je construis pour moi
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Mes propres produits : c&apos;est là que je teste ce que je mets ensuite
        au service de mes clients.
      </p>
      <ul className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
        {sideProjects.map((p) => (
          <li key={p.title}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 transition-colors hover:bg-white/[.03]"
            >
              {p.icon ? (
                <Image src={p.icon} alt="" width={44} height={44} className="size-11 rounded-xl bg-brand/20" />
              ) : (
                <span className="flex size-11 items-center justify-center rounded-xl bg-pink-500/15 text-pink-300">
                  <ImageIcon className="size-5" aria-hidden />
                </span>
              )}
              <span className="min-w-0 flex-1">
                <span className="block font-medium">{p.title}</span>
                <span className="block truncate text-sm text-muted-foreground">
                  {p.description}
                </span>
              </span>
              <ArrowUpRight className="size-4 text-muted-foreground" aria-hidden />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

const steps = [
  { title: "Appel de 30 min", text: "On parle de votre activité et de vos besoins." },
  { title: "Devis clair", text: "Prix fixe, délai annoncé." },
  { title: "Création", text: "Vous voyez l'avancement à chaque étape." },
  { title: "En ligne et suivi", text: "Je reste joignable après." },
];

export function Process() {
  return (
    <section>
      <Eyebrow>Comment on travaille</Eyebrow>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        Simple, du premier appel à la mise en ligne
      </h2>
      <ol className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-2xl border border-border bg-card p-5">
            <span className="font-serif text-2xl italic text-violet-300">
              0{i + 1}
            </span>
            <p className="mt-2 font-medium">{s.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function HomeFooter() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
      <span>© {new Date().getFullYear()} Code Celeste · La Réunion</span>
      <span className="flex flex-wrap gap-4">
        <Link href="/creation-site-web-artisan-reunion" className="hover:text-foreground">
          Sites web pour artisans à La Réunion
        </Link>
        <Link href="/application-mobile-reunion" className="hover:text-foreground">
          Applications mobiles à La Réunion
        </Link>
        <a href="mailto:maxime@code-celeste.com" className="hover:text-foreground">
          maxime@code-celeste.com
        </a>
        <Link href="/mentions-legales" className="hover:text-foreground">
          Mentions légales
        </Link>
      </span>
    </footer>
  );
}
