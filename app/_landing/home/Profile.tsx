"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import { CONTACT_STEP, useQuoteModal } from "../QuoteModal";

const socials = [
  {
    href: "https://www.instagram.com/code_celeste/",
    label: "Instagram",
    icon: <Instagram className="size-4" aria-hidden />,
  },
  {
    href: "https://youtube.com/@maximeceleste",
    label: "YouTube",
    icon: <Youtube className="size-4" aria-hidden />,
  },
  {
    href: "https://x.com/maxime_clst",
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor" aria-hidden>
        <path d="M17.7 3h3.1l-6.8 7.8L22 21h-6.3l-4.9-6.4L5.2 21H2.1l7.3-8.3L2 3h6.4l4.4 5.9zm-1.1 16.2h1.7L7.5 4.7H5.7z" />
      </svg>
    ),
  },
];

export function BookingButtons({ className }: { className?: string }) {
  const { open } = useQuoteModal();
  return (
    <div className={cn("flex flex-col gap-2.5", className)}>
      <button
        type="button"
        onClick={() => open()}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-brand px-5 text-sm font-medium text-white transition-colors hover:bg-brand/90"
      >
        Estimer mon projet
        <ArrowRight className="size-4" aria-hidden />
      </button>
      <button
        type="button"
        onClick={() => open(undefined, CONTACT_STEP)}
        className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-card px-5 text-sm font-medium text-foreground/90 transition-colors hover:border-brand/50"
      >
        Réserver un appel de 30 min
      </button>
    </div>
  );
}

export function Profile() {
  return (
    <aside className="lg:sticky lg:top-12 lg:self-start">
      <Image
        src="/maxime-celeste.webp"
        alt="Maxime Céleste"
        width={224}
        height={224}
        priority
        className="size-24 rounded-2xl object-cover ring-1 ring-brand/40 lg:size-28"
      />
      <h1 className="mt-5 text-3xl font-semibold tracking-tight">
        Maxime Céleste
      </h1>
      <p className="mt-3 text-[17px] leading-relaxed text-foreground/90">
        Je crée des sites et des applications qui ramènent des clients aux
        entreprises péi.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Autodidacte, je code depuis 4 ans et je suis à mon compte depuis 1 an.
        Papa d&apos;une petite fille, je sais ce que vaut le temps : je livre
        vite, je parle simple et je reste joignable après la mise en ligne.
      </p>

      <BookingButtons className="mt-6" />

      <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
        <li className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-emerald-400" />
          Disponible pour de nouveaux projets
        </li>
        <li className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-brand" />
          Réponse sous 24 h, sans engagement
        </li>
        <li className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-brand" />
          Basé à La Réunion
        </li>
      </ul>

      <nav aria-label="Réseaux sociaux" className="mt-6 flex gap-2">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="flex size-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
          >
            {s.icon}
          </a>
        ))}
      </nav>
    </aside>
  );
}
