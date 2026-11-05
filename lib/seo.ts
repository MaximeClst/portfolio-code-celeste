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
      images: [{
        url: "/social/code-celeste-logo-v2.png",
        width: 512,
        height: 512,
        type: "image/png",
        alt: "Logo Code Céleste",
      }],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [{ url: "/social/code-celeste-logo-v2.png", alt: "Logo Code Céleste" }],
    },
  };
}
