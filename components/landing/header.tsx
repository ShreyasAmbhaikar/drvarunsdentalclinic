"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const phoneHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

export function Header() {
  const pathname = usePathname();
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  const [isMobileTreatmentsOpen, setIsMobileTreatmentsOpen] = useState(false);
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-5 sm:px-6 lg:px-14">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label={siteConfig.name}>
          <Image
            src={siteConfig.images.logo}
            width={52}
            height={44}
            alt={`${siteConfig.name} logo`}
            className="h-9 w-auto shrink-0 object-contain sm:h-10"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-section-heading text-[16px] font-extrabold tracking-tight text-text-dark sm:text-[19px]">
              Dr. Varun&apos;s
            </span>
            <span className="mt-1 font-label-sm text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-container sm:text-[11px]">
              Dental Clinic
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-3 font-label-sm text-[13px] font-medium tracking-tight lg:flex xl:gap-6">
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
                  className={`absolute left-0 top-full z-50 mt-3 w-[280px] rounded-[22px] border border-slate-100 bg-white p-3 shadow-card transition-all duration-150 ${
                    isTreatmentsOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  {siteConfig.treatments.map((treatment) => (
                    <Link
                      key={treatment.href}
                      href={treatment.href}
                      onClick={() => setIsTreatmentsOpen(false)}
                      className="block rounded-[18px] px-4 py-3 transition-colors hover:bg-section-light"
                    >
                      <span className="block font-card-title text-[15px] font-bold text-text-dark">
                        {treatment.title}
                      </span>
                    </Link>
                  ))}
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
                    <div className="mt-2 space-y-1 pl-4">
                      {siteConfig.treatments.map((treatment) => (
                        <Link
                          key={treatment.href}
                          href={treatment.href}
                          onClick={closeMenus}
                          className="block rounded-[16px] px-4 py-3 font-body-main text-[13px] font-medium leading-5 text-text-muted transition-colors hover:bg-section-light hover:text-primary-container"
                        >
                          {treatment.title}
                        </Link>
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
