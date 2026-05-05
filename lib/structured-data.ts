import { siteConfig } from "@/lib/site-config";

const absoluteUrl = (path: string) => new URL(path, siteConfig.url).toString();

export function getStructuredData() {
  const sameAs = Object.values(siteConfig.socialLinks).filter(Boolean);

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
      itemListElement: siteConfig.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
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
        item: siteConfig.url
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
