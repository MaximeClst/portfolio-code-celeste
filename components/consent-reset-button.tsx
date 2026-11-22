"use client";

import { useEffect, useState } from "react";
import { CONSENT_EVENT, getConsent, setConsent, type Consent } from "@/lib/consent";

const labels: Record<Consent, string> = {
  granted: "acceptés",
  denied: "refusés",
};

// Permet de retirer son choix aussi simplement qu'il a été donné.
export function ConsentResetButton() {
  const [consent, setState] = useState<Consent | null | undefined>(undefined);

  useEffect(() => {
    setState(getConsent());
    const onChange = (e: Event) => setState((e as CustomEvent<Consent | null>).detail);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (consent === undefined) return null;

  return (
    <div className="rounded-2xl border border-border bg-card p-4 text-sm">
      <p>
        Votre choix actuel :{" "}
        <strong className="text-foreground">
          {consent ? `cookies publicitaires ${labels[consent]}` : "aucun choix enregistré"}
        </strong>
        .
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setConsent("denied")}
          className="h-10 rounded-xl border border-border bg-background px-4 font-medium transition-colors hover:bg-white/5"
        >
          Refuser les cookies publicitaires
        </button>
        <button
          type="button"
          onClick={() => setConsent("granted")}
          className="h-10 rounded-xl border border-border bg-background px-4 font-medium transition-colors hover:bg-white/5"
        >
          Les accepter
        </button>
      </div>
    </div>
  );
}
