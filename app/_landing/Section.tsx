import { PropsWithChildren } from "react";

export type SectionProps = PropsWithChildren;

export const Section = (props: SectionProps) => {
  return (
    <section className="py-8 max-w-2xl m-auto lg:px-4 px-2">
      {props.children}
    </section>
  );
};
