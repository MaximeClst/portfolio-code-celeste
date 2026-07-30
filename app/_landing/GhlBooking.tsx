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

  // form_embed.js ajuste la hauteur au contenu (pas d'espace vide superflu). Le
  // minHeight sert de plancher anti-collapse au chargement ; sans scrolling="no",
  // l'iframe garde un scroll natif de secours si le script n'a pas (encore) ajusté.
  return (
    <iframe
      src={`https://api.leadconnectorhq.com/widget/booking/${CALENDAR_ID}`}
      title="Réserver un appel découverte avec Maxime"
      id={`${CALENDAR_ID}_booking`}
      style={{
        width: "100%",
        minHeight: 560,
        border: 0,
        background: "transparent",
        display: "block",
      }}
    />
  );
}
