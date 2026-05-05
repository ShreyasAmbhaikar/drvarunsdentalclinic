import { siteConfig } from "@/lib/site-config";

export function getLlmsText() {
  return `# ${siteConfig.name}

> ${siteConfig.tagline}

${siteConfig.description}

Website: ${siteConfig.url}
Phone: ${siteConfig.phone}
Email: ${siteConfig.email}
Address: ${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, ${siteConfig.address.addressRegion} ${siteConfig.address.postalCode}, ${siteConfig.address.addressCountry}
Hours: ${siteConfig.hours}

## Main Services
${siteConfig.services.map((service) => `- ${service.title}: ${service.description}`).join("\n")}

## Useful Pages
- Home: ${siteConfig.url}
- Sitemap: ${siteConfig.url}/sitemap.xml
- Robots: ${siteConfig.url}/robots.txt
`;
}

export function getLlmsFullText() {
  return `${getLlmsText()}
## About
Dr Varun Dental Clinic offers patient-friendly dental care with a modern clinical experience, clear treatment explanations, and support for preventive, cosmetic, restorative, and emergency dental needs.

## FAQ
${siteConfig.faqs.map((faq) => `### ${faq.question}\n${faq.answer}`).join("\n\n")}

## AI Crawler Notes
This static website is designed to expose crawlable HTML, metadata, structured data, sitemap, robots.txt, and AI summary files so answer engines can understand the clinic, services, location, and contact options.
`;
}
