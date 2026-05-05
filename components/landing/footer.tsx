import Image from "next/image";
import Link from "next/link";
import {
  BriefcaseBusiness,
  Camera,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const phoneHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-container px-6 pb-24 pt-[60px] md:px-14 md:pb-28">
      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center gap-3">
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
            <p className="mb-6 max-w-[280px] font-body-main text-[14px] leading-6 text-white/75">
              Gentle smiles, modern care, and a calm clinic experience for every visit.
            </p>
            <div className="mb-6 flex gap-4">
              <SocialIcon href={siteConfig.socialLinks.facebook} label="Facebook">
                <Globe className="h-4 w-4" aria-hidden="true" />
              </SocialIcon>
              <SocialIcon href={siteConfig.socialLinks.x} label="X">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </SocialIcon>
              <SocialIcon href={siteConfig.socialLinks.instagram} label="Instagram">
                <Camera className="h-4 w-4" aria-hidden="true" />
              </SocialIcon>
              <SocialIcon href={siteConfig.socialLinks.linkedin} label="LinkedIn">
                <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
              </SocialIcon>
            </div>
            <p className="font-body-main text-[14px] text-white/70">
              &copy; 2026 {siteConfig.shortName}. All Rights Reserved.
            </p>
          </div>

          <FooterColumn title={siteConfig.name}>
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link className="transition-colors hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact">
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
              <span>
                {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}
              </span>
            </li>
            <li>{siteConfig.hours}</li>
          </FooterColumn>

          <FooterColumn title="Helpful Links">
            {["Oral Health", "Careers", "Privacy Policy", "Terms & Conditions"].map((item) => (
              <li key={item}>
                <a className="transition-colors hover:text-white" href="#">
                  {item}
                </a>
              </li>
            ))}
          </FooterColumn>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[-1.2vw] left-1/2 w-[calc(100%-3rem)] -translate-x-1/2 select-none overflow-hidden text-center md:w-[calc(100%-7rem)]">
        <span className="whitespace-nowrap font-hero-heading text-[7.8vw] font-black leading-none text-white opacity-5">
          {siteConfig.name}
        </span>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-6 font-card-title text-[18px] font-bold text-white">{title}</h3>
      <ul className="space-y-4 font-body-main text-[15px] leading-6 text-white/70">
        {children}
      </ul>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
    >
      {children}
    </a>
  );
}
