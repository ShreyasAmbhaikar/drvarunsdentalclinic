import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const strengths = [
  "Experienced and Caring Team of Professionals",
  "Advanced Technology for Optimal Care Solutions",
  "A Wide Range of Services to Meet All Your Needs",
  "Personalized Care Approaches for Each Patient"
];

const aboutImageMask =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 520 430'%3E%3Cpath fill='white' d='M56 0H350C380 0 398 18 398 48C398 81 425 108 458 108H462C494 108 520 134 520 166V374C520 405 495 430 464 430H134C104 430 84 410 84 380C84 348 58 322 26 322C12 322 0 310 0 296V56C0 25 25 0 56 0Z'/%3E%3C/svg%3E\")";

export function About() {
  return (
    <section id="about" className="bg-white px-6 py-20 md:px-14">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-14 md:grid-cols-2">
        <div className="relative flex items-center justify-center">
          <div className="relative aspect-[1.08] w-full max-w-[470px] drop-shadow-[0_26px_50px_rgba(140,87,31,0.10)]">
            <div
              className="relative h-full w-full overflow-hidden bg-surface-container-low"
              style={{
                WebkitMaskImage: aboutImageMask,
                maskImage: aboutImageMask,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "100% 100%",
                maskSize: "100% 100%"
              }}
            >
              <Image
                src={siteConfig.images.heroCheckup}
                alt="Dental team treating a patient during a clinic visit"
                fill
                sizes="(min-width: 768px) 500px, 100vw"
                className="object-cover object-[43%_50%]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="mb-5 font-section-heading text-[31px] font-extrabold leading-[1.12] text-text-dark md:text-[40px]">
            Achieve a Confident
            <br />
            Smile With Us
          </h2>
          <p className="mb-7 font-body-main text-[15px] leading-7 text-text-muted">
            At {siteConfig.name}, we combine advanced dental care with a warm,
            friendly approach. Our skilled team focuses on comfort, precision,
            and personalized treatment so every patient can enjoy a healthier,
            brighter smile.
          </p>

          <div className="mb-10 flex flex-col gap-4">
            {strengths.map((strength) => (
              <div key={strength} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-soft" aria-hidden="true" />
                <span className="font-body-main text-[15px] font-medium text-text-dark">
                  {strength}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#team"
            className="inline-flex h-[48px] w-max items-center rounded-full bg-primary-container px-[36px] font-label-sm text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-dark"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
