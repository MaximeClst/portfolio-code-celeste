import { SiteConfig } from "@/site.config";
import {
  formulas,
  guarantees,
  NOT_GUARANTEED,
  NOT_INCLUDED,
  PRICING_SUMMARY,
  PROMISE,
  RARITY,
  RESPONSE_DELAY,
  suivi,
  SUIVI_END,
  VAT_NOTICE,
} from "../_landing/home/offer";

// Résumé factuel pour les assistants IA (ChatGPT, Perplexity, Gemini…).
// L'offre artisans est lue depuis app/_landing/home/offer.ts : aucune donnée en double.
export const dynamic = "force-static";

const url = (path: string) => `${SiteConfig.prodUrl}${path}`;

function body() {
  const lines: string[] = [
    "# Code Céleste",
    "",
    "> Code Céleste est l'activité de Maxime Céleste, développeur indépendant à La Réunion (Saint-Denis). Il crée des sites vitrines pour artisans, commerçants et TPE réunionnais, et des applications mobiles iOS et Android.",
    "",
    `- Promesse : ${PROMISE}`,
    `- Interlocuteur unique : Maxime, réponse sous ${RESPONSE_DELAY}, contact ${SiteConfig.email.contact}.`,
    `- Capacité : ${RARITY}`,
    `- ${NOT_GUARANTEED}`,
    "",
    "## Site vitrine pour artisan à La Réunion",
    "",
    PRICING_SUMMARY,
    "",
  ];

  for (const f of formulas) {
    lines.push(`### ${f.name} — ${f.total.amount}${f.total.unit ?? ""} (${f.total.note})`, "");
    lines.push(f.tagline);
    for (const l of f.lines) lines.push(`- ${l.label} : ${l.value}`);
    for (const p of f.payments ?? []) lines.push(`- ${p.label} : ${p.detail}`);
    for (const t of f.terms ?? []) lines.push(`- ${t}`);
    lines.push("");
  }

  lines.push(
    `### Suivi — ${suivi.price}${suivi.unit} (${suivi.note})`,
    "",
    ...suivi.items.map((i) => `- ${i}`),
    `- ${SUIVI_END}`,
    `- ${NOT_INCLUDED}`,
    "",
    "### Garanties",
    "",
    ...guarantees.map((g) => `- ${g.title} : ${g.text}`),
    "",
    VAT_NOTICE,
    "",
    "## Application mobile à La Réunion",
    "",
    "- MVP iOS et Android : à partir de 2 000 €, maintenance 120 €/mois.",
    "- Application complète : sur devis.",
    "",
    "## Pages principales",
    "",
    `- [Accueil](${url("/")}) : présentation, réalisations, offres et avis clients.`,
    `- [Création de site web artisan à La Réunion](${url("/creation-site-web-artisan-reunion")}) : offre détaillée, exemple SCMOI, FAQ.`,
    `- [Application mobile à La Réunion](${url("/application-mobile-reunion")}) : MVP et applications sur mesure, exemples Budget Copain et Mossly.`,
    `- [Réalisations](${url("/works")}) : portfolio des projets clients.`,
    `- [Smart Power System](${url("/works/smart-power-system")}) : site d'une équipe de coachs sportifs.`,
    `- [VELORUN Festival](${url("/works/velorun-festival")}) : site du festival à La Réunion (présentation, parcours, informations pratiques).`,
    `- [Budget Copain](${url("/works/budget-copain")}) : application mobile de gestion de budget.`,
    `- [Mentions légales](${url("/mentions-legales")}) : SIRET 831 141 635 00027.`,
    ""
  );

  return lines.join("\n");
}

export function GET() {
  return new Response(body(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
