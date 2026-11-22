import { pageMetadata } from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";
import { Fragment, ReactNode } from "react";
import { PageTopBar } from "../_landing/home/ContactCTA";
import { HomeFooter } from "../_landing/home/Sections";

// À remplacer par le lien direct du Reel une fois publié.
const INSTAGRAM_URL = "https://www.instagram.com/code_celeste/";

export const metadata = pageMetadata(
  "Règlement du concours de Noël | Code Celeste",
  "Règlement du jeu-concours Instagram de Noël Code Celeste : un site vitrine complet offert à un pro de La Réunion.",
  "/noel"
);

type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

type Article = { title: string; blocks: Block[] };

// Texte juridique : à reprendre mot pour mot, seule la mise en forme est libre.
const RULES_TITLE =
  "Règlement du jeu-concours « Concours de Noël Code Celeste — Offre un site web à un pro »";

const articles: Article[] = [
  {
    title: "Article 1 – Organisateur",
    blocks: [
      {
        type: "p",
        text: "Maxime Celeste, entrepreneur individuel exerçant sous le nom commercial Code Celeste, SIRET 831 141 635 00027, domicilié 30 rue de la Bourgogne, 97490 Saint-Denis, La Réunion, contact : maxime@code-celeste.com (ci-après « l'Organisateur »), organise un jeu-concours gratuit et sans obligation d'achat intitulé « Concours de Noël Code Celeste — Offre un site web à un pro » (ci-après « le Concours »), sur son compte Instagram @code_celeste.",
      },
    ],
  },
  {
    title: "Article 2 – Instagram",
    blocks: [
      {
        type: "p",
        text: "Le Concours n'est ni organisé, ni sponsorisé, ni approuvé, ni géré par Instagram ou Meta, et n'y est associé d'aucune manière. Chaque participant dégage Instagram et Meta de toute responsabilité liée au Concours. Les données collectées sont destinées à l'Organisateur et non à Instagram.",
      },
    ],
  },
  {
    title: "Article 3 – Durée",
    blocks: [
      {
        type: "p",
        text: "Le Concours se déroule du 26 novembre 2026 au 6 décembre 2026 à 23 h 59, heure de La Réunion. Le gagnant est annoncé le 15 décembre 2026.",
      },
    ],
  },
  {
    title: "Article 4 – Participants",
    blocks: [
      {
        type: "p",
        text: "Le Concours est ouvert à toute personne physique majeure résidant à La Réunion et titulaire d'un compte Instagram. L'Organisateur et les membres de sa famille ne peuvent pas participer.",
      },
    ],
  },
  {
    title: "Article 5 – Professionnels pouvant être nommés",
    blocks: [
      {
        type: "p",
        text: "Peut être nommé tout artisan, créateur, indépendant ou petit entrepreneur qui remplit toutes les conditions suivantes :",
      },
      {
        type: "ul",
        items: [
          "exercer une activité légale, déclarée et immatriculée (SIRET actif), établie à La Réunion ;",
          "ne pas être déjà client de Code Celeste ;",
          "ne pas avoir de lien familial avec l'Organisateur ;",
          "accepter le lot et les conditions de l'article 8.",
        ],
      },
      {
        type: "p",
        text: "Un participant ne peut pas se nommer lui-même ni nommer sa propre activité.",
      },
    ],
  },
  {
    title: "Article 6 – Modalités de participation",
    blocks: [
      {
        type: "p",
        text: "Pour participer, il faut, sous la publication du Concours sur @code_celeste :",
      },
      {
        type: "ol",
        items: [
          "écrire un commentaire qui nomme un professionnel (en identifiant son compte Instagram s'il en a un) ;",
          "expliquer en une ou deux phrases pourquoi il ou elle mérite ce coup de pouce.",
        ],
      },
      {
        type: "p",
        text: "Un commentaire correspond à une nomination. Un participant peut nommer plusieurs professionnels, avec un commentaire distinct pour chacun. S'abonner au compte @code_celeste est possible mais n'est pas une condition de participation. La participation est gratuite ; aucun remboursement des frais de connexion n'est prévu.",
      },
      {
        type: "p",
        text: "Sont écartés : les commentaires injurieux, diffamatoires ou contraires à la loi, les nominations faites depuis de faux comptes ou des comptes multiples, et toute tentative de fraude.",
      },
    ],
  },
  {
    title: "Article 7 – Désignation du gagnant",
    blocks: [
      {
        type: "p",
        text: "Le gagnant est choisi par un jury composé de l'Organisateur, et non par tirage au sort ni par vote du public. Le nombre de nominations reçues par un même professionnel n'est pas un critère décisif. Le jury retient trois critères :",
      },
      {
        type: "ol",
        items: [
          "l'histoire et le mérite décrits dans la ou les nominations ;",
          "le besoin réel de visibilité du professionnel ;",
          "sa motivation et sa disponibilité pour fournir les contenus nécessaires au site.",
        ],
      },
      {
        type: "p",
        text: "Entre le 7 et le 14 décembre 2026, l'Organisateur contacte en privé les professionnels qu'il envisage de retenir, afin de vérifier qu'ils remplissent les conditions de l'article 5 et qu'ils acceptent le lot. Un professionnel qui ne répond pas, refuse ou ne remplit pas les conditions n'est pas retenu, et le jury choisit un autre candidat.",
      },
      {
        type: "p",
        text: "Le gagnant est annoncé publiquement le 15 décembre 2026 sur le compte @code_celeste, après avoir accepté le lot. La personne qui l'a nommé est citée, sauf si elle s'y oppose.",
      },
    ],
  },
  {
    title: "Article 8 – Lot",
    blocks: [
      {
        type: "p",
        text: "Un seul lot est mis en jeu, attribué au professionnel gagnant. Il comprend :",
      },
      {
        type: "ul",
        items: [
          "la conception et la mise en ligne d'un site vitrine complet, textes rédigés et référencement local inclus, d'une valeur de 1 000 € ;",
          "un nom de domaine enregistré au nom du gagnant, offert la première année ;",
          "3 mois de Suivi à compter de la mise en ligne (hébergement, maintenance, gestion de la fiche Google, ajout des réalisations, suivi des demandes, mises à jour), d'une valeur de 297 € (99 € par mois).",
        ],
      },
      {
        type: "p",
        text: "Valeur totale : 1 297 €, TVA non applicable (article 293 B du CGI). Le gagnant bénéficie de la garantie 90 jours de Code Celeste : si son site ne génère aucune demande de devis via son formulaire dans les 90 jours suivant la mise en ligne, le Suivi reste offert jusqu'à la première demande reçue, dans la limite de 6 mois de Suivi offert au total.",
      },
      {
        type: "p",
        text: "À l'issue de la période de Suivi offert, le gagnant choisit librement :",
      },
      {
        type: "ul",
        items: [
          "de souscrire au Suivi Code Celeste au tarif de 99 € par mois, sans engagement ;",
          "ou de ne pas y souscrire : il conserve alors son nom de domaine (dont le renouvellement est à sa charge) et l'Organisateur lui remet les fichiers de son site.",
        ],
      },
      {
        type: "p",
        text: "La mise en ligne intervient dans les 7 jours suivant la réception de l'ensemble des contenus demandés (photos, logo, informations pratiques), que le gagnant s'engage à fournir au plus tard le 31 janvier 2027. Les textes sont rédigés par l'Organisateur. Le lot n'est ni échangeable, ni cessible, ni convertible en argent.",
      },
    ],
  },
  {
    title: "Article 9 – Communication autour du lot",
    blocks: [
      {
        type: "p",
        text: "En acceptant le lot, le gagnant autorise l'Organisateur à citer son nom et celui de son activité, et à montrer son site, pour la promotion de Code Celeste. Toute prise de vue de la personne elle-même (photo, vidéo des coulisses) fait l'objet d'un accord séparé et facultatif.",
      },
    ],
  },
  {
    title: "Article 10 – Données personnelles",
    blocks: [
      {
        type: "p",
        text: "L'Organisateur traite les pseudonymes et commentaires des participants, ainsi que les coordonnées des professionnels contactés, pour gérer le Concours. Il peut contacter une fois les professionnels nommés, à leur adresse professionnelle, pour leur présenter son offre ; ils peuvent s'y opposer à tout moment, simplement et gratuitement.",
      },
      {
        type: "p",
        text: "Les données sont conservées au plus 6 mois après la fin du Concours, sauf pour le gagnant pendant la durée de la relation commerciale. Toute personne dispose d'un droit d'accès, de rectification, d'effacement et d'opposition, en écrivant à maxime@code-celeste.com. Elle peut aussi adresser une réclamation à la CNIL.",
      },
    ],
  },
  {
    title: "Article 11 – Modification et annulation",
    blocks: [
      {
        type: "p",
        text: "L'Organisateur peut prolonger, modifier, suspendre ou annuler le Concours en cas de force majeure ou de fraude, en informant les participants sur @code_celeste. Sa responsabilité ne peut pas être engagée en cas de dysfonctionnement d'Instagram ou d'Internet.",
      },
    ],
  },
  {
    title: "Article 12 – Acceptation et accès au règlement",
    blocks: [
      {
        type: "p",
        text: "Participer implique d'accepter ce règlement. Il est consultable gratuitement pendant toute la durée du Concours sur code-celeste.com/noel et peut être envoyé sur simple demande à maxime@code-celeste.com.",
      },
    ],
  },
  {
    title: "Article 13 – Loi applicable et litiges",
    blocks: [
      {
        type: "p",
        text: "Le présent règlement est soumis à la loi française. Toute réclamation doit être adressée par écrit à l'Organisateur. À défaut d'accord amiable, le litige est porté devant les tribunaux compétents.",
      },
    ],
  },
];

