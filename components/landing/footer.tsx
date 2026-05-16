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
    <footer className="relative overflow-hidden bg-primary-container pb-8 pt-14">
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-14">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 p-1 shadow-soft">
                <Image
                  src={siteConfig.images.logo}
                  width={44}
                  height={38}
                  alt={`${siteConfig.name} logo`}
                  className="h-10 w-auto object-contain"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-section-heading text-[22px] font-extrabold tracking-tight text-white">
                  Dr. Varun&apos;s
                </span>
                <span className="mt-1 font-label-sm text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75">
                  Dental Clinic
                </span>
              </span>
            </div>
            <p className="max-w-[270px] font-body-main text-[14px] leading-6 text-white/75">
              Gentle smiles, modern care, and a calm clinic experience for every visit.
            </p>
          </div>

          <FooterColumn title="Quick Links" className="col-span-1">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link className="transition-colors hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Our Treatments" className="col-span-1">
            {siteConfig.treatments.map((treatment) => (
              <li key={treatment.href}>
                <Link className="transition-colors hover:text-white" href={treatment.href}>
                  {treatment.title}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact" className="col-span-2 md:col-span-1">
            <li className="flex gap-3">
              <Phone className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={phoneHref} className="transition-colors hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              <a
                href={siteConfig.businessListingUrl}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
              >
                {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{siteConfig.hours}</span>
            </li>
          </FooterColumn>
        </div>

        <div className="mt-10 border-t border-white/14 pt-6 text-center font-body-main text-[14px] leading-7 text-white/90">
          <p>&copy; 2026 {siteConfig.name}. All Rights Reserved.</p>
          <p className="mt-1 flex flex-wrap items-center justify-center gap-1.5">
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
