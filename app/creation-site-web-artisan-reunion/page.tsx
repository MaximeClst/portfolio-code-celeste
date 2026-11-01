import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { SiteConfig } from "@/site.config";
import { Header } from "../_landing/Header";
import { Footer } from "../_landing/Footer";
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

const checklist = [
  "Vos prestations, avec les différences entre installation, entretien ou dépannage selon votre métier.",
  "Les communes où vous intervenez réellement et les conditions de déplacement à préciser.",
  "Des photos de vos réalisations que vous êtes autorisé à publier, accompagnées d’une courte description.",
  "Votre logo, vos coordonnées professionnelles et le moyen de contact que vous souhaitez privilégier.",
];

export default function ArtisanPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
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

      <div className="mx-auto max-w-6xl px-4 pt-28 lg:px-12">
        <nav aria-label="Fil d’Ariane" className="mb-10 text-sm text-muted-foreground">
          <Link href="/" className="underline underline-offset-4 hover:text-foreground">Accueil</Link>
          <span aria-hidden className="mx-3">/</span>
          <span>Sites pour artisans</span>
        </nav>

        <section className="grid items-start gap-10 pb-16 lg:grid-cols-[1.45fr_1fr] lg:gap-14 md:pb-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-violet-400">Code Céleste · La Réunion</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Création de site web pour artisan à La Réunion</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Vos futurs clients veulent voir votre travail, comprendre vos prestations et savoir comment vous joindre. Je conçois votre site vitrine autour de ces trois besoins.</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">Je suis Maxime, développeur indépendant chez Code Céleste. Nous partons de votre activité, de vos photos et de votre zone d’intervention pour préparer un site qui présente clairement votre entreprise.</p>
            <div className="mt-8"><QuoteButton /></div>
            <a href="#realisation" className="mt-5 inline-flex items-center gap-2 text-sm underline underline-offset-4 hover:text-violet-300">Voir un site artisan réalisé <ArrowUpRight className="size-4" aria-hidden /></a>
          </div>
          <aside aria-label="Tarif du site vitrine" className="rounded-2xl border border-brand/40 bg-card p-7 sm:p-8">
            <p className="text-sm text-muted-foreground">Site vitrine</p>
            <p className="mt-3 text-4xl font-semibold tracking-tight"><span className="block pb-2 text-sm font-normal text-muted-foreground">À partir de</span>1 000 €</p>
            <p className="mt-5 leading-relaxed text-muted-foreground">Le devis précise les pages et les fonctionnalités retenues pour votre projet.</p>
            <div className="mt-7 border-t border-border pt-6">
              <p className="font-medium">Maintenance : 75 €/mois</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Mises à jour et sécurité incluses, selon l’offre site vitrine présentée sur l’accueil.</p>
              <Link href="/#offres" className="mt-4 inline-block text-sm underline underline-offset-4 hover:text-violet-300">Consulter les offres Code Céleste</Link>
            </div>
          </aside>
        </section>

        <section id="realisation" className="scroll-mt-28 border-t border-border py-16 md:py-20">
          <p className="text-xs font-medium uppercase tracking-widest text-violet-400">Un projet à visiter</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">SCMOI : montrer le métier, puis faciliter le contact</h2>
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-2">
            <figure className="overflow-hidden rounded-xl border border-border bg-card">
              <Image src="/scmoi-hero.png" alt="Aperçu du site SCMOI réalisé par Code Céleste pour une entreprise de climatisation, chauffage et électricité" width={2568} height={1624} sizes="(min-width: 1024px) 480px, 100vw" className="h-auto w-full" />
              <figcaption className="px-5 py-4 text-xs leading-relaxed text-muted-foreground">SCMOI · Site vitrine d’une entreprise artisanale à La Réunion.</figcaption>
            </figure>
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>Pour SCMOI, entreprise de climatisation, chauffage et électricité, le site présente les services, des photos de chantiers et les moyens de demander un devis.</p>
              <p>Le visiteur peut distinguer les métiers, parcourir les réalisations puis trouver le téléphone ou le formulaire de contact. C’est un exemple concret de contenu utile pour une entreprise artisanale.</p>
              <p>Pour votre site, nous adaptons cette organisation à vos propres prestations et à vos réalisations. Les exemples de SCMOI servent à expliquer la démarche ; votre contenu reste celui de votre entreprise.</p>
              <a href="https://www.scmoi.re/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground underline underline-offset-4 hover:text-violet-300">Visiter le site SCMOI <ArrowUpRight className="size-4" aria-hidden /><span className="sr-only"> (nouvel onglet)</span></a>
              <p><Link href="/works" className="text-sm underline underline-offset-4 hover:text-foreground">Voir les autres réalisations web et mobiles</Link></p>
            </div>
          </div>
        </section>

        <section className="grid gap-10 border-t border-border py-16 lg:grid-cols-2 md:py-20">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Que préparer pour votre demande de devis ?</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">Ces éléments permettent de cadrer les pages et le travail à prévoir. Même si vous n’avez pas encore tout réuni, indiquez ce qui existe déjà et ce qui reste à préparer.</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">Si vous avez déjà un site ou une page professionnelle sur les réseaux sociaux, ajoutez son adresse à votre demande : elle aide à comprendre votre activité et votre besoin de création ou de refonte.</p>
          </div>
          <ul className="space-y-5">
            {checklist.map((item) => <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground"><Check aria-hidden className="mt-1 size-5 shrink-0 text-violet-400" /><span>{item}</span></li>)}
          </ul>
        </section>

        <section className="border-t border-border py-16 md:py-20">
          <h2 className="text-3xl font-semibold tracking-tight">Vos questions avant de créer un site</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div><h3 className="text-lg font-medium">Un site remplace-t-il ma page Facebook ?</h3><p className="mt-3 leading-relaxed text-muted-foreground">Les deux peuvent se compléter. Votre site rassemble vos prestations, vos réalisations et vos coordonnées à une adresse que vous pouvez partager sur vos réseaux sociaux, vos cartes et vos devis.</p></div>
            <div><h3 className="text-lg font-medium">Quel budget prévoir ?</h3><p className="mt-3 leading-relaxed text-muted-foreground">L’offre site vitrine démarre à 1 000 €, avec une maintenance à 75 €/mois. Le périmètre exact se définit dans le devis. Une réservation en ligne, un espace client ou une autre fonction particulière doit être précisé lors du cadrage.</p></div>
            <div><h3 className="text-lg font-medium">Mon site sera-t-il premier sur Google ?</h3><p className="mt-3 leading-relaxed text-muted-foreground">Aucune position n’est garantie. Un contenu précis sur votre métier, des réalisations réelles et une zone d’intervention claire donnent des informations utiles aux visiteurs. Le référencement se suit après publication, notamment avec Google Search Console.</p></div>
            <div><h3 className="text-lg font-medium">Par où commencer ?</h3><p className="mt-3 leading-relaxed text-muted-foreground">Ouvrez l’estimation ci-dessous, indiquez votre activité et votre objectif. Le parcours existant permet de préparer votre demande puis d’échanger sur le projet, avant de fixer son périmètre.</p></div>
          </div>
        </section>

        <section className="rounded-2xl border border-brand/30 bg-card px-6 py-10 sm:px-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Parlons de votre activité artisanale</h2>
          <p className="mb-7 mt-4 max-w-2xl leading-relaxed text-muted-foreground">Un premier site ou une refonte : décrivez ce que vous faites et ce que vos clients doivent pouvoir trouver.</p>
          <QuoteButton />
        </section>
      </div>
      <Footer />
    </main>
  );
}
