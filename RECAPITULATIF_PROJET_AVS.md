# 📚 RÉCAPITULATIF COMPLET DU PROJET PAR CATÉGORIE
## AGRO VÉTO SERVICES CONGO S.A.R.L.U.

Ce document rassemble l'ensemble des spécifications, choix techniques, graphiques et fonctionnels pour la plateforme web d'**AGRO VÉTO SERVICES CONGO**.

---

## 🏛️ 1. ARCHITECTURE MULTI-PAGES AVEC ROUTAGE RÉEL (REACT ROUTER)

Le site fonctionne selon une **véritable architecture multi-pages avec des URLs dédiées et indépendantes** dans la barre d'adresse du navigateur :

| Page & Fonction | URL Réelle du Navigateur | Fichier Source | Description |
| :--- | :--- | :--- | :--- |
| **🏠 Accueil** | `/` | `src/pages/HomePage.jsx` | Présentation générale, Hero 16:9 HD, passerelles vers les autres pages |
| **👩‍⚕️ À Propos & Direction** | `/a-propos` | `src/pages/AboutPage.jsx` | Portrait du Dr POUTYA, biographie, statuts SARLU OHADA, vision, missions & 4 valeurs |
| **🌿 Les 6 Pôles d'Expertise** | `/poles` | `src/pages/PolesPage.jsx` | Détail approfondi des 6 pôles avec prestations et boutons d'action dédiés |
| **🛍️ Boutique E-Commerce** | `/boutique` | `src/pages/ShopPage.jsx` | Catalogue d'intrants (poussins Cobb 500, provenderie, vaccins, filtres et recherche) |
| **🩺 Clinique Vétérinaire** | `/clinique` | `src/pages/ClinicPage.jsx` | Actes médicaux, urgences 24/7 et formulaire interactif de prise de rendez-vous |
| **🎓 Centre de Formation** | `/formations` | `src/pages/TrainingPage.jsx` | Programmes certifiants 100% pratiques, fermes-écoles et inscriptions |
| **📊 Devis QHSE & Audits** | `/devis-qhse` | `src/pages/QuotePage.jsx` | Formulaire B2B d'estimation d'audit ISO 9001/14001/22000, HACCP et « QHSE Partagé » |
| **📍 Contact & Localisation** | `/contact` | `src/pages/ContactPage.jsx` | Siège à Socoprise Pointe-Noire, horaires, réseaux sociaux et formulaire de message |
| **👤 Espace Compte Client** | `/mon-compte` | `src/pages/AccountPage.jsx` | Tableau de bord éleveur / entreprise avec historique des commandes et rendez-vous |

> **Avantages de cette architecture Multi-Pages :**
> - **Historique du navigateur** : Les boutons Précédent (←) et Suivant (→) fonctionnent naturellement.
> - **Liens directs & Partage** : Possibilité d'envoyer un lien direct vers `https://votredomaine.cg/boutique` ou `https://votredomaine.cg/clinique`.
> - **Défilement automatique** : Le composant `ScrollToTop.jsx` remonte automatiquement en haut de page à chaque changement d'URL.

---

## 🏢 2. IDENTITÉ DE MARQUE & INFORMATIONS JURIDIQUES

- **Raison Sociale** : AGRO VÉTO SERVICES CONGO (S.A.R.L.U.)
- **Cadre Juridique** : Société à Responsabilité Limitée Unipersonnelle régie par l'Acte uniforme OHADA relatif au droit des sociétés commerciales et du GIE.
- **Direction Générale** : Dr Marie-Rose Edwige Rakié POUTYA SAIZONOU (Médecin Vétérinaire & Spécialiste en Management QHSE).
- **Siège Social** : Quartier Socoprise, Avenue Nelson Mandela, Rue Bissoute, Pointe-Noire, République du Congo.
- **Slogans Officiels** :
  * *Slogan court* : « De la santé animale à l'excellence QHSE »
  * *Slogan long / Baseline* : « L'expertise au service de la santé animale, de la qualité agroalimentaire et de la performance QHSE »

