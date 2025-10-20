"use client";

import { CustomIcon } from "@/components/icons/CustomIcon";
import Link from "next/link";
import { CalEmbed } from "./CalComEmbed";
import { Section } from "./Section";

export const Footer = () => {
  return (
    <Section className="max-w-none w-full border-t-2 mt-32 flex flex-col items-center py-0 md:py-0 gap-0 border-t-accent px-0">
      <div className="w-full max-w-[1400px] mx-auto text-center mb-2 px-8 pt-6">
        <h2 className="text-2xl lg:text-4xl font-bold mb-6 pt-6">
          Vous avez un projet ? Parlons-en 🚀
        </h2>
        <div className="w-full min-h-[48vh] md:min-h-[64vh] lg:min-h-[66vh] px-0 mt-1">
          <CalEmbed />
        </div>
      </div>

      <div className="max-w-2xl pb-2 mb-0.5">
        <div className="flex items-center justify-between  gap-4">
          <Link href="https://x.com/maxime_clst" target="_blank">
            <CustomIcon name="twitter" size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/code-celeste/"
            target="_blank"
          >
            <CustomIcon name="linkedin" size={24} />
          </Link>
          <Link href="mailto:contact.maximeclst@gmail.com" target="_blank">
            <CustomIcon name="gmail" size={24} />
          </Link>
        </div>

        <p className="text-center text-muted-foreground mt-4">
          ©{new Date().getFullYear()} Code Celeste Tous droits réservés.
        </p>
      </div>
    </Section>
  );
};
