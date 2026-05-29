import type { Metadata } from "next";
import Image from "next/image";
import { Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Testimonials",
  description: `Read patient reviews and testimonials for ${siteConfig.name} in Viman Nagar, Pune.`,
  alternates: {
    canonical: `${siteConfig.url}/testimonials`
  }
};

function getAvatarColor(name: string) {
  const colors = [
    "bg-[#f0e7ff] text-[#6d28d9] border border-[#d8b4fe]/40", // Purple
    "bg-[#e6f4ea] text-[#137333] border border-[#a8dab5]/40", // Green
    "bg-[#fff2e6] text-[#c05621] border border-[#ffd8a8]/40", // Orange
    "bg-[#e0f2fe] text-[#0369a1] border border-[#bae6fd]/40", // Blue
    "bg-[#ffe4e6] text-[#be123c] border border-[#fecdd3]/40", // Pink
    "bg-[#fef3c7] text-[#b45309] border border-[#fde68a]/40"  // Yellow
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colors.length;
  return colors[index];
}

export default function TestimonialsPage() {
  const testimonials = siteConfig.testimonials;

  return (
    <main
      id="main-content"
      className="relative overflow-hidden bg-[#fefcff] px-6 pb-20 pt-[124px] md:px-14 md:pb-24 lg:pt-[136px]"
    >
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: "linear-gradient(rgba(165, 83, 8, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(165, 83, 8, 0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />
      
      {/* Premium Gradient Blur Ornaments */}
      <div className="absolute top-[8%] left-[-10%] h-[450px] w-[450px] rounded-full bg-[#fbdca7]/25 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-12%] h-[600px] w-[600px] rounded-full bg-[#f9a137]/12 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[2%] left-[3%] h-[400px] w-[400px] rounded-full bg-[#ffd8a8]/22 blur-[110px] pointer-events-none" />
 
      <section className="relative z-10 mx-auto max-w-[1140px]">
        {/* Header Section */}
        <div className="mb-14 text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-primary-container/20 bg-white px-4 py-1.5 shadow-[0_4px_12px_rgba(165,83,8,0.05)]">
            <span className="h-2 w-2 rounded-full bg-cyan-soft animate-pulse" />
            <span className="font-label-sm text-[12px] font-bold uppercase tracking-[0.16em] text-primary-container">
              User Reviews
            </span>
          </div>
          <h1 className="font-hero-heading text-[36px] font-extrabold leading-[1.08] text-text-dark md:text-[54px]">
            More than 10,000+ Happy Customers
          </h1>
          <p className="mx-auto mt-4 max-w-[620px] font-body-main text-[15px] leading-7 text-text-muted">
            Read authentic feedback from families who trust {siteConfig.name} for calm, 
            advanced dental care and implantologist treatments in Viman Nagar, Pune.
          </p>
        </div>
 
        {/* Masonry Columns Grid */}
        <div className="columns-1 gap-6 md:columns-2 lg:columns-3 [column-fill:_balance]">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

function truncateQuote(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, maxLength).trimEnd()}...`;
}

function TestimonialCard({ item }: { item: typeof siteConfig.testimonials[number] }) {
  const isLocalGuide = item.name.includes("Local Guide");
  const displayName = item.name.replace(" (Local Guide)", "");
  const hasAvatarFile = item.image.startsWith("/images/testimonial/");
  const initials = displayName.split(" ").map(n => n[0]).join("").toUpperCase();
  const handle = `@${displayName.toLowerCase().replace(/\s+/g, "")}`;

  return (
    <article className="group mb-6 break-inside-avoid rounded-[22px] border border-[#f2e1cb] bg-white p-6 shadow-[0_16px_36px_rgba(133,82,32,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#fffcf8] hover:border-[#e58a21]/50 hover:shadow-[0_24px_48px_rgba(165,83,8,0.12)]">
      {/* Top Row: Info & Rating */}
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          {hasAvatarFile ? (
            <div className={`h-11 w-11 shrink-0 transition-colors duration-300 ${
              isLocalGuide
                ? "overflow-visible rounded-none border-0 bg-transparent"
                : "overflow-hidden rounded-full border border-[#ecd7bd] bg-[#fff4e8] group-hover:border-[#e58a21]"
            }`}>
              <Image
                src={item.image}
                alt={`${displayName} profile photo`}
                width={44}
                height={44}
                className="h-full w-full object-contain"
              />
            </div>
          ) : (
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-bold text-[13px] transition-transform duration-300 group-hover:scale-105 ${getAvatarColor(displayName)}`}>
              {initials}
            </div>
          )}
          <div className="min-w-0">
            <h2 className="font-card-title text-[15px] font-bold leading-tight text-text-dark truncate">
              {displayName}
            </h2>
            {isLocalGuide && (
              <p className="font-label-sm text-[9.5px] font-extrabold uppercase tracking-wider text-[#e58a21] mt-0.5">
                Local Guide
              </p>
            )}
            <p className="font-body-main text-[11px] text-text-muted mt-0.5 truncate">
              {handle}
            </p>
          </div>
        </div>

        {/* Glowing Star and Rating Badge */}
        <div className="flex items-center gap-1 rounded-full border border-[#fbdca7]/40 bg-[#fff6ea] px-2.5 py-1 shrink-0 transition-colors duration-300 group-hover:border-[#e58a21]/40 group-hover:bg-[#fff1de]">
          <Star className="h-3.5 w-3.5 fill-current text-[#e58a21] drop-shadow-[0_0_4px_rgba(229,138,33,0.35)] transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
          <span className="font-hero-heading text-[12px] font-bold text-text-dark leading-none">
            {item.rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Review content with horizontal lining background */}
      <div className="relative overflow-hidden rounded-[12px] bg-[rgba(255,255,255,0.75)] px-3.5 py-2 border border-[#f2e1cb]/20">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(transparent, transparent 27px, rgba(165, 83, 8, 0.05) 27px, rgba(165, 83, 8, 0.05) 28px)",
            backgroundSize: "100% 28px",
            WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)",
            maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)"
          }}
        />
        <p 
          className="relative z-10 font-body-main text-[14px] text-text-muted leading-[28px] whitespace-pre-line"
          style={{ paddingTop: "2px" }}
        >
          {truncateQuote(item.quote, 400)}
        </p>
      </div>
    </article>
  );
}
