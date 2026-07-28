import { createHash } from "crypto";
import { META_GRAPH_VERSION, META_PIXEL_ID } from "./meta";

const sha256 = (v: string) =>
  createHash("sha256").update(v.trim().toLowerCase()).digest("hex");

type CapiUserData = {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
};

type CapiEvent = {
  eventName: string;
  eventId: string;
  eventSourceUrl?: string;
  actionSource?: "website" | "system_generated";
  userData?: CapiUserData;
  customData?: Record<string, unknown>;
  clientIp?: string;
  userAgent?: string;
  fbp?: string;
  fbc?: string;
};

// Lit un cookie dans l'en-tête `Cookie` d'une requête serveur.
export function readCookie(header: string | null, name: string) {
  if (!header) return undefined;
  const match = header.match(new RegExp(`(?:^|; )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

// Envoie un événement à la Conversions API de Meta. No-op si le token n'est pas
// configuré ; ne jette jamais (le tracking ne doit pas casser le flux métier).
export async function sendCapiEvent(event: CapiEvent) {
  const token = process.env.META_CAPI_TOKEN;
  if (!token) return;

  const u = event.userData ?? {};
  const user_data: Record<string, unknown> = {};
  if (u.email) user_data.em = sha256(u.email);
  if (u.phone) {
    const digits = u.phone.replace(/[^\d]/g, "");
    if (digits) user_data.ph = sha256(digits);
  }
  if (u.firstName) user_data.fn = sha256(u.firstName);
  if (u.lastName) user_data.ln = sha256(u.lastName);
  if (u.city) user_data.ct = sha256(u.city);
  if (event.clientIp) user_data.client_ip_address = event.clientIp;
  if (event.userAgent) user_data.client_user_agent = event.userAgent;
  if (event.fbp) user_data.fbp = event.fbp;
  if (event.fbc) user_data.fbc = event.fbc;

  const payload = {
    data: [
      {
        event_name: event.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: event.eventId,
        action_source: event.actionSource ?? "website",
        ...(event.eventSourceUrl && { event_source_url: event.eventSourceUrl }),
        user_data,
        custom_data: event.customData ?? {},
      },
    ],
  };

  try {
    const res = await fetch(
      `https://graph.facebook.com/${META_GRAPH_VERSION}/${META_PIXEL_ID}/events?access_token=${token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    if (!res.ok) {
      console.error("[meta-capi] échec", res.status, await res.text());
    }
  } catch (err) {
    console.error("[meta-capi] erreur réseau", err);
  }
}
