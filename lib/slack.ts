// Notifications Slack (Incoming Webhooks). No-op si le webhook n'est pas configuré ;
// ne jettent jamais (le tracking ne doit pas casser le flux métier).

const MAXIME_SLACK_ID = "U08NPHMEL8K";

const line = (label: string, value?: string) =>
  value ? `*${label} :* ${value}` : null;

async function postSlack(url: string, payload: unknown) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error("[slack] échec notification", res.status, await res.text());
    }
  } catch (err) {
    console.error("[slack] erreur réseau", err);
  }
}

export type ProspectNotification = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  currentSite?: string;
  metier?: string;
  projet?: string;
  dejaSite?: string;
  objectif?: string;
  probleme?: string;
  source: string;
};

// Canal #prospects-code : nouveau prospect dans l'optin.
export async function sendProspectNotification(p: ProspectNotification) {
  const url = process.env.SLACK_WEBHOOK_URL;
  if (!url) return;

  const details = [
    line("Nom", p.fullName),
    line("Email", p.email),
    line("Téléphone", p.phone),
    line("Entreprise", p.company),
    line("Métier", p.metier),
    line("Type de projet", p.projet),
    line("Déjà un site", p.dejaSite),
    line("Objectif", p.objectif),
    line("Problématique", p.probleme),
    line("Site actuel", p.currentSite),
    line("Source", p.source),
  ]
    .filter(Boolean)
    .join("\n");

  await postSlack(url, {
    text: `🎯 Nouveau prospect : ${p.fullName} — ${p.company}`,
    blocks: [
      {
        type: "header",
        text: { type: "plain_text", text: "🎯 Nouveau prospect", emoji: true },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `<@${MAXIME_SLACK_ID}> un nouveau prospect vient de remplir le formulaire 👇`,
        },
      },
      { type: "section", text: { type: "mrkdwn", text: details } },
    ],
  });
}

export type AppointmentNotification = {
  fullName?: string;
  email?: string;
  phone?: string;
  startsAt?: string; // créneau déjà formaté (texte)
  title?: string; // nom du calendrier / type de RDV
  status?: string;
};

// Canal #rendez-vous-code : nouveau RDV planifié sur l'agenda GHL.
export async function sendAppointmentNotification(a: AppointmentNotification) {
  const url = process.env.SLACK_RDV_WEBHOOK_URL;
  if (!url) return;

  const details =
    [
      line("Contact", a.fullName),
      line("Email", a.email),
      line("Téléphone", a.phone),
      line("Créneau", a.startsAt),
      line("Type", a.title),
      line("Statut", a.status),
    ]
      .filter(Boolean)
      .join("\n") || "Détails indisponibles.";

  await postSlack(url, {
    text: `📅 Nouveau rendez-vous${a.fullName ? ` : ${a.fullName}` : ""}${
      a.startsAt ? ` — ${a.startsAt}` : ""
    }`,
    blocks: [
      {
        type: "header",
        text: { type: "plain_text", text: "📅 Nouveau rendez-vous", emoji: true },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `<@${MAXIME_SLACK_ID}> un appel vient d'être réservé 👇`,
        },
      },
      { type: "section", text: { type: "mrkdwn", text: details } },
    ],
  });
}
