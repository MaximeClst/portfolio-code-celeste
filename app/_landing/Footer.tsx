"use client";

import { CustomIcon } from "@/components/icons/CustomIcon";
import Link from "next/link";
import { CalEmbed } from "./CalComEmbed";
import { Section } from "./Section";

export const Footer = () => {
  return (
    <Section className="max-w-none w-full border-t-2 mt-32 flex flex-col items-center py-0 md:py-0 gap-0 border-t-accent px-0">
      <div className="w-full max-w-[1400px] mx-auto text-center mt-4 mb-1 px-6 pt-2">
        <h2 className="text-2xl lg:text-4xl font-bold mb-4 mt-5">
          Vous avez un projet ? Parlons-en 🚀
        </h2>
        <div className="w-full min-h-[44vh] md:min-h-[56vh] lg:min-h-[60vh] px-0 mt-0">
          <CalEmbed />
        </div>
      </div>

      <div className="max-w-2xl pb-1 mt-1">
        <h3 className="text-lg font-medium mb-2">
          Nous suivre sur les réseaux sociaux :{" "}
        </h3>
        <div className="flex items-center justify-between gap-2">
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

        <div className="flex items-center justify-center gap-3 text-center text-muted-foreground mt-4">
          <span>
            ©{new Date().getFullYear()} Code Celeste — Tous droits réservés.
          </span>
          <span aria-hidden>•</span>
          <Link
            href="/mentions-legales"
            className="underline underline-offset-2"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </Section>
  );
};
