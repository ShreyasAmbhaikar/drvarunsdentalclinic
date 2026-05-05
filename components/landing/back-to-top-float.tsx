"use client";

import { ArrowUp } from "lucide-react";

export function BackToTopFloat() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-5 right-[5.5rem] z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/95 text-primary-container shadow-[0_10px_24px_rgba(108,60,17,0.18)] transition-transform duration-200 hover:scale-105 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container md:bottom-7 md:right-[6.25rem]"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
