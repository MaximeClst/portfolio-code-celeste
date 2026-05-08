import { Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 mt-12">
      <div className="mx-auto max-w-6xl px-4 lg:px-12 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-base font-semibold tracking-tight">
            Code Celeste
          </span>
          <span className="text-xs text-muted-foreground">
            · La Réunion 🇷🇪
          </span>
        </div>

        <nav aria-label="Réseaux sociaux" className="flex items-center gap-2">
          <SocialLink
            href="https://x.com/maxime_clst"
            label="X (Twitter)"
            icon={<Twitter className="size-4" />}
          />
          <SocialLink
            href="https://www.linkedin.com/in/code-celeste/"
            label="LinkedIn"
            icon={<Linkedin className="size-4" />}
          />
          <SocialLink
            href="mailto:maxime@code-celeste.com"
            label="Email"
            icon={<Mail className="size-4" />}
          />
        </nav>

        <div className="flex flex-col sm:items-end gap-1 text-xs text-muted-foreground">
          <span>© {year} Code Celeste — Tous droits réservés.</span>
          <Link
            href="/mentions-legales"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) => (
  <Link
    href={href}
    target="_blank"
    aria-label={label}
    className="inline-flex size-9 items-center justify-center rounded-md border border-border/80 text-muted-foreground hover:text-foreground hover:border-brand/50 transition-colors"
  >
    {icon}
  </Link>
);
