import { CustomIcon } from "@/components/icons/CustomIcon";
import { PropsWithChildren } from "react";
import { CalComEmbed } from "./CalComEmbed";
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex flex-col gap-2 lg:gap-4">
      <h1 className="text-4xl lg:text-5xl font-bold ">Salut c'est Maxime 👋</h1>
      <p className="text-lg text-muted-foreground">
        Votre entreprise mérite plus qu’un{" "}
        <Code className="whitespace-nowrap">
          <CustomIcon name="store" className="inline mb-1 mr-1" size={16} />{" "}
          site vitrine
        </Code>{" "}
        : je développe des{" "}
        <Code className="whitespace-nowrap">
          <CustomIcon name="mobile" className="inline mb-1 mr-1" size={16} />{" "}
          applications mobiles
        </Code>{" "}
        qui créent un lien direct et instantané avec vos clients.
      </p>
      <div className="mt-4 lg:mt-2 flex items-center flex-wrap gap-4">
        <CalComEmbed />
        {/* <Button size="lg" variant="ghost" className="w-fit mt-6">
          Voir mes projets
        </Button> */}
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
