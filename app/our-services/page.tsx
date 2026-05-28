import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, categorizedTreatments } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Our Treatments",
  description: `Explore treatment pages at ${siteConfig.name}.`,
  alternates: {
    canonical: `${siteConfig.url}/our-services`
  }
};

export default function OurServicesPage() {
  return (
    <main id="main-content" className="bg-surface-container-lowest px-6 pb-20 pt-[136px] md:px-14 md:pb-24">
      <section className="mx-auto max-w-[1180px] rounded-[28px] bg-white p-8 shadow-soft md:p-12">
        <h1 className="mt-4 font-hero-heading text-[38px] font-extrabold leading-[1.08] text-text-dark md:text-[58px]">
          Our Treatments
        </h1>
        <p className="mt-5 max-w-[720px] font-body-main text-[16px] leading-7 text-text-muted">
          Explore the clinic&apos;s key treatment pages categorized for easy navigation. We offer advanced dental services including tooth-saving care, missing teeth replacements, aesthetic smile enhancements, and minor oral surgeries in Viman Nagar.
        </p>

        <div className="mt-12 space-y-12">
          {categorizedTreatments.map((category) => (
            <section key={category.name} className="border-t border-slate-100 pt-10 first:border-t-0 first:pt-0">
              <h2 className="font-section-heading text-[24px] font-extrabold text-primary-container md:text-[28px] mb-6">
                {category.name}
              </h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {category.items.map((item) => {
                  const treatmentInfo = siteConfig.treatments.find((t) => t.href === item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex flex-col justify-between rounded-[22px] border border-primary-container/10 bg-section-light p-6 transition-colors hover:bg-[#fff0da]"
                    >
                      <div>
                        <h3 className="font-card-title text-[18px] font-bold text-text-dark md:text-[20px]">
                          {item.title}
                        </h3>
                        <p className="mt-3 max-w-[48ch] font-body-main text-[14px] leading-6 text-text-muted md:text-[15px] md:leading-7">
                          {treatmentInfo?.description}
                        </p>
                      </div>
                      <span className="mt-6 self-start inline-flex rounded-full bg-white px-4 py-2 font-label-sm text-[12px] font-bold text-primary-container shadow-soft uppercase tracking-wider">
                        View treatment
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
