import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: siteConfig.lastUpdated,
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${siteConfig.url}/gallery`,
      lastModified: siteConfig.lastUpdated,
      changeFrequency: "monthly",
      priority: 0.8
    }
  ];
}
