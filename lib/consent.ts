// Consentement aux traceurs publicitaires (Pixel Meta + envoi serveur CAPI).
// Le choix reste dans le navigateur du visiteur, 6 mois au plus (recommandation CNIL),
// puis le bandeau est reproposé.

export type Consent = "granted" | "denied";

const KEY = "cc-consent-ads";
const MAX_AGE_MS = 180 * 24 * 60 * 60 * 1000;
export const CONSENT_EVENT = "cc-consent-change";

export function getConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const { value, at } = JSON.parse(raw) as { value: Consent; at: number };
    if (Date.now() - at > MAX_AGE_MS) return null;
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function hasAdsConsent(): boolean {
  return typeof window !== "undefined" && getConsent() === "granted";
}

// Supprime les cookies Meta déjà posés (refus ou retrait du consentement).
function clearMetaCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host.replace(/^www\./, "")}`];
  for (const name of ["_fbp", "_fbc"]) {
    for (const d of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
    }
  }
}

export function setConsent(value: Consent | null) {
  try {
    if (value) {
      window.localStorage.setItem(KEY, JSON.stringify({ value, at: Date.now() }));
    } else {
      window.localStorage.removeItem(KEY);
    }
  } catch {
    // Stockage indisponible (navigation privée stricte) : le choix vaut pour la page.
  }
  if (value !== "granted") clearMetaCookies();
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}
