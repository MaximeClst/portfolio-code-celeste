import { NextResponse } from "next/server";
import { readCookie, sendCapiEvent } from "@/lib/meta-capi";

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";

// Champ personnalisé d'opportunité « Détails de la demande » (texte multiligne).
// ID de ressource GHL (pas un secret) — propre à la location Code Celeste.
const OPPORTUNITY_DETAILS_FIELD_ID = "IPoJLuMDDRmhRl40pW46";

// Champs personnalisés de contact — miroir de la qualif directement sur la fiche prospect.
const CONTACT_FIELDS = {
  metier: "8sWrtshAB59qqMRbbwHZ",
  projet: "IdzHdPCMOZpau5vgryTm",
  hasSite: "oW6nP5km14VfFYb6HLUq",
  objectif: "lDKIIv6m6hMrMq1oQK7N",
  probleme: "MER62Voaa6u3ljXRgr9W",
  siteActuel: "K6NopCcxZg9G9qCU0Kuv",
} as const;

type ProjectType = "site-artisan" | "app-mobile" | "mvp" | "refonte";
type HasSite = "oui" | "non";
type Goal = "clients" | "google" | "pro" | "test-idee" | "moderniser";
type Pain = "visibilite" | "vieux" | "trop-cher" | "commencer";

const PROJECT_LABELS: Record<ProjectType, string> = {
  "site-artisan": "Site web pour artisan",
  "app-mobile": "Application mobile",
  mvp: "MVP / Prototype rapide",
  refonte: "Refonte d'un site existant",
};

const HAS_SITE_LABELS: Record<HasSite, string> = {
  oui: "A déjà un site / une app",
  non: "N'a pas de site / d'app",
};

const GOAL_LABELS: Record<Goal, string> = {
  clients: "Avoir plus de clients",
  google: "Être visible sur Google",
  pro: "Avoir un site / une app pro",
  "test-idee": "Tester son idée rapidement",
  moderniser: "Moderniser son image",
};

const PAIN_LABELS: Record<Pain, string> = {
  visibilite: "Pas assez de visibilité",
  vieux: "Site / app trop vieux",
  "trop-cher": "Trop cher ailleurs",
  commencer: "Ne sait pas par où commencer",
};

type LeadBody = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  currentSite?: unknown;
  projectType?: unknown;
  hasSite?: unknown;
  goal?: unknown;
  pain?: unknown;
  metier?: unknown;
  source?: unknown;
  meta?: { eventId?: unknown; eventSourceUrl?: unknown };
};

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

// La Réunion : 0262/0263 (fixe), 0692/0693 (mobile). Métropole : 0X........
// GHL attend de l'E.164 — on convertit le format local en international.
function normalizePhone(raw: string): string {
  const cleaned = raw.replace(/[^\d+]/g, "");
  if (cleaned.startsWith("+")) return cleaned;
  if (/^0(262|263|692|693)\d{6}$/.test(cleaned)) return "+262" + cleaned.slice(1);
  if (/^0\d{9}$/.test(cleaned)) return "+33" + cleaned.slice(1);
  return cleaned;
}

function ghlHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    Version: GHL_VERSION,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

