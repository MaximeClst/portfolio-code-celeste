import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  ChevronRight,
  ExternalLink,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../_landing/Footer";
import { Header } from "../_landing/Header";

export default function WorksPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="container mx-auto px-4 py-24">
        <div className="mb-8">
          <Link href="/" className={buttonVariants({ variant: "ghost", size: "sm" }) + " gap-2"}>
            <ArrowLeft className="size-4" />
            Retour à l'accueil
          </Link>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Mes Projets Web</h1>
            <p className="text-muted-foreground text-lg">
              Découvrez l'ensemble de mes réalisations et projets récents.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <WorkCard
              title="Smart Power System"
              description="Solution innovante de gestion énergétique pour optimiser la consommation et réduire les coûts."
              image="/SPS LOGO - BASELINE CLAIR.png"
              link="/works/smart-power-system"
              externalLink="https://smart-power-system.fr"
            />

            <WorkCard
              title="VELORUN Festival"
              description="Plateforme événementielle pour le festival de vélo de La Réunion."
              image="/VeloRunFest.png"
              link="/works/velorun-festival"
              externalLink="https://velorunfestival.re"
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 mt-12">
            <h1 className="text-4xl font-bold mb-4">Mes Projets Mobiles</h1>
            <p className="text-muted-foreground text-lg">
              Découvrez l'ensemble de mes réalisations et projets récents.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <WorkCard
              title="Budget Copain"
              description="Application mobile de gestion de budget personnelle. Suivez vos dépenses, gérez vos revenus et atteignez vos objectifs financiers."
              image="/adaptive-icon.png"
              link="/works/budget-copain"
              externalLink="https://www.budgetcopain.com/"
              badge="mobile"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const WorkCard = ({
  title,
  description,
  image,
  link,
  externalLink,
  badge,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
  externalLink?: string;
  badge?: "mobile";
}) => {
  return (
    <Card className="p-6 hover:shadow-xl transition-shadow">
      <div className="relative">
        <div className="flex justify-center items-center mb-6">
          <Image
            src={image}
            alt={title}
            width={120}
            height={120}
            className="object-contain"
          />
        </div>

        <div className="space-y-2 py-6">
          {badge === "mobile" && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
              <Smartphone className="size-3" />
              App Mobile
            </span>
          )}
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground line-clamp-3">{description}</p>
        </div>

        <div className="flex gap-3 border-t border-dashed pt-6">
          <Link href={link} className={buttonVariants({ variant: "secondary", size: "sm" }) + " gap-1 pr-2 shadow-none"}>
            Voir le projet
            <ChevronRight className="ml-0 !size-3.5 opacity-50" />
          </Link>
          {externalLink && (
            <Link href={externalLink} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "sm" }) + " gap-1 pr-2"}>
              Site web
              <ExternalLink className="ml-0 !size-3.5" />
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
};
