import { SiteConfig } from "@/site.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Mentions légales — ${SiteConfig.title}`,
  description:
    "Mentions légales, conditions d'utilisation, propriété intellectuelle et politique de confidentialité.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>

      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">Éditeur du site</h2>
        <p>
          <strong>{SiteConfig.company.name}</strong> —{" "}
          {SiteConfig.company.address}
        </p>
        <p>
          Email :{" "}
          <a className="underline" href={`mailto:${SiteConfig.email.contact}`}>
            {SiteConfig.email.contact}
          </a>
        </p>
        <p>Site : {SiteConfig.domain}</p>
      </section>

      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">Responsable de la publication</h2>
        <p>{SiteConfig.maker.name}</p>
      </section>

      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">Hébergement</h2>
        <p>
          Le site est hébergé par Vercel Inc. —{" "}
          <a
            className="underline"
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
          >
            vercel.com
          </a>
        </p>
      </section>

      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">Activité</h2>
        <p>
          Développement d’applications web et mobiles, intégration
          Front-end/Back-end, conception d’expériences utilisateurs, et
          accompagnement technique autour de React, Next.js, React Native et
          l’écosystème moderne.
        </p>
      </section>

      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">Propriété intellectuelle</h2>
        <p>
          L’ensemble des contenus de ce site (textes, images, logos, éléments
          graphiques et code) est protégé par le droit de la propriété
          intellectuelle. Toute reproduction, représentation, modification,
          publication, adaptation, totale ou partielle, de ces éléments, quel
          que soit le moyen ou le procédé utilisé, est interdite, sauf
          autorisation écrite préalable.
        </p>
      </section>

      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">Données personnelles</h2>
        <p>
          Les informations éventuellement collectées via les formulaires (prise
          de contact, prise de rendez-vous) sont limitées au strict nécessaire
          pour répondre à votre demande. Vous disposez d’un droit d’accès, de
          rectification et d’effacement de vos données. Pour l’exercer,
          contactez-nous à l’adresse : {SiteConfig.email.contact}.
        </p>
      </section>

      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">Cookies et mesure d’audience</h2>
        <p>
          Le site peut utiliser des cookies techniques nécessaires à son bon
          fonctionnement et, le cas échéant, des outils de mesure d’audience
          respectueux de la vie privée. Vous pouvez configurer votre navigateur
          pour refuser tout ou partie des cookies.
        </p>
      </section>

      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">Liens externes</h2>
        <p>
          Les liens sortants vers des sites tiers sont fournis à titre
          informatif. Nous ne sommes pas responsables de leur contenu ni de
          leurs pratiques.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p>
          Pour toute question concernant ces mentions légales, vous pouvez
          écrire à : {SiteConfig.email.contact}
        </p>
      </section>
    </main>
  );
}
