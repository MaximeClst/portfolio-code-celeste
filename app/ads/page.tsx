"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { GhlBooking } from "@/app/_landing/GhlBooking";
import { MetaPixel, newEventId, trackMeta } from "@/components/meta-pixel";

// Correspondance des réponses du funnel /ads vers les clés attendues par /api/lead.
const ADS_HAS_SITE: Record<string, "oui" | "non"> = {
  "Oui, mais je veux mieux": "oui",
  "Non, j'en veux un": "non",
};
const ADS_GOAL: Record<string, string> = {
  "Plus de clients": "clients",
  "Être visible sur Google": "google",
  "Avoir un site pro": "pro",
  "Moderniser mon image": "moderniser",
};
const ADS_PAIN: Record<string, string> = {
  "Pas assez de visibilité": "visibilite",
  "Mon site est trop vieux": "vieux",
  "Trop cher ailleurs": "trop-cher",
  "Je ne sais pas par où commencer": "commencer",
};

// Tokens extraits du CSS live de code-celeste.com :
// --brand: hsl(263 83% 58%) · --brand-secondary: hsl(239 84% 67%) · --background: hsl(0 0% 4%)
// --card: hsl(0 0% 8%) · --border: hsl(0 0% 16%) · --muted-foreground: hsl(0 0% 64%) · emerald #00d294 · font Geist
const MAXIME_PHOTO =
  "data:image/jpeg;base64,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";
const P = "#7C3AED",
  PL = "#A78BFA",
  PD = "#6366F1",
  BG = "#0a0a0a",
  CARD = "#141414",
  TEXT = "#fafafa",
  MUT = "#a3a3a3",
  RED = "#ef4444",
  GRN = "#00d294";

/* ── Reusable Icons ── */
const LogoIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 142 142" fill="none">
    <rect width="142" height="142" rx="34" fill="url(#ccBg)" />
    <rect
      x="2.5"
      y="2.5"
      width="137"
      height="137"
      rx="31.5"
      stroke="url(#ccBorder)"
      strokeWidth="5"
    />
    <g filter="url(#ccBlur)">
      <circle cx="71" cy="71" r="40" fill="#201DFF" fillOpacity="0.46" />
    </g>
    <path
      d="M70.0519 47.5876C70.1395 47.4111 70.2749 47.2627 70.4428 47.1588C70.6106 47.055 70.8042 47 71.0018 47C71.1994 47 71.393 47.055 71.5608 47.1588C71.7287 47.2627 71.8641 47.4111 71.9517 47.5876L76.5713 56.9102C76.8756 57.5238 77.3249 58.0547 77.8804 58.4572C78.436 58.8598 79.0813 59.122 79.761 59.2214L90.0921 60.7277C90.2878 60.756 90.4717 60.8382 90.623 60.9652C90.7743 61.0922 90.8869 61.2588 90.948 61.4462C91.0092 61.6336 91.0165 61.8343 90.9692 62.0257C90.9218 62.217 90.8216 62.3913 90.68 62.5289L83.2087 69.7774C82.716 70.2558 82.3473 70.8463 82.1345 71.4981C81.9216 72.1499 81.8709 72.8435 81.9868 73.5192L83.7506 83.7604C83.7852 83.9553 83.7641 84.156 83.6897 84.3395C83.6152 84.5231 83.4905 84.6821 83.3298 84.7984C83.169 84.9147 82.9787 84.9837 82.7805 84.9975C82.5823 85.0112 82.3842 84.9691 82.2088 84.8761L72.9736 80.0385C72.3651 79.7201 71.6881 79.5538 71.0008 79.5538C70.3135 79.5538 69.6365 79.7201 69.028 80.0385L59.7948 84.8761C59.6195 84.9686 59.4216 85.0102 59.2238 84.9962C59.0259 84.9822 58.8359 84.9131 58.6755 84.7969C58.5151 84.6806 58.3906 84.5218 58.3163 84.3386C58.2419 84.1554 58.2207 83.955 58.2549 83.7604L60.0168 73.5212C60.1332 72.8452 60.0827 72.1512 59.8699 71.499C59.657 70.8467 59.2881 70.2559 58.7949 69.7774L51.3236 62.5309C51.1808 62.3935 51.0796 62.2189 51.0315 62.0269C50.9835 61.835 50.9905 61.6335 51.0518 61.4454C51.113 61.2572 51.2261 61.09 51.3781 60.9628C51.5301 60.8356 51.7149 60.7534 51.9115 60.7257L62.2406 59.2214C62.921 59.1228 63.5672 58.8609 64.1236 58.4583C64.6799 58.0557 65.1297 57.5244 65.4343 56.9102L70.0519 47.5876Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M109.889 32H32.1111C25.9746 32 21 37.0741 21 43.3333V88.6667C21 94.9259 25.9746 100 32.1111 100H109.889C116.025 100 121 94.9259 121 88.6667V43.3333C121 37.0741 116.025 32 109.889 32Z"
      stroke="white"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 111H121"
      stroke="white"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="ccBg"
        x1="142"
        y1="0"
        x2="0"
        y2="142"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0C0D0E" />
        <stop offset="1" stopColor="#222222" />
      </linearGradient>
      <linearGradient
        id="ccBorder"
        x1="142"
        y1="142"
        x2="0"
        y2="0"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#733DE4" />
        <stop offset="1" stopColor="#C0B6FF" />
      </linearGradient>
      <filter
        id="ccBlur"
        x="-19"
        y="-19"
        width="180"
        height="180"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation="25" />
      </filter>
    </defs>
  </svg>
);
const Check = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill={P} opacity="0.2" />
    <path
      d="M6 10l3 3 5-5"
      stroke={PL}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const XMark = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="rgba(248,113,113,0.15)" />
    <path
      d="M7 7l6 6M13 7l-6 6"
      stroke={RED}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
const GrnCheck = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="rgba(52,211,153,0.15)" />
    <path
      d="M6 10l3 3 5-5"
      stroke={GRN}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Arrow = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M4 10h12m0 0l-4-4m4 4l-4 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ── Rotating job word ── */
