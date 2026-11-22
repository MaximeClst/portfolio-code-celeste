// Source unique de l'offre artisans (home, /creation-site-web-artisan-reunion
// et /ads). Toute modification de prix, de garantie ou de délai se fait ici.

export const RESPONSE_DELAY = "48 h";
export const VAT_NOTICE = "TVA non applicable, art. 293 B du CGI";
export const PROMISE = "Un site qui ramène des demandes de devis, en ligne en 7 jours.";
export const RARITY =
  "Je travaille seul : je prends 5 nouveaux sites par mois maximum, dont 3 en Zéro Avance.";
export const NOT_GUARANTEED =
  "Ce que je ne garantis pas : une position sur Google et un nombre de chantiers signés.";
export const SUIVI_END =
  "Une fois le site payé, si vous arrêtez le Suivi, je vous transfère le site et le nom de domaine. L'hébergement est ensuite à votre charge (variable, environ 15 €/an).";
export const NOT_INCLUDED =
  "Nouvelles pages, nouvelles fonctionnalités ou refonte : sur devis.";

// Résumé des prix réutilisé dans les FAQ (page artisan, /ads).
export const PRICING_SUMMARY =
  "Deux formules. L'Achat du site : 1 000 €, sans frais en 1, 3 ou 4 fois, avec 3 mois de Suivi offerts ; le site vous appartient dès le dernier paiement. Le Site Péi Zéro Avance : 169 €/mois pendant 12 mois (2 028 € au total), rien à payer avant la mise en ligne, Suivi inclus toute l'année ; le site vous appartient après la 12e mensualité. Ensuite, le Suivi est à 99 €/mois sans engagement, seulement si vous le souhaitez.";

export type TicketLine = {
  label: string;
  /** « Inclus », « Offerte », « 0 € »… */
  value: string;
  /** Mis en avant en violet (offert, gratuit) */
  highlight?: boolean;
  note?: string;
};

export type Formula = {
  id: "achat" | "zero-avance";
  name: string;
  tagline: string;
  lines: TicketLine[];
  total: { amount: string; unit?: string; note: string };
  /** Échéanciers de paiement proposés */
  payments?: { label: string; detail: string }[];
  /** Conditions à lire avant de choisir */
  terms?: string[];
  after: string;
  cta: string;
};

const AFTER = "Ensuite, Suivi à 99 €/mois sans engagement, seulement si vous le souhaitez.";

export const formulas: Formula[] = [
  {
    id: "achat",
    name: "Achat du site",
    tagline: "Le site vous appartient dès le dernier paiement.",
    lines: [
      {
        label: "Maquette de votre page d'accueil",
        value: "Offerte",
        highlight: true,
        note: "Elle ne vous plaît pas ? Vous ne signez pas et ne payez rien.",
      },
      { label: "Site sur mesure", value: "Inclus" },
      { label: "Textes rédigés pour votre entreprise", value: "Inclus" },
      { label: "Référencement local sur Google", value: "Inclus" },
      { label: "Fiche Google Business créée ou optimisée", value: "Incluse" },
      { label: "Demande de devis en 2 clics, appel en 1 clic", value: "Inclus" },
      {
        label: "Mise en ligne 7 jours après réception de tous vos éléments",
        value: "Inclus",
        note: "Logo, photos, coordonnées.",
      },
      { label: "Nom de domaine enregistré à votre nom", value: "Inclus" },
      { label: "3 mois de Suivi", value: "Offerts", highlight: true },
    ],
    total: { amount: "1 000 €", note: "Sans frais, en 1, 3 ou 4 fois" },
    payments: [
      { label: "En 1 fois", detail: "1 000 € à la signature" },
      {
        label: "En 3 fois",
        detail: "400 € à la signature, 350 € à la mise en ligne, 250 € 30 jours après",
      },
      {
        label: "En 4 fois",
        detail:
          "250 € à la signature, 250 € à la mise en ligne, 250 € 30 jours après, 250 € 60 jours après",
      },
    ],
    after: AFTER,
    cta: "Choisir l'Achat du site",
  },
  {
    id: "zero-avance",
    name: "Le Site Péi Zéro Avance",
    tagline: "Rien à payer avant la mise en ligne.",
    lines: [
      { label: "À payer avant la mise en ligne", value: "0 €", highlight: true },
      {
        label: "Tout ce qui est inclus dans l'Achat du site",
        value: "Inclus",
        note: "Maquette offerte, site sur mesure, textes, Google, nom de domaine à votre nom…",
      },
      { label: "Suivi pendant toute l'année", value: "Inclus", highlight: true },
    ],
    total: {
      amount: "169 €",
      unit: "/mois",
      note: "Pendant 12 mois, soit 2 028 € au total",
    },
    terms: [
      "Prélèvement automatique après la mise en ligne.",
      "Le site vous appartient après la 12e mensualité.",
      "Rachat possible à tout moment en réglant les mensualités restantes.",
      "Arrêt avant 12 mois sans régler le solde : le site est retiré et reste à Code Céleste.",
    ],
    after: AFTER,
    cta: "Choisir le Zéro Avance",
  },
];

