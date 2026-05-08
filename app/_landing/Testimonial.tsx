"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { Section } from "./Section";

type Testimonial = {
  name: string;
  site: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Alexandre Eydieux",
    site: "Smart Power System",
    image: "/pp-AlexEydieux.jpg",
    quote:
      "Nous avons sollicité Maxime pour la création de notre site Internet et nous sommes pleinement satisfaits du résultat. Son investissement dans le projet et le rapport qualité/prix proposé ont été particulièrement appréciés.\n\nDepuis la mise en ligne, le site nous a permis de générer une quinzaine de demandes, dont 4 à 5 se sont concrétisées.\n\nJe recommande ses services !",
  },
  {
    name: "Grégory Maillot",
    site: "VELORUN Festival",
    image: "/VeloRunFest.png",
    quote:
      "Maxime a une grande capacité d'adaptation pour le projet site web VELORUN FESTIVAL.\n\nDe plus, c'est allé très vite pour une 1ʳᵉ version. Il a fait preuve d'autonomie.\n\nLe site est performant !",
  },
];

export const Testimonial = () => {
  const reduce = useReducedMotion();

  return (
    <Section id="testimonial" className="max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center max-w-2xl mx-auto"
      >
        <span className="text-xs font-medium text-brand uppercase tracking-wider">
          Témoignages
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
          Ils en parlent mieux que moi
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {testimonials.map(({ name, quote, image, site }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: reduce ? 0 : i * 0.1,
            }}
          >
            <Card className="h-full bg-card border-border/80 p-6 sm:p-8">
              <CardContent className="p-0 flex flex-col gap-6">
                <Quote
                  className="size-6 text-brand/70 shrink-0"
                  aria-hidden
                />
                <blockquote className="text-base sm:text-lg italic leading-relaxed text-foreground/90 whitespace-pre-line">
                  {quote}
                </blockquote>
                <div className="flex items-center gap-3 mt-auto">
                  <Avatar className="size-10">
                    <AvatarImage
                      alt={name}
                      src={image}
                      loading="lazy"
                      width={80}
                      height={80}
                    />
                    <AvatarFallback>
                      {name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{name}</p>
                    <p className="text-xs text-muted-foreground">{site}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
