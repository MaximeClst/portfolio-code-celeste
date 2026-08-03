// Notification Slack d'un nouveau prospect (canal #prospects-code via Incoming Webhook).
// No-op si le webhook n'est pas configuré ; ne jette jamais (ne doit pas casser le lead).

const MAXIME_SLACK_ID = "U08NPHMEL8K";

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

export async function sendProspectNotification(p: ProspectNotification) {
  const url = process.env.SLACK_WEBHOOK_URL;
  if (!url) return;

  const line = (label: string, value?: string) =>
    value ? `*${label} :* ${value}` : null;

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

  const body = {
    // `text` sert de repli (notification push mobile / clients sans Block Kit).
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
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      console.error("[slack] échec notification", res.status, await res.text());
    }
  } catch (err) {
    console.error("[slack] erreur réseau", err);
  }
}
