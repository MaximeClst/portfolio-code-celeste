"use client";

import { useEffect } from "react";

// Calendrier GoHighLevel « Appel découverte » (30 min, round-robin sur Maxime).
// L'ID est celui du widget de réservation public — pas un secret.
const CALENDAR_ID = "1CCYtlSHNO8e3Fnf94eY";
const EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";

export function GhlBooking() {
  // Le script GHL pilote la hauteur de l'iframe et, après réservation, propage
  // la redirection (vers /confirmation) à la fenêtre parente.
  useEffect(() => {
    if (document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) return;
    const s = document.createElement("script");
    s.src = EMBED_SCRIPT;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <iframe
      src={`https://api.leadconnectorhq.com/widget/booking/${CALENDAR_ID}`}
      title="Réserver un appel découverte avec Maxime"
      id={`${CALENDAR_ID}_booking`}
      scrolling="no"
      className="h-full w-full border-0 bg-transparent"
    />
  );
}
