import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

const adsMetadata = pageMetadata(
  "Votre site artisan à La Réunion | Code Céleste",
  "Découvrez une page personnalisée pour votre entreprise à La Réunion et échangez avec Maxime sur votre projet de site web.",
  "/ads",
);

export const metadata: Metadata = {
  ...adsMetadata,
  openGraph: {
    ...adsMetadata.openGraph,
    images: [{
      url: "/social/code-celeste-logo-v2.png",
      width: 512,
      height: 512,
      type: "image/png",
      alt: "Logo Code Céleste",
    }],
  },
  twitter: {
    ...adsMetadata.twitter,
    card: "summary",
    images: [{ url: "/social/code-celeste-logo-v2.png", alt: "Logo Code Céleste" }],
  },
};

export default function AdsLayout({ children }: { children: ReactNode }) {
  return children;
}