export async function POST(request: Request) {
  const token = process.env.GHL_API_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!token || !locationId) {
    console.error("[lead] GHL_API_TOKEN ou GHL_LOCATION_ID manquant côté serveur");
    return NextResponse.json({ error: "Configuration serveur manquante" }, { status: 500 });
  }

  let body: LeadBody;
  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide" }, { status: 400 });
  }

  const firstName = str(body.firstName);
  const lastName = str(body.lastName);
  const email = str(body.email);
  const phone = str(body.phone);
  const company = str(body.company);
  const currentSite = str(body.currentSite);

  if (!firstName || !lastName || !email || !phone || !company) {
    return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email invalide" }, { status: 400 });
  }

  const projectType = body.projectType as ProjectType | null;
  const hasSite = body.hasSite as HasSite | null;
  const goal = body.goal as Goal | null;
  const pain = body.pain as Pain | null;
  const metier = str(body.metier); // métier de l'artisan (funnel /ads uniquement)
  const source = str(body.source) || "Site web Code Celeste";

  const projectLabel = projectType ? PROJECT_LABELS[projectType] : undefined;
  const goalLabel = goal ? GOAL_LABELS[goal] : undefined;

  const tags = [
    "Lead site web",
    metier && `Métier : ${metier}`,
    projectLabel && `Projet : ${projectLabel}`,
    goalLabel && `Objectif : ${goalLabel}`,
  ].filter(Boolean) as string[];

  const headers = ghlHeaders(token);

  // Réponses de qualif portées directement par le contact (seulement les valeurs
  // renseignées, pour ne pas écraser un champ existant lors d'un ré-upsert).
  const contactCustomFields = [
    metier && { id: CONTACT_FIELDS.metier, field_value: metier },
    projectLabel && { id: CONTACT_FIELDS.projet, field_value: projectLabel },
    hasSite && { id: CONTACT_FIELDS.hasSite, field_value: HAS_SITE_LABELS[hasSite] },
    goalLabel && { id: CONTACT_FIELDS.objectif, field_value: goalLabel },
    pain && { id: CONTACT_FIELDS.probleme, field_value: PAIN_LABELS[pain] },
    currentSite && { id: CONTACT_FIELDS.siteActuel, field_value: currentSite },
  ].filter(Boolean) as { id: string; field_value: string }[];

  // 1. Upsert du contact (dédup par email / téléphone dans la location)
  let contactId: string | null = null;
  try {
    const res = await fetch(`${GHL_BASE}/contacts/upsert`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        locationId,
        firstName,
        lastName,
        name: `${firstName} ${lastName}`,
        email,
        phone: normalizePhone(phone),
        companyName: company,
        source,
        tags,
        customFields: contactCustomFields,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error(`[lead] Échec upsert GHL (${res.status})`, detail);
      return NextResponse.json({ error: "Échec de l'enregistrement" }, { status: 502 });
    }

    const data = (await res.json()) as { contact?: { id?: string } };
    contactId = data.contact?.id ?? null;
  } catch (err) {
    console.error("[lead] Erreur réseau upsert GHL", err);
    return NextResponse.json({ error: "Service indisponible" }, { status: 502 });
  }

  // À partir d'ici le contact est capturé : les erreurs suivantes ne bloquent pas la réponse.
  if (contactId) {
    // Récapitulatif des réponses de l'optin, porté par l'opportunité.
    const qualificationRecap = [
      metier && `Métier : ${metier}`,
      `Type de projet : ${projectLabel ?? "—"}`,
      `Déjà un site / une app : ${hasSite ? HAS_SITE_LABELS[hasSite] : "—"}`,
      `Objectif principal : ${goalLabel ?? "—"}`,
      `Problématique : ${pain ? PAIN_LABELS[pain] : "—"}`,
      `Site actuel : ${currentSite || "—"}`,
    ]
      .filter(Boolean)
      .join("\n");

    // Opportunité (seulement si un pipeline est configuré) avec la qualif en clair.
    const pipelineId = process.env.GHL_PIPELINE_ID;
    const stageId = process.env.GHL_PIPELINE_STAGE_ID;
    if (pipelineId && stageId) {
      try {
        await fetch(`${GHL_BASE}/opportunities/`, {
          method: "POST",
          headers,
          body: JSON.stringify({
            locationId,
            pipelineId,
            pipelineStageId: stageId,
            name: `${firstName} ${lastName} - ${company.toUpperCase()}`,
            status: "open",
            contactId,
            customFields: [
              { id: OPPORTUNITY_DETAILS_FIELD_ID, field_value: qualificationRecap },
            ],
          }),
        });
      } catch (err) {
        console.error("[lead] Échec création opportunité GHL", err);
      }
    }
  }

  // Événement "Lead" côté serveur (CAPI), dédupliqué avec le Pixel via event_id.
  // Déclenché uniquement quand le client fournit un eventId (funnel /ads).
  const eventId =
    typeof body.meta?.eventId === "string" ? body.meta.eventId : "";
  if (eventId) {
    const cookie = request.headers.get("cookie");
    await sendCapiEvent({
      eventName: "Lead",
      eventId,
      eventSourceUrl:
        typeof body.meta?.eventSourceUrl === "string"
          ? body.meta.eventSourceUrl
          : undefined,
      userData: {
        email,
        phone: normalizePhone(phone),
        firstName,
        lastName,
      },
      clientIp: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim(),
      userAgent: request.headers.get("user-agent") ?? undefined,
      fbp: readCookie(cookie, "_fbp"),
      fbc: readCookie(cookie, "_fbc"),
    });
  }

  return NextResponse.json({ ok: true, contactId });
}
