import { pageMetadata } from "@/lib/seo";
import { SiteConfig } from "@/site.config";
import { CaseStudy } from "./_landing/home/CaseStudy";
import { ContactCTA, MobileBar } from "./_landing/home/ContactCTA";
import { KindProvider } from "./_landing/home/KindTabs";
import { Offers } from "./_landing/home/Offers";
import { Profile } from "./_landing/home/Profile";
import { Realisations } from "./_landing/home/Realisations";
import {
  HomeFooter,
  Intro,
  Process,
  Reviews,
  SideProjects,
} from "./_landing/home/Sections";

export const metadata = pageMetadata("Sites web et applications à La Réunion | Code Céleste", "Création de sites web et applications mobiles à La Réunion avec Maxime, développeur indépendant. Découvrez les réalisations et demandez une estimation.", "/");

export default function Home() {
  return (
    <main className="relative min-h-dvh bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${SiteConfig.prodUrl}/#organization`,
          name: SiteConfig.title,
          url: SiteConfig.prodUrl,
          description: SiteConfig.description,
          email: SiteConfig.email.contact,
          areaServed: { "@type": "AdministrativeArea", name: "La Réunion" },
          sameAs: [
            "https://www.instagram.com/code_celeste/",
            "https://youtube.com/@maximeceleste",
            "https://x.com/maxime_clst",
            "https://www.linkedin.com/in/code-celeste/",
          ],
        }).replace(/</g, "\\u003c") }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 h-[70vh] bg-[radial-gradient(ellipse_at_top,hsl(var(--brand)/0.18),transparent_60%)]"
      />

      <MobileBar />

      <div className="relative mx-auto grid max-w-[1200px] gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-14 lg:py-16">
        <Profile />

        <div className="min-w-0 space-y-20">
          <Intro />
          <KindProvider>
            <Realisations />
            <CaseStudy />
            <Offers />
          </KindProvider>
          <Reviews />
          <SideProjects />
          <Process />
          <ContactCTA />
          <HomeFooter />
        </div>
      </div>
    </main>
  );
}
