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
    },
    {
      url: `${siteConfig.url}/root-canal-treatment-in-viman-nagar`,
      lastModified: siteConfig.lastUpdated,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${siteConfig.url}/dental-implant-in-viman-nagar`,
      lastModified: siteConfig.lastUpdated,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${siteConfig.url}/teeth-cleaning-in-viman-nagar`,
      lastModified: siteConfig.lastUpdated,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${siteConfig.url}/teeth-whitening-in-viman-nagar`,
      lastModified: siteConfig.lastUpdated,
      changeFrequency: "monthly",
      priority: 0.9
    }
  ];
}
