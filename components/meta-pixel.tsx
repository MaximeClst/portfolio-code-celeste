"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { CONSENT_EVENT, getConsent, setConsent, type Consent } from "@/lib/consent";
import { META_PIXEL_ID } from "@/lib/meta";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

// Charge le Pixel Meta seulement après accord du visiteur ; sans choix, affiche le bandeau.
// À rendre sur les pages à tracker (/ads, /confirmation).
export function MetaPixel() {
  // undefined = pas encore lu (rendu serveur) ; null = aucun choix enregistré.
  const [consent, setConsentState] = useState<Consent | null | undefined>(undefined);

  useEffect(() => {
    setConsentState(getConsent());
    const onChange = (e: Event) => setConsentState((e as CustomEvent<Consent | null>).detail);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (consent === undefined) return null;
  if (consent === null) return <CookieBanner />;
  if (consent === "denied") return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
    </Script>
  );
}

// Bandeau de consentement : « Refuser » et « Accepter » ont le même poids visuel.
function CookieBanner() {
  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Choix des cookies"
      className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-xl rounded-2xl border border-border bg-card/95 p-5 text-sm text-foreground shadow-2xl shadow-black/50 backdrop-blur sm:inset-x-6 sm:bottom-6"
    >
      <p className="font-medium">Cookies publicitaires</p>
      <p className="mt-2 leading-relaxed text-muted-foreground">
        J’aimerais utiliser le pixel Meta (Facebook, Instagram) pour mesurer
        l’efficacité de mes publicités. Il dépose des cookies et transmet
        certaines données à Meta. Vous pouvez refuser : le site fonctionne de
        la même façon.{" "}
        <Link href="/politique-de-confidentialite#cookies" className="text-violet-300 underline underline-offset-2 hover:text-foreground">
          En savoir plus
        </Link>
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => setConsent("denied")}
          className="h-11 rounded-xl border border-border bg-background px-4 font-medium transition-colors hover:bg-white/5"
        >
          Refuser
        </button>
        <button
          type="button"
          onClick={() => setConsent("granted")}
          className="h-11 rounded-xl border border-border bg-background px-4 font-medium transition-colors hover:bg-white/5"
        >
          Accepter
        </button>
      </div>
    </div>
  );
}

// Génère un identifiant d'événement partagé Pixel/CAPI pour la déduplication.
export function newEventId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
}

// Envoie un événement standard au Pixel avec l'eventID (dédup côté serveur via CAPI).
// Sans consentement, le Pixel n'est pas chargé : window.fbq n'existe pas et rien ne part.
export function trackMeta(
  eventName: string,
  eventId: string,
  customData?: Record<string, unknown>
) {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", eventName, customData ?? {}, { eventID: eventId });
}
