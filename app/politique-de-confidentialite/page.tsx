import { ConsentResetButton } from "@/components/consent-reset-button";
import { pageMetadata } from "@/lib/seo";
import { SiteConfig } from "@/site.config";
import { A, LegalList, LegalPage, LegalSection } from "../_landing/LegalPage";

export const metadata = pageMetadata(
  "Politique de confidentialité | Code Céleste",
  "Comment Code Celeste utilise les données transmises par le formulaire de devis et la prise de rendez-vous, et comment gérer les cookies.",
  "/politique-de-confidentialite"
);

const email = SiteConfig.email.contact;

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPage title="Politique de confidentialité" updated="22 novembre 2026">
      <p>
        Cette page explique quelles données je collecte sur {SiteConfig.domain},
        pourquoi, avec qui elles sont partagées et comment exercer vos droits,
        conformément au Règlement général sur la protection des données (RGPD)
        et à la loi Informatique et Libertés.
      </p>

      <LegalSection title="1. Responsable du traitement">
        <p>
          Maxime Céleste, Code Celeste — 30 rue de la Bourgogne, Sainte-Clotilde, 97490 Saint-Denis, La Réunion —{" "}
          <A href={`mailto:${email}`}>{email}</A>. Les coordonnées complètes
          figurent dans les <A href="/mentions-legales">mentions légales</A>.
        </p>
      </LegalSection>

      <LegalSection title="2. Données collectées">
        <p>Je collecte uniquement les données que vous me transmettez :</p>
        <LegalList>
          <li>
            <strong className="text-foreground">Formulaire d’estimation et de devis</strong> :
            nom, e-mail, téléphone, entreprise ou projet, site actuel
            (facultatif) et vos réponses sur votre projet (type de projet,
            existence d’un site, objectif, problématique, métier selon le
            parcours).
          </li>
          <li>
            <strong className="text-foreground">Prise de rendez-vous</strong> :
            le créneau choisi et les coordonnées saisies dans le calendrier.
          </li>
          <li>
            <strong className="text-foreground">Échanges par e-mail ou téléphone</strong> :
            le contenu de nos échanges.
          </li>
          <li>
            <strong className="text-foreground">Cookies publicitaires</strong>, seulement
            si vous les acceptez : voir la partie « Cookies » ci-dessous.
          </li>
        </LegalList>
        <p>
          Le site n’utilise pas d’outil de mesure d’audience.
        </p>
      </LegalSection>

      <LegalSection title="3. Pourquoi et sur quelle base">
        <LegalList>
          <li>
            Répondre à votre demande, préparer un devis et organiser l’appel :
            mesures précontractuelles prises à votre demande (art. 6.1.b du
            RGPD).
          </li>
          <li>
            Suivre la relation commerciale, puis exécuter le contrat si vous
            devenez client : exécution du contrat (art. 6.1.b).
          </li>
          <li>
            Conserver les factures et pièces comptables : obligation légale
            (art. 6.1.c).
          </li>
          <li>
            Mesurer l’efficacité de mes publicités Meta : votre consentement
            (art. 6.1.a), que vous pouvez retirer à tout moment.
          </li>
        </LegalList>
        <p>Vos données ne sont jamais vendues ni louées.</p>
      </LegalSection>

      <LegalSection title="4. Destinataires et prestataires">
        <p>
          Vos données sont destinées à moi seul. Elles transitent par les
          prestataires techniques suivants, qui les traitent pour mon compte :
        </p>
        <LegalList>
          <li>
            <strong className="text-foreground">HighLevel (LeadConnector)</strong>, États-Unis :
            gestion des contacts, des demandes et du calendrier de rendez-vous.
          </li>
          <li>
            <strong className="text-foreground">Slack</strong> (Salesforce), États-Unis :
            notification interne de chaque nouvelle demande.
          </li>
          <li>
            <strong className="text-foreground">Vercel</strong>, États-Unis :
            hébergement du site.
          </li>
          <li>
            <strong className="text-foreground">Meta Platforms Ireland</strong> :
            uniquement si vous acceptez les cookies publicitaires.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="5. Transferts hors de l’Union européenne">
        <p>
          Certains prestataires sont situés aux États-Unis. Ces transferts sont
          encadrés par le Data Privacy Framework UE–États-Unis lorsque le
          prestataire y adhère, ou à défaut par les clauses contractuelles
          types de la Commission européenne.
        </p>
      </LegalSection>

      <LegalSection title="6. Durée de conservation">
        <LegalList>
          <li>Demande sans suite : 3 ans après notre dernier échange.</li>
          <li>
            Client : pendant la relation commerciale, puis 5 ans
            (prescription légale).
          </li>
          <li>Factures et pièces comptables : 10 ans.</li>
          <li>Choix concernant les cookies : 6 mois.</li>
        </LegalList>
      </LegalSection>

      <LegalSection id="cookies" title="7. Cookies">
        <p>
          Les pages de mes publicités et la page de confirmation de
          rendez-vous peuvent utiliser le <strong className="text-foreground">pixel Meta</strong>{" "}
          (Facebook, Instagram). Il dépose les cookies <code>_fbp</code> et{" "}
          <code>_fbc</code> et transmet à Meta des informations sur votre visite
          et, lors d’une demande, vos nom, prénom, e-mail et téléphone sous
          forme chiffrée (hachage), ainsi que votre adresse IP, afin de mesurer l’efficacité de mes publicités.
        </p>
        <p>
          Il n’est chargé qu’après votre accord, donné dans le bandeau qui
          s’affiche sur ces pages. Si vous refusez, rien n’est déposé ni envoyé
          à Meta, et le site fonctionne de la même façon. Votre choix est
          conservé 6 mois dans votre navigateur.
        </p>
        <p>
          Le calendrier de rendez-vous, fourni par HighLevel, peut déposer des
          cookies techniques nécessaires à son fonctionnement.
        </p>
        <p>Vous pouvez modifier votre choix à tout moment ici :</p>
        <ConsentResetButton />
      </LegalSection>

      <LegalSection title="8. Vos droits">
        <p>
          Vous disposez d’un droit d’accès, de rectification, d’effacement,
          de limitation, d’opposition et de portabilité de vos données, ainsi
          que du droit de retirer votre consentement à tout moment. Vous pouvez
          aussi définir des directives sur le sort de vos données après votre
          décès.
        </p>
        <p>
          Pour les exercer, écrivez à <A href={`mailto:${email}`}>{email}</A>.
          Je réponds dans un délai d’un mois.
        </p>
        <p>
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez
          adresser une réclamation à la CNIL :{" "}
          <A href="https://www.cnil.fr/fr/plaintes">cnil.fr/fr/plaintes</A>.
        </p>
      </LegalSection>

      <LegalSection title="9. Jeu-concours">
        <p>
          Les données des participants aux jeux-concours sont traitées selon
          l’article dédié du règlement, par exemple le{" "}
          <A href="/noel">règlement du concours de Noël</A>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
