// import { CustomIcon } from "@/components/icons/CustomIcon";
import { PropsWithChildren } from "react";
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex flex-col gap-2">
      <p>
        Bien plus qu’un <Code>site vitrine</Code>, je développe des applications
        mobiles qui mettent vos clients à portée de main.
      </p>
    </Section>
  );
};

const Code = (props: PropsWithChildren) => {
  return (
    <span className="px-1 -mx-1 bg-gray-100 rounded-md border py-1">
      {props.children}
    </span>
  );
};
