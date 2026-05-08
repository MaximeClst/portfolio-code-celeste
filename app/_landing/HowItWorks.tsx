"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Code2, FileCheck, Rocket } from "lucide-react";
import { ReactNode } from "react";
import { Section } from "./Section";

type Step = {
  index: string;
  title: string;
  description: string;
  icon: ReactNode;
};

const steps: Step[] = [
  {
    index: "01",
    title: "Échange de 30 min",
    description: "On cadre le projet, les besoins et les délais ensemble.",
    icon: <Calendar className="size-5" aria-hidden />,
  },
  {
    index: "02",
    title: "Proposition & devis",
    description: "Périmètre clair, prix fixe, pas de surprise.",
    icon: <FileCheck className="size-5" aria-hidden />,
  },
  {
    index: "03",
    title: "Développement",
    description: "Itérations rapides, vous suivez l'avancement en direct.",
    icon: <Code2 className="size-5" aria-hidden />,
  },
  {
    index: "04",
    title: "Livraison & suivi",
    description: "Déploiement et accompagnement post-livraison.",
    icon: <Rocket className="size-5" aria-hidden />,
  },
];

export const HowItWorks = () => {
  const reduce = useReducedMotion();

  return (
    <Section id="process" className="max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center max-w-2xl mx-auto"
      >
        <span className="text-xs font-medium text-brand uppercase tracking-wider">
          Processus
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
          De l'idée à la livraison
        </h2>
        <p className="mt-3 text-muted-foreground">
          Une méthode simple, rythmée, taillée pour aller vite sans rogner sur
          la qualité.
        </p>
      </motion.div>

      <div className="relative mt-12 lg:mt-16">
        <div
          aria-hidden
          className="hidden lg:block absolute top-6 left-12 right-12 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.li
              key={step.index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: reduce ? 0 : i * 0.1,
              }}
              className="relative"
            >
              <div className="relative flex size-12 items-center justify-center rounded-full border border-border bg-card text-foreground">
                {step.icon}
              </div>
              <div className="mt-5">
                <span className="font-mono text-xs text-muted-foreground">
                  {step.index}
                </span>
                <h3 className="mt-1 text-lg font-medium">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
};
