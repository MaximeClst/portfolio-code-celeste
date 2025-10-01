import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../_landing/Footer";
import { Header } from "../_landing/Header";

export default function WorksPage() {
  return (
    <main className="h-full relative">
      <div className="relative z-10">
        <Header />

        <section className="container mx-auto px-4 py-24">
          <div className="mb-8">
            <Button asChild variant="ghost" size="sm" className="gap-2">
              <Link href="/">
                <ArrowLeft className="size-4" />
                Retour à l'accueil
              </Link>
            </Button>
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
        </section>

        <Footer />
      </div>
    </main>
  );
}

const WorkCard = ({
  title,
  description,
  image,
  link,
  externalLink,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
  externalLink?: string;
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
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground line-clamp-3">{description}</p>
        </div>

        <div className="flex gap-3 border-t border-dashed pt-6">
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="gap-1 pr-2 shadow-none"
          >
            <Link href={link}>
              Voir le projet
              <ChevronRight className="ml-0 !size-3.5 opacity-50" />
            </Link>
          </Button>
          {externalLink && (
            <Button asChild variant="outline" size="sm" className="gap-1 pr-2">
              <Link href={externalLink} target="_blank">
                Site web
                <ExternalLink className="ml-0 !size-3.5" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
