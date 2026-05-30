import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Heart,
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import { siteConfig, categorizedTreatments } from "@/lib/site-config";

const phoneHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;
const agencyWhatsappHref = "https://wa.me/919284394722";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-container pb-5 pt-14 text-white">
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        {/* Top Section: Brand Info, Quick Links & Contact Details */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 pb-10 border-b border-[#f3d2ac]/20 md:grid-cols-3">
          <div className="min-w-0">
            <div className="mb-5 flex min-w-0 items-center gap-3.5">
              <span className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-white/95 p-2 shadow-soft">
                <Image
                  src={siteConfig.images.logo}
                  width={60}
                  height={52}
                  alt={`${siteConfig.name} logo`}
                  className="h-[52px] w-[61px] object-contain"
                />
              </span>
              <span className="flex min-w-0 flex-col justify-center leading-tight">
                <span className="break-words font-section-heading text-[20px] font-extrabold tracking-tight text-white sm:text-[22px]">
                  Dr. Varun&apos;s
                </span>
                <span className="break-words font-section-heading text-[20px] font-extrabold tracking-tight text-white sm:text-[22px]">
                  Dental Clinic
                </span>
              </span>
            </div>
            <p className="max-w-[320px] font-body-main text-[14px] leading-6 text-white/90">
              {siteConfig.tagline}
            </p>
          </div>

          <FooterColumn title="Quick Links" className="min-w-0">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link className="text-[#FFF0DB] transition-colors hover:text-white hover:underline" href={item.href} prefetch={false}>
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact Us" className="min-w-0">
            <li className="flex min-w-0 gap-3 text-white/90">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-[#FFF0DB]/95" aria-hidden="true" />
              <a href={phoneHref} className="text-[#FFF0DB] break-words transition-colors hover:text-white hover:underline">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex min-w-0 gap-3 text-white/90">
              <Mail className="mt-1 h-4 w-4 shrink-0 text-[#FFF0DB]/95" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="text-[#FFF0DB] break-words transition-colors hover:text-white hover:underline">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex min-w-0 gap-3 text-white/90">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#FFF0DB]/95" aria-hidden="true" />
              <a
                href={siteConfig.businessListingUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#FFF0DB] break-words transition-colors hover:text-white hover:underline"
              >
                {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}
              </a>
            </li>
            <li className="flex min-w-0 gap-3 text-white/90">
              <Clock className="mt-1 h-4 w-4 shrink-0 text-[#FFF0DB]/95" aria-hidden="true" />
              <span className="break-words text-[#FFF0DB]">{siteConfig.hours}</span>
            </li>
          </FooterColumn>
        </div>

        <div className="py-10 border-b border-[#FFF0DB]/10">
          <h3 className="mb-6 font-card-title text-[18px] font-extrabold text-[#FFF0DB] uppercase tracking-wider">
            Our Treatments
          </h3>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {categorizedTreatments.map((category) => (
              <div key={category.name} className="space-y-4 border-t border-[#FFF0DB]/10 pt-6 sm:border-t-0 sm:pt-0">
                <h4 className="font-card-title text-[13px] font-bold uppercase tracking-wider text-white">
                  {category.name}
                </h4>
                <ul className="space-y-2.5 font-body-main text-[13.5px] leading-5">
                  {category.items.map((treatment) => (
                    <li key={treatment.href}>
                      <Link
                        className="text-[#FFF0DB] transition-colors hover:text-white hover:underline underline-offset-4"
                        href={treatment.href}
                        prefetch={false}
                      >
                        {treatment.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-6 text-center font-body-main text-[14px] leading-6 text-white/90">
          <p className="text-white/80">&copy; 2026 {siteConfig.name}. All Rights Reserved.</p>
          <p className="mt-0.5 flex flex-wrap items-center justify-center gap-1.5 text-white/80">
            <span>Developed with</span>
            <Heart className="h-3.5 w-3.5 fill-current text-[#ff4f4f]" aria-hidden="true" />
            <span>by</span>
            <a
              href={agencyWhatsappHref}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-white underline decoration-white/35 underline-offset-4 transition-colors hover:text-white/80"
            >
              QuantumReach Media
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
      <h3 className="mb-4 font-card-title text-[18px] font-extrabold text-[#FFF0DB] uppercase tracking-wider">{title}</h3>
      <ul className="space-y-2.5 font-body-main text-[14px] leading-6 text-white/95">
        {children}
      </ul>
    </div>
  );
}
