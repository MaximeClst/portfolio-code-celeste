"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useQuoteModal } from "../QuoteModal";

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
            Répondez à 4 questions, je vous envoie une estimation sous 24 h.
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

// Barre collée en haut sur mobile : la colonne profil n'y est pas collante.
export function MobileBar() {
  const { open } = useQuoteModal();
  return (
    <div className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-background/80 px-4 py-3 backdrop-blur lg:hidden">
      <Link href="/" className="text-sm font-medium">
        Code <span className="font-serif text-base italic text-violet-300">Celeste</span>
      </Link>
      <button
        type="button"
        onClick={() => open()}
        className="rounded-lg bg-brand px-3 py-1.5 text-xs font-medium text-white"
      >
        Estimer mon projet
      </button>
    </div>
  );
}
