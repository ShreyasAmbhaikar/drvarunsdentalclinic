import { siteConfig } from "@/lib/site-config";

export function getLlmsText() {
  return `# ${siteConfig.name}

> ${siteConfig.tagline}

${siteConfig.description}

- **Website**: ${siteConfig.url}
- **Phone**: ${siteConfig.phone}
- **Email**: ${siteConfig.email}
- **Address**: ${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, ${siteConfig.address.addressRegion} ${siteConfig.address.postalCode}, ${siteConfig.address.addressCountry}
- **Clinic Hours**: ${siteConfig.hours}
- **Geolocation**: Latitude ${siteConfig.geo.latitude}, Longitude ${siteConfig.geo.longitude}

## All Dental Treatments & Services
${siteConfig.treatments.map((t) => `- **${t.title}** (${siteConfig.url}${t.href}): ${t.description}`).join("\n")}

## Useful Navigation Links
- **Home**: ${siteConfig.url}/
- **About the Clinic**: ${siteConfig.url}/about
- **Our Services Directory**: ${siteConfig.url}/our-services
- **Patient Testimonials**: ${siteConfig.url}/testimonials
- **Contact Info & Directions**: ${siteConfig.url}/contact-us
- **Gallery**: ${siteConfig.url}/gallery
- **Sitemap XML**: ${siteConfig.url}/sitemap.xml
`;
}

export function getLlmsFullText() {
  return `${getLlmsText()}

## About the Doctors

### Dr. Varun Tomke
- **Role**: Dental Surgeon and Implantologist
- **Experience**: 17+ Years serving Viman Nagar, Kalyani Nagar and Kharadi area
- **Highlights**: Recognized as Best Dentist in 2017 and 2022; President of the Indian Dental Association (IDA) Pune East branch.
- **Specializations**: Full mouth rehabilitation, smile makeovers, dental implants, advanced surgical care.

### Dr. Priyanka Tidke
- **Role**: Medical Cosmetologist & Facial Aesthetics Specialist
- **Experience**: 17+ Years of clinical experience
- **Highlights**: Masters in Facial Aesthetics & Micropigmentation; postgraduate in Medical Cosmetology & Trichology; advanced training in dermatology under the British Association of Dermatologists (NHS Health Education England).
- **Specializations**: Non-surgical facelifts, Botox & facial fillers, cosmetic smile designs, advanced skin & hair care.

## Frequently Asked Questions (FAQ)
${siteConfig.faqs.map((faq) => `### ${faq.question}\n${faq.answer}`).join("\n\n")}

## AI Crawler and Search Optimization Notes
This site is fully search engine optimized (SEO) and optimized for LLM agents. All treatment pages have custom structured JSON-LD schemas (\`MedicalWebPage\`, \`FAQPage\`, \`BreadcrumbList\`, \`Dentist\`), clear Heading hierarchies (single H1 per page), semantic tags, responsive optimized images in WebP format, and local keywords focused on Viman Nagar, Pune.
`;
}
