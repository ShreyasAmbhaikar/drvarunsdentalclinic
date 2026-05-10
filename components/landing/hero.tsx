// import Image from "next/image";
// import { Sparkles } from "lucide-react";
// import { siteConfig } from "@/lib/site-config";

// const largeHeroMask =
//   "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 760 620'%3E%3Cpath fill='white' d='M252 0H690C729 0 760 31 760 70V440C760 489 721 528 672 528H654C631 528 612 547 612 570V574C612 599 591 620 566 620H96C61 620 32 591 32 556V308C32 272 61 243 97 243H122C153 243 178 218 178 187V176C178 145 203 120 234 120H256C291 120 319 92 319 57V56C319 25 291 0 252 0Z'/%3E%3C/svg%3E\")";

// const smallHeroMask =
//   "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 390 310'%3E%3Cpath fill='white' d='M78 0H360C377 0 390 13 390 30V280C390 297 377 310 360 310H38C17 310 0 293 0 272V124C0 102 18 84 40 84H49C75 84 96 63 96 37V25C96 11 107 0 121 0H78Z'/%3E%3C/svg%3E\")";

// export function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-white px-6 pb-20 pt-14 md:px-14 lg:pb-24 lg:pt-16">
//       <div className="relative mx-auto min-h-[720px] max-w-[1180px] lg:min-h-[650px]">
//         {/* Left Content */}
//         <div className="relative z-30 max-w-[640px] lg:max-w-[650px]">
//           <h1 className="font-hero-heading text-[40px] font-extrabold leading-[1.08] text-text-dark sm:text-[50px] lg:text-[56px]">
//             <span className="block sm:whitespace-nowrap">
//               Best Dental Clinic{" "}
//               <Sparkles
//                 className="mb-2 inline-block h-9 w-9 fill-current text-cyan-soft"
//                 aria-hidden="true"
//               />
//             </span>
//             <span className="block sm:whitespace-nowrap">
//               in Viman Nagar, Pune
//             </span>
//           </h1>

//           <p className="mt-7 max-w-[520px] font-body-main text-[15px] leading-8 text-text-muted">
//             Visit Dr. Varun Tomke, an experienced dental surgeon and
//             implantologist, for gentle root canal treatment, dental implants,
//             smile makeovers, and family dental care in Viman Nagar and Wagholi.
//           </p>

//           <div className="mt-8 flex flex-col gap-4 sm:flex-row">
//             <a
//               href="#services"
//               className="inline-flex h-[48px] items-center justify-center rounded-[14px] bg-primary-container px-8 font-label-sm text-sm font-semibold text-white shadow-[0_14px_28px_rgba(184,95,13,0.22)] transition-colors duration-200 hover:bg-primary-dark"
//             >
//               View Services
//             </a>

//             <a
//               href="tel:+919822952573"
//               className="inline-flex h-[48px] items-center justify-center rounded-[14px] border-2 border-primary-container px-8 font-label-sm text-sm font-semibold text-primary-container transition-colors duration-200 hover:bg-primary-container/8"
//             >
//               Schedule a Call
//             </a>
//           </div>
//         </div>

//         {/* Small Left Image */}
//         <div className="relative z-20 mt-14 h-[310px] w-full max-w-[390px] drop-shadow-[0_24px_46px_rgba(108,60,17,0.10)] lg:absolute lg:bottom-4 lg:left-0 lg:mt-0">
//           <div
//             className="relative h-full w-full overflow-hidden bg-surface-container-low"
//             style={{
//               WebkitMaskImage: smallHeroMask,
//               maskImage: smallHeroMask,
//               WebkitMaskRepeat: "no-repeat",
//               maskRepeat: "no-repeat",
//               WebkitMaskSize: "100% 100%",
//               maskSize: "100% 100%",
//             }}
//           >
//             <Image
//               src={siteConfig.images.faqTreatment}
//               alt="Patient seated for comfortable dental care"
//               fill
//               sizes="(min-width: 1024px) 390px, 100vw"
//               className="object-cover object-[50%_54%]"
//             />
//           </div>
//         </div>

//         {/* Large Right Image */}
//         <div className="relative z-10 mt-12 h-[520px] w-full drop-shadow-[0_30px_70px_rgba(108,60,17,0.13)] sm:h-[590px] lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:h-[650px] lg:w-[760px]">
//           <div
//             className="relative h-full w-full overflow-hidden bg-surface-container-low"
//             style={{
//               WebkitMaskImage: largeHeroMask,
//               maskImage: largeHeroMask,
//               WebkitMaskRepeat: "no-repeat",
//               maskRepeat: "no-repeat",
//               WebkitMaskSize: "100% 100%",
//               maskSize: "100% 100%",
//             }}
//           >
//             <Image
//               src={siteConfig.images.heroCheckup}
//               alt="Dental team caring for a patient in a modern clinic"
//               fill
//               sizes="(min-width: 1024px) 760px, 100vw"
//               className="object-cover object-[46%_50%]"
//               priority
//             />
//           </div>

//           {/* Trust Badge */}
//           <div className="absolute bottom-[28px] right-[34px] z-30 flex h-[118px] w-[118px] items-center justify-center rounded-full bg-[linear-gradient(145deg,#c96a12_0%,#9d4e08_100%)] text-white shadow-[0_18px_38px_rgba(157,78,8,0.28)] ring-[8px] ring-white sm:bottom-[34px] sm:right-[42px]">
//             <svg
//               className="absolute h-full w-full"
//               viewBox="0 0 120 120"
//               aria-hidden="true"
//             >
//               <path
//                 id="heroTrustBadgePath"
//                 d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
//                 fill="none"
//               />
//               <text
//                 className="fill-white font-label-sm text-[7.8px] font-black uppercase tracking-[0.1em]"
//                 textLength="276"
//                 lengthAdjust="spacing"
//               >
//                 <textPath href="#heroTrustBadgePath" startOffset="0%">
//                   Dr Varun Clinic - 17+ Years Care -
//                 </textPath>
//               </text>
//             </svg>

