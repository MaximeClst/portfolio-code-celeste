"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export const FinalCTA = () => {
  return (
    <section id="contact" className="px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-brand/30 bg-gradient-to-br from-[#1a0a3a] via-[#0f0a24] to-[#0a0a0a] px-6 py-14 sm:px-12 sm:py-20 text-center"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--brand)/0.25),transparent_60%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        />

        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/15 px-3 py-1 text-xs font-medium text-brand">
            <Sparkles className="size-3" aria-hidden />
            Réponse sous 24h
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
            Un projet en tête ?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            Répondez à 3 questions et recevez une estimation sous 24h.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="h-12 px-6 text-base">
              <Link href="mailto:maxime@code-celeste.com?subject=Estimation%20projet&body=Bonjour%20Maxime%2C%0A%0A1.%20Quel%20type%20de%20projet%20%3F%20(site%20web%20%2F%20app%20mobile%20%2F%20MVP)%0A2.%20Pour%20quel%20usage%20%3F%0A3.%20Quel%20budget%20et%20quelle%20deadline%20%3F%0A%0A">
                Estimer mon projet
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-6 text-base bg-transparent"
            >
              <Link href="mailto:maxime@code-celeste.com">
                maxime@code-celeste.com
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
