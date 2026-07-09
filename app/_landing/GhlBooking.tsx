"use client";

// Calendrier GoHighLevel « Appel découverte » (30 min, round-robin sur Maxime).
// L'ID est celui du widget de réservation public — pas un secret.
const CALENDAR_ID = "1CCYtlSHNO8e3Fnf94eY";

export function GhlBooking() {
  return (
    <iframe
      src={`https://api.leadconnectorhq.com/widget/booking/${CALENDAR_ID}`}
      title="Réserver un appel découverte avec Maxime"
      className="h-full w-full border-0 bg-transparent"
    />
  );
}
