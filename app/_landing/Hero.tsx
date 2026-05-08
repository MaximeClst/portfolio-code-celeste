"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex flex-col items-center text-center pt-32 lg:pt-40 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/40 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
          <span className="size-1.5 rounded-full bg-brand animate-pulse" />
          Développeur indépendant · La Réunion 🇷🇪
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight max-w-3xl text-balance"
      >
        Vous avez une idée.{" "}
        <span className="bg-gradient-to-r from-brand to-brand-secondary bg-clip-text text-transparent">
          On la livre en 7 jours.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="text-base sm:text-lg text-muted-foreground max-w-xl"
      >
        Applications mobiles et sites web sur mesure à La Réunion. MVP rapide
        pour tester votre marché, ou solution complète pour scaler.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-3 mt-2"
      >
        <Button asChild size="lg" className="h-12 px-6 text-base">
          <Link href="mailto:maxime@code-celeste.com?subject=Démarrer%20un%20MVP">
            Démarrer un MVP
            <ArrowRight className="ml-1 size-4" />
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="h-12 px-6 text-base"
        >
          <Link href="/works">Voir les réalisations</Link>
        </Button>
      </motion.div>
    </Section>
  );
};

export const Code = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <span
      className={`px-2 -mx-0.5 text-foreground bg-accent/40 border border-border inline-flex items-center rounded-md py-1 ${props.className ?? ""}`}
    >
      {props.children}
    </span>
  );
};
