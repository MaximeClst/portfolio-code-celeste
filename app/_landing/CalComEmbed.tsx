"use client";

import { Button } from "@/components/ui/button";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export function CalComEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#7737b8" },
          dark: { "cal-brand": "#7737b8" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <Button
      size="lg"
      variant="default"
      className="w-fit mt-6 cursor-pointer h-14 text-lg"
      data-cal-namespace="15min"
      data-cal-link="maxime-celeste-jqxmmh/15min"
      data-cal-config='{"layout":"month_view"}'
    >
      Prendre rendez-vous
    </Button>
  );
}
