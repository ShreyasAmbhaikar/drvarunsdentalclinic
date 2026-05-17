import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Heart,
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const phoneHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;
const agencyWhatsappHref = "https://wa.me/919284394722";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-container pb-5 pt-14">
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.7fr)_minmax(0,0.95fr)_minmax(0,1fr)]">
          <div className="col-span-2 min-w-0 lg:col-span-1">
            <div className="mb-5 flex min-w-0 items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 p-1 shadow-soft">
                <Image
                  src={siteConfig.images.logo}
                  width={44}
                  height={38}
                  alt={`${siteConfig.name} logo`}
                  className="h-10 w-auto object-contain"
                />
              </span>
              <span className="flex min-w-0 flex-col leading-none">
                <span className="break-words font-section-heading text-[20px] font-extrabold tracking-tight text-white sm:text-[22px]">
                  Dr. Varun&apos;s
                </span>
                <span className="mt-1 font-label-sm text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75">
                  Dental Clinic
                </span>
              </span>
            </div>
            <p className="max-w-[320px] font-body-main text-[14px] leading-6 text-white/75">
              {siteConfig.tagline}
            </p>
          </div>

          <FooterColumn title="Quick Links" className="min-w-0 lg:pl-6">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link className="transition-colors hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Our Treatments" className="min-w-0">
            {siteConfig.treatments.map((treatment) => (
              <li key={treatment.href}>
                <Link className="transition-colors hover:text-white" href={treatment.href}>
                  {treatment.title}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact" className="col-span-2 min-w-0 lg:col-span-1">
            <li className="flex min-w-0 gap-3">
              <Phone className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={phoneHref} className="break-words transition-colors hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex min-w-0 gap-3">
              <Mail className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="break-words transition-colors hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex min-w-0 gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              <a
                href={siteConfig.businessListingUrl}
                target="_blank"
                rel="noreferrer"
                className="break-words transition-colors hover:text-white"
              >
                {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}
              </a>
            </li>
            <li className="flex min-w-0 gap-3">
              <Clock className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="break-words">{siteConfig.hours}</span>
            </li>
          </FooterColumn>
        </div>

        <div className="mt-10 border-t border-[#f3d2ac]/38 pt-4 text-center font-body-main text-[14px] leading-6 text-white/90">
          <p>&copy; 2026 {siteConfig.name}. All Rights Reserved.</p>
          <p className="mt-0.5 flex flex-wrap items-center justify-center gap-1.5">
            <span>Developed with</span>
            <Heart className="h-3.5 w-3.5 fill-current text-[#ff4f4f]" aria-hidden="true" />
            <span>by</span>
            <a
              href={agencyWhatsappHref}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-white underline decoration-white/35 underline-offset-4 transition-colors hover:text-white/80"
            >
              QuantumReach Marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
  className
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="mb-3 font-card-title text-[18px] font-bold text-white">{title}</h3>
      <ul className="space-y-2 font-body-main text-[15px] leading-6 text-white/70">
        {children}
      </ul>
    </div>
  );
}
