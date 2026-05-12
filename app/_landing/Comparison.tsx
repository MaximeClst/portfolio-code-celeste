"use client";

import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import { useQuoteModal } from "./QuoteModal";

type Row = { label: string; bad: string; good: string };

const rows: Row[] = [
  {
    label: "Délai de livraison",
    bad: "2 à 6 mois",
    good: "7 jours pour un MVP",
  },
  {
    label: "Prix de départ",
    bad: "5 000 € et +",
    good: "À partir de 1 000 €",
  },
  {
    label: "Interlocuteur",
    bad: "Chef de projet + sous-traitants",
    good: "Directement avec Maxime",
  },
  {
    label: "Site web pour artisan",
    bad: "Template recyclé",
    good: "Sur mesure & SEO local",
  },
  {
    label: "Application mobile",
    bad: "Hors scope ou très cher",
    good: "iOS + Android inclus",
  },
  {
    label: "Maintenance",
    bad: "Surfacturée à la demande",
    good: "Forfait clair dès 75 €/mois",
  },
  {
    label: "Suivi du projet",
    bad: "Mails et réunions à rallonge",
    good: "Démo live à chaque itération",
  },
  {
    label: "Engagement",
    bad: "Contrat 12 mois minimum",
    good: "Sans engagement",
  },
];

export const Comparison = () => {
  const reduce = useReducedMotion();
  const { open } = useQuoteModal();

  return (
    <section className="py-16 md:py-24" id="comparatif">
      <div className="mx-auto max-w-4xl px-4 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-medium text-brand uppercase tracking-wider">
            Comparatif
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
            Agence classique{" "}
            <span className="text-muted-foreground font-normal text-[0.7em]">
              vs
            </span>{" "}
            <span className="bg-gradient-to-r from-brand to-brand-secondary bg-clip-text text-transparent">
              Code Céleste
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Pourquoi payer plus pour moins bien ?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mt-12 overflow-hidden rounded-2xl border border-brand/15 bg-card/60 backdrop-blur"
        >
          <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-border/60">
            <div aria-hidden />
            <div className="px-4 py-4 text-center text-xs sm:text-sm font-semibold uppercase tracking-wide text-destructive bg-destructive/5">
              Agence classique
            </div>
            <div className="px-4 py-4 text-center text-xs sm:text-sm font-semibold uppercase tracking-wide text-emerald-400 bg-emerald-400/5">
              Code Céleste ✨
            </div>
          </div>

          {rows.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: reduce ? 0 : i * 0.04,
              }}
              className={`grid grid-cols-[1.2fr_1fr_1fr] items-stretch ${
                i < rows.length - 1 ? "border-b border-border/40" : ""
              }`}
            >
              <div className="flex items-center px-4 sm:px-6 py-4 text-sm font-medium text-foreground/90">
                {r.label}
              </div>
              <div className="flex items-center justify-center gap-2 px-3 sm:px-4 py-4 text-center text-xs sm:text-sm text-destructive bg-destructive/[0.03]">
                <X className="size-4 shrink-0" aria-hidden />
                <span className="text-balance">{r.bad}</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-3 sm:px-4 py-4 text-center text-xs sm:text-sm font-medium text-emerald-400 bg-emerald-400/[0.03]">
                <Check className="size-4 shrink-0" aria-hidden />
                <span className="text-balance">{r.good}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <Button
            size="lg"
            onClick={() => open()}
            className="h-12 px-7 text-base shadow-[0_0_30px_hsl(var(--brand)/0.35)]"
          >
            Je choisis Code Céleste
            <ArrowRight className="ml-1 size-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
