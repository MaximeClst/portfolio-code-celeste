import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { SiteConfig } from "@/site.config";
import { CaseStudy } from "../_landing/home/CaseStudy";
import { PageTopBar } from "../_landing/home/ContactCTA";
import { sites } from "../_landing/home/data";
import { SiteCard } from "../_landing/home/Realisations";
import { Eyebrow, HomeFooter } from "../_landing/home/Sections";
import { QuoteButton } from "./QuoteButton";

const path = "/creation-site-web-artisan-reunion";
const title = "Création de site web artisan à La Réunion | Code Céleste";
const description = "Un site vitrine pour votre activité artisanale à La Réunion, dès 1 000 €. Découvrez le projet SCMOI et préparez votre demande de devis avec Maxime.";

export const metadata = {
  ...pageMetadata(title, description, path),
  openGraph: {
    ...pageMetadata(title, description, path).openGraph,
    images: [{ url: "/social/code-celeste-logo-v2.png", width: 512, height: 512, alt: "Logo Code Céleste" }],
  },
  twitter: { card: "summary" as const, title, description, images: ["/social/code-celeste-logo-v2.png"] },
};

// Sites d'artisans du portfolio (hors événementiel, coaching, location).
const artisanSites = sites.filter((s) =>
  ["SCMOI", "L2KJ Services", "O'Milles Déco", "Élagage Péi", "RSB", "PAP-LD"].includes(s.title)
);

const checklist = [
  "Vos prestations, avec les différences entre installation, entretien ou dépannage selon votre métier.",
  "Les communes où vous intervenez réellement et les conditions de déplacement à préciser.",
  "Des photos de vos réalisations que vous êtes autorisé à publier, accompagnées d’une courte description.",
  "Votre logo, vos coordonnées professionnelles et le moyen de contact que vous souhaitez privilégier.",
];

const faq = [
  { q: "Un site remplace-t-il ma page Facebook ?", a: "Les deux peuvent se compléter. Votre site rassemble vos prestations, vos réalisations et vos coordonnées à une adresse que vous pouvez partager sur vos réseaux sociaux, vos cartes et vos devis." },
  { q: "Quel budget prévoir ?", a: "L’offre site vitrine démarre à 1 000 €, avec une maintenance à 75 €/mois. Le périmètre exact se définit dans le devis. Une réservation en ligne, un espace client ou une autre fonction particulière doit être précisé lors du cadrage." },
  { q: "Mon site sera-t-il premier sur Google ?", a: "Aucune position n’est garantie. Un contenu précis sur votre métier, des réalisations réelles et une zone d’intervention claire donnent des informations utiles aux visiteurs. Le référencement se suit après publication, notamment avec Google Search Console." },
  { q: "Par où commencer ?", a: "Ouvrez l’estimation ci-dessous, indiquez votre activité et votre objectif. Le parcours permet de préparer votre demande puis d’échanger sur le projet, avant de fixer son périmètre." },
];

export default function ArtisanPage() {
  return (
    <main className="relative min-h-dvh bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 h-[70vh] bg-[radial-gradient(ellipse_at_top,hsl(var(--brand)/0.18),transparent_60%)]"
      />
      <PageTopBar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Création de site web pour artisan à La Réunion",
        serviceType: "Création de site vitrine",
        url: `${SiteConfig.prodUrl}${path}`,
        description,
        provider: { "@type": "Organization", "@id": `${SiteConfig.prodUrl}/#organization`, name: "Code Céleste", url: SiteConfig.prodUrl },
        areaServed: { "@type": "AdministrativeArea", name: "La Réunion" },
      }).replace(/</g, "\\u003c") }} />

      <div className="relative mx-auto max-w-5xl space-y-20 px-4 py-12 sm:px-6 lg:py-16">
        <section className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <nav aria-label="Fil d’Ariane" className="text-xs text-muted-foreground">
              <Link href="/" className="hover:text-foreground">Accueil</Link>
              <span aria-hidden className="mx-2">/</span>
              <span>Sites pour artisans</span>
            </nav>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
              Création de site web pour artisan{" "}
              <span className="font-serif font-normal italic text-violet-300">à La Réunion</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/90">Vos futurs clients veulent voir votre travail, comprendre vos prestations et savoir comment vous joindre. Je conçois votre site vitrine autour de ces trois besoins.</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">Je suis Maxime, de Code Céleste. Nous partons de votre activité, de vos photos et de votre zone d’intervention pour préparer un site qui présente clairement votre entreprise.</p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <QuoteButton />
              <a href="#realisations" className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 transition-colors hover:text-foreground">Voir les sites d’artisans réalisés <ArrowUpRight className="size-4" aria-hidden /></a>
            </div>
          </div>
          <aside aria-label="Tarif du site vitrine" className="rounded-2xl border border-brand/50 bg-card p-6 sm:p-7">
            <div className="flex items-center justify-between gap-2">
              <p className="font-medium">Site vitrine</p>
              <span className="rounded-full bg-brand/15 px-2.5 py-0.5 text-xs text-violet-300">Le plus demandé</span>
            </div>
            <p className="mt-4 text-4xl font-semibold tracking-tight">1 000 €<span className="text-sm font-normal text-muted-foreground"> à partir de</span></p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Le devis précise les pages et les fonctionnalités retenues pour votre projet.</p>
            <div className="mt-6 border-t border-border pt-5">
              <p className="font-medium">Maintenance : 75 €/mois</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Mises à jour et sécurité incluses, sans engagement.</p>
              <Link href="/#offres" className="mt-4 inline-block text-sm text-violet-300 hover:text-foreground">Consulter toutes les offres</Link>
            </div>
          </aside>
        </section>

        <CaseStudy />

        <section id="realisations" className="scroll-mt-24">
          <Eyebrow>Sites d’artisans en ligne</Eyebrow>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Montrer le métier, puis faciliter le contact</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">Chaque site présente les prestations, des photos de chantiers et un moyen direct de demander un devis. Votre site suit la même logique, avec vos propres prestations et réalisations.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {artisanSites.map((s) => <SiteCard key={s.title} site={s} />)}
          </div>
          <p className="mt-5 text-sm"><Link href="/works" className="text-violet-300 hover:text-foreground">Voir toutes les réalisations web et mobiles</Link></p>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Avant le devis</Eyebrow>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Que préparer pour votre demande de devis ?</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">Ces éléments permettent de cadrer les pages et le travail à prévoir. Même si vous n’avez pas encore tout réuni, indiquez ce qui existe déjà et ce qui reste à préparer.</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">Si vous avez déjà un site ou une page professionnelle sur les réseaux sociaux, ajoutez son adresse à votre demande : elle aide à comprendre votre activité et votre besoin de création ou de refonte.</p>
          </div>
          <ul className="space-y-3">
            {checklist.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-border bg-card p-4 text-sm leading-relaxed text-foreground/80">
                <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-violet-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <Eyebrow>Questions fréquentes</Eyebrow>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Vos questions avant de créer un site</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faq.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-medium">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-brand/40 bg-gradient-to-br from-brand/25 via-card to-card p-8 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Parlons de votre activité artisanale</h2>
          <p className="mb-7 mt-3 max-w-2xl text-muted-foreground">Un premier site ou une refonte : décrivez ce que vous faites et ce que vos clients doivent pouvoir trouver.</p>
          <QuoteButton />
        </section>

        <HomeFooter />
      </div>
    </main>
  );
}
