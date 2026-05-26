"use client";

import { Button } from "@/components/ui/button";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface CalComButtonProps {
  namespace?: string;
  calLink?: string;
  layout?: "month_view" | "week_view" | "column_view";
  buttonText?: string;
  buttonSize?: "default" | "sm" | "lg" | "icon";
  buttonVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  className?: string;
  brandColor?: string;
  hideEventTypeDetails?: boolean;
}

export function CalComButton({
  namespace = "15min",
  calLink = "codeceleste/15min",
  layout = "month_view",
  buttonText = "Prendre rendez-vous",
  buttonSize = "lg",
  buttonVariant = "default",
  className = "w-fit mt-6 cursor-pointer h-14 text-lg",
  brandColor = "#7737b8",
  hideEventTypeDetails = false,
}: CalComButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": brandColor },
          dark: { "cal-brand": brandColor },
        },
        hideEventTypeDetails,
        layout,
      });
    })();
  }, [namespace, brandColor, hideEventTypeDetails, layout]);

  return (
    <Button
      size={buttonSize}
      variant={buttonVariant}
      className={className}
      data-cal-namespace={namespace}
      data-cal-link={calLink}
      data-cal-config={JSON.stringify({ layout })}
    >
      {buttonText}
    </Button>
  );
}

// Composant original pour la compatibilité
export function CalComEmbed() {
  return <CalComButton />;
}

export function CalEmbed({
  brandColor = "#7737b8",
  hideEventTypeDetails = true,
}: {
  brandColor?: string;
  hideEventTypeDetails?: boolean;
} = {}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": brandColor },
          dark: { "cal-brand": brandColor },
        },
        hideEventTypeDetails,
        layout: "month_view",
      });
    })();
  }, [brandColor, hideEventTypeDetails]);

  return (
    <Cal
      namespace="15min"
      calLink="codeceleste/15min"
      style={{ width: "100%", height: "100%", background: "transparent" }}
      config={{
        layout: "month_view",
        theme: "dark",
      }}
    />
  );
}
