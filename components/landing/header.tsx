"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const phoneHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 md:px-14">
        <Link href="/" className="flex items-center gap-3" aria-label={siteConfig.name}>
          <Image
            src={siteConfig.images.logo}
            width={48}
            height={41}
            alt={`${siteConfig.name} logo`}
            className="h-11 w-auto object-contain"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-section-heading text-[18px] font-extrabold tracking-tight text-text-dark sm:text-[20px]">
              Dr. Varun&apos;s
            </span>
            <span className="mt-1 font-label-sm text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-container sm:text-[11px]">
              Dental Clinic
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 font-label-sm text-[13px] font-medium tracking-tight md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`border-b-2 pb-1 transition-colors ${
                pathname === item.href
                  ? "border-primary-container text-primary-container"
                  : "border-transparent text-text-dark hover:border-primary-container/40 hover:text-primary-container"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={phoneHref}
            className="inline-flex h-[40px] items-center justify-center gap-2 rounded-full bg-primary-container px-6 font-label-sm text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-primary-dark"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Contact us
          </a>
        </div>

        <details className="group relative md:hidden">
          <summary className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-text-dark">
            <Menu className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Open navigation</span>
          </summary>
          <div className="absolute right-0 top-14 w-64 rounded-[18px] border border-slate-100 bg-white p-3 shadow-card">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-full px-4 py-3 font-label-sm text-sm font-semibold transition-colors ${
                  pathname === item.href
                    ? "bg-primary-container text-white"
                    : "text-text-dark hover:bg-section-light hover:text-primary-container"
                }`}
              >
                {item.label}
              </Link>
            ))}
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
