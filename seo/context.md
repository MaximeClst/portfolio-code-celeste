# Code Céleste — SEO autopilot

Initialisation : 2026-10-30 (Indian/Reunion). Dernière reconstruction de la carte : 2026-10-30. Première revue hebdomadaire à partir du 2026-11-06.

## Cadre autorisé
- Site : https://code-celeste.com ; origine confirmée par `site.config.ts` et crawl HTTP.
- Produit : développement indépendant de sites web et applications mobiles pour artisans, commerçants et entrepreneurs à La Réunion (`site.config.ts`, `app/_landing/Hero.tsx`, `Feature.tsx`).
- Conversion : demande de devis qualifiée via le formulaire /api/lead, puis réservation d'un appel ; instrumentation existante à conserver (`QuoteModal.tsx`, `GhlBooking.tsx`, `app/api/lead/route.ts`, `app/confirmation/confirmation-view.tsx`).
- Publication : autorisation explicite le 2026-10-30, publication automatique des seules modifications SEO après lint, TypeScript, build et contrôle visuel ; vérifier la production après push.
- Automatisation : `seo-quotidien-code-c-leste`, chaque jour à 09:00 Indian/Reunion, rattachée au chat de lancement. Ne pas créer de doublon.
- Aucune dépense, publication sociale, message externe, soumission d'annuaire ou création de compte. Préserver prix, promesses et fonctionnement métier.

## Sources et offres observées
Sources : `app/_landing/Feature.tsx`, `Comparison.tsx`, page https://code-celeste.com/ consultée le 2026-10-30.
- MVP iOS/Android : à partir de 2 000 €, livraison annoncée en 7 jours, maintenance 120 €/mois.
- Application complète : sur devis.
- Site vitrine : à partir de 1 000 €, maintenance 75 €/mois.
- Maxime est l'interlocuteur ; contact public maxime@code-celeste.com (`site.config.ts`, Footer).
- Preuves propriétaires : portfolio, visuels des projets et témoignages déjà présents. Ne pas inventer de résultats ou étendre les citations (`Work.tsx`, `Testimonial.tsx`, `app/works/`).
- Smart Power System confirmé le 2026-10-30 par le propriétaire et https://smart-power-system.fr/ + /notre-team : équipe de coachs sportifs, force athlétique et coaching en ligne. Domaine officiel : smart-power-system.fr. Description énergétique et ancien domaine .com corrigés. Le site live indique Hostinger Website Builder (en-tête HTTP x-powered-by) : ne pas attribuer Next.js à ce projet. Résultats attribués au témoignage existant d’Alexandre Eydieux (`app/_landing/Testimonial.tsx`) : une quinzaine de demandes, dont 4 à 5 concrétisées, sans délai ajouté.

- Autre écart à clarifier : /ads annonce trois mois de maintenance offerts (`app/ads/page.tsx`) alors que l’offre générale ne mentionne pas de gratuité. Peut être une offre de campagne ; ne pas trancher ni modifier sans confirmation spécifique.

## Technique et publication
- Next.js 15.5.9 App Router, React 19, TypeScript, Tailwind (`package.json`). Pages dans `app/**/page.tsx`, composants landing dans `app/_landing/`.
- Titres, descriptions, canonicals et Open Graph : `lib/seo.ts` et métadonnées de chaque page ; origine dans `app/layout.tsx`.
- Partage /ads : image explicite Open Graph et Twitter dans `app/ads/layout.tsx`, fichier exact du logo carré fourni par le propriétaire le 2026-10-30, sans texte ajouté (`public/social/code-celeste-logo-v2.png`, 512×512). Ne pas remplacer par la signature horizontale du header. Le fichier v1 reste disponible uniquement pour les anciens caches. Conserver une image de marque explicite pour éviter la sélection automatique d’un portrait client. Les caches des messageries sont indépendants du déploiement.
- `app/sitemap.ts` : six URL éditoriales, sans lastmod artificiel ; `/ads` omise du sitemap, indexabilité existante conservée ; `/confirmation` reste noindex/nofollow et hors sitemap.
- `app/robots.ts` : exploration publique autorisée, /api/ exclue ; ne pas bloquer /confirmation, dont Google doit pouvoir lire noindex.
- JSON-LD Organization dans l'accueil, uniquement identité publique, sans note, avis ni prix.
- GitHub : MaximeClst/portfolio-code-celeste, main initial `b462c7e`. Vercel publie main automatiquement (statut GitHub Vercel confirmé).
- Source demandée : `/Users/maximeceleste/Library/Mobile Documents/com~apple~CloudDocs/Developer/landingPage_CodeCeleste/portfolio-code-celeste`.
- Copie utilisée : `/Users/maximeceleste/Developer/seo-work/portfolio-code-celeste-autopilot`. Le dossier iCloud présente de nombreuses différences de mode et des lectures Git très lentes ; ne pas l'écraser ni faire de reset. Avant chaque run, vérifier origin/main et le travail local.

## Accès et baseline
- Search Console déjà configurée, propriété `sc-domain:code-celeste.com`, accessible dans Chrome via `maxime@code-celeste.com` le 2026-10-30. Le compte personnel initial ouvre une page d'accueil vide : choisir le compte professionnel sans recréer la propriété.
- Performance Web, filtre 3 mois, graphique disponible du 25 au 28 octobre 2026 : 0 clic, 16 impressions, CTR 0 %, position moyenne 3,8. Ce ne sont pas les positions des mots-clés commerciaux ; aucun gain n'est attribuable à ce premier passage.
- Rapport agrégé d'indexation : traitement des données en cours. Indexation détaillée : voir rapport daté. Absence de rapport ne signifie pas absence d'indexation.
- Sitemap https://code-celeste.com/sitemap.xml soumis le 2026-10-30 après publication ; dernière lecture le même jour, « Opération effectuée », six pages découvertes. Ne pas le soumettre à nouveau sans raison. Six découvertes ne signifient pas six pages indexées.
- Datafast est instrumenté (`app/layout.tsx`) mais les métriques de conversions ne sont pas disponibles via un connecteur dans cette session. Ahrefs et outil de volumes non connectés : volumes/difficulté/positions inconnus restent vides. Ils permettraient priorisation quantitative et mesure des devis attribués au SEO.
- Suivi ChatGPT/Perplexity/AI Overviews non mesuré ; les questions de `ai-prompts.md` sont une grille, pas des observations.

## Concurrence de départ
Recherche le 2026-10-30 : « création site internet La Réunion artisan ». Résultats exploratoires, pas un classement Google géolocalisé reproductible.
- HCG : https://www.hcg.re/ (sites et services de proximité).
- WEBANANAS : https://www.webananas.re/ (TPE/PME et réalisations).
- Tampon Web Conception : https://tamponwebconception.fr/ (développeur local et offres détaillées).
- Autres résultats lus : https://demarre.re/ et https://lumendev.fr/.
- Différenciation à documenter : réalisations propres, développement web + mobile avec Maxime, parcours de devis existant. Pas d'article générique ni de comparaison concurrentielle non sourcée ce jour.
- Snapshots : `seo/competitors/` ; erreurs 403/404 conservées comme limites, sans déduire absence de sitemap ou perte SEO.