//             <span className="flex h-[54px] w-[54px] items-center justify-center">
//               <svg
//                 className="h-10 w-10 text-white"
//                 viewBox="0 0 48 48"
//                 aria-hidden="true"
//               >
//                 <path
//                   d="M24 8.5c2.5-2.2 6.7-2.8 10-.8 4.2 2.6 5.4 8 3.1 13.2-.9 2-1.5 4.5-1.8 7.1-.8 7.7-3 11.5-6 11.5-2.1 0-2.7-2.5-3.4-6.1-.5-2.5-1-4.9-1.9-4.9s-1.4 2.4-1.9 4.9c-.7 3.6-1.3 6.1-3.4 6.1-3 0-5.2-3.8-6-11.5-.3-2.6-.9-5.1-1.8-7.1C8.6 15.7 9.8 10.3 14 7.7c3.3-2 7.5-1.4 10 .8Z"
//                   fill="currentColor"
//                 />
//               </svg>
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import Image from "next/image";
import { Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const largeHeroMask =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 760 620'%3E%3Cpath fill='white' d='M250 0H690C729 0 760 31 760 70V425C760 474 721 514 672 514H653C626 514 604 536 604 563V568C604 597 581 620 552 620H96C61 620 32 591 32 556V308C32 272 61 243 97 243H122C153 243 178 218 178 187V176C178 145 203 120 234 120H256C291 120 319 92 319 57V56C319 25 291 0 250 0Z'/%3E%3C/svg%3E\")";

const smallHeroMask =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 390 310'%3E%3Cpath fill='white' d='M78 0H360C377 0 390 13 390 30V280C390 297 377 310 360 310H38C17 310 0 293 0 272V124C0 102 18 84 40 84H49C75 84 96 63 96 37V25C96 11 107 0 121 0H78Z'/%3E%3C/svg%3E\")";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-20 pt-14 md:px-14 lg:pb-24 lg:pt-16">
      <div className="relative mx-auto min-h-[720px] max-w-[1180px] lg:min-h-[650px]">
        {/* Left Content */}
        <div className="relative z-30 max-w-[640px] lg:max-w-[650px]">
          <h1 className="font-hero-heading text-[40px] font-extrabold leading-[1.08] text-text-dark sm:text-[50px] lg:text-[56px]">
            <span className="block sm:whitespace-nowrap">
              Best Dental Clinic{" "}
              <Sparkles
                className="mb-2 inline-block h-9 w-9 fill-current text-cyan-soft"
                aria-hidden="true"
              />
            </span>
            <span className="block sm:whitespace-nowrap">
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

        {/* Small Left Image */}
        <div className="relative z-20 mt-14 h-[310px] w-full max-w-[390px] drop-shadow-[0_24px_46px_rgba(108,60,17,0.10)] lg:absolute lg:bottom-4 lg:left-0 lg:mt-0">
          <div
            className="relative h-full w-full overflow-hidden bg-surface-container-low"
            style={{
              WebkitMaskImage: smallHeroMask,
              maskImage: smallHeroMask,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
            }}
          >
            <Image
              src={siteConfig.images.faqTreatment}
              alt="Patient seated for comfortable dental care"
              fill
              sizes="(min-width: 1024px) 390px, 100vw"
              className="object-cover object-[50%_54%]"
            />
          </div>
        </div>

        {/* Large Right Image */}
        <div className="relative z-10 mt-12 h-[520px] w-full drop-shadow-[0_30px_70px_rgba(108,60,17,0.13)] sm:h-[590px] lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:h-[650px] lg:w-[760px]">
          <div
            className="relative h-full w-full overflow-hidden bg-surface-container-low"
            style={{
              WebkitMaskImage: largeHeroMask,
              maskImage: largeHeroMask,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
            }}
          >
            <Image
              src={siteConfig.images.heroCheckup}
              alt="Dental team caring for a patient in a modern clinic"
              fill
              sizes="(min-width: 1024px) 760px, 100vw"
              className="object-cover object-[46%_50%]"
              priority
            />
          </div>

          {/* Trust Badge */}
          <div className="absolute bottom-[18px] right-[20px] z-30 flex h-[116px] w-[116px] items-center justify-center rounded-full bg-[linear-gradient(145deg,#c96a12_0%,#9d4e08_100%)] text-white shadow-[0_18px_38px_rgba(157,78,8,0.28)] ring-[8px] ring-white sm:bottom-[20px] sm:right-[24px] lg:bottom-[22px] lg:right-[26px]">
            <svg
              className="absolute h-full w-full"
              viewBox="0 0 120 120"
              aria-hidden="true"
            >
              <path
                id="heroTrustBadgePath"
                d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                fill="none"
              />

              <text
                className="fill-white font-label-sm text-[7.8px] font-black uppercase tracking-[0.1em]"
                textLength="276"
                lengthAdjust="spacing"
              >
                <textPath href="#heroTrustBadgePath" startOffset="0%">
                  Dr Varun Clinic - 17+ Years Care -
                </textPath>
              </text>
            </svg>

            <span className="flex h-[54px] w-[54px] items-center justify-center">
              <svg
                className="h-10 w-10 text-white"
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
    </section>
  );
}