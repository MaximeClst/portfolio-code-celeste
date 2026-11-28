"use client";

import { ArrowLeft, ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useQuoteModal } from "../QuoteModal";
import { RESPONSE_DELAY } from "./offer";

export function ContactCTA() {
  const { open } = useQuoteModal();
  return (
    <section
      id="contact"
      className="scroll-mt-24 overflow-hidden rounded-3xl border border-brand/40 bg-gradient-to-br from-brand/25 via-card to-card p-8 sm:p-10"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <Image
          src="/maxime-celeste.webp"
          alt=""
          width={128}
          height={128}
          className="size-16 rounded-2xl object-cover"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Un projet en tête ?
          </h2>
          <p className="mt-1 text-muted-foreground">
            Répondez à 4 questions, je vous réponds sous {RESPONSE_DELAY}.
          </p>
        </div>
        <button
          type="button"
          onClick={() => open()}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand px-6 font-medium text-white transition-colors hover:bg-brand/90"
        >
          Estimer mon projet
          <ArrowRight className="size-4" aria-hidden />
        </button>
      </div>
    </section>
  );
}

// Ancres vers les sections de l'accueil (4 au maximum), dans l'ordre de la page.
const navLinks = [
  { href: "#realisations", label: "Réalisations" },
  { href: "#offres", label: "Offres" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

// Barre de navigation collée en haut de l'accueil, avec les ancres.
export function MobileBar() {
  const { open } = useQuoteModal();
  const [menuOpen, setMenuOpen] = useState(false);

  // Échap ferme le menu ; passer en largeur tablette aussi.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => mq.matches && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2 text-sm font-medium">
          <Image
            src="/social/code-celeste-logo-v2.png"
            alt=""
            width={64}
            height={64}
            priority
            className="size-7"
          />
          <span>
            Code <span className="font-serif text-base italic text-violet-300">Celeste</span>
          </span>
        </Link>
        <nav aria-label="Sections de la page" className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-lg px-3 py-1.5 text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => open()}
            className="rounded-lg bg-brand px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-brand/90 md:text-sm"
          >
            Estimer mon projet
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex size-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-card md:hidden"
          >
            {menuOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>
      {/* Sur mobile, les ancres sont dans un menu burger qui se déplie sous la barre. */}
      {menuOpen && (
        <nav id="menu-mobile" aria-label="Sections de la page" className="border-t border-border md:hidden">
          <ul className="px-2 py-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base text-foreground/90 transition-colors hover:bg-card hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

// Barre légère des pages secondaires (/works) : retour vers la page perso.
export function PageTopBar() {
  const { open } = useQuoteModal();
  return (
    <div className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          aria-label="Retour à l'accueil"
          className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft
            className="size-4 transition-transform group-hover:-translate-x-0.5"
            aria-hidden
          />
          <Image
            src="/maxime-celeste.webp"
            alt=""
            width={64}
            height={64}
            priority
            className="size-8 rounded-lg object-cover ring-1 ring-brand/40"
          />
          <span className="font-medium text-foreground">Maxime Céleste</span>
        </Link>
        <button
          type="button"
          onClick={() => open()}
          className="rounded-lg bg-brand px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-brand/90 sm:text-sm"
        >
          Estimer mon projet
        </button>
      </div>
    </div>
  );
}
