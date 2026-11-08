# Backlog — ordre qualitatif, données de conversion insuffisantes

## Réalisé au setup, 2026-10-30
- [x] Découverte : sitemap de six URL + robots.txt, auparavant en 404.
- [x] Pertinence des résultats : titres/descriptions uniques, canonicals et métadonnées de partage sur les pages éditoriales et /ads, sans modifier le tunnel.
- [x] Identité et structure : JSON-LD Organization sur / et un seul H1 sur /works.

## Point commercial à confirmer
- /ads promet trois mois de maintenance offerts, contrairement au contexte de l’offre générale. Confirmer si cette campagne reste valable avant harmonisation.

## Prochaines priorités
1. **Suivi d’indexation des huit URL** — inspection du 2026-11-01 : accueil, /works, Budget Copain et mentions légales indexés ; Smart Power System inconnu de Google ; VELORUN détecté non indexé. Aucun blocage technique observé, sitemap récent lu le 30 octobre. Surveiller la découverte sans resoumission répétée ; page artisan détectée non indexée au 2 novembre, sitemap relu avec succès le 1 novembre (sept URL). Page mobile ajoutée le 2 novembre : inspection du 3 novembre « Google ne reconnaît pas cette URL » ; sitemap toujours lu le 1 novembre, sept pages découvertes. Actualisation du 5 novembre : page mobile détectée non indexée, sitemap relu le 4 avec huit URL ; poursuivre sans resoumission.
2. **Résolu le 2026-10-30 — Smart Power System** : activité de coaching confirmée par le propriétaire et le site officiel ; description, domaine, résultats attribués au témoignage et technologie du site harmonisés.
3. **Réalisé le 2026-11-01 — Page service artisan** : /creation-site-web-artisan-reunion, exemple SCMOI, tarif existant, préparation du devis, métadonnées, Service JSON-LD et cinq pages entrantes. Surveiller impressions et demandes qualifiées avant de réécrire.
4. **Réalisé le 2026-11-02 — Page mobile** : /application-mobile-reunion, exemples Budget Copain et Mossly, offres existantes, préparation du devis. Métadonnées, Service JSON-LD, sitemap et six pages entrantes. Suivre les demandes qualifiées plutôt que multiplier les pages proches.
5. **Mesure** — obtenir les métriques Datafast existantes et rapprochement avec les devis/rendez-vous ; ne pas envoyer de leads de test réels, ne pas exposer données personnelles. Comparer les métriques à période équivalente quand l'historique suffit.
6. **Qualité technique** — Nouveau relevé GSC du 5 novembre : groupe mobile LCP 3,0 s à améliorer, trois exemples (accueil, /works, mentions légales), données du 2 novembre antérieures à la refonte. Priorité : mesure de la version actuelle et identification de l’élément LCP avant correction ou validation GSC. La correction de l’ancien hero ci-dessous est historique, son composant ayant été supprimé par la refonte. vérifier images/liens sortants et ancres, performance réelle mobile et coûts des scripts tiers, animations à opacité initiale nulle. **Hero corrigé le 3 novembre** : titre, description, badge et CTA visibles dans le HTML initial, texte inchangé. Animations des sections inférieures conservées. Le temps HTTP n'est pas un score Lighthouse ni des Core Web Vitals.
7. **Pages de preuves** — renforcer la fiche VELORUN et Budget Copain avec captures autorisées et fonctionnalités confirmées ; vérifier les résultats commerciaux déjà affichés avant de les reprendre. Budget Copain : site officiel consulté le 2 novembre confirme saisie, catégories personnalisables et visualisation ; automatisation des catégories et usage quotidien de l’ancienne fiche non corroborés, ne pas les reprendre. Alt « capture » corrigé en « icône ».
8. **Weekly effectué le 2026-11-08 ; prochain le 2026-11-15** — données Search Console positions 8–20, comparaison temporelle valide, diff des sitemaps accessibles et premières observations IA si accès. Ne pas forcer douze changements sans valeur démontrée.
9. **Monthly, au 2026-11-29 au plus tôt** — réviser carte ; choisir un outil utile proche du devis seulement si demande et valeur justifiées ; comparatifs uniquement avec sources datées et sans promesse inventée.

## Décisions à préserver (5 novembre)
- Garder les deux pages de service jusqu’au bilan de début février 2027 ; aucune page « planned » supplémentaire sans accord propriétaire (contexte du 3 novembre).
- Images de partage : six pages sans image explicite corrigées via `lib/seo.ts`, logo carré propriétaire. Pas de modification /ads.


## Priorités actualisées après Weekly du 8 novembre
1. Surveiller les quatre URL sans indexation confirmée : artisan, SPS, VELORUN et mobile. Sitemap réussi, huit découvertes le 8 ; aucun obstacle HTTP ou maillage observé. Le statut mobile varie sans preuve de désindexation ; ne pas resoumettre en boucle.
2. Suivre le LCP réel après la refonte : laboratoire mobile 98 / LCP 0,9 s, CrUX origine 3,0 s sur 28 jours. Ne pas confondre ces mesures ni lancer une validation sans correction documentée.
3. Obtenir une mesure de devis attribués au SEO quand l’accès Datafast sera disponible. HTTP 403 uniquement observé dans l’audit Lighthouse, pas de panne générale démontrée ; intégration inchangée, aucun lead de test envoyé.
4. Visibilité IA : baseline GSC 15 impressions sur l’accueil ; ne remplace pas les observations contrôlées des 25 prompts, toujours non mesurés. Relevé suivant avec la même fenêtre si possible.
5. Comparaison hebdomadaire : la référence disponible du 25–30 octobre ne fait que six jours ; attendre des fenêtres complètes avant d’en tirer une tendance. Aucune requête acheteur visible en positions 8–20 à renforcer aujourd’hui.
