import { pageMetadata } from "@/lib/seo";
import { ContactCTA, PageTopBar } from "../_landing/home/ContactCTA";
import { apps, sites } from "../_landing/home/data";
import { AppCard, SiteCard } from "../_landing/home/Realisations";
import { Eyebrow, HomeFooter, SideProjects } from "../_landing/home/Sections";

export const metadata = pageMetadata("Réalisations web et mobiles | Code Céleste, La Réunion", "Découvrez les sites web et applications mobiles réalisés par Code Céleste : SCMOI, L2KJ Services, O'Milles Déco, Smart Power System, Z'Happyro et autres projets.", "/works");

export default function WorksPage() {
  return (
    <main className="relative min-h-dvh bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 h-[70vh] bg-[radial-gradient(ellipse_at_top,hsl(var(--brand)/0.18),transparent_60%)]"
      />

      <PageTopBar />

      <div className="relative mx-auto max-w-5xl space-y-20 px-4 py-12 sm:px-6 lg:py-16">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Toutes mes{" "}
            <span className="font-serif font-normal italic text-violet-300">
              réalisations
            </span>
          </h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            {sites.length} sites et {apps.length} applications mis en ligne pour
            des entreprises de La Réunion.
          </p>
        </div>

        <section>
          <Eyebrow>Sites web</Eyebrow>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sites.map((s) => (
              <SiteCard key={s.title} site={s} />
            ))}
          </div>
        </section>

        <section>
          <Eyebrow>Applications mobiles</Eyebrow>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {apps.map((a) => (
              <AppCard key={a.title} app={a} />
            ))}
          </div>
        </section>

        <SideProjects />
        <ContactCTA />
        <HomeFooter />
      </div>
    </main>
  );
}
