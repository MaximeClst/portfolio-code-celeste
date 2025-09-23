import Image from "next/image";
import { Code } from "./Hero";
import { Section } from "./Section";

export const Showcase = () => {
  return (
    <Section>
      <h2 className="text-3xl lg:text-4xl font-bold ">
        Comment <Code>Smart Power System</Code> a pu acquérir des nouveaux
        athlètes
      </h2>
      <p className="mt-4 text-muted-foreground">
        Ils cherchaient un moyen pour toucher beaucoup plus de monde, j’ai mis
        en place <Code>une plateforme web</Code> qui facilite les infos et la
        prise de contact
      </p>
      <Image
        src="/screen-SPS.png"
        alt="Smart Power System"
        width={400}
        height={200}
        className="w-full h-auto mt-6 lg:mt-8"
      />
    </Section>
  );
};
