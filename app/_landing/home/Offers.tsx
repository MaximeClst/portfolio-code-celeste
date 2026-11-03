"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { useQuoteModal } from "../QuoteModal";
import { KindTabs, useKind, type Kind } from "./KindTabs";

type Offer = {
  title: string;
  price: string;
  from?: boolean;
  badge?: string;
  description: string;
  features: string[];
  /** Type de projet pré-rempli dans le formulaire (saute la 1re question) */
  projectType?: "site-artisan" | "app-mobile" | "mvp";
};

// Pages de service dédiées (SEO) : une par type de projet.
const servicePages: Record<Kind, { lead: string; label: string; href: string }> = {
  sites: {
    lead: "Artisan à La Réunion ?",
    label: "Découvrez l'offre site vitrine en détail",
    href: "/creation-site-web-artisan-reunion",
  },
  apps: {
    lead: "Un projet mobile ?",
    label: "Découvrez l'offre application mobile en détail",
    href: "/application-mobile-reunion",
  },
};

const offers: Record<Kind, Offer[]> = {
  sites: [
    {
      title: "Site vitrine",
      price: "1 000 €",
      from: true,
      badge: "Le plus demandé",
      description:
        "Pour les artisans et commerçants : un site rapide, bien placé sur Google, qui donne envie d'appeler.",
      features: [
        "Sur mesure, pas de template",
        "Référencement local",
        "Formulaire de devis et appel en 1 clic",
        "Maintenance 75 €/mois, sans engagement",
      ],
      projectType: "site-artisan",
    },
    {
      title: "Site sur mesure",
      price: "Sur devis",
      description:
        "Réservation, paiement en ligne, espace client : quand votre site doit faire plus que présenter.",
      features: [
        "Réservation et paiement (ex. Chandelle Émeraude)",
        "Fonctionnalités adaptées à votre activité",
        "Suivi après mise en ligne",
      ],
    },
  ],
  apps: [
    {
      title: "MVP mobile",
      price: "2 000 €",
      from: true,
      badge: "Livré en 7 jours",
      description:
        "Une première version iOS et Android pour tester votre idée auprès de vrais utilisateurs.",
      features: [
        "iOS et Android",
        "Publication sur les stores",
        "Maintenance 120 €/mois",
      ],
      projectType: "mvp",
    },
    {
      title: "Application sur mesure",
      price: "Sur devis",
      description:
        "Une app complète avec toutes les fonctionnalités dont votre entreprise a besoin.",
      features: [
        "Comptes, paiements, notifications",
        "Démo à chaque étape",
        "Évolutions après lancement",
      ],
      projectType: "app-mobile",
    },
  ],
};

export function Offers() {
  const { kind } = useKind();
  const { open } = useQuoteModal();

  return (
    <section id="offres" className="scroll-mt-24">
      <p className="text-xs font-medium uppercase tracking-wider text-violet-300">
        Offres
      </p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Des prix clairs,{" "}
          <span className="font-serif font-normal italic text-violet-300">
            sans surprise
          </span>
        </h2>
        <KindTabs />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {offers[kind].map((o, i) => (
          <div
            key={o.title}
            className={cn(
              "flex flex-col rounded-2xl border bg-card p-6",
              i === 0 ? "border-brand/50" : "border-border"
            )}
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium">{o.title}</h3>
              {o.badge && (
                <span className="rounded-full bg-brand/15 px-2.5 py-0.5 text-xs text-violet-300">
                  {o.badge}
                </span>
              )}
            </div>
            <p className="mt-4 text-3xl font-semibold">
              {o.price}
              {o.from && (
                <span className="text-sm font-normal text-muted-foreground">
                  {" "}
                  à partir de
                </span>
              )}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{o.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              {o.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-violet-300" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() =>
                o.projectType ? open({ projectType: o.projectType }, 2) : open()
              }
              className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-violet-300 transition-colors hover:text-foreground"
            >
              Estimer ce projet
              <ArrowRight className="size-4" aria-hidden />
            </button>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        {servicePages[kind].lead}{" "}
        <Link
          href={servicePages[kind].href}
          className="underline underline-offset-4 transition-colors hover:text-foreground"
        >
          {servicePages[kind].label}
        </Link>
      </p>
    </section>
  );
}
