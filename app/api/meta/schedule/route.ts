import { NextResponse } from "next/server";
import { readCookie, sendCapiEvent } from "@/lib/meta-capi";

// Événement "Schedule" côté serveur (CAPI), déclenché depuis /confirmation après
// la réservation. Pas de PII disponible sur cette page : on s'appuie sur les
// cookies _fbp/_fbc + IP + user-agent pour la correspondance.
export async function POST(request: Request) {
  let body: { eventId?: unknown; eventSourceUrl?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corps invalide" }, { status: 400 });
  }

  const eventId = typeof body.eventId === "string" ? body.eventId : "";
  if (!eventId) {
    return NextResponse.json({ error: "eventId manquant" }, { status: 400 });
  }

  const cookie = request.headers.get("cookie");
  await sendCapiEvent({
    eventName: "Schedule",
    eventId,
    eventSourceUrl:
      typeof body.eventSourceUrl === "string" ? body.eventSourceUrl : undefined,
    clientIp: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim(),
    userAgent: request.headers.get("user-agent") ?? undefined,
    fbp: readCookie(cookie, "_fbp"),
    fbc: readCookie(cookie, "_fbc"),
  });

  return NextResponse.json({ ok: true });
}
