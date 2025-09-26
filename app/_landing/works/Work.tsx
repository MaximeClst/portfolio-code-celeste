import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "../Section";

export const Work = () => {
  return (
    <Section>
      <div className="text-center">
        <h2 className="text-balance text-3xl font-semibold md:text-4xl">
          My Works
        </h2>
        <p className="text-muted-foreground mt-6">
          Découvrez mes projets et réalisations récentes.
        </p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <WorkCard
          title="Smart Power System"
          description="Solution innovante de gestion énergétique pour optimiser la consommation et réduire les coûts."
          image="/SPS LOGO - BASELINE CLAIR.png"
          link="/work/smart-power-system"
          externalLink="https://smartpowersystem.com"
        />

        <WorkCard
          title="VELORUN Festival"
          description="Plateforme événementielle pour le festival de course à pied et vélo de La Réunion."
          image="/VeloRunFest.png"
          link="/work/velorun-festival"
        />
      </div>

      <div className="mt-8 text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/work">
            Voir tous les projets
            <ChevronRight className="ml-2 size-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
};

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
    <Card className="p-6">
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
          <h3 className="text-base font-medium">{title}</h3>
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {description}
          </p>
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
          <Button asChild variant="outline" size="sm" className="gap-1 pr-2">
            <Link href={externalLink ?? ""} target="_blank">
              Site web
              <ExternalLink className="ml-0 !size-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};
