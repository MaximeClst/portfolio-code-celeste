import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../_landing/Footer";
import { Header } from "../_landing/Header";
import { apps, sites } from "../_landing/home/data";
import { AppCard, SiteCard } from "../_landing/home/Realisations";
import { Eyebrow, SideProjects } from "../_landing/home/Sections";

export const metadata: Metadata = {
  title: "Réalisations | Code Celeste",
  description:
    "Sites web et applications mobiles réalisés pour des entreprises de La Réunion.",
};

export default function WorksPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="mx-auto max-w-5xl space-y-20 px-4 pb-16 pt-28 sm:px-6">
        <div>
          <Link
            href="/"
            className={buttonVariants({ variant: "ghost", size: "sm" }) + " -ml-3 gap-2"}
          >
            <ArrowLeft className="size-4" />
            Retour à l&apos;accueil
          </Link>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
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
      </div>

      <Footer />
    </main>
  );
}
