import Image from "next/image";
import { Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-20 pt-14 md:px-14 lg:pb-24 lg:pt-16">
      <div className="mx-auto grid max-w-[1180px] items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,418px)] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,430px)] xl:gap-10">
        {/* Left Content */}
        <div className="relative z-20 max-w-[590px]">
          <h1 className="font-hero-heading text-[38px] font-extrabold leading-[1.08] text-text-dark sm:text-[48px] lg:text-[54px]">
            <span className="block">
              Best Dental Clinic{" "}
              <Sparkles
                className="mb-2 inline-block h-9 w-9 fill-current text-cyan-soft"
                aria-hidden="true"
              />
            </span>
            <span className="block">
              in Viman Nagar, Pune
            </span>
          </h1>

          <p className="mt-7 max-w-[520px] font-body-main text-[15px] leading-8 text-text-muted">
            Visit Dr. Varun Tomke, an experienced dental surgeon and
            implantologist, for gentle root canal treatment, dental implants,
            smile makeovers, and family dental care in Viman Nagar and Wagholi.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="inline-flex h-[48px] items-center justify-center rounded-[14px] bg-primary-container px-8 font-label-sm text-sm font-semibold text-white shadow-[0_14px_28px_rgba(184,95,13,0.22)] transition-colors duration-200 hover:bg-primary-dark"
            >
              View Services
            </a>

            <a
              href="tel:+919822952573"
              className="inline-flex h-[48px] items-center justify-center rounded-[14px] border-2 border-primary-container px-8 font-label-sm text-sm font-semibold text-primary-container transition-colors duration-200 hover:bg-primary-container/8"
            >
              Schedule a Call
            </a>
          </div>
        </div>

        {/* Image Story */}
        <div className="relative flex min-h-[400px] items-center justify-center sm:min-h-[470px] lg:min-h-0 lg:justify-end">
          <div className="relative mx-auto w-[77%] max-w-[350px] sm:w-[71%] sm:max-w-[380px] lg:mx-0 lg:w-full lg:max-w-[418px]">
            <div
              className="absolute -left-5 -top-5 hidden h-full w-full rounded-[30px] bg-[rgba(255,243,228,0.92)] shadow-[0_42px_110px_rgba(184,95,13,0.08)] blur-[2px] lg:block"
              aria-hidden="true"
            />

            <div className="relative aspect-[10/11] overflow-hidden rounded-[30px] border border-primary-container/28 bg-surface-container-low shadow-[0_30px_70px_rgba(108,60,17,0.13)]">
              <Image
                src={siteConfig.images.heroCheckup}
                alt="Dental team caring for a patient in a modern clinic"
                fill
                sizes="(min-width: 1024px) 402px, (min-width: 640px) 380px, 77vw"
                className="object-cover object-[64%_50%]"
                priority
              />
            </div>

            {/* Trust Badge */}
            <div className="absolute bottom-0 right-0 z-30 flex h-[84px] w-[84px] translate-x-[38%] translate-y-[34%] items-center justify-center rounded-full bg-[linear-gradient(145deg,#c96a12_0%,#9d4e08_100%)] text-white shadow-[0_18px_38px_rgba(157,78,8,0.28)] ring-[3px] ring-white sm:h-[88px] sm:w-[88px] lg:h-[92px] lg:w-[92px]">
              <svg
                className="rotating-badge absolute h-full w-full"
                viewBox="0 0 120 120"
                aria-hidden="true"
              >
                <path
                  id="heroTrustBadgePath"
                  d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                  fill="none"
                />
                <text
                  className="fill-white font-label-sm text-[7px] font-black uppercase tracking-[0.08em]"
                  textLength="276"
                  lengthAdjust="spacing"
                >
                  <textPath href="#heroTrustBadgePath" startOffset="0%">
                    Dr Varun Clinic - 17+ Years Care -
                  </textPath>
                </text>
              </svg>

              <span className="flex h-[40px] w-[40px] items-center justify-center sm:h-[44px] sm:w-[44px]">
                <svg
                  className="h-7 w-7 text-white sm:h-8 sm:w-8"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M24 8.5c2.5-2.2 6.7-2.8 10-.8 4.2 2.6 5.4 8 3.1 13.2-.9 2-1.5 4.5-1.8 7.1-.8 7.7-3 11.5-6 11.5-2.1 0-2.7-2.5-3.4-6.1-.5-2.5-1-4.9-1.9-4.9s-1.4 2.4-1.9 4.9c-.7 3.6-1.3 6.1-3.4 6.1-3 0-5.2-3.8-6-11.5-.3-2.6-.9-5.1-1.8-7.1C8.6 15.7 9.8 10.3 14 7.7c3.3-2 7.5-1.4 10 .8Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
