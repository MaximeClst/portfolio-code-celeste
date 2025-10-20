import { CustomIcon } from "@/components/icons/CustomIcon";
import { PropsWithChildren } from "react";
import { CalComEmbed } from "./CalComEmbed";
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex flex-col gap-2 pt-24 lg:gap-4">
      <h1 className="text-4xl lg:text-5xl font-bold flex justify-center">
        Votre entreprise mérite bien plus qu’un site vitrine{" "}
      </h1>
      <p className="text-lg text-muted-foreground">
        Une application mobile{" "}
        <CustomIcon name="mobile" size={16} className="inline mb-1 mr-1" />,
        livrée en <Code>5 jours</Code>, pour créer un lien direct et durable
        avec vos clients.
      </p>
      <div className="mt-4 lg:mt-2 flex justify-center flex-wrap gap-4">
        <CalComEmbed />
      </div>
    </Section>
  );
};

export const Code = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <span className="px-1 -mx-0.5 text-foreground bg-accent/20 border border-accent inline-flex items-center rounded-md  py-1">
      {props.children}
    </span>
  );
};
