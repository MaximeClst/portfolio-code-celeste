import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export type SectionProps = PropsWithChildren<{
  className?: string;
}>;

export const Section = (props: SectionProps) => {
  return (
    <section
      className={cn("py-8 max-w-2xl m-auto lg:px-6 px-4", props.className)}
    >
      {props.children}
    </section>
  );
};
