# Code Céleste — SEO autopilot

Initialisation : 2026-10-30 (Indian/Reunion). Dernière reconstruction de la carte : 2026-10-30. Dernière revue hebdomadaire effectuée le 2026-11-15 (première le 8). Prochain Weekly : 2026-11-22 ; Monthly : 2026-11-29.

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
- Dossier courant autorisé depuis le 5 novembre : `/Users/maximeceleste/Developer/seo-work/code-celeste`. Ancienne copie : `/Users/maximeceleste/Developer/seo-work/portfolio-code-celeste-autopilot`. Le dossier iCloud présente de nombreuses différences de mode et des lectures Git très lentes ; ne pas l'écraser ni faire de reset. Avant chaque run, vérifier origin/main et le travail local.

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

## Mise à jour du 2026-11-05
- Daily. Synchronisation fast-forward de `2e99e1b` à `7ff438c`, cinq commits distants lus : refonte propriétaire de l’accueil, /works et des pages de service. Aucun commit local en avance, aucun fichier utilisateur modifié ; stash `e3a9817ad675618683c1f8719d3185545db3a251` conservé (prix /ads et suppressions de médias), ni appliqué ni publié. Le passage du 4 novembre n’a pas de rapport dans le dépôt ; ne pas lui inventer des actions.
- Références métier actuelles : `app/_landing/home/Offers.tsx` et `data.ts`. Montants conservés, mêmes tarifs sur les pages de service ; nouvelles preuves propriétaires décrites dans la section refonte ci-dessus. Ne pas réintroduire les anciens composants supprimés. Respecter l’évaluation des deux pages en février 2027 et l’absence de nouvelles pages sans accord.
- Complément métadonnées dans `lib/seo.ts` : logo carré propriétaire déclaré par défaut en Open Graph et Twitter sur les six pages qui n’avaient pas d’image (accueil, /works, trois études de cas, mentions légales). Les trois surcharges déjà présentes (services et /ads) sont conservées. Aucun nouveau média ni changement de texte ou de tunnel. Référence protocole : https://ogp.me/ consultée le 5 novembre. Les caches de partage restent externes ; aucune promesse de classement.
- Search Console professionnelle accessible : Web, trois mois, données du 25 octobre au 2 novembre, 2 clics, 36 impressions, CTR 5,6 %, position moyenne 10,6 ; deux clics sur la marque. Période élargie et échantillon faible, aucun résultat commercial déduit. Sitemap relu avec succès le 4 novembre, huit pages découvertes. Page mobile maintenant détectée non indexée, pas explorée ; rapport agrégé en traitement. Autres inspections individuelles non renouvelées ce jour.
- Nouveau rapport Core Web Vitals mobile : groupe LCP 3,0 s, trois URL à améliorer (/ ; /works ; /mentions-legales), données mises à jour le 2 novembre et première détection affichée le 3. Groupe basé sur l’origine faute de données individuelles suffisantes ; il précède la refonte. Mesurer la version actuelle avant d’attribuer une cause ou de lancer la validation. Aucun diagnostic par URL ou gain inventé.
- Weekly prévu le 6 novembre, Monthly le 29 novembre. Données de conversions Datafast et volumes toujours indisponibles ; pas de nouvelle connexion requise.
- Publication `35d3293`, Vercel réussi : douze URL 200, logo exact vérifié par empreinte, trois user-agents sociaux ; métadonnées identiques au build. Lint, TypeScript, build et contrôle visuel local réussis. Stash conservé.


