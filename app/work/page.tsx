import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../_landing/Footer";
import { Header } from "../_landing/Header";
import { Section } from "../_landing/Section";

export default function WorkPage() {
  return (
    <main className="h-full relative">
      {/* Background avec grille et gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-primary-800 to-primary-900">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_3px,transparent_3px),linear-gradient(rgba(255,255,255,0.02)_3px,transparent_3px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Contenu par-dessus le background */}
      <div className="relative z-10">
        <Header />

        <Section className="container mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <h1 className="text-balance text-4xl font-bold md:text-5xl mb-6">
              Mes Projets
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Découvrez mes réalisations et projets récents. Chaque projet
              raconte une histoire unique de collaboration et d'innovation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Smart Power System"
              description="Solution innovante de gestion énergétique pour optimiser la consommation et réduire les coûts."
              image="/SPS LOGO - BASELINE CLAIR.png"
              link="/work/smart-power-system"
              externalLink="https://smartpowersystem.com"
            />

            <ProjectCard
              title="VELORUN Festival"
              description="Plateforme événementielle pour le festival de course à pied et vélo de La Réunion."
              image="/VeloRunFest.png"
              link="/work/velorun-festival"
              externalLink="https://velorunfestival.re"
            />
          </div>
        </Section>

        <Footer />
      </div>
    </main>
  );
}

const ProjectCard = ({
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
  externalLink: string;
}) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="relative">
        <div className="flex justify-center items-center mb-6">
          <Image
            src={image}
            alt={title}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        <div className="space-y-2 py-6">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground line-clamp-3">{description}</p>
        </div>

        <div className="flex gap-3 border-t border-dashed pt-6">
          <Button asChild variant="default" size="sm" className="gap-1 pr-2">
            <Link href={link}>
              Voir le projet
              <ChevronRight className="ml-0 !size-3.5" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="sm" className="gap-1 pr-2">
            <Link href={externalLink} target="_blank">
              Site web
              <ExternalLink className="ml-0 !size-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};
