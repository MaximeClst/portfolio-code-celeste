import { pageMetadata } from "@/lib/seo";
import { SiteConfig } from "@/site.config";
import { A, LegalPage, LegalSection } from "../_landing/LegalPage";

export const metadata = pageMetadata(
  "Mentions légales | Code Céleste",
  "Mentions légales du site code-celeste.com : éditeur, hébergeur, propriété intellectuelle et données personnelles.",
  "/mentions-legales"
);

const email = SiteConfig.email.contact;

// Informations reprises de la synthèse d’immatriculation (Guichet unique, 17/09/2025).
export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales" updated="22 novembre 2026">
      <LegalSection title="Éditeur du site">
        <p>
          Le site {SiteConfig.domain} est édité par <strong className="text-foreground">Maxime Céleste EI</strong>,
          exerçant sous le nom commercial Code Celeste.
        </p>
        <ul className="space-y-1">
          <li>Statut : entrepreneur individuel (EI), sous le régime de la micro-entreprise</li>
          <li>SIRET : 831 141 635 00027 — immatriculé au Registre national des entreprises (RNE)</li>
          <li>Adresse : 30 rue de la Bourgogne, Sainte-Clotilde, 97490 Saint-Denis, La Réunion</li>
          <li>Téléphone : <A href="tel:+262693651405">0693 65 14 05</A></li>
          <li>E-mail : <A href={`mailto:${email}`}>{email}</A></li>
          <li>TVA non applicable, art. 293 B du CGI</li>
        </ul>
      </LegalSection>

      <LegalSection title="Directeur de la publication">
        <p>Maxime Céleste.</p>
      </LegalSection>

      <LegalSection title="Hébergement">
        <p>
          Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis —{" "}
          <A href="https://vercel.com">vercel.com</A>.
        </p>
      </LegalSection>

      <LegalSection title="Activité">
        <p>
          Création de sites web et d’applications mobiles pour les professionnels,
          principalement à La Réunion.
        </p>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>
          Les textes, images, logos, éléments graphiques et le code de ce site
          sont protégés par le droit de la propriété intellectuelle. Toute
          reproduction, représentation, modification ou adaptation, totale ou
          partielle, est interdite sans autorisation écrite préalable.
        </p>
        <p>
          Les sites et applications présentés dans les réalisations, ainsi que
          leurs logos et contenus, appartiennent à leurs titulaires respectifs.
          Les images d’appareils Apple sont des ressources fournies par Apple
          Inc.
        </p>
      </LegalSection>

      <LegalSection title="Données personnelles et cookies">
        <p>
          La façon dont les données transmises par les formulaires sont
          utilisées, ainsi que l’usage des cookies, sont détaillés dans la{" "}
          <A href="/politique-de-confidentialite">politique de confidentialité</A>.
        </p>
      </LegalSection>

      <LegalSection title="Liens externes">
        <p>
          Les liens vers des sites tiers sont fournis à titre informatif.
          Code Celeste n’est pas responsable de leur contenu ni de leurs
          pratiques.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Pour toute question sur ces mentions légales :{" "}
          <A href={`mailto:${email}`}>{email}</A>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