## Mise à jour du 2026-11-08 — Daily et Weekly
- Dernier main distant `aea3c2e`, aucun changement distant ni commit local en avance ; stash `e3a9817ad675618683c1f8719d3185545db3a251` préservé. Pas de rapport des 6 et 7 novembre dans le dépôt : aucune action inventée. Automatisation ACTIVE vérifiée, reprise du 4 novembre confirmée dans le suivi central `Clients/SEO/` ; l’ancienne pause du 3 novembre est obsolète.
- Crawl public : douze réponses 200, huit URL sitemap, aucun problème détecté, métadonnées identiques au 5 novembre ; logo propriétaire conservé, /confirmation noindex, /ads hors sitemap. Lint, build et TypeScript réussis ; contrôle visuel public réussi. Aucun changement du site justifié ce jour : seuls les documents de suivi évoluent.
- Search Console : 3 clics, 52 impressions, CTR 5,8 %, position 9,6 (Web texte, filtre trois mois, données du 25 octobre au 6 novembre). Comparaison demandée sur sept jours : 31 octobre–6 novembre, 2 clics / 31 impressions ; période précédente réellement affichée 25–30 octobre, 1 clic / 21 impressions. Six jours seulement dans la référence : pas de comparaison à durée égale ni de gain causal. Requêtes visibles aux positions 8–20 non qualifiées ; aucune réécriture opportuniste.
- Huit inspections renouvelées : accueil, /works, Budget Copain et mentions légales indexés ; artisan, SPS et VELORUN détectés non indexés, sans exploration. Page mobile de nouveau « Google ne reconnaît pas cette URL » ; variation de rapport, pas une désindexation démontrée. Sitemap lu avec succès le 8 novembre, huit pages découvertes, page mobile publique 200 avec six liens entrants. Rapport agrégé toujours en traitement. Aucune demande répétée ni reconnexion.
- Mesure PageSpeed mobile actuelle : performance 98, LCP laboratoire 0,9 s, TBT 60 ms, CLS 0. CrUX à l’origine reste à 3,0 s sur 28 jours ; mesures différentes, aucun gain réel déclaré. Datafast retourne 403 dans Lighthouse mais aucune erreur n’est observée lors du contrôle Chrome ordinaire : réception analytics non vérifiée, intégration préservée. Détails dans `reports/2026-11-08-performance.json`.
- Premier relevé du rapport GSC IA générative (bêta) : 15 impressions sur l’accueil du 25 octobre au 6 novembre. Aucun détail de requête ou réponse, aucune conclusion sur ChatGPT/Perplexity ; grille de 25 prompts toujours non mesurée. Conversions toujours indisponibles.
- Concurrence : trois sous-sitemaps WEBANANAS inchangés, lastmod de deux modifiés ; snapshots enfants désormais conservés. Aucun historique enfant pour prouver les ajouts, aucun gain de requête concurrent mesuré. Article sur le paiement fractionné repéré, sans transposer ses affirmations juridiques ni modifier nos offres. HCG 404 et Tampon Web Conception 403 limitent le relevé comme au setup.
- Prochain Weekly le 15 novembre, Monthly le 29. Maintenir les pages de service jusqu’au bilan de février 2027 et l’offre /ads intacte.


## Mise à jour du 2026-11-09 — Daily
- Main distant `94b7bbd` inchangé ; copie de travail propre au départ et stash utilisateur conservé. Aucun changement métier ni correction du site justifiée. Douze URL publiques 200, métadonnées/texte/maillage identiques au 8 novembre, aucun problème de crawl ; /ads contrôlée visuellement.
- GSC accessible : 3 clics / 52 impressions / CTR 5,8 % / position 9,6, Web texte, données du 25 octobre au 7 novembre. Totaux inchangés ; sitemap réussi, lu le 8, huit découvertes. Rapport agrégé toujours en traitement, trois URL mobiles CWV à améliorer. Inspections individuelles et mesure laboratoire restent datées du 8 novembre, non répétées aujourd’hui.
- Daily documenté dans `reports/2026-11-09.md`. Weekly le 15 novembre, Monthly le 29 ; priorités d’hier et décisions propriétaire conservées, aucune nouvelle page ni modification de maintenance.


## Mise à jour du 2026-11-10 — Daily
- Main distant `ebc83b2` inchangé, copie initialement propre, stash `e3a9817ad675618683c1f8719d3185545db3a251` intact. Crawl : douze URL 200, huit au sitemap, aucune variation de métadonnées/texte/maillage. Lint, TypeScript, build et contrôle visuel de l’accueil réussis ; aucun changement du site justifié.
- **Le rapport agrégé GSC n’est plus en traitement** : première disponibilité observée aujourd’hui, données du 6 novembre. Quatre URL indexées, dix non indexées : artisan/mobile/SPS/VELORUN détectées sans exploration, trois variantes HTTP/www redirigées et trois anciennes URL 404 (deux polices Next et `/lander`, explorées en mai/juin). Détails `reports/2026-11-10-search-console.json`. Ce total de quatorze URL connues n’est pas le nombre d’entrées du sitemap.
- Contrôles directs : anciennes polices 404 ; HTTP `/lander` redirige en HTTPS puis 404, aucun lien depuis les sources ou pages courantes. Variantes de l’accueil aboutissent toutes à https://code-celeste.com/ en 200 (deux sauts pour HTTP+www). Pas de redirection artificielle, validation ni resoumission. Les quatre pages éditoriales attendent encore une exploration ; inspections individuelles non répétées ce jour.
- Performance GSC : 3 clics / 53 impressions / CTR 5,7 % / position 9,5, Web texte, données du 25 octobre au 8 novembre. Échantillon faible et fenêtre étendue, aucun gain commercial déduit. CWV inchangés : trois URL mobiles à améliorer ; pas de nouvelle mesure laboratoire. Weekly le 15, Monthly le 29 novembre.


