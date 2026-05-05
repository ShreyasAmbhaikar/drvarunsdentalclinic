import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function Team() {
  const [left, center, right] = siteConfig.team;

  return (
    <section id="team" className="bg-primary-container px-6 pb-[90px] pt-20 md:px-14">
      <h2 className="mx-auto mb-14 max-w-[620px] text-center font-section-heading text-[31px] font-extrabold text-white md:text-[38px]">
        Our Dental Team is Ready to Assist You
      </h2>
      <div className="mx-auto flex max-w-[1140px] flex-col items-end justify-center gap-8 md:flex-row md:gap-6">
        <DoctorCard doctor={left} />
        <DoctorCard doctor={center} featured />
        <DoctorCard doctor={right} />
      </div>
    </section>
  );
}

type Doctor = (typeof siteConfig.team)[number];

function DoctorCard({
  doctor,
  featured = false
}: {
  doctor: Doctor;
  featured?: boolean;
}) {
  return (
    <article
      className={`flex w-full flex-col items-center ${
        featured ? "md:w-[342px] md:-translate-y-2" : "md:w-[270px]"
      }`}
    >
      <div
        className={`relative mb-4 aspect-[4/5] w-full overflow-hidden rounded-[24px] ${
          featured
            ? "bg-cyan-soft shadow-xl"
            : "border border-white/10 bg-white/10"
        }`}
      >
        <Image
          src={doctor.image}
          alt={doctor.alt}
          fill
          sizes={featured ? "(min-width: 768px) 380px, 100vw" : "(min-width: 768px) 300px, 100vw"}
          className="object-cover"
        />
      </div>
      <div className="text-center">
        <h3
          className={`font-card-title font-bold text-white ${
            featured ? "text-[22px]" : "text-[20px]"
          }`}
        >
          {doctor.name}
        </h3>
        <p className="font-body-main text-[14px] text-white/70">{doctor.role}</p>
      </div>
    </article>
  );
}
