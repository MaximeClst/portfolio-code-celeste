import Image from "next/image";
import { Code } from "./Hero";
import { Section } from "./Section";

export const Showcase = () => {
  return (
    <Section>
      <h2 className="text-3xl lg:text-4xl font-bold">
        Un site qui transforme vos visiteurs en clients
      </h2>
      <p className="mt-4 text-muted-foreground">
        Pour chaque projet, l’objectif est <Code>concret</Code> : générer des
        appels, des devis ou des prises de rendez-vous. Pas seulement « être
        beau ».
      </p>
      <Image
        src="/screen-SPS.png"
        alt="Aperçu d'un site client réalisé par Code Celeste"
        width={400}
        height={200}
        className="w-full h-auto mt-6 lg:mt-8"
      />
    </Section>
  );
};
