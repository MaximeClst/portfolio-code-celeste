import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export type SectionProps = PropsWithChildren<{
  className?: string;
  id?: string;
}>;

export const Section = (props: SectionProps) => {
  return (
    <section
      className={cn(
        "md:my-20 lg:my-32 max-w-3xl m-auto lg:px-12 px-4",
        props.className,
        "my-16"
      )}
      id={props.id}
    >
      {props.children}
    </section>
  );
};
