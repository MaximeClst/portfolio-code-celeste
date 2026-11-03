"use client";

import { ArrowRight } from "lucide-react";
import { useQuoteModal } from "../_landing/QuoteModal";

export function QuoteButton() {
  const { open } = useQuoteModal();
  return (
    <button
      type="button"
      onClick={() => open({ projectType: "site-artisan" })}
      className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-brand px-5 text-sm font-medium text-white transition-colors hover:bg-brand/90"
    >
      Estimer mon site artisan
      <ArrowRight className="size-4" aria-hidden />
    </button>
  );
}
