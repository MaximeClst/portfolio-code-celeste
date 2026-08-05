import { NextResponse } from "next/server";
import { sendAppointmentNotification } from "@/lib/slack";

// Reçoit le webhook d'un Workflow GHL déclenché à la prise de RDV. Le payload GHL
// par défaut ne contient pas de façon fiable le créneau ni le nom, mais il permet
// d'identifier le contact — on récupère alors les détails du RDV via l'API GHL.

const GHL_BASE = "https://services.leadconnectorhq.com";

const asObj = (v: unknown): Record<string, unknown> =>
  v && typeof v === "object" ? (v as Record<string, unknown>) : {};

const asArray = (v: unknown): unknown[] => (Array.isArray(v) ? v : []);

const pick = (...vals: unknown[]): string | undefined => {
  for (const v of vals) {
    if (typeof v === "string" && v.trim()) return v.trim();
  }
  return undefined;
};

// GHL renvoie les datetimes dans le fuseau du calendrier (Indian/Reunion), au
// format "YYYY-MM-DD HH:MM:SS" sans offset. On reformate SANS reconvertir de
// fuseau (sinon double décalage).
function formatRdv(raw?: string): string | undefined {
  if (!raw) return undefined;
  const m = raw.match(/(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})/);
  if (!m) return raw;
  const dt = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5]));
  if (Number.isNaN(dt.getTime())) return raw;
  try {
    return `${new Intl.DateTimeFormat("fr-FR", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "UTC",
    }).format(dt)} (heure Réunion)`;
  } catch {
    return raw;
  }
}

function ghlHeaders(version: string) {
  return {
    Authorization: `Bearer ${process.env.GHL_API_TOKEN}`,
    Version: version,
    Accept: "application/json",
  };
}

// Identifie le contact : id fourni par le webhook, sinon recherche par email.
async function resolveContactId(
  body: Record<string, unknown>
): Promise<string | undefined> {
  const contact = asObj(body.contact);
  const fromWebhook = pick(
    body.contact_id,
    body.contactId,
    contact.id,
    contact.contact_id
  );
  if (fromWebhook) return fromWebhook;

  const email = pick(body.email, contact.email);
  const locationId = process.env.GHL_LOCATION_ID;
  if (!email || !process.env.GHL_API_TOKEN || !locationId) return undefined;

  try {
    const res = await fetch(
      `${GHL_BASE}/contacts/?locationId=${locationId}&query=${encodeURIComponent(
        email
      )}&limit=1`,
      { headers: ghlHeaders("2021-07-28") }
    );
    if (!res.ok) return undefined;
    const data = (await res.json()) as { contacts?: unknown[] };
    return pick(asObj((data.contacts ?? [])[0]).id);
  } catch {
    return undefined;
  }
}

// Récupère le RDV le plus récemment créé du contact (celui qui vient d'être pris).
async function fetchLatestAppointment(
  contactId: string
): Promise<Record<string, unknown> | null> {
  if (!process.env.GHL_API_TOKEN) return null;
  try {
    const res = await fetch(
      `${GHL_BASE}/contacts/${contactId}/appointments`,
      { headers: ghlHeaders("2021-04-15") }
    );
    if (!res.ok) return null;
    const data = (await res.json()) as { events?: unknown[] };
    const events = (Array.isArray(data.events) ? data.events : []).map(asObj);
    if (!events.length) return null;
    events.sort((a, b) =>
      String(b.dateAdded ?? "").localeCompare(String(a.dateAdded ?? ""))
    );
    return events[0];
  } catch {
    return null;
  }
}

// Idempotence : on marque le contact d'un tag propre au RDV. Un 2e webhook pour
// le même RDV (workflow GHL qui refire sur booked puis confirmed, renvois…) est
// alors ignoré → pas de doublon Slack.
function notifTag(appointmentId: string) {
  return `rdv-slack-${appointmentId}`.toLowerCase();
}

async function alreadyNotified(contactId: string, appointmentId: string) {
  if (!process.env.GHL_API_TOKEN) return false;
  try {
    const res = await fetch(`${GHL_BASE}/contacts/${contactId}`, {
      headers: ghlHeaders("2021-07-28"),
    });
    if (!res.ok) return false;
    const data = (await res.json()) as { contact?: unknown };
    const tags = asArray(asObj(data.contact).tags).map((t) =>
      String(t).toLowerCase()
    );
    return tags.includes(notifTag(appointmentId));
  } catch {
    return false;
  }
}

async function markNotified(contactId: string, appointmentId: string) {
  if (!process.env.GHL_API_TOKEN) return;
  try {
    await fetch(`${GHL_BASE}/contacts/${contactId}/tags`, {
      method: "POST",
      headers: { ...ghlHeaders("2021-07-28"), "Content-Type": "application/json" },
      body: JSON.stringify({ tags: [notifTag(appointmentId)] }),
    });
  } catch {
    // best-effort : si le marquage échoue, on notifie quand même
  }
}

export async function POST(request: Request) {
  // Protection optionnelle : secret en query (?secret=...), configuré dans l'URL
  // du webhook du workflow GHL.
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
  let fullName = pick(
    body.full_name,
    body.fullName,
    body.contact_name,
    contact.name
  );
  let email = pick(body.email, contact.email);
  let phone = pick(body.phone, contact.phone);
  let startsAt: string | undefined;
  let title: string | undefined;
  let meetLink: string | undefined;
  let status: string | undefined;

  let appointmentId: string | undefined;
  const contactId = await resolveContactId(body);
  if (contactId) {
    const appt = await fetchLatestAppointment(contactId);
    if (appt) {
      appointmentId = pick(appt.id);
      const form = asObj(asObj(appt.appointmentMeta).defaultFormDetails);
      const composed = [pick(form.firstName), pick(form.lastName)]
        .filter(Boolean)
        .join(" ");
      // Titre GHL = "Prénom Nom - Type" → on isole le type après le dernier " - ".
      const rawTitle = pick(appt.title);
      const type = rawTitle?.includes(" - ")
        ? rawTitle.slice(rawTitle.lastIndexOf(" - ") + 3)
        : rawTitle;

      fullName = fullName ?? (composed || undefined);
      email = email ?? pick(form.email);
      phone = phone ?? pick(form.phone);
      startsAt = formatRdv(pick(appt.startTime));
      title = type;
      meetLink = pick(appt.address);
      status = pick(appt.appointmentStatus, appt.appoinmentStatus, appt.status);
    }
  }

  // Anti-doublon : si ce RDV a déjà été notifié, on s'arrête là.
  if (contactId && appointmentId) {
    if (await alreadyNotified(contactId, appointmentId)) {
      return NextResponse.json({ ok: true, notified: false, reason: "duplicate" });
    }
    await markNotified(contactId, appointmentId);
  }

  await sendAppointmentNotification({
    fullName,
    email,
    phone,
    startsAt,
    title,
    meetLink,
    status,
  });

  return NextResponse.json({ ok: true, notified: true });
}
