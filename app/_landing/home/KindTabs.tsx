"use client";

import { cn } from "@/lib/utils";
import { createContext, ReactNode, useContext, useState } from "react";

export type Kind = "sites" | "apps";

const KindContext = createContext<{
  kind: Kind;
  setKind: (k: Kind) => void;
} | null>(null);

// Un seul choix « Sites web / Apps mobiles » partagé par les réalisations et les
// offres : basculer l'un bascule l'autre.
export function KindProvider({ children }: { children: ReactNode }) {
  const [kind, setKind] = useState<Kind>("sites");
  return (
    <KindContext.Provider value={{ kind, setKind }}>
      {children}
    </KindContext.Provider>
  );
}

export function useKind() {
  const ctx = useContext(KindContext);
  if (!ctx) throw new Error("useKind must be used within KindProvider");
  return ctx;
}

const tabs: { id: Kind; label: string }[] = [
  { id: "sites", label: "Sites web" },
  { id: "apps", label: "Apps mobiles" },
];

export function KindTabs() {
  const { kind, setKind } = useKind();
  return (
    <div
      role="tablist"
      aria-label="Type de projet"
      className="flex rounded-full border border-border bg-card p-1 text-sm"
    >
      {tabs.map((t) => (
        <button
          key={t.id}
          type="button"
          role="tab"
          aria-selected={kind === t.id}
          onClick={() => setKind(t.id)}
          className={cn(
            "rounded-full px-4 py-1.5 transition-colors",
            kind === t.id
              ? "bg-brand text-white"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
