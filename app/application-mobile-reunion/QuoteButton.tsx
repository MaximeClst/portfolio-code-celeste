"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useQuoteModal } from "../_landing/QuoteModal";

export function QuoteButton() {
  const { open } = useQuoteModal();
  return (
    <Button size="lg" onClick={() => open({ projectType: "app-mobile" })}>
      Estimer mon application <ArrowRight className="size-4" aria-hidden />
    </Button>
  );
}
