"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, CalendarCheck, Check, FileCheck2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useQuoteModal } from "../QuoteModal";
import {
  formulas,
  guarantees,
  NOT_GUARANTEED,
  NOT_INCLUDED,
  PROMISE,
  RARITY,
  suivi,
  SUIVI_END,
  VAT_NOTICE,
  type Formula,
} from "./offer";
import { Eyebrow } from "./Sections";

const guaranteeIcons = [FileCheck2, CalendarCheck, ShieldCheck];

export function Guarantees({ id = "garanties" }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-24">
      <Eyebrow>Mes garanties</Eyebrow>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        Vous ne prenez{" "}
        <span className="font-serif font-normal italic text-violet-300">
          aucun risque
        </span>
      </h2>
      <ol className="mt-6 grid gap-4 md:grid-cols-3">
        {guarantees.map((g, i) => {
          const Icon = guaranteeIcons[i];
          return (
            <li key={g.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-xl bg-brand/15 text-violet-300">
                  <Icon className="size-4" aria-hidden />
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  Garantie {i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-medium">{g.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.text}</p>
            </li>
          );
        })}
      </ol>
      <p className="mt-4 text-sm text-muted-foreground">{NOT_GUARANTEED}</p>
    </section>
  );
}

export function Formulas({
  id = "offres",
  servicePageLink = false,
  onChoose,
}: {
  id?: string;
  /** Remplace l'ouverture de la modale de devis (ex. tunnel /ads) */
  onChoose?: () => void;
  /** Lien vers la page de service artisan (SEO), affiché sur la home */
  servicePageLink?: boolean;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <Eyebrow>Mes formules</Eyebrow>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        Deux façons de{" "}
        <span className="font-serif font-normal italic text-violet-300">
          lancer votre site
        </span>
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        {PROMISE} Le même site et les mêmes garanties dans les deux formules :
        vous choisissez seulement comment vous le payez.
      </p>
      <div className="mt-6 grid items-start gap-5 lg:grid-cols-2">
        {formulas.map((f) => (
          <Ticket key={f.id} formula={f} onChoose={onChoose} />
        ))}
      </div>
      <div className="mt-5 flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2">
          <span className="size-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
          {RARITY}
        </p>
        <p>{VAT_NOTICE}</p>
      </div>
      {servicePageLink && (
        <p className="mt-4 text-sm text-muted-foreground">
          Vous êtes artisan à La Réunion ?{" "}
          <Link
            href="/creation-site-web-artisan-reunion"
            className="text-violet-300 underline-offset-4 hover:underline"
          >
            Voir le détail de l&apos;offre site vitrine
          </Link>
        </p>
      )}
    </section>
  );
}

function Ticket({
  formula,
  onChoose,
}: {
  formula: Formula;
  onChoose?: () => void;
}) {
  const { open } = useQuoteModal();
  const featured = formula.id === "zero-avance";

  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-2xl border bg-card",
        featured ? "border-brand/60" : "border-border"
      )}
    >
      <header className="p-6 pb-5">
        <h3 className="text-xl font-semibold tracking-tight">{formula.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{formula.tagline}</p>
      </header>

      <TicketCut />

      <ul className="space-y-0 px-6 py-4">
        {formula.lines.map((l) => (
          <li
            key={l.label}
            className="flex items-start justify-between gap-4 border-b border-dashed border-border py-3 last:border-0"
          >
            <span className="text-sm text-foreground/90">
              {l.label}
              {l.note && (
                <span className="mt-0.5 block text-xs text-muted-foreground">{l.note}</span>
              )}
            </span>
            <span
              className={cn(
                "shrink-0 font-mono text-xs uppercase tracking-wide",
                l.highlight ? "text-violet-300" : "text-muted-foreground"
              )}
            >
              {l.value}
            </span>
          </li>
        ))}
      </ul>

      <TicketCut />

      <footer className="p-6 pt-5">
        <div className="flex items-end justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            Total
          </span>
          <p className="text-right">
            <span className="font-mono text-3xl font-semibold tracking-tight sm:text-4xl">
              {formula.total.amount}
            </span>
            {formula.total.unit && (
              <span className="font-mono text-sm text-muted-foreground">{formula.total.unit}</span>
            )}
          </p>
        </div>
        <p className="mt-1 text-right text-xs text-muted-foreground">{formula.total.note}</p>
        {formula.payments && (
          <dl className="mt-4 space-y-2 rounded-xl border border-dashed border-border p-3 text-xs">
            {formula.payments.map((p) => (
              <div key={p.label} className="grid gap-0.5 sm:grid-cols-[72px_minmax(0,1fr)] sm:gap-3">
                <dt className="font-mono uppercase tracking-wide text-violet-300">{p.label}</dt>
                <dd className="text-muted-foreground">{p.detail}</dd>
              </div>
            ))}
          </dl>
        )}
        {formula.terms && (
          <ul className="mt-4 space-y-1.5 rounded-xl border border-dashed border-border p-3 text-xs text-muted-foreground">
            {formula.terms.map((t) => (
              <li key={t} className="flex gap-2">
                <span className="mt-1.5 size-1 shrink-0 rounded-full bg-violet-300" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        )}
        <p className="mt-4 rounded-xl bg-white/[.03] px-3 py-2 text-xs text-muted-foreground">
          {formula.after}
        </p>
        <button
          type="button"
          onClick={() =>
            onChoose ? onChoose() : open({ projectType: "site-artisan" }, 2)
          }
          className={cn(
            "mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl px-5 text-sm font-medium transition-colors",
            featured
              ? "bg-brand text-white hover:bg-brand/90"
              : "border border-border bg-background text-foreground hover:border-brand/50"
          )}
        >
          {formula.cta}
          <ArrowRight className="size-4" aria-hidden />
        </button>
      </footer>
    </article>
  );
}

// Ligne de découpe pointillée avec encoches latérales, façon ticket.
function TicketCut() {
  return (
    <div className="relative h-0" aria-hidden>
      <span className="absolute -left-2.5 -top-2.5 size-5 rounded-full border border-border bg-background" />
      <span className="absolute -right-2.5 -top-2.5 size-5 rounded-full border border-border bg-background" />
      <div className="mx-5 border-t border-dashed border-border" />
    </div>
  );
}

export function Suivi() {
  return (
    <section className="grid gap-6 rounded-3xl border border-border bg-card p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-10">
      <div>
        <Eyebrow>Après la mise en ligne</Eyebrow>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          Le Suivi, pour que votre site{" "}
          <span className="font-serif font-normal italic text-violet-300">
            continue de travailler
          </span>
        </h2>
        <p className="mt-4">
          <span className="font-mono text-3xl font-semibold">{suivi.price}</span>
          <span className="font-mono text-sm text-muted-foreground">{suivi.unit}</span>
          <span className="ml-2 text-sm text-muted-foreground">{suivi.note}</span>
        </p>
        <p className="mt-2 text-xs text-muted-foreground">{VAT_NOTICE}</p>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{SUIVI_END}</p>
        <p className="mt-3 text-sm text-muted-foreground">{NOT_INCLUDED}</p>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {suivi.items.map((item) => (
          <li
            key={item}
            className="flex gap-3 rounded-2xl border border-border bg-background/60 p-4 text-sm text-foreground/85"
          >
            <Check className="mt-0.5 size-4 shrink-0 text-violet-300" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
