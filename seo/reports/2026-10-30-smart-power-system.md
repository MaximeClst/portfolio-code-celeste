# Smart Power System — correction factuelle

Le propriétaire confirme le 2026-10-30 avoir réalisé ce site pour des coachs sportifs. Vérification de https://smart-power-system.fr/ et https://smart-power-system.fr/notre-team : équipe de coachs, force athlétique et suivi en ligne.

Corrections : description énergétique retirée du portfolio ; domaine .fr rétabli dans la fiche ; contexte au pluriel et descriptif des services cohérent ; métier précisé sur /ads. Le résultat « quatre nouveaux coachés dès les premières semaines » est remplacé par le bilan attribué au témoignage existant d’Alexandre Eydieux : une quinzaine de demandes, dont quatre à cinq concrétisées, sans délai inventé.

La fiche attribuait le site à Next.js/TypeScript/Tailwind. La réponse HTTP du domaine officiel indique `x-powered-by: HostingerWebsiteBuilder` et les ressources sont servies par Zyro : technologie corrigée en Hostinger Website Builder, sans modification du site client.

Sources : site officiel consulté ce jour ; confirmation du propriétaire ; `app/_landing/Testimonial.tsx` pour le bilan commercial. Aucune modification de l’offre de maintenance sur /ads.

Validation : lint, build de production, TypeScript et diff réussis ; contrôle navigateur des trois pages modifiées. Correction annexe de la configuration ESLint : exclusions globales de .next et des fichiers générés, afin que le lint fonctionne aussi après un build. Publication en cours.
