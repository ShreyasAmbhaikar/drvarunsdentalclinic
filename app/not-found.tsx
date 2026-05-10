import Image from "next/image";
import Link from "next/link";
import { Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <main className="bg-page-bg px-6 pb-16 pt-[108px] md:px-14 md:pb-20 md:pt-[132px]">
      <section className="mx-auto flex min-h-[68vh] max-w-[980px] flex-col items-center justify-center text-center">
        <div className="relative flex w-full max-w-[680px] items-center justify-center">
          <div
            className="absolute left-1/2 top-1/2 h-[clamp(210px,34vw,360px)] w-[clamp(340px,92vw,760px)] -translate-x-1/2 -translate-y-1/2 bg-primary-container shadow-[0_28px_70px_rgba(184,95,13,0.22)]"
            style={{ borderRadius: "42% 58% 49% 51% / 56% 44% 58% 42%" }}
            aria-hidden="true"
          />
          <Image
            src="/images/404-tooth-cutout.png"
            alt="404 dental illustration with a smiling tooth"
            width={1149}
            height={457}
            priority
            className="tooth-float relative z-10 h-auto w-full max-w-[650px] drop-shadow-[0_22px_38px_rgba(108,60,17,0.22)]"
          />
        </div>

        <h1 className="mt-7 font-section-heading text-[34px] font-extrabold leading-tight text-text-dark md:mt-9 md:text-[48px]">
          Sorry, page not found.
        </h1>
        <p className="mt-4 max-w-[620px] font-body-main text-[16px] leading-7 text-text-muted md:text-[17px]">
          The page you were looking for is not available right now. Head back home or
          contact the clinic and we&apos;ll help you find the right place.
        </p>

        <div className="mt-8 flex w-full max-w-[430px] flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex h-[50px] items-center justify-center gap-2 rounded-full bg-primary-container px-7 font-label-sm text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex h-[50px] items-center justify-center gap-2 rounded-full border border-[#e7d2ba] bg-white px-7 font-label-sm text-sm font-semibold text-primary-container transition-colors hover:border-[#d9bb99] hover:bg-[#fff6ea]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Contact the clinic
          </Link>
        </div>
      </section>
    </main>
  );
}
