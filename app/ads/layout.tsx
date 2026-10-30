import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Votre site artisan à La Réunion | Code Céleste",
  "Découvrez une page personnalisée pour votre entreprise à La Réunion et échangez avec Maxime sur votre projet de site web.",
  "/ads",
);

export default function AdsLayout({ children }: { children: ReactNode }) {
  return children;
}
