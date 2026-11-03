// Source unique des projets affichés sur la home et sur /works.
// Ajoute les nouveaux projets en tête de liste : la home n'affiche que les
// FEATURED_SITES premiers sites, /works affiche tout.

export type Site = {
  title: string;
  /** Métier · ville */
  activity: string;
  /** Résultat chiffré obtenu pour le client (affiché en pastille) */
  result?: string;
  /** Capture dans /public/works */
  image: string;
  url: string;
  /** Étude de cas interne (/works/...) */
  caseStudy?: string;
};

export type App = {
  title: string;
  description: string;
  stores: string;
  icon: string;
  screens: string[];
  url: string;
};

export type SideProject = {
  title: string;
  description: string;
  /** Icône de l'app ; sans icône, un pictogramme générique est affiché */
  icon?: string;
  url: string;
};

export const FEATURED_SITES = 6;

export const sites: Site[] = [
  {
    title: "SCMOI",
    activity: "Clim, chauffage, électricité",
    result: "+20 clients en 3 mois",
    image: "/works/scmoi.webp",
    url: "https://www.scmoi.re/",
  },
  {
    title: "L2KJ Services",
    activity: "Climatisation · La Possession",
    result: "9 appels depuis la mise en ligne",
    image: "/works/l2kj.webp",
    url: "https://l2kj-services.re/",
  },
  {
    title: "O'Milles Déco",
    activity: "Décoration d'événements · Saint-Benoît",
    result: "Un mariage réservé dès le 1er mois",
    image: "/works/o-milles-deco.webp",
    url: "https://www.o-milles-deco.re/",
  },
  {
    title: "Smart Power System",
    activity: "Coaching sportif en ligne",
    result: "15 demandes, 4 à 5 signées",
    image: "/works/smart-power-system.webp",
    url: "https://smart-power-system.fr",
    caseStudy: "/works/smart-power-system",
  },
  {
    title: "Élagage Péi",
    activity: "Élagage · Saint-Denis",
    image: "/works/elagage-pei.webp",
    url: "https://elagage-pei.re/",
  },
  {
    title: "RSB",
    activity: "Clim, plomberie, électricité",
    image: "/works/rsb.webp",
    url: "https://rsbatiment.re/",
  },
  {
    title: "PAP-LD",
    activity: "Peinture en bâtiment",
    image: "/works/pap-ld.webp",
    url: "https://www.pap-ld.re/",
  },
  {
    title: "SM Design",
    activity: "Rénovation tous corps d'état",
    image: "/works/sm-design.webp",
    url: "https://www.sm-design.re/",
  },
  {
    title: "Chandelle Émeraude",
    activity: "Location de logements · réservation et paiement en ligne",
    image: "/works/chandelle-emeraude.webp",
    url: "https://chandelle-emeraude.fr/",
  },
  {
    title: "Anthony Celeste Coaching",
    activity: "Coach endurance",
    image: "/works/anthony-celeste.webp",
    url: "https://anthonyceleste-coaching.re/",
  },
  {
    title: "VELORUN Festival",
    activity: "Événement VTT · association sportive",
    image: "/works/velorun.webp",
    url: "https://velorunfestival.re",
    caseStudy: "/works/velorun-festival",
  },
  {
    title: "Runcrea Ink",
    activity: "Tatouages éphémères pour événements",
    image: "/works/runcrea-ink.webp",
    url: "https://runcrea-ink.vercel.app/",
  },
];

export const apps: App[] = [
  {
    title: "Z'Happyro",
    description: "Afterworks et sorties à La Réunion",
    stores: "App Store et Google Play",
    icon: "/apps/zhappyro.webp",
    screens: ["/apps/zhappyro-1.webp", "/apps/zhappyro-2.webp", "/apps/zhappyro-3.webp"],
    url: "https://apps.apple.com/fr/app/zhappyro/id6795792875",
  },
  {
    title: "Pitona",
    description: "Préparer un séjour sportif sur mesure",
    stores: "App Store",
    icon: "/apps/pitona.webp",
    screens: ["/apps/pitona-1.webp", "/apps/pitona-2.webp", "/apps/pitona-3.webp"],
    url: "https://apps.apple.com/fr/app/pitona/id6794382877",
  },
];

export const sideProjects: SideProject[] = [
  {
    title: "Mossly",
    description: "Boire de l'eau fait pousser tout un monde · App Store",
    icon: "/apps/mossly.webp",
    url: "https://apps.apple.com/fr/app/mossly/id6783483520",
  },
  {
    title: "Budget Copain",
    description: "Savoir enfin où part son argent · App Store",
    icon: "/adaptive-icon.png",
    url: "https://www.budgetcopain.com/",
  },
  {
    title: "Snapflick",
    description: "Convertir ses images en un éclair, sans rien envoyer · Web",
    url: "https://snapflick.dev/",
  },
];
