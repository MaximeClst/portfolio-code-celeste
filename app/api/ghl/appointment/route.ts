import { NextResponse } from "next/server";
import { sendAppointmentNotification } from "@/lib/slack";

// Reçoit le webhook d'un Workflow GHL déclenché à la prise de RDV, en extrait les
// détails de l'appel, et notifie Slack (#rendez-vous-code). La forme exacte du
// payload GHL varie : on lit défensivement plusieurs clés possibles.

const asObj = (v: unknown): Record<string, unknown> =>
  v && typeof v === "object" ? (v as Record<string, unknown>) : {};

const pick = (...vals: unknown[]): string | undefined => {
  for (const v of vals) {
    if (typeof v === "string" && v.trim()) return v.trim();
  }
  return undefined;
};

function formatRdv(iso?: string): string | undefined {
  if (!iso) return undefined;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  try {
    return (
      new Intl.DateTimeFormat("fr-FR", {
        dateStyle: "full",
        timeStyle: "short",
        timeZone: "Indian/Reunion",
      }).format(d) + " (heure Réunion)"
    );
  } catch {
    return iso;
  }
}

export async function POST(request: Request) {
  // Protection optionnelle : si un secret est configuré, il doit être présent en
  // query (?secret=...) — à renseigner dans l'URL du webhook du workflow GHL.
  const secret = process.env.GHL_APPT_WEBHOOK_SECRET;
  if (secret) {
    const provided = new URL(request.url).searchParams.get("secret");
    if (provided !== secret) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }
  }

  let body: Record<string, unknown>;
  try {
    body = asObj(await request.json());
  } catch {
    return NextResponse.json({ error: "Corps invalide" }, { status: 400 });
  }

  const contact = asObj(body.contact);
  const cal = { ...asObj(body.appointment), ...asObj(body.calendar) };

  const firstLast = [
    pick(body.first_name, body.firstName, contact.first_name),
    pick(body.last_name, body.lastName, contact.last_name),
  ]
    .filter(Boolean)
    .join(" ");

  const fullName = pick(
    body.full_name,
    body.fullName,
    body.contact_name,
    contact.name,
    contact.full_name,
    firstLast || undefined
  );
  const email = pick(body.email, contact.email);
  const phone = pick(body.phone, contact.phone);
  const startsAt = formatRdv(
    pick(
      cal.startTime,
      cal.start_time,
      cal.selectedSlot,
      body.start_time,
      body.startTime
    )
  );
  const title = pick(
    cal.title,
    cal.calendarName,
    cal.calendar_name,
    body.calendar_name
  );
  const status = pick(
    cal.appoinmentStatus, // orthographe historique de GHL
    cal.appointmentStatus,
    cal.status,
    body.appointment_status
  );

  await sendAppointmentNotification({ fullName, email, phone, startsAt, title, status });

  return NextResponse.json({ ok: true });
}
