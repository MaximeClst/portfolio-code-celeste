import { Button } from "@/components/ui/button";
import { PropsWithChildren } from "react";
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex flex-col gap-2">
      <h2 className="text-4xl lg:text-5xl font-bold">
        Salut c&apos;est Maxime 👋
      </h2>
      <p className="text-lg leading-8">
        Votre entreprise mérite plus qu’un <Code>site vitrine</Code> : je
        développe des
        <Code>applications mobiles</Code> qui créent un lien direct et
        instantané avec vos clients.
      </p>
      <Button className="bg-primary text-primary-foreground">
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
