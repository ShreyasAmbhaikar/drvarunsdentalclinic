import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function StatementCta() {
  return (
    <section className="bg-primary-container px-6 py-[78px] md:px-14">
      <div className="mx-auto max-w-[1100px] text-center">
        <h2 className="font-hero-heading text-[29px] font-extrabold leading-[1.22] text-white md:text-[45px]">
          Step Into A World Of{" "}
          <InlineImage src={siteConfig.images.ctaPillOne} alt="Dental service" pill />
          Brighter Smiles{" "}
          <InlineImage src={siteConfig.images.ctaAvatar} alt="Happy patient" />
          With Our Professional Dental Care Services. Our Team Is Dedicated To
          Providing{" "}
          <InlineImage src={siteConfig.images.ctaPillTwo} alt="Dental care" pill />
          Exceptional Dental Care Services.
        </h2>
      </div>
    </section>
  );
}

function InlineImage({
  src,
  alt,
  pill = false
}: {
  src: string;
  alt: string;
  pill?: boolean;
}) {
  return (
    <span
      className={`mx-2 inline-block align-middle ${
        pill ? "h-[34px] w-[86px] md:h-[40px] md:w-[108px]" : "h-[38px] w-[38px]"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        width={pill ? 120 : 42}
        height={pill ? 44 : 42}
        className={`h-full w-full object-cover ${pill ? "rounded-full" : "rounded-full"}`}
      />
    </span>
  );
}
