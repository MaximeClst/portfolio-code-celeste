import type { Metadata } from "next";
import { SiteConfig } from "@/site.config";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: SiteConfig.title,
      title,
      description,
      url: path,
    },
    twitter: { card: "summary", title, description },
  };
}
