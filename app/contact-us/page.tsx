import type { Metadata } from "next";
import {
  Clock4,
  ExternalLink,
  MailOpen,
  MapPinned,
  PhoneCall,
  Route
} from "lucide-react";
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

        <div className="grid items-stretch gap-7 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex h-full flex-col rounded-[26px] bg-primary-container p-6 text-white shadow-[0_24px_60px_rgba(108,60,17,0.18)] md:p-7">
            <h2 className="max-w-[360px] font-section-heading text-[30px] font-extrabold leading-[1.12] md:text-[36px]">
              Find us easily.
            </h2>
            <p className="mt-3 max-w-[430px] font-body-main text-[15px] leading-7 text-white/82">
              Call, email, or visit the clinic directly with the details below.
            </p>

            <div className="mt-6 grid flex-1 auto-rows-fr gap-3 sm:grid-cols-2">
              <ContactCard
                icon={<PhoneCall className="h-5 w-5" aria-hidden="true" />}
                label="Call the clinic"
                value={siteConfig.phone}
                href={phoneHref}
              />
              <ContactCard
                icon={<MailOpen className="h-5 w-5" aria-hidden="true" />}
                label="Email us"
                value={siteConfig.email}
                href={`mailto:${siteConfig.email}`}
              />
              <ContactCard
                icon={<MapPinned className="h-5 w-5" aria-hidden="true" />}
                label="Visit us"
                value={`${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}`}
                href={siteConfig.businessListingUrl}
              />
              <ContactCard
                icon={<Clock4 className="h-5 w-5" aria-hidden="true" />}
                label="Clinic hours"
                value={siteConfig.hours}
              />
            </div>
          </div>

          <div className="flex h-full flex-col rounded-[26px] bg-white p-3 shadow-soft md:p-4">
            <div className="overflow-hidden rounded-[20px] border border-slate-100 bg-section-light">
              <iframe
                title={`${siteConfig.name} location map`}
                src={mapEmbedUrl}
                className="h-[320px] w-full border-0 md:h-[350px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-1 px-3 pb-2 pt-5">
              <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
                <div className="min-w-0">
                  <p className="font-card-title text-[17px] font-bold text-text-dark">
                    Clinic Location
                  </p>
                  <p className="mt-2 max-w-[440px] font-body-main text-[14px] leading-6 text-text-muted">
                    Shop no 3, Ideal Landmark, Besides PNG Jewellers, Viman Nagar, Pune,
                    Maharashtra 411014
                  </p>
                </div>
                <a
                  href={siteConfig.businessListingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[46px] w-fit items-center justify-center gap-2.5 rounded-full bg-primary-container px-5 py-2.5 font-label-sm text-[13px] font-semibold leading-5 text-white shadow-[0_12px_24px_rgba(157,78,8,0.18)] transition-colors hover:bg-primary-dark"
                >
                  <span className="whitespace-nowrap">Open in Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
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
  const isMapLink = href?.startsWith("http");

  const content = (
    <div className="h-full rounded-[18px] border border-white/70 bg-white/[0.07] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors group-hover:bg-white/[0.11]">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary-container shadow-[0_8px_20px_rgba(37,20,6,0.14)]">
        {isMapLink ? <Route className="h-5 w-5" aria-hidden="true" /> : icon}
      </span>
      <span className="mt-4 block font-card-title text-[17px] font-bold leading-6 text-white">
        {label}
      </span>
      <span className="mt-2 block break-words font-body-main text-[13px] leading-5 text-white/88">
        {value}
      </span>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group block h-full"
    >
      {content}
    </a>
  );
}