## Mise à jour du 2026-11-11 — Daily limité au contrôle public
- `main` et origin/main identiques à `da7f95f`, copie propre avant passage et stash utilisateur préservé. Douze URL 200, huit au sitemap, aucun problème ni variation de métadonnées/texte/maillage par rapport au 10 novembre. Aucune correction applicative justifiée.
- Navigation Chrome vers Search Console expirée à deux reprises, onglet resté vide ; accès Google, métriques et indexation non vérifiés aujourd’hui. Aucun indice de perte de propriété : ne pas recréer ou reconnecter. Dernier relevé GSC le 10 novembre, rapport agrégé déjà disponible à cette date.
- Aucun contrôle visuel ni déploiement aujourd’hui. Les fichiers du 11 novembre et les ajouts context/log sont des relevés locaux de l’autopilot, laissés non publiés ; les préserver au prochain passage. Contrôles de compilation non répétés sur le code inchangé. Reprendre le navigateur au prochain Daily ; Weekly le 15, Monthly le 29 novembre.


## Mise à jour du 2026-11-12 — Daily, accès rétabli
- Chrome permet de nouveau de consulter la propriété professionnelle existante, sans reconnexion ni configuration modifiée. Le blocage du 11 est résolu. GSC Web texte, données du 25 octobre au 9 novembre : 4 clics, 70 impressions, CTR 5,7 %, position moyenne 7,7 ; fenêtre étendue, pas de gain causal ni de page 1 commerciale déduite. Requête de marque « code celeste » : 2 clics / 16 impressions ; détail incomplet pour les autres clics.
- Rapport agrégé actualisé le 9 novembre : quatre indexées, dix non indexées, catégories inchangées (3 anciennes 404, 3 redirections, 4 détectées non indexées). Exemples détaillés et inspections individuelles non répétés ; ne pas leur donner une date d’observation actuelle. Pas de resoumission ni validation.
- Main distant `da7f95f` inchangé ; seuls les relevés autopilot du 11 étaient en attente localement, relus et inclus dans la synchronisation documentaire avec ceux du 12. Stash utilisateur préservé. Douze URL 200, huit au sitemap, métadonnées/texte/maillage identiques ; lint, TypeScript, build et affichage de la page mobile réussis. Aucun changement applicatif. Weekly le 15, Monthly le 29 novembre.


## Mise à jour du 2026-11-13 — Daily
- Main distant `1b8578f` inchangé, copie initialement propre et stash conservé. Douze URL 200, huit entrées sitemap, métadonnées/texte/maillage inchangés ; lint, TypeScript, build et contrôle visuel public de la page artisan réussis. Aucune correction applicative justifiée.
- GSC accessible : 4 clics / 75 impressions / CTR 5,3 % / position 7,4, Web texte, données du 25 octobre au 10 novembre. Fenêtre étendue et faible échantillon, aucune tendance causale déduite. Rapport agrégé identique, actualisé le 9 : 4 indexées / 10 non indexées (3 anciennes 404, 3 redirections, 4 détectées non indexées). Pas de nouvelle inspection individuelle, resoumission ou validation.
- Sources `reports/2026-11-13*.json`. Priorités inchangées ; Weekly le 15, Monthly le 29 novembre. Offres et parcours /ads préservés.


## Mise à jour du 2026-11-14 — Daily
- Main distant `b388d12` inchangé, copie initialement propre et stash préservé. Douze URL 200, huit au sitemap, aucun problème ni variation de métadonnées/texte/maillage. Lint, TypeScript, build et affichage du portfolio réussis avec les outils Homebrew existants (/opt/homebrew/bin à ajouter au PATH du shell si nécessaire). Aucun changement applicatif.
- GSC accessible : mêmes données qu’au 13, du 25 octobre au 10 novembre, 4 clics / 75 impressions / CTR 5,3 % / position 7,4. Rapport agrégé toujours daté du 9 : 4 indexées / 10 non indexées, mêmes catégories. Aucune progression mesurée ni inspection individuelle répétée ; aucune resoumission ou validation.
- Sources `reports/2026-11-14*.json`. Weekly à effectuer le 15 novembre (dernier le 8), Monthly le 29 ; prix et /ads conservés.


