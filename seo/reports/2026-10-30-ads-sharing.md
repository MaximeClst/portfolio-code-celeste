# Image de partage /ads

Signalement propriétaire : l’aperçu de partage affiche Alexandre Eydieux au lieu du logo. Le HTML de production ne déclarait aucune image Open Graph ou Twitter. La sélection automatique d’une image de contenu est l’explication probable ; le cache de la messagerie n’est pas observable dans cette session.

Correction : PNG 1200×630 avec le logo vectoriel existant sur fond sombre, rendu localement sans génération IA, référencé explicitement dans les métadonnées /ads avec URL absolue, dimensions, MIME et texte alternatif. Twitter utilise summary_large_image. Prix, contenu, formulaires et canonical /ads inchangés.

Validation : lint, build et TypeScript réussis ; image inspectée et page chargée dans Chrome. Requêtes locales avec user-agents facebookexternalhit, WhatsApp et Twitterbot : HTML et PNG 200, image unique attendue, dimensions PNG 1200×630 et canonical correct. Ces simulations valident la réponse serveur, pas le renouvellement du cache réel de chaque plateforme.

Publication : commit `04aa673`, Vercel réussi. Vérifications en production réussies avec les trois user-agents : page et image 200, URL du logo, dimensions et canonical conformes. Voir `2026-10-30-ads-sharing-production.json`. Si un ancien aperçu persiste, réessayer le partage avec /ads?share=logo-v1 pour demander un aperçu sur une URL distincte ; aucun délai universel de cache promis.
