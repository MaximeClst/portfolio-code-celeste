import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { SiteConfig } from "@/site.config";
import { Header } from "../_landing/Header";
import { Footer } from "../_landing/Footer";
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
    <main className="min-h-screen bg-background text-foreground">
      <Header />
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

      <div className="mx-auto max-w-6xl px-4 pt-28 lg:px-12">
        <nav aria-label="Fil d’Ariane" className="mb-10 text-sm text-muted-foreground">
          <Link href="/" className="underline underline-offset-4 hover:text-foreground">Accueil</Link>
          <span aria-hidden className="mx-3">/</span><span>Applications mobiles</span>
        </nav>

        <section className="grid items-start gap-10 pb-16 lg:grid-cols-[1.45fr_1fr] lg:gap-14 md:pb-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-violet-400">iOS · Android · Code Céleste</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Développement d’application mobile à La Réunion</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Je développe des applications mobiles iOS et Android pour les entrepreneurs et les entreprises à La Réunion. Vous pouvez commencer par un MVP pour tester votre idée, ou cadrer une application sur mesure.</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">Je suis Maxime, développeur indépendant chez Code Céleste. Nous définissons ensemble ce que votre première version doit permettre de faire, avant de choisir les fonctionnalités à construire.</p>
            <div className="mt-8"><QuoteButton /></div>
            <a href="#projets-mobiles" className="mt-5 inline-flex items-center gap-2 text-sm underline underline-offset-4 hover:text-violet-300">Découvrir les projets mobiles <ArrowUpRight className="size-4" aria-hidden /></a>
          </div>
          <aside aria-label="Offre MVP mobile" className="rounded-2xl border border-brand/40 bg-card p-7 sm:p-8">
            <p className="text-sm text-muted-foreground">Pour tester une idée · MVP mobile</p>
            <p className="mt-3 text-4xl font-semibold tracking-tight"><span className="block pb-2 text-sm font-normal text-muted-foreground">À partir de</span>2 000 €</p>
            <p className="mt-5 leading-relaxed text-muted-foreground">Une première application fonctionnelle pour tester votre marché avant d’investir davantage.</p>
            <div className="mt-7 space-y-3 border-t border-border pt-6">
              <p className="font-medium">Offre annoncée en 7 jours</p>
              <p className="text-sm leading-relaxed text-muted-foreground">Le périmètre du MVP et le calendrier sont cadrés ensemble au devis.</p>
              <p className="text-sm text-muted-foreground">Maintenance MVP : 120 €/mois</p>
              <Link href="/#offres" className="inline-block text-sm underline underline-offset-4 hover:text-violet-300">Consulter les offres Code Céleste</Link>
            </div>
          </aside>
        </section>

        <section id="projets-mobiles" className="scroll-mt-28 border-t border-border py-16 md:py-20">
          <p className="text-xs font-medium uppercase tracking-widest text-violet-400">Des projets concrets</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Deux usages, deux applications du portfolio</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <Image src="/adaptive-icon.png" alt="Icône de Budget Copain" width={80} height={80} className="rounded-2xl" />
              <h3 className="mt-5 text-2xl font-semibold">Budget Copain</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">Une application de gestion de budget personnel, développée avec React Native et Expo. Son site présente la saisie des dépenses et des revenus, les catégories personnalisables et la visualisation des dépenses.</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">Ce projet illustre un parcours récurrent : enregistrer une opération puis retrouver une vue compréhensible de son budget. C’est le type d’usage à préciser avant d’ajouter d’autres fonctions.</p>
              <Link href="/works/budget-copain" className="mt-6 inline-flex items-center gap-2 text-sm underline underline-offset-4 hover:text-violet-300">Voir le projet Budget Copain <ArrowUpRight className="size-4" aria-hidden /></Link>
              <p className="mt-3"><a href="https://www.budgetcopain.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">Visiter le site de l’application<span className="sr-only"> (nouvel onglet)</span></a></p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <Image src="/mossly-icon.png" alt="Icône de Mossly" width={80} height={80} className="rounded-2xl" />
              <h3 className="mt-5 text-2xl font-semibold">Mossly</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">Une application de suivi d’hydratation gamifié, présentée dans le portfolio Code Céleste : objectifs quotidiens, statistiques, séries et univers végétal qui évolue avec les habitudes.</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">Ici, le point de départ est une action quotidienne et sa progression dans le temps. Un autre exemple pour réfléchir à ce qui donne envie de revenir dans une application.</p>
              <Link href="/works" className="mt-6 inline-flex items-center gap-2 text-sm underline underline-offset-4 hover:text-violet-300">Parcourir le portfolio mobile <ArrowUpRight className="size-4" aria-hidden /></Link>
            </article>
          </div>
        </section>

        <section className="border-t border-border py-16 md:py-20">
          <h2 className="text-3xl font-semibold tracking-tight">MVP ou application sur mesure ?</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div><h3 className="text-lg font-medium">Tester un premier usage</h3><p className="mt-3 leading-relaxed text-muted-foreground">Le MVP concentre la première version sur le parcours indispensable pour éprouver votre idée. Listez ce qui permet réellement de faire ce test, puis ce qui peut attendre les retours. L’offre démarre à 2 000 €, avec une maintenance à 120 €/mois.</p></div>
            <div><h3 className="text-lg font-medium">Construire un besoin plus complet</h3><p className="mt-3 leading-relaxed text-muted-foreground">L’application mobile sur mesure est chiffrée sur devis. Décrivez les différents profils d’utilisateurs, les parcours et les outils à connecter : ces éléments permettent de définir le travail à prévoir et son calendrier.</p></div>
          </div>
        </section>

        <section className="border-t border-border py-16 md:py-20">
          <h2 className="text-3xl font-semibold tracking-tight">Quatre points pour préparer votre devis</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">Vous n’avez pas besoin d’arriver avec un cahier des charges technique. Ces informations permettent de démarrer un échange utile.</p>
          <ul className="mt-8 grid gap-7 md:grid-cols-2">
            {brief.map((item) => <li key={item.title} className="flex gap-3"><Check aria-hidden className="mt-1 size-5 shrink-0 text-violet-400" /><div><h3 className="text-lg font-medium">{item.title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p></div></li>)}
          </ul>
        </section>

        <section className="rounded-2xl border border-brand/30 bg-card px-6 py-10 sm:px-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Votre idée commence par un usage clair</h2>
          <p className="mb-7 mt-4 max-w-2xl leading-relaxed text-muted-foreground">Expliquez à qui s’adresse votre application et ce qu’elle doit permettre de faire. Le parcours d’estimation prépare notre échange sur votre projet.</p>
          <QuoteButton />
        </section>
      </div>
      <Footer />
    </main>
  );
}