const JOBS = [
  "couvreur",
  "plombier",
  "électricien",
  "maçon",
  "artisan BTP",
  "pisciniste",
  "paysagiste",
];
function RotatingJob({ color }: { color: string }) {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const i = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIdx((p) => (p + 1) % JOBS.length);
        setFade(true);
      }, 250);
    }, 2200);
    return () => clearInterval(i);
  }, []);
  return (
    <span
      style={{
        color,
        display: "inline-block",
        opacity: fade ? 1 : 0,
        transform: fade ? "translateY(0)" : "translateY(-6px)",
        transition: "opacity 0.25s ease, transform 0.25s ease",
        minWidth: 0,
      }}
    >
      {JOBS[idx]}
    </span>
  );
}

/* ── Scroll reveal hook ── */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible] as const;
}

/* ── Animated counter ── */
function AnimNum({
  target,
  duration = 1200,
}: {
  target: number;
  duration?: number;
}) {
  const [val, setVal] = useState(0);
  const [ref, vis] = useReveal<HTMLSpanElement>();
  useEffect(() => {
    if (!vis) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [vis, target, duration]);
  return <span ref={ref}>{val}</span>;
}

type ContactData = {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  entreprise: string;
  site: string;
};

type Project = {
  title: string;
  job: string;
  city: string;
  quote: string;
  img?: string;
};

type FormStep =
  | { question: string; type: "choice"; options: string[]; key: string }
  | { question: string; type: "contact"; key: string };

const formSteps: FormStep[] = [
  {
    question: "Quel est votre métier ?",
    type: "choice",
    options: [
      "Couvreur",
      "Plombier",
      "Électricien",
      "Maçon",
      "Photovoltaïque",
      "Paysagiste",
      "Climaticien",
      "Pisciniste",
      "Autre",
    ],
    key: "metier",
  },
  {
    question: "Avez-vous déjà un site internet ?",
    type: "choice",
    options: ["Oui, mais je veux mieux", "Non, j'en veux un"],
    key: "site_existant",
  },
  {
    question: "Quel est votre objectif principal ?",
    type: "choice",
    options: [
      "Plus de clients",
      "Être visible sur Google",
      "Avoir un site pro",
      "Moderniser mon image",
    ],
    key: "objectif",
  },
  {
    question: "Quelle est votre problématique actuelle ?",
    type: "choice",
    options: [
      "Pas assez de visibilité",
      "Mon site est trop vieux",
      "Trop cher ailleurs",
      "Je ne sais pas par où commencer",
    ],
    key: "problematique",
  },
  { question: "Vos coordonnées", type: "contact", key: "contact" },
];

const faqs = [
  {
    q: "C'est quoi le piège ?",
    a: "Aucun piège. On crée votre première page gratuitement, sans engagement. Si ça vous plaît pas, vous ne devez rien.",
  },
  {
    q: "Pourquoi c'est moins cher qu'une agence ?",
    a: "On a optimisé nos process avec des outils modernes. Moins de temps perdu = prix plus bas pour vous.",
  },
  {
    q: "3 mois de maintenance offerte, ça inclut quoi ?",
    a: "Hébergement, maintenance technique, mises à jour de sécurité et modifications mineures de contenu. Tout est inclus pendant 3 mois.",
  },
  {
    q: "Je peux arrêter quand je veux ?",
    a: "Oui. Sans engagement, sans frais de résiliation.",
  },
  {
    q: "Combien ça coûte ?",
    a: "Le tarif dépend du nombre de pages et des options de votre site — c'est pourquoi Maxime vous donne un prix précis lors de l'appel, toujours bien en dessous des 4 000-5 000€ pratiqués par les agences. Vous aurez le prix exact avant de décider quoi que ce soit, et la première page est offerte dans tous les cas.",
  },
];

const compRows = [
  {
    label: "Voir le site avant de payer",
    bad: "Jamais",
    good: "Oui, toujours",
  },
  {
    label: "Recevoir des demandes",
    bad: "Dans 1 à 3 mois",
    good: "Site en ligne en 7 jours",
  },
  {
    label: "Un site qui donne envie d'appeler",
    bad: "Design daté et générique",
    good: "Moderne, à votre image",
  },
  { label: "Prix", bad: "4 000 — 5 000€", good: "Abordable" },
  {
    label: "Maintenance",
    bad: "Payante dès le jour 1",
    good: "3 mois offerts",
  },
  { label: "Engagement", bad: "12 mois minimum", good: "Aucun" },
];

/* ── CSS injection ── */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@300..900&display=swap');
@keyframes fadeUp { from { opacity:0; transform:translateY(32px); } to { opacity:1; transform:translateY(0); } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes glow { 0%,100% { box-shadow: 0 0 30px rgba(124,58,237,0.2); } 50% { box-shadow: 0 0 60px rgba(124,58,237,0.4); } }
@keyframes pulse { 0%,100% { transform:scale(1); } 50% { transform:scale(1.05); } }
@keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
@keyframes float { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-8px); } }
.reveal { opacity:0; transform:translateY(32px); transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1); }
.reveal.vis { opacity:1; transform:translateY(0); }
.hover-lift { transition: transform 0.25s, box-shadow 0.25s; }
.hover-lift:hover { transform:translateY(-4px); box-shadow: 0 12px 40px rgba(124,58,237,0.15); }
.cta-glow { animation: glow 3s ease-in-out infinite; }
.cta-main { transition: transform 0.2s; }
.cta-main:hover { transform: scale(1.04); }
.shimmer-text { background: linear-gradient(90deg, #A78BFA 0%, #fff 50%, #A78BFA 100%); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 3s linear infinite; }
.float-anim { animation: float 4s ease-in-out infinite; }
.comp-row { transition: background 0.2s; }
.comp-row:hover { background: rgba(124,58,237,0.04) !important; }
.modal-overlay { animation: fadeIn 0.25s ease; }
.modal-box { animation: fadeUp 0.35s cubic-bezier(0.16,1,0.3,1); }
* { box-sizing: border-box; }
html, body { margin: 0; overflow-x: hidden; }
img { max-width: 100%; }
button { font-family: inherit; }
@media (max-width: 640px) {
  .comp-cell { padding: 12px 8px !important; font-size: 12px !important; gap: 5px !important; flex-direction: column; }
  .comp-cell svg { width: 16px; height: 16px; }
  .comp-cell-label { padding: 12px 10px !important; font-size: 12px !important; }
  .cta-hero { padding: 16px 28px !important; font-size: 16px !important; width: 100%; max-width: 360px; justify-content: center; }
  .float-anim { animation: none; }
}
@media (prefers-reduced-motion: reduce) {
  .reveal { transition: none; opacity: 1; transform: none; }
  .float-anim, .cta-glow, .shimmer-text { animation: none !important; }
}
`;

function RevealSection({
  children,
  style,
  className = "",
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}) {
  const [ref, vis] = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${vis ? "vis" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

export default function CodeCelesteLanding() {
  const [showForm, setShowForm] = useState(false);
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [contactData, setContactData] = useState<ContactData>({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    site: "",
  });
  const [sending, setSending] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const openModal = () => {
    setShowForm(true);
    setFormStep(0);
  };
  const handleChoice = (k: string, v: string) => {
    setFormData((p) => ({ ...p, [k]: v }));
    setTimeout(() => setFormStep((p) => p + 1), 300);
  };
  const handleSubmit = () => setSubmitted(true);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email.trim());
  const contactIncomplete =
    !contactData.prenom.trim() ||
    !contactData.nom.trim() ||
    !emailValid ||
    !contactData.telephone.trim() ||
    !contactData.entreprise.trim();

  // Envoi du lead à GHL au passage de l'étape coordonnées (avant la prise de RDV),
  // pour ne pas perdre le prospect s'il ne réserve pas de créneau.
  const submitLead = async () => {
    if (contactIncomplete || sending) return;
    setSending(true);
    // Événement Lead : même eventId côté Pixel (ici) et CAPI (route) → déduplication.
    const eventId = newEventId();
    trackMeta("Lead", eventId);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: contactData.prenom,
          lastName: contactData.nom,
          email: contactData.email,
          phone: contactData.telephone,
          company: contactData.entreprise,
          currentSite: contactData.site,
          projectType: "site-artisan",
          hasSite: ADS_HAS_SITE[formData.site_existant] ?? null,
          goal: ADS_GOAL[formData.objectif] ?? null,
          pain: ADS_PAIN[formData.problematique] ?? null,
          metier: formData.metier,
          source: "Landing Ads Code Celeste",
          meta: {
            eventId,
            eventSourceUrl:
              typeof window !== "undefined" ? window.location.href : undefined,
          },
        }),
      });
    } catch {
      // On ne bloque pas le prospect : la prise de RDV reste la vraie conversion.
    } finally {
      setSending(false);
      setFormStep((p) => p + 1);
    }
  };

  const step = formSteps[formStep];
  const totalSteps = formSteps.length + 1;
  const pct = submitted ? 100 : Math.round((formStep / totalSteps) * 100);
  const inp: React.CSSProperties = {
    width: "100%",
    padding: "13px 16px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.04)",
    color: TEXT,
    fontSize: 15,
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        background: BG,
        color: TEXT,
        fontFamily: "'Geist', system-ui, sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{css}</style>
      <MetaPixel />

      {/* Éléments graphiques du site live : grille fixe 80px masquée + halo radial brand */}
      <div
        style={{
          pointerEvents: "none",
          position: "fixed",
          inset: 0,
          zIndex: 0,
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          WebkitMaskImage:
            "radial-gradient(ellipse at top, black 30%, transparent 75%)",
          maskImage:
            "radial-gradient(ellipse at top, black 30%, transparent 75%)",
        }}
      />
      <div
        style={{
          pointerEvents: "none",
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
          height: "60vh",
          zIndex: 0,
          background:
            "radial-gradient(ellipse at top, rgba(124,58,237,0.12), transparent 60%)",
        }}
      />

      {/* ══ FORM MODAL ══ */}
      {showForm && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <div
            onClick={() => !submitted && setShowForm(false)}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.8)",
              backdropFilter: "blur(12px)",
            }}
          />
          <div
            className="modal-box"
            style={{
              position: "relative",
              background: CARD,
              borderRadius: 24,
              padding: "36px 28px",
              maxWidth: 500,
              width: "100%",
              border: `2px solid ${P}44`,
              boxShadow: `0 0 100px ${P}22`,
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <button
              onClick={() => setShowForm(false)}
              style={{
                position: "absolute",
                top: 14,
                right: 14,
                background: "none",
                border: "none",
                color: MUT,
                fontSize: 24,
                cursor: "pointer",
              }}
            >
              ✕
            </button>
            {!submitted && (
              <div style={{ marginBottom: 22 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 6,
                  }}
                >
                  <span style={{ fontSize: 12, color: MUT, fontWeight: 600 }}>
                    Étape {Math.min(formStep + 1, totalSteps)} / {totalSteps}
                  </span>
                  <span style={{ fontSize: 15, fontWeight: 600, color: PL }}>
                    {pct}%
                  </span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: 7,
                    background: "rgba(124,58,237,0.12)",
                    borderRadius: 4,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${pct}%`,
                      height: "100%",
                      background: `linear-gradient(90deg, ${P}, ${PL})`,
                      borderRadius: 4,
                      transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)",
                    }}
                  />
                </div>
              </div>
            )}
            {submitted ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: 52, marginBottom: 12 }}>✅</div>
                <h3 style={{ fontSize: 21, fontWeight: 700, marginBottom: 8 }}>
                  Votre appel est confirmé !
                </h3>
                <p
                  style={{
                    color: MUT,
                    fontSize: 14,
                    lineHeight: 1.6,
                    marginBottom: 18,
                  }}
                >
                  Merci pour votre réservation. Maxime vous appellera à la date
                  et à l'heure choisies.
                </p>
                <div
                  style={{
                    background: "rgba(124,58,237,0.08)",
                    borderRadius: 12,
                    padding: 16,
                    textAlign: "left",
                    marginBottom: 16,
                  }}
                >
                  <p
                    style={{
                      fontSize: 13,
                      color: TEXT,
                      fontWeight: 600,
                      margin: "0 0 8px",
                    }}
                  >
                    Pendant cet échange de 15 minutes, nous verrons ensemble :
                  </p>
                  {[
                    "votre activité",
                    "vos objectifs",
                    "à quoi pourrait ressembler votre futur site",
                  ].map((s, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        fontSize: 13,
                        color: MUT,
                        padding: "4px 0",
                      }}
                    >
                      <Check />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
                <p
                  style={{
                    color: MUT,
                    fontSize: 13,
                    lineHeight: 1.6,
                    marginBottom: 4,
                  }}
                >
                  À la suite de l'appel, nous préparerons votre première page
                  personnalisée,{" "}
                  <strong style={{ color: PL }}>
                    offerte et sans engagement
                  </strong>
                  .
                </p>
                <button
                  onClick={() => setShowForm(false)}
                  className="cta-main"
                  style={{
                    marginTop: 20,
                    background: P,
                    color: "#fff",
                    border: "none",
                    padding: "12px 28px",
                    borderRadius: 10,
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  Fermer
                </button>
              </div>
            ) : step ? (
              <>
                {step.type === "choice" ? (
                  <>
                    <h3
                      style={{
                        fontSize: 19,
                        fontWeight: 700,
                        marginBottom: 18,
                        textAlign: "center",
                      }}
                    >
                      {step.question}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      {step.options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleChoice(step.key, opt)}
                          className="hover-lift"
                          style={{
                            background:
                              formData[step.key] === opt
                                ? `${P}33`
                                : "rgba(255,255,255,0.03)",
                            border:
                              formData[step.key] === opt
                                ? `2px solid ${P}`
                                : "1px solid rgba(255,255,255,0.08)",
                            color: TEXT,
                            padding: "13px 18px",
                            borderRadius: 11,
                            fontSize: 15,
                            cursor: "pointer",
                            textAlign: "left",
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <h3
                      style={{
                        fontSize: 19,
                        fontWeight: 700,
                        marginBottom: 18,
                        textAlign: "center",
                      }}
                    >
                      {step.question}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                      }}
                    >
                      {(
                        [
                          {
                            key: "prenom",
                            label: "Prénom *",
                            ph: "Jean-Pierre",
                            t: "text",
                          },
                          {
                            key: "nom",
                            label: "Nom *",
                            ph: "Dupont",
                            t: "text",
                          },
                          {
                            key: "email",
                            label: "Email *",
                            ph: "vous@exemple.com",
                            t: "email",
                          },
                          {
                            key: "telephone",
                            label: "Téléphone *",
                            ph: "0692 XX XX XX",
                            t: "tel",
                          },
                          {
                            key: "entreprise",
                            label: "Entreprise *",
                            ph: "Couverture Dupont",
                            t: "text",
                          },
                          {
                            key: "site",
                            label: "Site actuel (optionnel)",
                            ph: "www.monsite.re",
                            t: "text",
                          },
                        ] as {
                          key: keyof ContactData;
                          label: string;
                          ph: string;
                          t: string;
                        }[]
                      ).map((f) => (
                        <div key={f.key}>
                          <label
                            style={{
                              fontSize: 12,
                              color: MUT,
                              marginBottom: 3,
                              display: "block",
                            }}
                          >
                            {f.label}
                          </label>
                          <input
                            type={f.t}
                            placeholder={f.ph}
                            value={contactData[f.key]}
                            onChange={(e) =>
                              setContactData((p) => ({
                                ...p,
                                [f.key]: e.target.value,
                              }))
                            }
                            style={inp}
                          />
                        </div>
                      ))}
                      <button
                        onClick={submitLead}
                        disabled={contactIncomplete || sending}
                        className="cta-main"
                        style={{
                          background: contactIncomplete
                            ? "#333"
                            : `linear-gradient(135deg, ${P}, ${PD})`,
                          color: "#fff",
                          border: "none",
                          padding: "14px",
                          borderRadius: 11,
                          fontWeight: 700,
                          fontSize: 15,
                          cursor: sending ? "wait" : "pointer",
                          marginTop: 4,
                          opacity: sending ? 0.7 : 1,
                        }}
                      >
                        {sending ? "Envoi…" : "Continuer →"}
                      </button>
                    </div>
                  </>
                )}
                {formStep > 0 && (
                  <button
                    onClick={() => setFormStep((p) => p - 1)}
                    style={{
                      background: "none",
                      border: "none",
                      color: MUT,
                      fontSize: 12,
                      cursor: "pointer",
                      marginTop: 14,
                      display: "block",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    ← Retour
                  </button>
                )}
              </>
            ) : (
              <div style={{ textAlign: "center" }}>
                <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 8 }}>
                  Votre première page offerte commence ici
                </h3>
                <p
                  style={{
                    color: MUT,
                    fontSize: 13,
                    lineHeight: 1.6,
                    marginBottom: 14,
                  }}
                >
                  Choisissez simplement le créneau qui vous convient. En 15
                  minutes, nous faisons le point sur votre activité et nous
                  préparons votre première maquette offerte, personnalisée pour
                  votre entreprise.
                </p>
                <div
                  style={{
                    background: "rgba(124,58,237,0.06)",
                    borderRadius: 10,
                    padding: "10px 14px",
                    marginBottom: 16,
                    textAlign: "left",
                  }}
                >
                  <p
                    style={{
                      fontSize: 12,
                      color: MUT,
                      margin: 0,
                      lineHeight: 1.7,
                    }}
                  >
                    À la fin de l'appel, vous saurez :
                  </p>
                  {[
                    "si un site peut réellement vous apporter plus de clients",
                    "à quoi pourrait ressembler votre première page personnalisée",
                    "combien coûterait votre projet, sans aucun engagement",
                  ].map((t, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                        fontSize: 12,
                        color: TEXT,
                        padding: "3px 0",
                      }}
                    >
                      <span style={{ color: PL, fontWeight: 700 }}>›</span>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    background: "rgba(124,58,237,0.05)",
                    borderRadius: 12,
                    border: "1px solid rgba(124,58,237,0.3)",
                    overflowY: "auto",
                    WebkitOverflowScrolling: "touch",
                    overscrollBehavior: "contain",
                    maxHeight: "65vh",
                    marginBottom: 14,
                  }}
                >
                  <GhlBooking />
                </div>
                <p style={{ fontSize: 12, color: MUT, marginBottom: 16 }}>
                  📞 Appel gratuit • Durée : 15 minutes • Aucun engagement
                </p>
                <button
                  onClick={handleSubmit}
                  className="cta-main"
                  style={{
                    width: "100%",
                    background: `linear-gradient(135deg, ${P}, ${PD})`,
                    color: "#fff",
                    border: "none",
                    padding: "14px",
                    borderRadius: 11,
                    fontWeight: 700,
                    fontSize: 15,
                    cursor: "pointer",
                  }}
                >
                  J&apos;ai réservé mon créneau →
                </button>
                <button
                  onClick={() => setFormStep((p) => p - 1)}
                  style={{
                    background: "none",
                    border: "none",
                    color: MUT,
                    fontSize: 12,
                    cursor: "pointer",
                    marginTop: 12,
                  }}
                >
                  ← Retour
                </button>
              </div>
            )}
            {!submitted && (
              <p
                style={{
                  textAlign: "center",
                  fontSize: 11,
                  color: MUT,
                  marginTop: 16,
                  marginBottom: 0,
                }}
              >
                🔒 Données confidentielles. Zéro spam.
              </p>
            )}
          </div>
        </div>
      )}

      {/* ══ NAV ══ */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "rgba(10,10,10,0.85)",
          backdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(255,255,255,0.10)",
          padding: "10px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <LogoIcon size={36} />
          <span style={{ fontWeight: 600, fontSize: 16 }}>
            Code <span style={{ color: PL }}>Céleste</span>
          </span>
        </div>
        <button
          onClick={openModal}
          className="cta-main"
          style={{
            background: P,
            color: "#fff",
            border: "none",
            padding: "8px 20px",
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          Voir ma page
        </button>
      </nav>

      {/* ══ HERO ══ */}
      <section
        style={{
          paddingTop: 120,
          paddingBottom: 90,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated background orbs */}
        <div
          className="float-anim"
          style={{
            position: "absolute",
            top: "20%",
            left: "15%",
            width: 300,
            height: 300,
            background: `radial-gradient(circle, ${P}18, transparent 70%)`,
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          className="float-anim"
          style={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            width: 250,
            height: 250,
            background: `radial-gradient(circle, rgba(34,211,238,0.08), transparent 70%)`,
            borderRadius: "50%",
            pointerEvents: "none",
            animationDelay: "-2s",
          }}
        />

        <div
          style={{
            maxWidth: 750,
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            animation: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(20,20,20,0.4)",
              backdropFilter: "blur(8px)",
              color: MUT,
              padding: "6px 14px",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 500,
              marginBottom: 28,
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            🏗️ Pour les artisans & BTP de La Réunion
          </div>
          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 58px)",
              fontWeight: 600,
              lineHeight: 1.1,
              margin: "0 0 18px",
              letterSpacing: "-0.02em",
            }}
          >
            Avant d'acheter un site,{" "}
            <span className="shimmer-text">voyez-le.</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: MUT,
              maxWidth: 520,
              margin: "0 auto 32px",
              lineHeight: 1.65,
            }}
          >
            On crée la première page de votre site,{" "}
            <strong style={{ color: TEXT }}>offerte</strong>. Elle vous plaît ?
            On continue. Sinon, vous ne payez rien.
          </p>
          <button
            onClick={openModal}
            className="cta-main cta-glow cta-hero"
            style={{
              background: `linear-gradient(135deg, ${P}, ${PD})`,
              color: "#fff",
              border: "none",
              padding: "20px 48px",
              borderRadius: 16,
              fontWeight: 700,
              fontSize: 19,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            Voir ma page personnalisée <Arrow />
          </button>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 20,
              background: "rgba(255,180,50,0.08)",
              border: "1px solid rgba(255,180,50,0.25)",
              padding: "8px 18px",
              borderRadius: 12,
            }}
          >
            <span style={{ fontSize: 16 }}>⚡</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#fbbf24" }}>
              Seulement 5 maquettes offertes ce mois-ci
            </span>
          </div>
        </div>
      </section>

      {/* ══ RECHERCHE GOOGLE — Coût de l'inaction ══ */}
      <RevealSection
        style={{ padding: "70px 24px", maxWidth: 760, margin: "0 auto" }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(24px,4vw,36px)",
            fontWeight: 600,
            marginBottom: 12,
            lineHeight: 1.25,
          }}
        >
          Pendant qu'un client cherche{" "}
          <span style={{ color: PL }}>
            "<RotatingJob color={PL} /> Saint-Denis"
          </span>
          …<br />
          qui trouve-t-il ?{" "}
          <span style={{ color: RED }}>Vous, ou votre concurrent ?</span>
        </h2>
        <p
          style={{
            textAlign: "center",
            color: MUT,
            fontSize: 15,
            marginBottom: 40,
            maxWidth: 540,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Chaque jour, des Réunionnais cherchent un artisan sur Google. S'ils ne
          vous trouvent pas, ils appellent quelqu'un d'autre. Sans même savoir
          que vous existez.
        </p>
        {/* Fausse barre de recherche Google illustrative */}
        <div
          style={{
            background: CARD,
            borderRadius: 20,
            padding: "28px 26px",
            border: "1px solid rgba(255,255,255,0.10)",
            maxWidth: 560,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "rgba(255,255,255,0.05)",
              borderRadius: 30,
              padding: "12px 20px",
              marginBottom: 22,
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke={MUT} strokeWidth="2" />
              <path
                d="M20 20l-3.5-3.5"
                stroke={MUT}
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span style={{ fontSize: 15, color: TEXT }}>
              <RotatingJob color={TEXT} /> saint-denis 974
            </span>
          </div>
          {/* Résultats */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div
              style={{
                padding: "14px 16px",
                borderRadius: 12,
                background: "rgba(52,211,153,0.05)",
                border: "1px solid rgba(52,211,153,0.15)",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  color: GRN,
                  fontWeight: 700,
                  marginBottom: 2,
                }}
              >
                Votre concurrent — Site pro ✓
              </div>
              <div style={{ fontSize: 12, color: MUT }}>
                Devis gratuit · Photos de chantiers · Avis clients · Contact
                direct
              </div>
            </div>
            <div
              style={{
                padding: "14px 16px",
                borderRadius: 12,
                background: "rgba(52,211,153,0.05)",
                border: "1px solid rgba(52,211,153,0.15)",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  color: GRN,
                  fontWeight: 700,
                  marginBottom: 2,
                }}
              >
                Un autre concurrent — Site pro ✓
              </div>
              <div style={{ fontSize: 12, color: MUT }}>
                Intervention rapide · Galerie · Formulaire de contact
              </div>
            </div>
            <div
              style={{
                padding: "14px 16px",
                borderRadius: 12,
                background: "rgba(248,113,113,0.05)",
                border: "1px dashed rgba(248,113,113,0.3)",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  color: RED,
                  fontWeight: 700,
                  marginBottom: 2,
                }}
              >
                Vous — Introuvable ✗
              </div>
              <div style={{ fontSize: 12, color: MUT }}>
                Le client ne sait même pas que vous existez.
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 30 }}>
          <button
            onClick={openModal}
            className="cta-main"
            style={{
              background: `linear-gradient(135deg, ${P}, ${PD})`,
              color: "#fff",
              border: "none",
              padding: "15px 36px",
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 16,
              cursor: "pointer",
              boxShadow: `0 0 30px ${P}33`,
            }}
          >
            Je veux être trouvé →
          </button>
        </div>
      </RevealSection>

      {/* ══ COMPARATIF ══ */}
      <RevealSection
        style={{ padding: "70px 24px", maxWidth: 820, margin: "0 auto" }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(24px,4vw,38px)",
            fontWeight: 600,
            marginBottom: 40,
          }}
        >
          Une autre façon de créer <span style={{ color: PL }}>votre site</span>
        </h2>

        <div
          style={{
            background: CARD,
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr 1fr",
              gap: 0,
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="comp-cell-label"
              style={{ padding: "16px 22px" }}
            ></div>
            <div
              className="comp-cell"
              style={{
                padding: "16px 18px",
                textAlign: "center",
                fontSize: 13,
                fontWeight: 700,
                color: RED,
                background: "rgba(248,113,113,0.05)",
              }}
            >
              Agence classique
            </div>
            <div
              className="comp-cell"
              style={{
                padding: "16px 18px",
                textAlign: "center",
                fontSize: 13,
                fontWeight: 700,
                color: GRN,
                background: "rgba(52,211,153,0.05)",
              }}
            >
              Code Céleste ✨
            </div>
          </div>
          {compRows.map((r, i) => (
            <div
              key={i}
              className="comp-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr 1fr",
                borderBottom:
                  i < compRows.length - 1
                    ? "1px solid rgba(255,255,255,0.04)"
                    : "none",
              }}
            >
              <div
                className="comp-cell-label"
                style={{ padding: "15px 22px", fontSize: 14, fontWeight: 600 }}
              >
                {r.label}
              </div>
              <div
                className="comp-cell"
                style={{
                  padding: "15px 18px",
                  fontSize: 14,
                  color: RED,
                  textAlign: "center",
                  background: "rgba(248,113,113,0.02)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <XMark />
                <span>{r.bad}</span>
              </div>
              <div
                className="comp-cell"
                style={{
                  padding: "15px 18px",
                  fontSize: 14,
                  color: GRN,
                  textAlign: "center",
                  background: "rgba(52,211,153,0.02)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  fontWeight: 600,
                }}
              >
                <GrnCheck />
                <span>{r.good}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <button
            onClick={openModal}
            className="cta-main"
            style={{
              background: `linear-gradient(135deg, ${P}, ${PD})`,
              color: "#fff",
              border: "none",
              padding: "15px 36px",
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 16,
              cursor: "pointer",
              boxShadow: `0 0 30px ${P}33`,
            }}
          >
            Je choisis Code Céleste →
          </button>
        </div>
      </RevealSection>

      {/* ══ PROBLEM — Émotionnel ══ */}
      <RevealSection
        style={{ padding: "70px 24px", maxWidth: 760, margin: "0 auto" }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(24px,4vw,38px)",
            fontWeight: 600,
            marginBottom: 28,
            lineHeight: 1.25,
          }}
        >
          Vos concurrents ne travaillent pas{" "}
          <span style={{ color: PL }}>mieux que vous</span>.<br />
          Ils sont juste <span style={{ color: RED }}>plus visibles</span>.
        </h2>
        <div
          style={{
            background: CARD,
            borderRadius: 20,
            padding: "clamp(26px,4vw,40px)",
            border: "1px solid rgba(255,255,255,0.10)",
            maxWidth: 640,
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontSize: 16,
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: 18,
            }}
          >
            Pendant que vous êtes sur les chantiers, eux récupèrent des demandes
            de devis grâce à leur présence en ligne.
          </p>
          <p
            style={{
              fontSize: 16,
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: 18,
            }}
          >
            Et la plupart des clients ne compareront même jamais votre travail
            au leur…
          </p>
          <p
            style={{
              fontSize: 17,
              color: PL,
              lineHeight: 1.8,
              fontWeight: 700,
              margin: 0,
            }}
          >
            …parce qu'ils ne savent même pas que votre entreprise existe.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 18,
            marginTop: 36,
            maxWidth: 760,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {[
            {
              emoji: "🕖",
              text: "\"20 ans d'expérience, mais sur Internet on dirait que je n'existe pas.\"",
            },
            {
              emoji: "😤",
              text: '"Des jeunes boîtes paraissent plus pros que moi juste avec un beau site."',
            },
            {
              emoji: "📉",
              text: '"Combien de clients j\'ai perdus sans même le savoir ?"',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="hover-lift"
              style={{
                background: "rgba(124,58,237,0.05)",
                borderRadius: 16,
                padding: "22px 24px",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 10 }}>{item.emoji}</div>
              <p
                style={{
                  fontSize: 14,
                  color: TEXT,
                  lineHeight: 1.6,
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <p
          style={{
            textAlign: "center",
            fontSize: 15,
            color: MUT,
            marginTop: 30,
          }}
        >
          Si vous vous reconnaissez dans une seule de ces phrases, la suite va
          vous intéresser.
        </p>
      </RevealSection>

      {/* ══ SOLUTION ══ */}
      <RevealSection
        style={{ padding: "70px 24px", maxWidth: 920, margin: "0 auto" }}
      >
        <div
          className="hover-lift"
          style={{
            background: `linear-gradient(135deg, ${CARD}, rgba(124,58,237,0.04))`,
            borderRadius: 24,
            padding: "clamp(28px,4vw,52px)",
            border: "1px solid rgba(124,58,237,0.15)",
            display: "flex",
            flexWrap: "wrap",
            gap: 40,
            alignItems: "center",
          }}
        >
          <div style={{ flex: "1 1 300px" }}>
            <h2
              style={{
                fontSize: "clamp(22px,3.5vw,34px)",
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              Maxime, <span style={{ color: PL }}>développeur péi</span>
            </h2>
            <p
              style={{
                color: MUT,
                fontSize: 15,
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              "J'ai créé Code Céleste pour que les artisans réunionnais aient un
              site qui donne envie d'appeler. Pas juste une jolie vitrine : un
              outil qui transforme les visiteurs en demandes de devis."
            </p>
            {[
              "Développeur basé à La Réunion",
              "Rappel dans les 24-48h",
              "Votre interlocuteur unique, du 1er appel à la mise en ligne",
            ].map((t, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 10,
                }}
              >
                <Check />
                <span style={{ fontSize: 14 }}>{t}</span>
              </div>
            ))}
          </div>
          <div
            style={{
              flex: "0 0 200px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="float-anim"
              style={{
                width: 200,
                borderRadius: 20,
                background: `linear-gradient(135deg, ${P}22, ${PD}22)`,
                border: `2px solid ${P}44`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 10,
                padding: "22px 18px",
                animationDuration: "5s",
              }}
            >
              <Image
                src={MAXIME_PHOTO}
                alt="Maxime, fondateur de Code Céleste"
                width={120}
                height={120}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: `3px solid ${P}66`,
                  boxShadow: `0 0 30px ${P}33`,
                  display: "block",
                }}
              />
              <span style={{ fontWeight: 700, fontSize: 16 }}>Maxime</span>
              <span style={{ fontSize: 12, color: MUT }}>Fondateur & Dev</span>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ══ STATS BAR ══ */}
      <RevealSection
        style={{ padding: "50px 24px", maxWidth: 800, margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 20,
            textAlign: "center",
          }}
        >
          {[
            {
              n: 7,
              suffix: " jours",
              label: "Pour commencer à recevoir des demandes",
            },
            { n: 3, suffix: " mois", label: "Maintenance offerte" },
            { n: 0, suffix: "€", label: "Pour voir votre page personnalisée" },
          ].map((s, i) => (
            <div key={i} style={{ padding: 24 }}>
              <div
                style={{
                  fontSize: "clamp(32px,5vw,48px)",
                  fontWeight: 600,
                  color: PL,
                  lineHeight: 1,
                }}
              >
                <AnimNum target={s.n} />
                {s.suffix}
              </div>
              <div style={{ fontSize: 13, color: MUT, marginTop: 6 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* ══ GARANTIE ══ */}
      <RevealSection
        style={{ padding: "70px 24px", maxWidth: 720, margin: "0 auto" }}
      >
        <div
          style={{
            background: `linear-gradient(135deg, rgba(52,211,153,0.06), rgba(124,58,237,0.04))`,
            borderRadius: 24,
            padding: "44px 36px",
            border: "1px solid rgba(52,211,153,0.2)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow effect */}
          <div
            style={{
              position: "absolute",
              top: "-50%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 400,
              height: 400,
              background: `radial-gradient(circle, rgba(52,211,153,0.08), transparent 70%)`,
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative" }}>
            <div style={{ fontSize: 52, marginBottom: 16 }}>🛡️</div>
            <h2
              style={{
                fontSize: "clamp(22px,4vw,32px)",
                fontWeight: 600,
                marginBottom: 12,
              }}
            >
              Notre garantie <span style={{ color: GRN }}>zéro risque</span>
            </h2>
            <p
              style={{
                fontSize: 16,
                color: MUT,
                maxWidth: 500,
                margin: "0 auto 28px",
                lineHeight: 1.65,
              }}
            >
              On crée <strong style={{ color: TEXT }}>votre</strong> page —
              votre entreprise, votre métier, vos couleurs —{" "}
              <strong style={{ color: TEXT }}>offerte, sans engagement</strong>.
              Si le résultat ne vous plaît pas, vous ne payez rien. Zéro frais
              cachés, zéro surprise.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 24,
              }}
            >
              {[
                { icon: "💰", text: "Première page 100% gratuite" },
                { icon: "🤝", text: "Zéro engagement" },
                { icon: "↩️", text: "Pas satisfait = vous ne devez rien" },
              ].map((g, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(52,211,153,0.08)",
                    padding: "10px 18px",
                    borderRadius: 12,
                    border: "1px solid rgba(52,211,153,0.15)",
                  }}
                >
                  <span style={{ fontSize: 20 }}>{g.icon}</span>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>
                    {g.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ══ TÉMOIGNAGE STAR — À remplacer par un vrai avis dès le 1er client ══ */}
      <RevealSection
        style={{ padding: "70px 24px", maxWidth: 720, margin: "0 auto" }}
      >
        {/*
          IMPORTANT : ce bloc est un TEMPLATE. Ne le publiez qu'avec un VRAI témoignage :
          - vraie citation mot pour mot, avec l'accord du client
          - vrai prénom, vrai métier, vraie ville
          - vraie photo (le client, son camion, un chantier) — ça vaut 10 paragraphes
          Tant que vous n'avez pas de vrai avis, masquez cette section.
        */}
        <div
          style={{
            background: `linear-gradient(135deg, ${CARD}, rgba(124,58,237,0.05))`,
            borderRadius: 24,
            padding: "clamp(30px,5vw,48px)",
            border: "1px solid rgba(124,58,237,0.15)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ fontSize: 24, letterSpacing: 4, marginBottom: 20 }}>
            ⭐⭐⭐⭐⭐
          </div>
          <p
            style={{
              fontSize: "clamp(17px,2.5vw,21px)",
              color: TEXT,
              lineHeight: 1.7,
              fontWeight: 500,
              maxWidth: 560,
              margin: "0 auto 24px",
              fontStyle: "italic",
            }}
          >
            "Nous avons sollicité Maxime pour la création de notre site Internet
            et nous sommes pleinement satisfaits du résultat. Depuis la mise en
            ligne, le site nous a permis de générer une quinzaine de demandes,
            dont 4 à 5 se sont concrétisées."
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
            }}
          >
            <Image
              src="/pp-AlexEydieux.jpg"
              alt="Alexandre Eydieux, Smart Power System"
              width={52}
              height={52}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                border: `2px solid ${P}44`,
                display: "block",
                flexShrink: 0,
              }}
            />
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 15, fontWeight: 700 }}>
                Alexandre Eydieux
              </div>
              <div style={{ fontSize: 13, color: MUT }}>
                Smart Power System · La Réunion
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ══ PROJETS RÉALISÉS — Preuve sociale réelle ══ */}
      <RevealSection
        style={{ padding: "70px 24px", maxWidth: 920, margin: "0 auto" }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(22px,4vw,34px)",
            fontWeight: 600,
            marginBottom: 12,
          }}
        >
          Nos <span style={{ color: PL }}>réalisations</span>
        </h2>
        <p
          style={{
            textAlign: "center",
            color: MUT,
            fontSize: 15,
            marginBottom: 40,
          }}
        >
          Des vrais projets, pour des vrais artisans de l'île.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {/*
            REMPLACER LES PLACEHOLDERS CI-DESSOUS PAR DE VRAIS PROJETS :
            - screenshot: capture d'écran réelle du site livré ou de la maquette offerte
            - title: nom réel de l'entreprise (avec accord du client)
            - city: ville réelle
            - quote: avis client réel, mot pour mot
            Ne jamais inventer de témoignage. Si vous n'avez qu'un seul projet, n'affichez qu'une seule carte.
          */}
          {([
            {
              title: "Smart Power System",
              job: "Coaching Sportif",
              city: "La Réunion",
              quote:
                '"Son investissement dans le projet et le rapport qualité/prix ont été particulièrement appréciés."',
              img: "screen-SPS.png",
            },
            {
              title: "VELORUN Festival",
              job: "Événementiel",
              city: "La Réunion",
              quote:
                "\"C'est allé très vite pour une 1ʳᵉ version. Il a fait preuve d'autonomie. Le site est performant !\"",
              img: "velorun-hero.png",
            },
            {
              title: "SCMOI",
              job: "Site vitrine",
              city: "La Réunion",
              quote: '"Site professionnel livré et en ligne — scmoi.re"',
              img: "scmoi-hero.png",
            },
          ] as Project[]).map((p, i) => (
            <div
              key={i}
              className="hover-lift"
              style={{
                background: CARD,
                borderRadius: 18,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: 160,
                  background: `linear-gradient(135deg, ${P}15, ${PD}15)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                {p.img ? (
                  <Image
                    src={`/${p.img}`}
                    alt={`Capture du site livré pour ${p.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                ) : (
                  <span style={{ fontSize: 13, color: MUT }}>
                    📸 Capture du site livré
                  </span>
                )}
              </div>
              <div style={{ padding: "20px 22px" }}>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 2 }}>
                  {p.title}
                </div>
                <div style={{ fontSize: 12, color: PL, marginBottom: 10 }}>
                  {p.job} · {p.city}
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: MUT,
                    lineHeight: 1.6,
                    fontStyle: "italic",
                    margin: 0,
                  }}
                >
                  {p.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* ══ FAQ ══ */}
      <RevealSection
        style={{ padding: "70px 24px", maxWidth: 720, margin: "0 auto" }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(22px,4vw,34px)",
            fontWeight: 600,
            marginBottom: 36,
          }}
        >
          Questions fréquentes
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="hover-lift"
              style={{
                background: CARD,
                borderRadius: 14,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: "100%",
                  padding: "18px 22px",
                  background: "none",
                  border: "none",
                  color: TEXT,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: 15,
                  fontWeight: 600,
                  textAlign: "left",
                }}
              >
                {faq.q}
                <span
                  style={{
                    transform: openFaq === i ? "rotate(180deg)" : "rotate(0)",
                    transition: "0.3s ease",
                    fontSize: 18,
                    color: PL,
                  }}
                >
                  ▾
                </span>
              </button>
              <div
                style={{
                  maxHeight: openFaq === i ? 200 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <div
                  style={{
                    padding: "0 22px 18px",
                    fontSize: 14,
                    color: MUT,
                    lineHeight: 1.6,
                  }}
                >
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* ══ FINAL CTA ══ */}
      <RevealSection
        style={{
          padding: "80px 24px 100px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="float-anim"
          style={{
            position: "absolute",
            top: "30%",
            left: "20%",
            width: 300,
            height: 300,
            background: `radial-gradient(circle, ${P}12, transparent 70%)`,
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative" }}>
          <h2
            style={{
              fontSize: "clamp(24px,4.5vw,40px)",
              fontWeight: 600,
              marginBottom: 14,
            }}
          >
            Le premier site que vous pouvez{" "}
            <span className="shimmer-text">refuser</span>.
          </h2>
          <p
            style={{
              color: MUT,
              fontSize: 16,
              marginBottom: 32,
              maxWidth: 480,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            On crée votre page. Vous la regardez. Vous décidez. C'est tout.
          </p>
          <button
            onClick={openModal}
            className="cta-main cta-glow cta-hero"
            style={{
              background: `linear-gradient(135deg, ${P}, ${PD})`,
              color: "#fff",
              border: "none",
              padding: "20px 48px",
              borderRadius: 16,
              fontWeight: 700,
              fontSize: 19,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            Voir ma page personnalisée <Arrow />
          </button>
        </div>
      </RevealSection>

      {/* ══ FOOTER ══ */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.10)",
          padding: "26px 24px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <LogoIcon size={24} />
          <span style={{ fontSize: 13, color: MUT }}>
            © 2026 Code Céleste — Sites web pour artisans à La Réunion 🇷🇪
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 13,
          }}
        >
          <a
            href="mailto:maxime@code-celeste.com"
            style={{ color: MUT, textDecoration: "none" }}
          >
            maxime@code-celeste.com
          </a>
          <a
            href="https://x.com/maxime_clst"
            target="_blank"
            rel="noreferrer"
            style={{ color: MUT, textDecoration: "none" }}
          >
            X
          </a>
          <a
            href="https://www.linkedin.com/in/code-celeste/"
            target="_blank"
            rel="noreferrer"
            style={{ color: MUT, textDecoration: "none" }}
          >
            LinkedIn
          </a>
          <a
            href="https://code-celeste.com/mentions-legales"
            target="_blank"
            rel="noreferrer"
            style={{ color: MUT, textDecoration: "none" }}
          >
            Mentions légales
          </a>
        </div>
      </footer>
    </div>
  );
}
