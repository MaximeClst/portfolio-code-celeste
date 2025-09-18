import { CustomIcon } from "@/components/icons/CustomIcon";
import { Button } from "@/components/ui/button";
import { PropsWithChildren } from "react";
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex flex-col gap-2">
      <p className="text-lg leading-9">
        Bien plus qu’un{" "}
        <Code>
          <CustomIcon className="inline mb-0.5 mr-0.5" name="store" size={16} />{" "}
          site vitrine
        </Code>
        , je développe des{" "}
        <Code className="whitespace-nowrap">
          <CustomIcon
            className="inline mb-0.5 mr-0.5"
            name="mobile"
            size={16}
          />{" "}
          applications mobiles
        </Code>{" "}
        qui mettent vos clients à portée de main.
      </p>
      <Button className="bg-accent text-accent-foreground">
        Contactez-moi
      </Button>
    </Section>
  );
};

const Code = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <span className="px-1 -mx-0.5 bg-accent/20 border inline-flex items-center rounded-md  py-1">
      {props.children}
    </span>
  );
};
