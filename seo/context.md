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
- `app/sitemap.ts` : huit URL éditoriales (depuis le 2 novembre), sans lastmod artificiel ; `/ads` omise du sitemap, indexabilité existante conservée ; `/confirmation` reste noindex/nofollow et hors sitemap.
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

## Mise à jour du 2026-11-01
- Daily exécuté ; Weekly reste dû le 6 novembre, Monthly le 29 novembre. Aucun commit distant supplémentaire depuis `bbc3650` avant ce passage ; copie iCloud préservée.
- Page artisan : `/creation-site-web-artisan-reunion`, requête propre « création site web artisan La Réunion ». Sources : offre inchangée dans `app/_landing/Feature.tsx`, projet SCMOI déjà présent dans `app/works/page.tsx`, capture existante `public/scmoi-hero.png` et site https://www.scmoi.re/ consulté le 1 novembre. Aucune promesse de délai, volume de clients ou rang ajoutée. Service JSON-LD, logo propriétaire pour le partage, sitemap désormais sept URL, liens depuis cinq pages existantes. CTA utilise le formulaire existant avec le choix site-artisan présélectionné.
- Recherche préalable documentée dans `reports/2026-11-01-research.md` : cinq résultats lus, exemple propriétaire SCMOI comme valeur distincte.
- Search Console : propriété professionnelle toujours accessible. Web, filtre 3 mois, données du 25 au 30 octobre : 1 clic, 21 impressions, CTR 4,8 %, position moyenne 6,6. Clic sur « code celeste » (4 impressions). Chiffres agrégés sur un très petit échantillon, pas un classement des requêtes commerciales ; période différente du relevé initial, aucun gain SEO attribuable démontré.
- Inspections individuelles du 1 novembre : accueil, /works, /works/budget-copain, /mentions-legales indexés ; /works/smart-power-system inconnu de Google, /works/velorun-festival détecté non indexé. Sitemap affiché réussi, dernière lecture 30 octobre, six pages découvertes avant publication. Rapport agrégé d’indexation encore en traitement. Aucun accès ni propriété recréé, aucune demande d’indexation répétée.

## Mise à jour du 2026-11-02
- Daily ; Weekly toujours dû le 6 novembre, Monthly le 29 novembre. `main` distant vérifié identique à `9958b9e` avant ce passage ; copie iCloud préservée.
- `/application-mobile-reunion` : offre iOS/Android avec Maxime, exemples Budget Copain/Mossly, distinction MVP / sur mesure, préparation du devis ; montants et promesse existants inchangés. Sources et cinq résultats lus : `reports/2026-11-02-research.md`. CTA réutilise le formulaire avec `app-mobile` présélectionné. Service JSON-LD, logo de partage propriétaire, sitemap huit URL, six pages entrantes. Pas d’article ni de diffusion sociale.
- Source Budget Copain : https://www.budgetcopain.com/ consultée le 2 novembre, saisie dépenses/revenus, catégories personnalisables, visualisation. Aucun chiffre utilisateur/avis/résultat repris. Icône `adaptive-icon.png`, déjà utilisée dans le portfolio ; l’alt de la fiche projet ne prétend plus être une capture.
- Search Console professionnelle accessible : Web, trois mois, données du 25 au 31 octobre, 1 clic, 27 impressions, CTR 3,7 %, position moyenne 11,4. Période élargie par rapport au relevé précédent, pas de baisse/gain causal affirmé ; aucune position commerciale extrapolée. Rapport agrégé d’indexation encore en traitement.
- Artisan : « Détectée, actuellement non indexée », sitemap référent visible, pas encore d’exploration. Sitemap relu avec succès le 1 novembre, sept pages découvertes. Les autres inspections restent datées du 1 novembre ; aucun renvoi du sitemap ni demande d’indexation ce jour.
- Audit HTTP réutilisable dans `seo/scripts/crawl.py` : sitemap, URL liées, ancres, titres/descriptions, H1, canonicals, liens entrants. Les temps réseau relevés ne sont pas des scores de performance mobile. Les données de conversion Datafast et volumes restent indisponibles.
- Publication `0c2107d` vérifiée en production le 2 novembre : huit URL dans le sitemap, douze réponses 200, métadonnées conformes au build et icônes optimisées accessibles. Éviter une page MVP séparée tant qu’une intention et un contenu distincts ne sont pas établis.

## Mise à jour du 2026-11-03
- Daily ; Weekly dû le 6 novembre, Monthly le 29 novembre. Dernier main distant vérifié `a38bf13`, aucun nouveau changement métier depuis hier.
- Isolation : la copie habituelle `portfolio-code-celeste-autopilot` contient deux suppressions locales préexistantes (`public/social/code-celeste-logo-v2.png`, `public/velorun-hero.png`). Elles ne sont ni restaurées ni publiées. Travail dans `/Users/maximeceleste/Developer/seo-work/portfolio-code-celeste-20261103`, branche `seo/daily-2026-11-03`, worktree créé depuis origin/main. Ne pas réinitialiser la copie habituelle ; vérifier divergences et remote au prochain passage.
- Accueil : quatre blocs du hero passent de `initial={{ opacity: 0, y: 20 }}` à `initial={false}` (`app/_landing/Hero.tsx`). HTML initial vérifié : opacité 1, texte identique ; évite d’attendre l’hydratation pour lire le titre et les liens. Source technique : https://motion.dev/docs/react-motion-component, consultée le 3 novembre. Aucun gain Core Web Vitals mesuré ou revendiqué.
- Search Console : accès professionnel confirmé, mêmes données du 25 au 31 octobre (1 clic, 27 impressions, CTR 3,7 %, position 11,4). Rapport agrégé en traitement, aucune donnée Core Web Vitals. Page mobile inspectée : URL inconnue de Google ; publiée la veille, liée et présente dans le sitemap public. Sitemap GSC toujours réussi, lu le 1 novembre, sept pages découvertes. Aucun renvoi. Autres inspections conservées avec leurs dates antérieures.
- Publication `5fa5a3f` : Vercel réussi, douze URL 200 en production ; quatre styles du hero opacité 1, métadonnées identiques au build, contrôle visuel public réussi. Les deux fichiers absents de la copie habituelle sont toujours servis en production ; cette copie reste inchangée.

## Refonte du 2026-11-03 (hors autopilot)
- Accueil, /works et les deux pages de service refaits au nouveau style (page perso : barre légère `PageTopBar`, halo violet, cartes à captures). `Hero.tsx`, `Feature.tsx`, `Work.tsx`, `Testimonial.tsx`, `Comparison.tsx`, `HowItWorks.tsx`, `FinalCTA.tsx`, `Section.tsx` n'existent plus.
- Source unique des projets : `app/_landing/home/data.ts` (12 sites avec captures `public/works/`, apps clientes Z'Happyro et Pitona, projets perso). Offres : `app/_landing/home/Offers.tsx`. Résultats clients chiffrés validés par le propriétaire : SCMOI +20 clients en 3 mois (2/7/6/5 de juin à septembre), L2KJ 9 appels, O'Milles Déco un mariage réservé le 1er mois, Smart Power System 15 demandes dont 4 à 5 signées.
- Toute nouvelle page doit reprendre ces composants (PageTopBar, Eyebrow, SiteCard/AppCard, HomeFooter). Le propriétaire trouve les pages de service répétitives : ne pas créer les pages « planned » de `keyword-map.csv` sans son accord.
- Décision du propriétaire le 2026-11-03 : garder les deux pages de service et faire le bilan début février 2027 (impressions Search Console sur leurs requêtes). Sans résultat, elles seront supprimées avec redirection 301 vers l’accueil.
