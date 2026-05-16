import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Our Treatments",
  description: `Explore treatment pages at ${siteConfig.name}.`,
  alternates: {
    canonical: `${siteConfig.url}/our-services`
  }
};

export default function OurServicesPage() {
  return (
    <main className="bg-surface-container-lowest px-6 pb-20 pt-[136px] md:px-14 md:pb-24">
      <section className="mx-auto max-w-[1180px] rounded-[28px] bg-white p-8 shadow-soft md:p-12">
        <p className="font-label-sm text-[13px] font-semibold uppercase tracking-[0.18em] text-primary-container">
          Our Treatments
        </p>
        <h1 className="mt-4 font-hero-heading text-[38px] font-extrabold leading-[1.08] text-text-dark md:text-[58px]">
          Our Treatments
        </h1>
        <p className="mt-5 max-w-[720px] font-body-main text-[16px] leading-7 text-text-muted">
          Explore the clinic&apos;s key treatment pages for tooth-saving care, missing tooth
          replacement, preventive cleaning, cosmetic smile care, braces, clear aligners,
          wisdom tooth removal, and cavity filling in Viman Nagar.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {siteConfig.treatments.map((treatment) => (
            <Link
              key={treatment.href}
              href={treatment.href}
              className="rounded-[22px] border border-primary-container/10 bg-section-light p-6 transition-colors hover:bg-[#fff0da]"
            >
              <h2 className="font-card-title text-[22px] font-bold text-text-dark">
                {treatment.title}
              </h2>
              <p className="mt-3 max-w-[48ch] font-body-main text-[15px] leading-7 text-text-muted">
                {treatment.description}
              </p>
              <span className="mt-5 inline-flex rounded-full bg-white px-4 py-2 font-label-sm text-[13px] font-semibold text-primary-container shadow-soft">
                View treatment
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
