import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

// Nouveaux clients SCMOI par mois après la mise en ligne (chiffres client).
const months = [
  { label: "Juin", value: 2 },
  { label: "Juil.", value: 7 },
  { label: "Août", value: 6 },
  { label: "Sept.", value: 5 },
];
const max = Math.max(...months.map((m) => m.value));

export function CaseStudy() {
  return (
    <section className="overflow-hidden rounded-3xl border border-brand/30 bg-card">
      <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-wider text-violet-300">
            Étude de cas · SCMOI
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight">
            +20 nouveaux clients en 3 mois pour un artisan clim
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Site mis en ligne en juin : services, réalisations, demande de devis
            en 2 clics et référencement local. Dès juillet, les nouveaux clients
            arrivent chaque mois.
          </p>

          <div
            className="mt-6 flex items-end gap-3"
            role="img"
            aria-label="Nouveaux clients par mois : juin 2, juillet 7, août 6, septembre 5"
          >
            {months.map((m, i) => (
              <div key={m.label} className="flex flex-1 flex-col items-center gap-1.5">
                <span className={i === 0 ? "text-xs text-muted-foreground" : "text-xs text-violet-300"}>
                  {m.value}
                </span>
                <div
                  className={i === 0 ? "w-full rounded-t-md bg-neutral-700" : "w-full rounded-t-md bg-brand"}
                  style={{ height: `${Math.round((m.value / max) * 100)}px` }}
                />
                <span className="text-xs text-muted-foreground">{m.label}</span>
              </div>
            ))}
          </div>

          <a
            href="https://www.scmoi.re/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 transition-colors hover:text-foreground"
          >
            Voir le site
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>

        <div className="relative min-h-[260px] bg-[#1a1724] p-6 md:p-8">
          <Image
            src="/works/scmoi.webp"
            alt="Page d'accueil du site SCMOI sur ordinateur"
            width={1200}
            height={750}
            sizes="(min-width: 1024px) 420px, 100vw"
            className="w-full rounded-xl border border-border shadow-2xl shadow-black/50"
          />
          <Image
            src="/works/scmoi-mobile.webp"
            alt="Le site SCMOI sur mobile"
            width={390}
            height={844}
            sizes="120px"
            className="absolute bottom-4 right-4 w-[26%] rounded-xl border-4 border-neutral-900 shadow-2xl shadow-black/60"
          />
        </div>
      </div>
    </section>
  );
}
