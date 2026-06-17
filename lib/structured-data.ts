import { siteConfig } from "@/lib/site-config";

const absoluteUrl = (path: string) => {
  const formattedPath =
    path.endsWith("/") || path.includes(".") || path.includes("#")
      ? path
      : `${path}/`;
  return new URL(formattedPath, siteConfig.url).toString();
};

export function getStructuredData() {
  const sameAs = Object.values(siteConfig.socialLinks).filter((link) => {
    if (!link) return false;
    const lowercase = link.toLowerCase().trim();
    return !(
      lowercase === "https://www.facebook.com/" ||
      lowercase === "https://facebook.com/" ||
      lowercase === "https://x.com/" ||
      lowercase === "https://www.instagram.com/" ||
      lowercase === "https://instagram.com/" ||
      lowercase === "https://www.linkedin.com/" ||
      lowercase === "https://linkedin.com/"
    );
  });

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${siteConfig.url}/#dentist`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: [
      absoluteUrl(siteConfig.images.heroCheckup),
      absoluteUrl(siteConfig.images.confidentSmile),
      absoluteUrl(siteConfig.images.faqTreatment)
    ],
    logo: absoluteUrl(siteConfig.images.logo),
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: siteConfig.priceRange,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude
    },
    openingHoursSpecification: siteConfig.openingHoursSpecification.map(
      (item) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: item.dayOfWeek,
        opens: item.opens,
        closes: item.closes
      })
    ),
    areaServed: {
      "@type": "City",
      name: siteConfig.areaServed
    },
    medicalSpecialty: "Dentistry",
    sameAs,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental services",
      itemListElement: siteConfig.treatments.map((treatment) => ({
        "@type": "Offer",
        url: absoluteUrl(treatment.href),
        itemOffered: {
          "@type": "Service",
          name: treatment.title,
          description: treatment.description,
          url: absoluteUrl(treatment.href),
          provider: {
            "@id": `${siteConfig.url}/#dentist`
          }
        }
      }))
    }
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.images.logo),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      areaServed: siteConfig.address.addressCountry,
      availableLanguage: ["English", "Hindi"]
    },
    sameAs
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: {
      "@id": `${siteConfig.url}/#organization`
    },
    inLanguage: siteConfig.language
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteConfig.url}/dental-clinic-viman-nagar/`
      }
    ]
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return [localBusiness, organization, website, breadcrumb, faqPage];
}
