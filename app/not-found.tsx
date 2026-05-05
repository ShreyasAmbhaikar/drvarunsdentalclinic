import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-page-bg px-6 py-16">
      <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center rounded-[24px] bg-white p-8 text-center shadow-soft">
        <p className="mb-4 font-label-sm text-sm font-semibold uppercase tracking-[0.18em] text-primary-container">
          404
        </p>
        <h1 className="mb-4 font-section-heading text-4xl font-extrabold text-text-dark">
          Page not found
        </h1>
        <p className="mb-8 max-w-xl font-body-main text-base leading-7 text-text-muted">
          The page you are looking for is not available. Return to the
          {` ${siteConfig.name} `}home page to continue.
        </p>
        <Link
          href="/"
          className="inline-flex h-[46px] items-center rounded-full bg-primary-container px-7 font-label-sm text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
