"use client";

import { CustomIcon } from "@/components/icons/CustomIcon";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Mail,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

const steps: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: <Mail className="size-5" />,
    title: "Email de confirmation",
    desc: "Vous recevez à l'instant un email avec les détails et le lien de l'appel. Pensez à vérifier vos spams.",
  },
  {
    icon: <CalendarCheck className="size-5" />,
    title: "Ajoutez-le à votre agenda",
    desc: "Bloquez le créneau dans votre calendrier pour ne rien oublier.",
  },
  {
    icon: <MessageSquare className="size-5" />,
    title: "Préparez votre projet",
    desc: "Notez vos objectifs et vos exemples préférés : l'appel n'en sera que plus utile.",
  },
];

export function ConfirmationView() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-background px-6 py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--brand)/0.18),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#13092c]/50 to-transparent"
      />

      <div className="relative flex w-full max-w-2xl flex-col items-center text-center">
        <Link
          href="/"
          aria-label="Code Celeste — Accueil"
          className="mb-12 opacity-90 transition-opacity hover:opacity-100"
        >
          <CustomIcon name="codeceleste" size={140} />
        </Link>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex size-20 items-center justify-center rounded-full bg-brand/10 ring-1 ring-brand/30"
        >
          <CheckCircle2 className="size-10 text-brand" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="mt-8 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
        >
          Votre appel est <span className="text-brand italic">réservé</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="mt-4 max-w-md text-base text-muted-foreground"
        >
          Merci ! Votre demande est bien enregistrée. Maxime vous contactera au
          créneau choisi pour votre appel découverte gratuit.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          className="mt-12 grid w-full gap-3 text-left sm:grid-cols-3"
        >
          {steps.map((s) => (
            <li
              key={s.title}
              className="rounded-xl border border-border/60 bg-white/[0.02] p-5"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                {s.icon}
              </span>
              <h2 className="mt-4 text-sm font-semibold">{s.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="mt-12"
        >
          <Button asChild size="lg" className="h-12 text-base">
            <Link href="/">
              Retour à l&apos;accueil
              <ArrowRight className="ml-1 size-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
