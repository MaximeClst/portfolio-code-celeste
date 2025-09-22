import { CustomIcon } from "@/components/icons/CustomIcon";
import { Button } from "@/components/ui/button";
import { PropsWithChildren } from "react";
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex flex-col gap-2 lg:gap-4">
      <h2 className="text-4xl lg:text-5xl font-bold ">Salut c'est Maxime 👋</h2>
      <p className="text-lg leading-8">
        Votre entreprise mérite plus qu’un{" "}
        <Code>
          <CustomIcon name="store" className="inline mb-1 mr-1" size={16} />{" "}
          site vitrine
        </Code>{" "}
        : je développe des
        <Code>
          <CustomIcon name="mobile" className="inline mb-1 mr-1" size={16} />{" "}
          applications mobiles
        </Code>{" "}
        qui créent un lien direct et instantané avec vos clients.
      </p>
      <Button size="lg" className="w-fit mt-6">
        Contactez-moi
      </Button>
    </Section>
  );
};

const Code = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <span className="px-1 -mx-0.5 bg-accent/20 border border-accent inline-flex items-center rounded-md  py-1">
      {props.children}
    </span>
  );
};
