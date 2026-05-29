"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronRight, Menu, Phone, X } from "lucide-react";
import { siteConfig, categorizedTreatments } from "@/lib/site-config";

const phoneHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

export function Header() {
  const pathname = usePathname();
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  const [isMobileTreatmentsOpen, setIsMobileTreatmentsOpen] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [openMobileCategoryIndex, setOpenMobileCategoryIndex] = useState<number | null>(null);
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  const closeMenus = () => {
    setIsTreatmentsOpen(false);
    setIsMobileTreatmentsOpen(false);
    if (mobileMenuRef.current) {
      mobileMenuRef.current.open = false;
    }
  };

  useEffect(() => {
    setIsTreatmentsOpen(false);
    setIsMobileTreatmentsOpen(false);
    if (mobileMenuRef.current) {
      mobileMenuRef.current.open = false;
    }
  }, [pathname]);

  useEffect(() => {
    if (!isTreatmentsOpen) {
      setActiveCategoryIndex(0);
    }
  }, [isTreatmentsOpen]);

  useEffect(() => {
    if (!isMobileTreatmentsOpen) {
      setOpenMobileCategoryIndex(null);
    }
  }, [isMobileTreatmentsOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-100/40 bg-white/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
      <div className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-5 sm:px-6 lg:px-14">
        <Link href="/dental-clinic-viman-nagar" className="flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label={siteConfig.name}>
          <Image
            src={siteConfig.images.logo}
            width={56}
            height={48}
            alt={`${siteConfig.name} logo`}
            className="h-10 w-auto shrink-0 object-contain sm:h-12"
            priority
          />
          <span className="flex flex-col justify-center leading-tight">
            <span className="font-section-heading text-[15px] font-extrabold tracking-tight text-text-dark sm:text-[17px]">
              Dr. Varun&apos;s
            </span>
            <span className="font-section-heading text-[15px] font-extrabold tracking-tight text-text-dark sm:text-[17px]">
              Dental Clinic
            </span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1.5 font-label-sm text-[13px] font-medium tracking-tight lg:flex xl:gap-3">
          {siteConfig.nav.map((item) =>
            item.href === "/our-services" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setIsTreatmentsOpen(true)}
                onMouseLeave={() => setIsTreatmentsOpen(false)}
                onFocus={() => setIsTreatmentsOpen(true)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setIsTreatmentsOpen(false);
                  }
                }}
              >
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    onClick={() => setIsTreatmentsOpen(false)}
                    className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 transition-colors xl:gap-2 xl:px-4 ${
                      isActive(item.href)
                        ? "bg-primary-container text-white shadow-soft"
                        : "text-text-dark hover:bg-section-light hover:text-primary-container"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${isTreatmentsOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </Link>
                </div>

                <div
                  className={`absolute left-0 top-full z-50 mt-3 flex w-[520px] rounded-[24px] border border-slate-100 bg-white p-2 shadow-card transition-all duration-150 ${
                    isTreatmentsOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  {/* Left Column: Categories list */}
                  <div className="w-[220px] shrink-0 border-r border-slate-100 pr-2 space-y-0.5">
                    {categorizedTreatments.map((category, catIndex) => (
                      <button
                        key={category.name}
                        type="button"
                        onMouseEnter={() => setActiveCategoryIndex(catIndex)}
                        className={`flex w-full items-center justify-between rounded-[16px] px-3.5 py-2.5 text-left transition-colors font-bold text-[13px] leading-tight ${
                          activeCategoryIndex === catIndex
                            ? "bg-section-light text-primary-container"
                            : "text-text-dark hover:bg-section-light/50 hover:text-primary-container"
                        }`}
                      >
                        <span>{category.name}</span>
                        <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden="true" />
                      </button>
                    ))}
                  </div>

                  {/* Right Column: Treatments in selected category */}
                  <div className="flex-1 pl-2 space-y-0.5">
                    {categorizedTreatments[activeCategoryIndex]?.items.map((treatment) => (
                      <Link
                        key={treatment.href}
                        href={treatment.href}
                        onClick={() => setIsTreatmentsOpen(false)}
                        className="block rounded-[16px] px-4 py-2.5 transition-colors hover:bg-[#fff0da]"
                      >
                        <span className="block font-card-title text-[14px] font-bold text-text-dark">
                          {treatment.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 transition-colors xl:px-4 ${
                  isActive(item.href)
                    ? "bg-primary-container text-white shadow-soft"
                    : "text-text-dark hover:bg-section-light hover:text-primary-container"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={phoneHref}
            className="inline-flex h-[40px] items-center justify-center gap-2 rounded-full bg-primary-container px-4 font-label-sm text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-primary-dark xl:px-5"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Contact us
          </a>
        </div>

        <details ref={mobileMenuRef} className="group relative lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-text-dark">
            <Menu className="h-5 w-5 group-open:hidden" aria-hidden="true" />
            <X className="hidden h-5 w-5 group-open:block" aria-hidden="true" />
            <span className="sr-only">Toggle navigation</span>
          </summary>
          <div className="absolute right-0 top-14 w-64 rounded-[18px] border border-slate-100 bg-white p-3 shadow-card">
            {siteConfig.nav.map((item) =>
              item.href === "/our-services" ? (
                <div key={item.href} className="mb-1">
                  <button
                    type="button"
                    onClick={() => setIsMobileTreatmentsOpen((open) => !open)}
                    className={`flex w-full items-center justify-between rounded-full px-4 py-3 text-left font-label-sm text-sm font-semibold transition-colors ${
                      isActive(item.href)
                        ? "bg-primary-container text-white"
                        : "text-text-dark hover:bg-section-light hover:text-primary-container"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform ${isMobileTreatmentsOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  {isMobileTreatmentsOpen ? (
                    <div className="mt-2 space-y-1.5 pl-3">
                      {categorizedTreatments.map((category, catIndex) => (
                        <div key={category.name} className="border-l border-slate-100 pl-2.5">
                          <button
                            type="button"
                            onClick={() => setOpenMobileCategoryIndex(openMobileCategoryIndex === catIndex ? null : catIndex)}
                            className="flex w-full items-center justify-between py-1.5 text-left font-label-sm text-[11px] font-bold uppercase tracking-wider text-text-muted hover:text-primary-container"
                          >
                            <span>{category.name}</span>
                            <ChevronDown
                              className={`h-3.5 w-3.5 shrink-0 transition-transform ${
                                openMobileCategoryIndex === catIndex ? "rotate-180" : ""
                              }`}
                              aria-hidden="true"
                            />
                          </button>
                          {openMobileCategoryIndex === catIndex ? (
                            <div className="mt-1 space-y-1">
                              {category.items.map((treatment) => (
                                <Link
                                  key={treatment.href}
                                  href={treatment.href}
                                  onClick={closeMenus}
                                  className="block rounded-[12px] px-3 py-2 font-body-main text-[13px] font-medium leading-5 text-text-dark transition-colors hover:bg-section-light hover:text-primary-container"
                                >
                                  {treatment.title}
                                </Link>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenus}
                  className={`block rounded-full px-4 py-3 font-label-sm text-sm font-semibold transition-colors ${
                    isActive(item.href)
                      ? "bg-primary-container text-white"
                      : "text-text-dark hover:bg-section-light hover:text-primary-container"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href={phoneHref}
              className="mt-2 flex h-[44px] items-center justify-center gap-2 rounded-full bg-primary-container px-4 font-label-sm text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Contact us
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
