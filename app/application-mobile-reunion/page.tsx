import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { SiteConfig } from "@/site.config";
import { PageTopBar } from "../_landing/home/ContactCTA";
import { apps } from "../_landing/home/data";
import { AppCard } from "../_landing/home/Realisations";
import { Eyebrow, HomeFooter } from "../_landing/home/Sections";
import { QuoteButton } from "./QuoteButton";

const path = "/application-mobile-reunion";
const title = "Application mobile à La Réunion | Code Céleste";
const description = "Développement d’applications iOS et Android à La Réunion avec Maxime. MVP dès 2 000 € ou application sur mesure : découvrez les projets et préparez votre devis.";
const baseMetadata = pageMetadata(title, description, path);

export const metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    images: [{ url: "/social/code-celeste-logo-v2.png", width: 512, height: 512, alt: "Logo Code Céleste" }],
  },
  twitter: { card: "summary" as const, title, description, images: ["/social/code-celeste-logo-v2.png"] },
};

const brief = [
  { title: "Pour qui ?", text: "Vos clients, vos équipes ou le grand public : décrivez les personnes qui utiliseront l’application et dans quelle situation." },
  { title: "Pour faire quoi ?", text: "Choisissez le parcours essentiel de la première version. Par exemple, pour une application de budget : ajouter une dépense puis consulter sa répartition." },
  { title: "Avec quel existant ?", text: "Signalez les maquettes, le site, les données ou les outils à connecter. Indiquez aussi si vous reprenez une application déjà développée." },
  { title: "Avec quelles contraintes ?", text: "Précisez les appareils visés, votre budget et votre date souhaitée. Les besoins comme les paiements, les notifications ou l’usage sans réseau se cadrent explicitement." },
];

export default function MobilePage() {
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
        name: "Développement d’application mobile à La Réunion",
        serviceType: "Développement d’applications mobiles",
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
              <span>Applications mobiles</span>
            </nav>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
              Développement d’application mobile{" "}
              <span className="font-serif font-normal italic text-violet-300">à La Réunion</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/90">Je développe des applications mobiles iOS et Android pour les entrepreneurs et les entreprises à La Réunion. Vous pouvez commencer par un MVP pour tester votre idée, ou cadrer une application sur mesure.</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">Je suis Maxime, de Code Céleste. Nous définissons ensemble ce que votre première version doit permettre de faire, avant de choisir les fonctionnalités à construire.</p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <QuoteButton />
              <a href="#projets-mobiles" className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 transition-colors hover:text-foreground">Découvrir les apps publiées <ArrowUpRight className="size-4" aria-hidden /></a>
            </div>
          </div>
          <aside aria-label="Offre MVP mobile" className="rounded-2xl border border-brand/50 bg-card p-6 sm:p-7">
            <div className="flex items-center justify-between gap-2">
              <p className="font-medium">MVP mobile</p>
              <span className="rounded-full bg-brand/15 px-2.5 py-0.5 text-xs text-violet-300">Livré en 7 jours</span>
            </div>
            <p className="mt-4 text-4xl font-semibold tracking-tight">2 000 €<span className="text-sm font-normal text-muted-foreground"> à partir de</span></p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Une première application fonctionnelle pour tester votre marché avant d’investir davantage. Le périmètre et le calendrier sont cadrés ensemble au devis.</p>
            <div className="mt-6 border-t border-border pt-5">
              <p className="font-medium">Maintenance MVP : 120 €/mois</p>
              <Link href="/#offres" className="mt-4 inline-block text-sm text-violet-300 hover:text-foreground">Consulter toutes les offres</Link>
            </div>
          </aside>
        </section>

        <section id="projets-mobiles" className="scroll-mt-24">
          <Eyebrow>Apps clientes publiées</Eyebrow>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Disponibles sur les stores</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {apps.map((a) => <AppCard key={a.title} app={a} />)}
          </div>
        </section>

        <section>
          <Eyebrow>Mes propres apps</Eyebrow>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Deux usages, deux applications</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-6">
              <Image src="/adaptive-icon.png" alt="Icône de Budget Copain" width={56} height={56} className="size-14 rounded-2xl bg-brand/20" />
              <h3 className="mt-4 text-lg font-medium">Budget Copain</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Une application de gestion de budget personnel, développée avec React Native et Expo : saisie des dépenses et des revenus, catégories personnalisables et visualisation des dépenses. Un parcours récurrent : enregistrer une opération puis retrouver une vue claire de son budget.</p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm">
                <Link href="/works/budget-copain" className="text-violet-300 hover:text-foreground">Voir le projet</Link>
                <a href="https://www.budgetcopain.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">Site de l’application<span className="sr-only"> (nouvel onglet)</span></a>
              </div>
            </article>
            <article className="rounded-2xl border border-border bg-card p-6">
              <Image src="/apps/mossly.webp" alt="Icône de Mossly" width={56} height={56} className="size-14 rounded-2xl" />
              <h3 className="mt-4 text-lg font-medium">Mossly</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Une application de suivi d’hydratation gamifié : objectifs quotidiens, statistiques, séries et univers végétal qui évolue avec les habitudes. Le point de départ est une action quotidienne et sa progression dans le temps.</p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm">
                <a href="https://apps.apple.com/fr/app/mossly/id6783483520" target="_blank" rel="noopener noreferrer" className="text-violet-300 hover:text-foreground">Voir sur l’App Store<span className="sr-only"> (nouvel onglet)</span></a>
              </div>
            </article>
          </div>
        </section>

        <section>
          <Eyebrow>Choisir sa formule</Eyebrow>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">MVP ou application sur mesure ?</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6"><h3 className="font-medium">Tester un premier usage</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Le MVP concentre la première version sur le parcours indispensable pour éprouver votre idée. Listez ce qui permet réellement de faire ce test, puis ce qui peut attendre les retours. L’offre démarre à 2 000 €, avec une maintenance à 120 €/mois.</p></div>
            <div className="rounded-2xl border border-border bg-card p-6"><h3 className="font-medium">Construire un besoin plus complet</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">L’application mobile sur mesure est chiffrée sur devis. Décrivez les différents profils d’utilisateurs, les parcours et les outils à connecter : ces éléments permettent de définir le travail à prévoir et son calendrier.</p></div>
          </div>
        </section>

        <section>
          <Eyebrow>Avant le devis</Eyebrow>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Quatre points pour préparer votre devis</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">Vous n’avez pas besoin d’arriver avec un cahier des charges technique. Ces informations permettent de démarrer un échange utile.</p>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {brief.map((item) => (
              <li key={item.title} className="flex gap-3 rounded-2xl border border-border bg-card p-5">
                <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-violet-300" />
                <div><h3 className="font-medium">{item.title}</h3><p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p></div>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-brand/40 bg-gradient-to-br from-brand/25 via-card to-card p-8 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Votre idée commence par un usage clair</h2>
          <p className="mb-7 mt-3 max-w-2xl text-muted-foreground">Expliquez à qui s’adresse votre application et ce qu’elle doit permettre de faire. Le parcours d’estimation prépare notre échange sur votre projet.</p>
          <QuoteButton />
        </section>

        <HomeFooter />
      </div>
    </main>
  );
}
