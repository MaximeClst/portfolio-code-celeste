import type { MetadataRoute } from "next";
import { SiteConfig } from "@/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  // Only editorial pages: the campaign funnel and booking confirmation are omitted.
  // Omit lastModified until a reliable per-page content date is available.
  return [
    "",
    "/works",
    "/works/smart-power-system",
    "/works/velorun-festival",
    "/works/budget-copain",
    "/mentions-legales",
  ].map((path) => ({ url: `${SiteConfig.prodUrl}${path}` }));
}
