import { Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/images/home-dental-clinic-hero-viman-nagar-mobile.webp"
        media="(max-width: 640px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href={siteConfig.images.heroCheckup}
        media="(min-width: 641px)"
        fetchPriority="high"
      />
      <section className="relative overflow-hidden bg-white px-6 pb-12 pt-8 md:px-10 lg:px-14 lg:pb-14 lg:pt-10">
      <div className="mx-auto grid max-w-[1180px] items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(280px,38vw)] lg:grid-cols-[minmax(0,1fr)_minmax(0,410px)] lg:gap-7 xl:grid-cols-[minmax(0,1fr)_minmax(0,430px)] xl:gap-8">
        {/* Left Content */}
        <div className="relative z-20 flex max-w-[590px] flex-col">
          <h1 className="font-hero-heading text-[36px] font-extrabold leading-[1.08] text-text-dark sm:text-[44px] md:text-[42px] lg:text-[50px]">
            <span className="block">
              Best Dental Clinic{" "}
              <Sparkles
                className="mb-1 inline-block h-8 w-8 fill-current text-cyan-soft"
                aria-hidden="true"
              />
            </span>
            <span className="block">
              in Viman Nagar, Pune
            </span>
          </h1>

          <p className="mt-6 max-w-[520px] font-body-main text-[15px] leading-7 text-text-muted md:max-w-[44ch] lg:max-w-[520px] lg:text-[16px]">
            Visit Dr. Varun Tomke, an experienced dental surgeon and
            implantologist, for gentle root canal treatment, dental implants,
            smile makeovers, dental veneers, dental aligners and family dental care near Viman Nagar, Wadgaon Sheri, Kalyani Nagar and Kharadi area.
          </p>

          <div className="mt-7 hidden flex-col gap-3 sm:flex-row md:flex">
            <a
              href="#services"
              className="inline-flex h-[46px] items-center justify-center rounded-[14px] bg-primary-container px-8 font-label-sm text-sm font-semibold text-white shadow-[0_14px_28px_rgba(184,95,13,0.22)] transition-colors duration-200 hover:bg-primary-dark"
            >
              View Services
            </a>

            <a
              href="tel:+919822952573"
              className="inline-flex h-[46px] items-center justify-center rounded-[14px] border-2 border-primary-container px-8 font-label-sm text-sm font-semibold text-primary-container transition-colors duration-200 hover:bg-primary-container/8"
            >
              Schedule a Call
            </a>
          </div>
        </div>

        {/* Image Story */}
        <div className="order-2 relative flex min-h-[320px] items-center justify-center sm:min-h-[390px] md:min-h-[360px] md:justify-end lg:min-h-0 lg:order-none">
          <div className="relative mx-auto w-[78%] max-w-[340px] sm:w-[68%] sm:max-w-[360px] md:mx-0 md:w-full md:max-w-[360px] lg:max-w-[400px]">
            <div
              className="absolute -left-4 -top-4 hidden h-full w-full rounded-[30px] bg-[rgba(255,243,228,0.92)] shadow-[0_42px_110px_rgba(184,95,13,0.08)] blur-[2px] md:block"
              aria-hidden="true"
            />

            <div className="relative aspect-[10/11] overflow-hidden rounded-[30px] border border-primary-container/28 bg-surface-container-low shadow-[0_30px_70px_rgba(108,60,17,0.13)] md:aspect-[9/11] lg:aspect-[10/11]">
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="/images/home-dental-clinic-hero-viman-nagar-mobile.webp"
                />
                <img
                  src={siteConfig.images.heroCheckup}
                  alt="Dentist explaining dental care to a patient in a modern clinic"
                  className="absolute inset-0 h-full w-full object-cover object-[48%_50%]"
                  fetchPriority="high"
                  loading="eager"
                  width={600}
                  height={900}
                />
              </picture>
            </div>

            {/* Trust Badge */}
            <div className="absolute bottom-0 right-0 z-30 flex h-[74px] w-[74px] translate-x-[24%] translate-y-[24%] items-center justify-center rounded-full bg-[linear-gradient(145deg,#c96a12_0%,#9d4e08_100%)] text-white shadow-[0_18px_38px_rgba(157,78,8,0.28)] ring-[3px] ring-white sm:h-[82px] sm:w-[82px] md:translate-x-[20%] md:translate-y-[20%] lg:h-[88px] lg:w-[88px] lg:translate-x-[32%] lg:translate-y-[28%]">
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
                    Dr Varun&apos;s Dental Clinic - 17+ Years Care -
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

        <div className="order-3 flex flex-col gap-3 sm:flex-row md:hidden">
          <a
            href="#services"
            className="inline-flex h-[46px] items-center justify-center rounded-[14px] bg-primary-container px-8 font-label-sm text-sm font-semibold text-white shadow-[0_14px_28px_rgba(184,95,13,0.22)] transition-colors duration-200 hover:bg-primary-dark"
          >
            View Services
          </a>

          <a
            href="tel:+919822952573"
            className="inline-flex h-[46px] items-center justify-center rounded-[14px] border-2 border-primary-container px-8 font-label-sm text-sm font-semibold text-primary-container transition-colors duration-200 hover:bg-primary-container/8"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  </>
  );
}
