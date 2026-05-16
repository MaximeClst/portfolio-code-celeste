"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "./Section";

type ProjectType = "Site web" | "App mobile";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  externalLink?: string;
  type: ProjectType;
};

const projects: Project[] = [
  {
    title: "Budget Copain",
    description:
      "Application mobile de gestion de budget personnelle. Suivez vos dépenses, gérez vos revenus et atteignez vos objectifs financiers.",
    image: "/adaptive-icon.png",
    link: "/works/budget-copain",
    externalLink: "https://budgetcopain.com",
    type: "App mobile",
  },
  {
    title: "Smart Power System",
    description:
      "Solution innovante de gestion énergétique pour optimiser la consommation et réduire les coûts.",
    image: "/SPS LOGO - BASELINE CLAIR.png",
    link: "/works/smart-power-system",
    externalLink: "https://smart-power-system.fr",
    type: "Site web",
  },
  {
    title: "VELORUN Festival",
    description:
      "Plateforme événementielle pour le festival de vélo de La Réunion.",
    image: "/VeloRunFest.png",
    link: "/works/velorun-festival",
    externalLink: "https://velorunfestival.re",
    type: "Site web",
  },
];

export const Work = () => {
  const reduce = useReducedMotion();

  return (
    <Section id="realisations" className="max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center max-w-2xl mx-auto"
      >
        <span className="text-xs font-medium text-brand uppercase tracking-wider">
          Projets clients
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
          Réalisations
        </h2>
        <p className="mt-3 text-muted-foreground">
          Des produits livrés, en ligne, et qui font tourner du business.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: reduce ? 0 : i * 0.1,
            }}
          >
            <WorkCard {...p} />
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/works">
            Voir tous les projets
            <ChevronRight className="ml-1 size-4" />
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
  type,
}: Project) => (
  <Card className="group relative overflow-hidden p-8 bg-card border-border/80 hover:border-brand/40 transition-colors">
    <div
      aria-hidden
      className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top,hsl(var(--brand)/0.08),transparent_60%)]"
    />
    <div className="relative">
      <div className="absolute right-0 top-0">
        <Badge variant="outline" className="border-border/80">
          {type}
        </Badge>
      </div>
      <div className="flex justify-center items-center mb-6">
        <Image
          src={image}
          alt={title}
          width={120}
          height={120}
          className="object-contain md:w-[140px] md:h-[140px]"
        />
      </div>

      <div className="space-y-2 py-4">
        <h3 className="text-lg sm:text-xl font-medium">{title}</h3>
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
        {externalLink ? (
          <Button asChild variant="outline" size="sm" className="gap-1 pr-2">
            <Link href={externalLink} target="_blank">
              Site web
              <ExternalLink className="ml-0 !size-3.5" />
            </Link>
          </Button>
        ) : null}
      </div>
    </div>
  </Card>
);
