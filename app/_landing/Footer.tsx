import { CustomIcon } from "@/components/icons/CustomIcon";
import Link from "next/link";
import { Section } from "./Section";

export const Footer = () => {
  return (
    <Section className="max-w-none w-full border-t mt-32 flex flex-col items-center py-12 md:py-14 gap-4 border-t-accent">
      <div className="max-w-2xl">
        <div className="flex items-center justify-between  gap-4">
          <Link href="https://x.com/maxime_clst" target="_blank">
            <CustomIcon name="twitter" size={40} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/celeste-maxime-581352235/"
            target="_blank"
          >
            <CustomIcon name="linkedin" size={40} />
          </Link>
          <Link href="mailto:contact.maximeclst@gmail.com" target="_blank">
            <CustomIcon name="gmail" size={40} />
          </Link>
        </div>
        <p className="text-center text-muted-foreground mt-8">
          ©{new Date().getFullYear()} Code Celeste. Tous droits réservés.
        </p>
      </div>
    </Section>
  );
};