export const suivi = {
  price: "99 €",
  unit: "/mois",
  note: "Sans engagement",
  items: [
    "Gestion de votre fiche Google",
    "Ajout régulier de vos dernières réalisations",
    "Point mensuel sur les demandes de devis reçues",
    "Mises à jour techniques et de sécurité",
    `Un interlocuteur à La Réunion, réponse sous ${RESPONSE_DELAY}`,
  ],
};

export const guarantees = [
  {
    title: "La maquette ne vous plaît pas : 0 €",
    text: "Je crée d'abord la maquette de votre page d'accueil. Si elle ne vous plaît pas, vous ne signez pas et ne payez rien.",
  },
  {
    title: "En ligne en 7 jours, sinon un mois offert",
    text: "Votre site est en ligne 7 jours après réception de tous vos éléments (logo, photos, coordonnées). Sinon, je vous offre un mois : un mois de Suivi avec l'Achat du site, la première mensualité avec le Zéro Avance.",
  },
  {
    title: "Garantie 90 jours",
    text: "Aucune demande de devis par le formulaire de votre site en 90 jours, avec votre fiche Google active et vos paiements à jour ? Avec l'Achat du site, le Suivi est gratuit après les 3 mois offerts, jusqu'à la première demande. Avec le Zéro Avance, vos mensualités sont mises en pause jusqu'à la première demande, puis reprennent là où elles s'étaient arrêtées. 6 mois maximum dans les deux cas.",
  },
];

export type Review = {
  quote: string;
  name: string;
  company: string;
};

// Textes exacts fournis par les clients : ne pas reformuler.
export const reviews: Review[] = [
  {
    quote:
      "Merci code Celeste pour tout le travail fourni grâce à qui O Milles déco a des demandes plus facilement et je n'ai rien à gérer. Je recommande sans hésitation",
    name: "Claudine",
    company: "O'Milles Déco",
  },
  {
    quote:
      "Nous avons été pleinement satisfaits de son travail. Personne sérieuse, agréable, professionnelle et à l'écoute. Tout s'est très bien passé ! Nous le recommandons à 100 % sans hésitation. Vous pouvez lui faire confiance les yeux fermés !",
    name: "Thomas Clain",
    company: "Élagage Péi",
  },
  {
    quote:
      "Nous sommes très satisfaits de la prestation de la société CODE CELESTE qui s'est montrée très professionnelle et réactive et nous a accompagnés avec efficacité ! Nous recommandons les yeux fermés",
    name: "Severin Emmanuel",
    // PLACEHOLDER : activité non fournie.
    company: "[Activité de Severin Emmanuel]",
  },
  {
    quote:
      "Depuis la mise en ligne, le site nous a permis de générer une quinzaine de demandes, dont 4 à 5 se sont concrétisées.",
    name: "Alexandre Eydieux",
    company: "Smart Power System",
  },
  {
    quote:
      "C'est allé très vite pour une première version. Il a fait preuve d'autonomie. Le site est performant !",
    name: "Grégory Maillot",
    company: "VELORUN Festival",
  },
];