---

## 🎨 3. DIRECTION ARTISTIQUE & PALETTE CHROMATIQUE DOUCE

| Rôle Visuel | Nuance HEX | Utilisation dans l'Application |
| :--- | :--- | :--- |
| **Vert Agro Émeraude** | `#16a34a` / `#15803d` | Boutons d'action principaux, badges, accents agropastoraux |
| **Bleu Vétérinaire Royal** | `#0284c7` / `#0369a1` | Clinique vétérinaire, urgences 24/7, actes médicaux |
| **Or Solaire / Ambre** | `#f59e0b` / `#d97706` | Badges d'excellence, mots de direction, alertes |
| **Fond Global du Site** | `#f6f8fa` | Blanc cassé ardoisé doux pour éliminer l'effet éblouissant |
| **Cartes & Conteneurs** | `#fafbfc` | Blanc lin feutré avec bordures douces `border-slate-200/90` |
| **Sections Alternées** | `#edf2f6` | Gris perle soyeux pour les sections de transition |
| **Typographie** | `#0f172a` / `#1e293b` | Ardoise profond, police *Plus Jakarta Sans* |

---

## ⚡ 4. E-COMMERCE & PANIER GLOBAL

- **Panier Coulissant (`src/components/CartDrawer.jsx`)** :
  - Ajout d'articles avec gestion des quantités.
  - Persistance automatique dans le navigateur (`localStorage`).
  - Validation et commande directe sur WhatsApp avec récapitulatif formaté.
  - Prise en charge des paiements Mobile Money (MTN Mobile Money, Airtel Money) et règlement au siège.
- **Widget WhatsApp Flottant (`src/components/WhatsAppWidget.jsx`)** :
  - Accès direct 24/7 en bas à droite de toutes les pages.

---

## 🌐 5. LOGOS RÉSEAUX SOCIAUX OFFICIELS

Intégration de logos vectoriels SVG haute définition dans le composant `src/components/SocialIcons.jsx` :
- **Facebook** : `#1877F2` (Lien direct vers la page Facebook)
- **LinkedIn** : `#0A66C2` (Lien direct vers le profil professionnel)
- **WhatsApp** : `#25D366` (Lien direct vers la discussion WhatsApp Pro)
- **Instagram** : Dégradé `#DD2A7B` / `#8134AF`
- **TikTok** : `#000000`

---

## 👤 6. ESPACE COMPTE CLIENT & INSCRIPTION EXPRESS

- **Formulaire Ultra-Court (`src/components/AuthModal.jsx`)** :
  - Seulement **3 champs essentiels** (Nom/Entreprise, WhatsApp/Téléphone, Mot de passe).
  - Inscription en moins de 15 secondes.
  - Bascule instantanée entre Inscription et Connexion.

---

## 📸 7. GESTION DES MÉDIAS & HERO PANORAMIQUE 16:9

- **Image Panoramique 16:9 (`src/assets/hero_agropastoral.jpg`)** :
  - Vue aérienne du complexe agropastoral moderne et clinique vétérinaire sous soleil couchant.
  - Traitement lumineux avec dégradé allégé pour faire ressortir le paysage tout en garantissant une lisibilité parfaite.
- **Photos des Produits & Direction** :
  - Format des produits en 16:11 avec zoom progressif au survol.
  - Portrait officiel du Dr POUTYA.

---

## 🛠️ 8. COMMANDES DE DÉVELOPPEMENT & DE PRODUCTION

- **Lancer le serveur de développement** :
  ```bash
  npm run dev
  ```
- **Compiler pour la production** :
  ```bash
  npm run build
  ```
- **Prévisualiser le build de production** :
  ```bash
  npm run preview
  ```

---
*Document officiel pour AGRO VÉTO SERVICES CONGO S.A.R.L.U.*