## Mise à jour du 2026-11-15 — Daily et Weekly
- Main distant `63d9248` inchangé, copie initialement propre, stash `e3a9817ad675618683c1f8719d3185545db3a251` préservé. Douze URL publiques 200, huit au sitemap, aucun problème ni modification de métadonnées/texte/maillage. Lint/build/TypeScript et affichage public artisan réussis. Aucune correction applicative justifiée.
- GSC professionnelle accessible via Chrome, sans reconnexion : 5 clics / 83 impressions / CTR 6 % / position 7,2, 25 octobre–13 novembre. Comparaison de fenêtres complètes 7–13 novembre et 31 octobre–6 novembre : 2 clics / 31 impressions dans chacune ; position agrégée 3,1 contre 11,6, mélange de requêtes différent, pas de preuve de page 1 commerciale. Pas de requête acheteur visible en position 8–20. Conversions non disponibles.
- Huit inspections actuelles : accueil, /works, Budget Copain et mentions légales indexés ; artisan/SPS inconnus, mobile/VELORUN détectés non indexés sans exploration. Rapport agrégé toujours daté du 9 (4 / 10) ; variations individuelles non assimilées à une désindexation. Sitemap réussi, lu le 13 novembre, huit découvertes.
- Tests en direct artisan/mobile réussis le 15 novembre à 20:57, Google peut accéder et indexer les pages. Une demande d’indexation pour chacune a été acceptée dans la file prioritaire ; aucune indexation effective encore confirmée, ne pas redemander quotidiennement. Aucun renvoi du sitemap.
- Concurrence : nouvel article WEBANANAS /intelligence-artificielle-tpe-pme/, ajouté au sitemap depuis le 8, mise à jour affichée le 11. Aucun classement ni statistique repris, pas de nouvelle page sans valeur propriétaire démontrée. HCG 404 / Tampon 403 persistent.
- IA GSC : 19 impressions de l’accueil sur fenêtre élargie, sans détail des réponses ; 25 prompts contrôlés toujours non mesurés faute d’interface de mesure connectée. CWV trois URL mobiles à améliorer (9 novembre), pas de nouveau Lighthouse. Prochain Weekly le 22, Monthly le 29. Décisions de février et maintenance /ads préservées.


## Mise à jour du 2026-11-16 — deux pages commerciales indexées
- Main distant `c4d7760` inchangé ; copie initialement propre, stash `e3a9817ad675618683c1f8719d3185545db3a251` conservé. Douze URL publiques 200 et métadonnées/texte/maillage identiques au 15. Lint/build/TypeScript et contrôle visuel public mobile réussis ; aucun changement applicatif.
- **Inspections actuelles artisan et mobile : indexées**, URL sur Google, explorations Googlebot smartphone affichées le 15 novembre à 20:58:48 et 21:00:26. Récupération réussie, exploration/indexation autorisées, canonique Google identique à l’URL inspectée. Aucune nouvelle demande après celles d’hier.
- Rapport agrégé mis à jour au 13 novembre : toujours 4 indexées / 10 non indexées ; antérieur aux deux explorations, ne remplace pas les inspections actuelles. Autres URL non réinspectées aujourd’hui. Détail artisan : erreur temporaire de traitement sitemap ; rapport Sitemaps réussi, lu le 13, huit découvertes. Pas de resoumission.
- GSC 5 clics / 83 impressions / CTR 6 % / position 7,2, même fenêtre 25 octobre–13 novembre. Pas de gain de classement ou conversion extrapolé. Chrome DevTools occupé, accès professionnel obtenu par extension Chrome/CUA sans reconnexion.
- Priorité désormais aux premières impressions commerciales des deux services, plus suivi SPS/VELORUN et mesure des devis. Weekly le 22, Monthly le 29. Conversions et volumes non disponibles ; offres, /ads et décision février préservés.

## Mise à jour du 2026-11-17 — Daily
- Main distant `73cdfe4` inchangé, copie initialement propre et stash utilisateur conservé. Douze URL 200, huit au sitemap, aucun problème ni variation de métadonnées/texte/maillage. Lint/build/TypeScript et affichage public du portfolio réussis ; aucune modification applicative justifiée.
- GSC accessible : 5 clics / 85 impressions / CTR 5,9 % / position 7,2, 25 octobre–14 novembre. Fenêtre élargie, clics stables ; données antérieures aux explorations commerciales du 15, aucun effet SEO déduit.
- Rapport agrégé toujours daté du 13, 4 indexées / 10 non indexées, mêmes catégories. Inspections artisan/mobile du 16 restent la dernière preuve de leur indexation ; aucune inspection individuelle répétée ni resoumission aujourd’hui. Prochain Weekly 22, Monthly 29 novembre.

