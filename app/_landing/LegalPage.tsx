import type { ReactNode } from "react";
import { PageTopBar } from "./home/ContactCTA";
import { HomeFooter } from "./home/Sections";

// Gabarit des pages légales : même barre et même pied de page que /works,
// colonne de lecture étroite pour un texte long.
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="relative min-h-dvh bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 h-[50vh] bg-[radial-gradient(ellipse_at_top,hsl(var(--brand)/0.14),transparent_60%)]"
      />
      <PageTopBar />
      <div className="relative mx-auto max-w-[42rem] px-4 py-10 sm:px-6 lg:py-16">
        <article className="space-y-10 text-[15px] leading-relaxed text-foreground/85">
          <header>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h1>
            <p className="mt-3 text-sm text-muted-foreground">Dernière mise à jour : {updated}</p>
          </header>
          {children}
        </article>
        <div className="mt-16">
          <HomeFooter />
        </div>
      </div>
    </main>
  );
}

export function LegalSection({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 space-y-3">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">{title}</h2>
      {children}
    </section>
  );
}

export function LegalList({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-1.5 pl-5 marker:text-violet-300">{children}</ul>;
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className="text-violet-300 underline underline-offset-2 hover:text-foreground"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