const EMAIL = /([\w.+-]+@[\w-]+\.[\w.-]*\w)/g;

// Transforme les adresses email du texte en liens mailto, sans toucher au reste.
function withMailto(text: string): ReactNode {
  return text.split(EMAIL).map((part, i) =>
    i % 2 === 1 ? (
      <a
        key={i}
        href={`mailto:${part}`}
        className="text-violet-300 underline-offset-4 hover:underline"
      >
        {part}
      </a>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

function RuleBlock({ block }: { block: Block }) {
  if (block.type === "p") return <p>{withMailto(block.text)}</p>;
  const List = block.type === "ul" ? "ul" : "ol";
  return (
    <List
      className={
        block.type === "ul"
          ? "list-disc space-y-2 pl-5 marker:text-violet-300"
          : "list-decimal space-y-2 pl-5 marker:text-violet-300"
      }
    >
      {block.items.map((item) => (
        <li key={item}>{withMailto(item)}</li>
      ))}
    </List>
  );
}

export default function NoelPage() {
  return (
    <main className="relative min-h-dvh bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 h-[70vh] bg-[radial-gradient(ellipse_at_top,hsl(var(--brand)/0.18),transparent_60%)]"
      />

      <PageTopBar />

      <div className="relative mx-auto max-w-[37rem] space-y-12 px-4 py-10 sm:px-6 lg:py-16">
        <section className="rounded-3xl border border-brand/40 bg-gradient-to-br from-brand/25 via-card to-card p-6 sm:p-8">
          <p className="text-xl font-semibold tracking-tight text-balance sm:text-2xl">
            Concours de Noël — Offre un site web à un pro du 974
          </p>
          <p className="mt-3 leading-relaxed text-foreground/85">
            Nomme en commentaire un artisan, un créateur ou un petit entrepreneur
            de La Réunion qui mérite un coup de pouce. Nominations jusqu&apos;au
            6 décembre 2026, gagnant annoncé le 15 décembre.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 text-sm font-medium text-white transition-colors hover:bg-brand/90 sm:w-auto"
          >
            Participer sur Instagram
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </section>

        <article className="text-[15px] leading-relaxed text-foreground/85 sm:text-base">
          <h1 className="text-2xl font-semibold leading-tight tracking-tight text-foreground text-balance sm:text-3xl">
            {RULES_TITLE}
          </h1>

          {articles.map((a) => (
            <section key={a.title} className="mt-10">
              <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                {a.title}
              </h2>
              <div className="mt-3 space-y-4">
                {a.blocks.map((b, i) => (
                  <RuleBlock key={i} block={b} />
                ))}
              </div>
            </section>
          ))}
        </article>

        <HomeFooter />
      </div>
    </main>
  );
}
