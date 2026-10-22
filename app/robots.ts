import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const allowedAiAndSearchAgents = [
    "Googlebot",
    "Googlebot-Image",
    "Bingbot",
    "Applebot",
    "OAI-SearchBot",
    "GPTBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-SearchBot",
    "Claude-User",
    "Google-Extended",
    "PerplexityBot",
    "Perplexity-User",
    "CCBot"
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/static/media/"]
      },
      {
        userAgent: allowedAiAndSearchAgents,
        allow: "/",
        disallow: ["/_next/static/media/"]
      }
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`
  };
}
