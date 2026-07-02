"use client";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "./Section";

type ProjectType = "Site web" | "App mobile";

type Project = {
  title: string;
  logo: string;
  /** Classes additionnelles pour le logo (ex : rounded-full) */
  logoClassName?: string;
  /** Dégradé du panneau intérieur */
  gradient: string;
  /** Page détail interne (/works/...) — optionnelle */
  link?: string;
  externalLink?: string;
  type: ProjectType;
};

// Les FEATURED_COUNT premiers projets sont mis en avant sur la landing.
// Ajoute tes nouveaux projets en tête de liste ; la liste complète vit sur /works.
const FEATURED_COUNT = 4;

const projects: Project[] = [
  {
    title: "Budget Copain",
    logo: "/adaptive-icon.png",
    gradient: "from-brand/25 to-brand/5",
    link: "/works/budget-copain",
    externalLink: "https://budgetcopain.com",
    type: "App mobile",
  },
  {
    title: "SCMOI",
    logo: "/logo-scmoi.jpg",
    logoClassName: "rounded-full",
    gradient: "from-white/10 to-white/[0.02]",
    externalLink: "https://www.scmoi.re/",
    type: "Site web",
  },
  {
    title: "Anthony Celeste Coaching",
    logo: "/anthony-celeste.png",
    gradient: "from-white/10 to-white/[0.02]",
    externalLink: "https://www.anthonyceleste-coaching.re/",
    type: "Site web",
  },
  {
    title: "Smart Power System",
    logo: "/SPS LOGO - BASELINE CLAIR.png",
    gradient: "from-brand/25 to-brand/5",
    link: "/works/smart-power-system",
    externalLink: "https://smart-power-system.fr",
    type: "Site web",
  },
];

const featured = projects.slice(0, FEATURED_COUNT);

// Alternance 4/8 puis 8/4 (grille 12 colonnes)
const spanFor = (i: number) =>
  i % 4 === 0 || i % 4 === 3 ? "md:col-span-4" : "md:col-span-8";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const Work = () => {
  const reduce = useReducedMotion();

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 110, damping: 18 },
    },
  };

  return (
    <Section id="realisations" className="max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
      >
        <div className="max-w-lg">
          <span className="text-xs font-medium text-brand uppercase tracking-wider">
            Projets clients
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Dernières{" "}
            <span className="text-muted-foreground">réalisations</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Des produits livrés, en ligne, et qui font tourner du business.
          </p>
        </div>
        <Link
          href="/works"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "gap-1.5 whitespace-nowrap"
          )}
        >
          Voir tous les projets
          <ArrowUpRight className="size-4" />
        </Link>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-10 grid grid-cols-12 gap-4"
      >
        {featured.map((p, i) => (
          <BounceCard
            key={p.title}
            project={p}
            variants={itemVariants}
            reduce={!!reduce}
            className={spanFor(i)}
          />
        ))}
      </motion.div>
    </Section>
  );
};

const BounceCard = ({
  project,
  className,
  variants,
  reduce,
}: {
  project: Project;
  className?: string;
  variants: Variants;
  reduce: boolean;
}) => {
  const href = project.link ?? project.externalLink;
  const external = !project.link && !!project.externalLink;

  return (
    <motion.article
      variants={variants}
      whileHover={reduce ? undefined : { scale: 0.97, rotate: "-1deg" }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className={cn(
        "group relative col-span-12 min-h-[300px] cursor-pointer overflow-hidden rounded-2xl border border-border/80 bg-card p-8 transition-colors hover:border-brand/40",
        className
      )}
    >
      <div className="mx-auto text-center">
        <Badge variant="outline" className="border-border/80">
          {project.type}
        </Badge>
        <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
          {project.title}
        </h3>
      </div>

      <div
        className={cn(
          "absolute bottom-0 left-4 right-4 top-36 translate-y-8 rounded-t-2xl border border-b-0 border-border/60 bg-gradient-to-br p-4 transition-transform duration-[250ms]",
          !reduce && "group-hover:translate-y-4 group-hover:rotate-[2deg]",
          project.gradient
        )}
      >
        <div className="flex h-full flex-col items-center justify-center gap-3 pb-8">
          <Image
            src={project.logo}
            alt={project.title}
            width={120}
            height={120}
            className={cn(
              "h-auto max-h-20 w-auto object-contain drop-shadow-lg",
              project.logoClassName
            )}
          />
          {href ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-sm font-medium text-foreground backdrop-blur-sm">
              {external ? "Voir le site" : "Voir le projet"}
              {external ? (
                <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              ) : (
                <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              )}
            </span>
          ) : null}
        </div>
      </div>

      {href ? (
        <Link
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="absolute inset-0 z-10"
          aria-label={
            external
              ? `Ouvrir le site de ${project.title} dans un nouvel onglet`
              : `Voir le projet ${project.title}`
          }
        />
      ) : null}
    </motion.article>
  );
};
