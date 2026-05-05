import type { Metadata } from "next";
import { Clock3, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${siteConfig.name} for appointments and dental care support.`,
  alternates: {
    canonical: `${siteConfig.url}/contact-us`
  }
};

const phoneHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;
const mapEmbedUrl = `https://maps.google.com/maps?q=${siteConfig.geo.latitude},${siteConfig.geo.longitude}&z=17&output=embed`;

export default function ContactUsPage() {
  return (
    <main className="bg-surface-container-lowest px-6 pb-20 pt-[136px] md:px-14 md:pb-24">
      <section className="mx-auto max-w-[1180px]">
        <div className="mb-10 text-center">
          <p className="font-label-sm text-[13px] font-semibold uppercase tracking-[0.18em] text-primary-container">
            Visit The Clinic
          </p>
          <h1 className="mt-4 font-hero-heading text-[38px] font-extrabold leading-[1.08] text-text-dark md:text-[58px]">
            Contact Us
          </h1>
          <p className="mx-auto mt-5 max-w-[680px] font-body-main text-[16px] leading-7 text-text-muted">
            Reach {siteConfig.name} for appointments, consultations, and everyday dental care support
            in Viman Nagar.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[28px] bg-primary-container p-8 text-white shadow-[0_24px_60px_rgba(108,60,17,0.18)] md:p-10">
            <h2 className="max-w-[360px] font-section-heading text-[30px] font-extrabold leading-[1.12] md:text-[36px]">
              Find us easily.
            </h2>
            <p className="mt-4 max-w-[430px] font-body-main text-[15px] leading-7 text-white/80">
              Call, email, or visit the clinic directly with the details below.
            </p>

            <div className="mt-8 space-y-4">
              <ContactCard
                icon={<Phone className="h-5 w-5" aria-hidden="true" />}
                label="Phone"
                value={siteConfig.phone}
                href={phoneHref}
              />
              <ContactCard
                icon={<Mail className="h-5 w-5" aria-hidden="true" />}
                label="Email"
                value={siteConfig.email}
                href={`mailto:${siteConfig.email}`}
              />
              <ContactCard
                icon={<MapPin className="h-5 w-5" aria-hidden="true" />}
                label="Address"
                value={`${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, ${siteConfig.address.addressRegion} ${siteConfig.address.postalCode}`}
                href={siteConfig.businessListingUrl}
              />
              <ContactCard
                icon={<Clock3 className="h-5 w-5" aria-hidden="true" />}
                label="Clinic Hours"
                value={siteConfig.hours}
              />
            </div>

            <a
              href={siteConfig.businessListingUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-white px-6 font-label-sm text-sm font-semibold text-primary-container transition-colors hover:bg-section-light"
            >
              View Business Listing
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="rounded-[28px] bg-white p-3 shadow-soft md:p-4">
            <div className="overflow-hidden rounded-[22px] border border-slate-100 bg-section-light">
              <iframe
                title={`${siteConfig.name} location map`}
                src={mapEmbedUrl}
                className="h-[520px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-col gap-4 px-3 pb-2 pt-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-card-title text-[18px] font-bold text-text-dark">
                    Clinic Location
                  </p>
                  <p className="mt-2 max-w-[560px] font-body-main text-[14px] leading-6 text-text-muted">
                    Shop no 3, Ideal Landmark, Besides PNG Jewellers, Viman Nagar, Pune,
                    Maharashtra 411014
                  </p>
                </div>
                <a
                  href={siteConfig.businessListingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-[48px] items-center justify-center gap-2 self-start rounded-full bg-primary-container px-5 font-label-sm text-sm font-semibold text-white transition-colors hover:bg-primary-dark sm:self-auto"
                >
                  Open in Google Maps
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-[22px] border border-white/10 bg-white/8 px-5 py-4 backdrop-blur-sm transition-colors hover:bg-white/12">
      <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/12 text-white">
        {icon}
      </span>
      <span className="block">
        <span className="block font-label-sm text-[12px] font-semibold uppercase tracking-[0.18em] text-white/65">
          {label}
        </span>
        <span className="mt-2 block font-body-main text-[16px] leading-7 text-white">
          {value}
        </span>
      </span>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      {content}
    </a>
  );
}
