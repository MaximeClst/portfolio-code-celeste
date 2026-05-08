"use client";

import { Card } from "@/components/ui/card";
import { motion, useReducedMotion } from "framer-motion";
import { Globe, Layers, Smartphone } from "lucide-react";
import { ReactNode } from "react";

type Offer = {
  icon: ReactNode;
  title: string;
  description: string;
  price: string;
  meta?: string[];
  highlight?: boolean;
};

const offers: Offer[] = [
  {
    icon: <Smartphone className="size-5" aria-hidden />,
    title: "MVP Mobile",
    description:
      "Une application iOS & Android fonctionnelle pour tester votre marché avant d'investir davantage.",
    price: "À partir de 2 000€",
    meta: ["Livré en 7 jours", "Maintenance 97€/mois"],
    highlight: true,
  },
  {
    icon: <Layers className="size-5" aria-hidden />,
    title: "Application mobile sur mesure",
    description:
      "Une application mobile complète avec toutes les fonctionnalités dont votre entreprise a besoin.",
    price: "Sur devis",
  },
  {
    icon: <Globe className="size-5" aria-hidden />,
    title: "Site vitrine",
    description:
      "Un site professionnel pour les artisans et commerçants locaux. Rapide à livrer, facile à mettre à jour.",
    price: "À partir de 1 000€",
    meta: ["Maintenance 75€/mois", "Mises à jour & sécurité incluses"],
  },
];

export default function Feature() {
  const reduce = useReducedMotion();

  return (
    <section className="py-16 md:py-24" id="offres">
      <div className="mx-auto max-w-6xl px-4 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-medium text-brand uppercase tracking-wider">
            Offres
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Ce que je construis
          </h2>
          <p className="mt-3 text-muted-foreground">
            Trois formats clairs, prix fixes ou sur devis. Vous choisissez,
            on démarre.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: reduce ? 0 : i * 0.1,
              }}
            >
              <OfferCard {...offer} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const OfferCard = ({
  icon,
  title,
  description,
  price,
  meta,
  highlight,
}: Offer) => (
  <Card
    className={`group relative h-full p-6 sm:p-8 bg-card border-border/80 hover:border-brand/50 transition-colors ${
      highlight ? "border-brand/40 shadow-[0_0_0_1px_hsl(var(--brand)/0.15)]" : ""
    }`}
  >
    {highlight ? (
      <span className="absolute -top-2.5 right-6 inline-flex items-center rounded-full border border-brand/30 bg-brand/15 px-2.5 py-0.5 text-[11px] font-medium text-brand">
        Populaire
      </span>
    ) : null}

    <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-background/40 text-foreground">
      {icon}
    </div>

    <h3 className="mt-5 text-lg font-medium">{title}</h3>
    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
      {description}
    </p>

    <div className="mt-6 pt-6 border-t border-dashed border-border/80">
      <p className="text-2xl font-semibold tracking-tight">{price}</p>
      {meta && meta.length > 0 ? (
        <ul className="mt-3 space-y-1.5">
          {meta.map((m) => (
            <li
              key={m}
              className="text-xs text-muted-foreground flex items-center gap-2"
            >
              <span
                aria-hidden
                className="size-1 rounded-full bg-brand/70 shrink-0"
              />
              {m}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  </Card>
);
