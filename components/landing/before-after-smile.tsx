"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import Image from "next/image";
import { ArrowLeftRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function BeforeAfterSmile() {
  const [position, setPosition] = useState(50);

  return (
    <section id="smile-results" className="overflow-hidden bg-section-light px-6 py-20 md:px-14">
      <div className="mx-auto w-full max-w-[1140px]">
        <div className="mx-auto mb-10 w-full max-w-[720px] text-center">
          <p className="mb-3 font-label-sm text-[14px] font-extrabold uppercase tracking-[0.18em] text-cyan">
            Smile Results
          </p>
          <h2 className="break-words font-section-heading text-[31px] font-extrabold leading-[1.12] text-text-dark md:text-[40px]">
            See the Difference a Brighter Smile Can Make
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] font-body-main text-[15px] leading-7 text-text-muted">
            A visual look at how focused whitening care can reduce stains and
            bring a cleaner, more confident smile forward.
          </p>
        </div>

        <div
            className="group relative mx-auto h-[340px] w-full max-w-full overflow-hidden rounded-[24px] bg-primary-container shadow-card sm:aspect-[16/9] sm:h-auto md:max-h-[660px]"
          aria-label="Before and after teeth whitening smile comparison"
          style={{ "--slider-position": `${position}%` } as CSSProperties}
        >
          <Image
            src={siteConfig.images.smileAfter}
            alt="After teeth whitening result with a brighter smile"
            fill
            sizes="(min-width: 1280px) 1140px, 100vw"
            className="object-cover"
            priority={false}
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <Image
              src={siteConfig.images.smileBefore}
              alt="Before teeth whitening with visible tooth stains"
              fill
              sizes="(min-width: 1280px) 1140px, 100vw"
              className="object-cover"
              priority={false}
            />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-primary-container/10 mix-blend-multiply" />
          <div className="pointer-events-none absolute left-5 top-5 rounded-full bg-text-dark/85 px-4 py-2 font-label-sm text-sm font-bold text-white shadow-soft md:left-8 md:top-8">
            Before
          </div>
          <div className="pointer-events-none absolute right-5 top-5 rounded-full bg-cyan-soft px-4 py-2 font-label-sm text-sm font-bold text-text-dark shadow-soft md:right-8 md:top-8">
            After
          </div>

          <div
            className="pointer-events-none absolute bottom-0 top-0 z-20 w-px bg-white/90 shadow-[0_0_24px_rgba(108,60,17,0.35)]"
            style={{ left: `${position}%` }}
          />
          <div
            className="pointer-events-none absolute top-1/2 z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-primary-container text-white shadow-card transition-transform duration-200 group-hover:scale-105"
            style={{ left: `${position}%` }}
          >
            <ArrowLeftRight className="h-6 w-6" aria-hidden="true" />
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={position}
            aria-label="Adjust before and after smile comparison"
            className="before-after-range absolute inset-0 z-30 h-full w-full"
            onChange={(event) => setPosition(Number(event.target.value))}
          />
        </div>

        <p className="mx-auto mt-5 max-w-[680px] text-center font-body-main text-[13px] leading-6 text-text-muted">
          Individual treatment results vary after clinical examination,
          treatment planning, and oral health condition.
        </p>
      </div>
    </section>
  );
}