## Mise à jour du 2026-11-18 — Daily
- Main `c87859d` inchangé, copie propre et stash préservé. Douze URL 200, métadonnées/texte/maillage stables ; lint/build/TypeScript et affichage public de l’accueil réussis. Aucun changement applicatif.
- GSC : 5 clics / 88 impressions / CTR 5,7 % / position 7,1 jusqu’au 15 novembre. Aucune ligne artisan/mobile dans le tableau des pages à cette date, sans désindexation déduite. Rapport agrégé toujours daté du 13 ; conserver les inspections positives des services du 16. Aucun gain commercial extrapolé, aucune nouvelle demande. Weekly 22, Monthly 29.

## Mise à jour du 2026-11-19 — Daily
- Main `307b064` inchangé, copie propre et stash conservé. Douze URL 200, métadonnées/texte/maillage stables ; lint/build/TypeScript et affichage public artisan en fenêtre étroite réussis. Aucun changement applicatif.
- GSC : 5 clics / 91 impressions / CTR 5,5 % / position 7,3 jusqu’au 16. Première impression mobile observée, filtre de page : « code celeste », 0 clic / 1 impression, position moyenne 1 sur ce seul signal de marque. Aucun classement commercial déduit ; artisan absent du tableau, pas de désindexation déduite.
- Agrégat toujours daté du 13 : 4 indexées / 10 non indexées ; inspections des services du 16 conservées, aucune nouvelle demande. Chrome DevTools occupé, extension Chrome utilisée sans reconnexion. Weekly 22, Monthly 29.

## Mise à jour du 2026-11-20 — premier signal commercial local
- GSC : 6 clics / 94 impressions / CTR 6,4 % / position 7,1, jusqu’au 17 novembre. Première requête locale commerciale visible « développeur web la réunion » : filtre confirmé sur l’accueil, 0 clic / 1 impression, position moyenne 2. Échantillon isolé, pas de présence durable en page 1 ni de conversion démontrée. Le clic supplémentaire visible est de marque.
- Agrégat daté du 16 : six indexées, liste incluant artisan/mobile ; cohérent avec les inspections du 16. Dix exclusions : quatre redirections, trois 404, deux détectées, une variante canonique correcte. Exemple de cette dernière vérifié : accueil avec paramètres AppAgg/UTM. Autres exemples non renouvelés, aucune validation ni demande d’indexation.
- Main initial `12f9ed5` aligné, stash préservé ; douze URL 200, crawl identique au 19 hors durées. Lint/build/TypeScript et affichage public mobile bureau réussis. Aucun changement applicatif. Suivre la répétition du signal local au Weekly du 22 ; Monthly le 29.

## Mise à jour du 2026-11-21 — Daily
- GSC : 6 clics / 97 impressions / CTR 6,2 % / position 7,2, jusqu’au 18 novembre. Trois impressions de plus, clics et requêtes visibles inchangés ; signal commercial toujours une impression sans clic. Pas de filtre de requête renouvelé ni de progression durable déduite.
- Agrégat toujours daté du 16 : six indexées / dix exclusions, catégories inchangées. Exemples du 20 et inspections individuelles des services du 16 conservés comme références datées ; aucune resoumission.
- Main initial `b7e477f` aligné, copie propre, stash conservé. Douze URL 200, crawl identique au 20 hors durées ; lint/build/TypeScript et affichage artisan en fenêtre étroite réussis. Aucune modification applicative. Weekly demain 22, Monthly le 29.
- 2026-11-22 : Datafast a été retiré du site à la demande de Maxime (plus aucun outil de mesure d’audience). Ne plus chercher de données Datafast ; utiliser Search Console.
- 2026-11-26 : offre artisans refondue par Maxime le 22/11 (`dd5ea47`), source unique `app/_landing/home/offer.ts` : Achat 1 000 € (1/3/4 fois, 3 mois de Suivi offerts), Site Péi Zéro Avance 169 €/mois × 12, Suivi 99 €/mois sans engagement (remplace l'ancien 75 €/mois). Offre mobile inchangée (MVP 2 000 €, 120 €/mois). /llms.txt généré depuis cette source (`app/llms.txt/route.ts`). Nouvelles pages : /politique-de-confidentialite (sitemap) et /noel (règlement concours Instagram, hors sitemap, indexable). Baselines drift claude-seo créées le 26 pour accueil, artisan, mobile.
