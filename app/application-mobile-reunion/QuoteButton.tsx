"use client";

import { ArrowRight } from "lucide-react";
import { useQuoteModal } from "../_landing/QuoteModal";

export function QuoteButton() {
  const { open } = useQuoteModal();
  return (
    <button
      type="button"
      onClick={() => open({ projectType: "app-mobile" })}
      className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-brand px-5 text-sm font-medium text-white transition-colors hover:bg-brand/90"
    >
      Estimer mon application
      <ArrowRight className="size-4" aria-hidden />
    </button>
  );
}
