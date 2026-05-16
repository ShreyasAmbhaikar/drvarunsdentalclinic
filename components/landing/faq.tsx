"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const faqImageMask =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 520 450'%3E%3Cpath fill='white' d='M48 0H350C376 0 398 18 404 42C409 62 427 78 448 78H472C499 78 520 99 520 126V402C520 429 499 450 472 450H142C115 450 94 429 94 402V390C94 362 72 340 44 340C20 340 0 320 0 296V48C0 21 21 0 48 0Z'/%3E%3C/svg%3E\")";

export function Faq() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="bg-white px-6 pb-16 pt-16 md:px-14 md:pb-20 md:pt-[72px]">
      <div className="mx-auto mb-12 max-w-[760px] text-center">
        <h2 className="mb-4 font-section-heading text-[31px] font-extrabold text-text-dark md:text-[38px]">
          Frequently Asked
          <br />
          Questions
        </h2>
        <p className="mx-auto max-w-[700px] font-body-main text-base leading-7 text-text-muted">
          Find quick answers about appointments, dental checkups, root canal care,
          dental implants, teeth whitening, and emergency visits at Dr. Varun&apos;s
          Dental Clinic in Viman Nagar, Pune.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-start gap-9 md:grid-cols-2">
        <div
          className="relative h-[330px] overflow-hidden bg-surface-container-low md:h-[500px]"
          style={{
            WebkitMaskImage: faqImageMask,
            maskImage: faqImageMask,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
          }}
        >
          <Image
            src={siteConfig.images.faqTreatment}
            alt="Dental treatment room"
            fill
            sizes="(min-width: 768px) 500px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="w-full max-w-[520px] space-y-3">
          {siteConfig.faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`rounded-[18px] shadow-soft transition-colors ${
                openIndex === index ? "bg-primary-container text-white" : "bg-white text-text-dark"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex((currentIndex) => (currentIndex === index ? -1 : index))}
                className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="flex items-center gap-4">
                  <FaqToothIcon
                    className={`h-5 w-5 shrink-0 ${
                      openIndex === index ? "text-white" : "text-primary-container"
                    }`}
                    aria-hidden="true"
                  />
                  <span className="font-card-title text-[16px] font-bold md:text-[18px]">
                    {faq.question}
                  </span>
                </span>
                <span
                  className={`shrink-0 ${openIndex === index ? "text-white" : "text-text-muted"}`}
                >
                  {openIndex === index ? (
                    <Minus className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Plus className="h-5 w-5" aria-hidden="true" />
                  )}
                </span>
              </button>
              {openIndex === index ? (
                <p className="-mt-1 px-5 pb-5 font-body-main text-[15px] leading-7 text-white/90">
                  {faq.answer}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqToothIcon({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 240 270"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M72 24 C53 24 38 39 38 59 V105 C38 121 44 136 55 150 C64 161 69 175 70 192 L72 223 C73 240 83 251 96 251 C109 251 118 240 120 223 L124 169 C125 158 131 151 138 151 C145 151 151 158 152 169 L156 223 C158 240 167 251 180 251 C193 251 203 240 204 223 L206 192 C207 175 212 161 221 150 C232 136 238 121 238 105 V59 C238 39 223 24 204 24 C190 24 177 30 163 39 L138 55 L113 39 C99 30 86 24 72 24 Z"
        stroke="currentColor"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
