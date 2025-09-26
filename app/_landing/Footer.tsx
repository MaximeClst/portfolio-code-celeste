import { CustomIcon } from "@/components/icons/CustomIcon";
import Link from "next/link";
import { CalComEmbed } from "./CalComEmbed";
import { Section } from "./Section";

export const Footer = () => {
  return (
    <Section className="max-w-none w-full border-t-2 mt-32 flex flex-col items-center py-12 md:py-14 gap-4 border-t-accent">
      {/* Call-to-action */}
      <div className="max-w-2xl text-center mb-8">
        <h2 className="text-2xl lg:text-4xl font-bold mb-4">
          Vous avez un projet ? Parlons-en 🚀
        </h2>
        <CalComEmbed />
      </div>

      <div className="max-w-2xl">
        <div className="flex items-center justify-between  gap-4">
          <Link href="https://x.com/maxime_clst" target="_blank">
            <CustomIcon name="twitter" size={30} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/code-celeste/"
            target="_blank"
          >
            <CustomIcon name="linkedin" size={30} />
          </Link>
          <Link href="mailto:contact.maximeclst@gmail.com" target="_blank">
            <CustomIcon name="gmail" size={30} />
          </Link>
        </div>

        <p className="text-center text-muted-foreground mt-4">
          ©{new Date().getFullYear()} Code Celeste Tous droits réservés.
        </p>
      </div>
    </Section>
  );
};
