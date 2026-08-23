/**
 * =============================================================================
 * AGRO VÉTO SERVICES CONGO S.A.R.L.U. - BASE DE DONNÉES CENTRALE DE L'APPLICATION
 * =============================================================================
 * Ce fichier centralise toutes les informations de l'entreprise :
 * - Informations administratives et contacts (Pointe-Noire, Socoprise)
 * - Couleurs et identité de marque extraites du logo
 * - Les 6 Pôles d'expertise et leurs prestations détaillées
 * - Le catalogue e-commerce des produits (Aliments, Poussins, Intrants, Hygiène)
 * - Les modules de formation professionnelle
 * - Les prestations cliniques vétérinaires et audits QHSE
 * =============================================================================
 */

export const COMPANY_INFO = {
  name: "AGRO VÉTO SERVICES CONGO S.A.R.L.U.",
  shortName: "Agro Véto Services",
  sigle: "A.V.S. CONGO",
  legalForm: "Société à Responsabilité Limitée Unipersonnelle (SARLU) - OHADA",
  
  // Slogans officiels
  sloganShort: "De la santé animale à l'excellence QHSE",
  sloganLong: "L'expertise au service de la santé animale, de la qualité agroalimentaire et de la performance QHSE",
  
  // Coordonnées géographiques & contacts
  address: {
    street: "Avenue Nelson Mandela, Rue Bissoute",
    district: "Quartier Socoprise",
    city: "Pointe-Noire",
    country: "République du Congo",
    full: "Quartier Socoprise, Avenue Nelson Mandela, Rue Bissoute, Pointe-Noire, République du Congo"
  },
  
  phone: "+242 06 000 00 00", // Numéro d'appel professionnel
  whatsapp: "+242060000000",   // Format international sans espaces pour les liens wa.me
  whatsappDisplay: "+242 06 000 00 00",
  email: "contact@agrovetoservices.cg",
  directorEmail: "direction@agrovetoservices.cg",
  
  // Réseaux sociaux officiels
  socials: {
    facebook: "https://facebook.com/agrovetoservicescongo",
    linkedin: "https://linkedin.com/company/agrovetoservicescongo",
    instagram: "https://instagram.com/agrovetoservicescongo",
    tiktok: "https://tiktok.com/@agrovetoservicescongo",
    whatsappChannel: "https://whatsapp.com/channel/agrovetoservicescongo"
  },

  // Horaires d'ouverture
  openingHours: {
    weekdays: "Lundi - Vendredi : 07h30 - 18h30",
    saturday: "Samedi : 08h00 - 16h00",
    emergencies: "Urgences Clinique Vétérinaire : 24h/24 & 7j/7 sur appel"
  }
};

/**
 * SLIDES DE LA BANNIÈRE PRINCIPALE (Hero Section)
 */
export const HERO_SLIDES = [
  {
    id: 1,
    badge: "Expertise Vétérinaire & QHSE",
    title: "Santé Animale & Excellence QHSE au Congo",
    subtitle: "Soins cliniques vétérinaires, provenderie certifiée, audits qualité et formations professionnelles à Pointe-Noire.",
    ctaPrimary: { text: "Explorer nos Services", action: "poles" },
    ctaSecondary: { text: "Demander un Devis", action: "quote" },
    tag: "Pointe-Noire & Congo"
  },
  {
    id: 2,
    badge: "Élevage & Provenderie",
    title: "Élevage, Provenderie & Réussite des PME",
    subtitle: "Poussins sélectionnés, aliments pour bétail & volailles et accompagnement agropastoral pour vos rendements.",
    ctaPrimary: { text: "Commander des Intrants", action: "shop" },
    ctaSecondary: { text: "Découvrir la Ferme", action: "about" },
    tag: "Intrants & Provenderie"
  },
  {
    id: 3,
    badge: "Audits & Sécurité Sanitaire",
    title: "Sécurité Sanitaire, Audits & Normes ISO",
    subtitle: "Médecine vétérinaire, hygiène agroalimentaire HACCP et mise en conformité aux standards internationaux.",
    ctaPrimary: { text: "Prendre RDV Clinique", action: "clinic" },
    ctaSecondary: { text: "Catalogue Formations", action: "training" },
    tag: "Audit & Hygiène SPS"
  }
];

/**
 * LES 5 PILIERS : "POURQUOI NOUS CHOISIR ?"
 */
export const WHY_CHOOSE_US = [
  {
    id: 1,
    icon: "ShieldCheck",
    title: "Une Expertise Double & Rare",
    description: "Sous la direction du Dr POUTYA SAIZONOU, Médecin Vétérinaire et Spécialiste QHSE, nous combinons l'art médical vétérinaire et la maîtrise rigoureuse des normes internationales (ISO 9001, 14001, 45001, 22000, HACCP)."
  },
  {
    id: 2,
    icon: "GitMerge",
    title: "Approche « De la Ferme à l'Assiette »",
    description: "Une vision holistique de toute la chaîne de valeur : santé et bien-être animal, provenderie certifiée, contrôle en laboratoire, traçabilité et valorisation agroalimentaire saine pour le consommateur."
  },
  {
    id: 3,
    icon: "Users",
    title: "Offre « QHSE Partagé » pour PME",
    description: "Nous démocratisons l'accès aux normes industrielles pour les PME congolaises grâce à une formule d'externalisation flexible et adaptée aux réalités budgétaires locales."
  },
  {
    id: 4,
    icon: "GraduationCap",
    title: "La Pratique au Cœur de la Formation",
    description: "Fini la théorie abstraite : nos modules s'appuient sur des fermes-écoles et des ateliers pratiques pour une montée en compétences directe, mesurable et rentable sur le terrain."
  },
  {
    id: 5,
    icon: "Leaf",
    title: "Qualité, Éthique & Durabilité",
    description: "Un engagement sans compromis pour le respect de la vie animale, la réduction des impacts environnementaux et la promotion d'une agriculture locale productive et résiliente."
  }
];

/**
 * LES 6 PÔLES D'ACTIVITÉS & EXPERTISE
 */
export const POLES = [
  {
    id: 1,
    code: "SANTE_ANIMALE",
    title: "Santé Animale, Clinique & Pharmacie Vétérinaire",
    shortDesc: "Soins médicaux, chirurgie, intrants certifiés, provenderie de pointe et suivi zootechnique.",
    color: "blue",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
    features: [
      "Clinique Vétérinaire : Soins médicaux, chirurgies, vaccinations, urgences 24/7 et suivi d'élevage.",
      "Pharmacie Vétérinaire & Intrants : Médicaments homologués, vaccins, antiparasitaires et compléments nutritionnels.",
      "Production Biologique : Vente d'œufs à couver (OAC), poussins d'un jour vigoureux et géniteurs.",
      "Provenderie Industrielle : Aliments équilibrés pour volailles (démarrage, croissance, ponte), porcs et poissons.",
      "Laboratoire Bromatologique : Analyses des aliments, contrôle qualité nutritionnel et sécurité microbiologique.",
      "Ferme-École & Ferme Expérimentale : Recherche appliquée et transfert de savoir-faire aux producteurs."
    ]
  },
  {
    id: 2,
    code: "QHSE_RSE",
    title: "Management QHSE, RSE & Externalisation",
    shortDesc: "Audit, diagnostic normatif et accompagnement à la certification des entreprises.",
    color: "emerald",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    features: [
      "Conseil & Audits Normatifs : Accompagnement ISO 9001 (Qualité), ISO 14001 (Environnement), ISO 45001 (Santé/Sécurité au travail), ISO 22000 & HACCP.",
      "Offre « QHSE Partagé » : Externalisation complète de la fonction QHSE pour les PME et industries à coût maîtrisé.",
      "Développement Durable & RSE : Études d'impact environnemental, plans de gestion des déchets et transition écologique.",
      "Plans de Prévention : Évaluation des risques professionnels (Document Unique) et protocoles d'urgence."
    ]
  },
  {
    id: 3,
    code: "AGROALIMENTAIRE",
    title: "Agroalimentaire & Qualité Sanitaire",
    shortDesc: "Transformation saine, conservation et mise en conformité sanitaire SPS.",
    color: "amber",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    features: [
      "Transformation & Conservation : Valorisation, séchage moderne, pasteurisation et conditionnement alimentaire.",
      "Conformité SPS : Audit de traçabilité et alignement sur les normes Sanitaires et Phytosanitaires internationales.",
      "Assistance Technique : Optimisation des rendements de transformation et réduction des pertes post-récolte."
    ]
  },
  {
    id: 4,
    code: "COSMETIQUE_HYGIENE",
    title: "Cosmétique, Hygiène & Artisanat",
    shortDesc: "Formulation et fabrication locale de détergents, produits d'hygiène et soins.",
    color: "purple",
    image: "https://images.unsplash.com/photo-1608248597359-0091873130d2?auto=format&fit=crop&w=800&q=80",
    features: [
      "Formulation & Fabrication : Savons liquides et solides, détergents professionnels et désinfectants de surface.",
      "Soins Cosmétiques Éco-responsables : Valorisation des beurres et huiles végétales locales.",
      "Hygiène Professionnelle : Gammes complètes pour fermes d'élevage, restaurants, hôtels et entreprises."
    ]
  },
  {
    id: 5,
    code: "FORMATION",
    title: "Centre de Formation & Renforcement de Capacités",
    shortDesc: "Programmes certifiants pratiques pour éleveurs, techniciens et cadres d'entreprise.",
    color: "indigo",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    features: [
      "Modules Élevage & Aviculture : Conduite d'un cheptel avicole, alimentation, prophylaxie et gestion technico-économique.",
      "Modules QHSE & Hygiène : Maîtrise de la méthode HACCP, gestes de premiers secours au travail, auditeur interne ISO.",
      "Modules Techniques : Fabrication artisanale de savons et produits d'hygiène, compostage et valorisation des biodéchets.",
      "Sessions sur Mesure : Formations intra-entreprise pour équipes industrielles et agents publics."
    ]
  },
  {
    id: 6,
    code: "EVENEMENTIEL_COMMERCE",
    title: "Événementiel Professionnel & Commerce Général",
    shortDesc: "Organisation de foires, colloques scientifiques, négoce et représentation commerciale.",
    color: "rose",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    features: [
      "Événements Scientifiques & Salons : Régie de foires agricoles, symposiums vétérinaires et expositions B2B.",
      "Négoce & Représentation Commerciale : Distribution de marques d'intrants leaders et équipements agricoles.",
      "Import-Export Spécialisé : Matériel vétérinaire de pointe, souches de poussins et additifs certifiés."
    ]
  }
];

/**
 * CATALOGUE DES PRODUITS E-COMMERCE
 */
export const PRODUCTS_CATALOG = [
  {
    id: "PROD-01",
    name: "Poussins d'un Jour (Chaire - Souche Cobb 500)",
    category: "poussins",
    categoryLabel: "Poussins & Œufs à Couver",
    price: 650, // FCFA l'unité
    priceUnit: "FCFA / poussin (Carton de 50)",
    minOrder: 50,
    inStock: true,
    badge: "Très Demandé",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=600&q=80",
    description: "Poussins d'un jour vigoureux, vaccinés Marek et Newcastle au couvoir. Taux de croissance exceptionnel et indice de consommation optimal pour rentabiliser votre élevage.",
    specs: ["Souche : Cobb 500", "Vaccination : Marek + Newcastle", "Origine : Écloserie contrôlée AVS", "Taux de viabilité > 98%"]
  },
  {
    id: "PROD-02",
    name: "Poussins Pondeuses (Souche Lohmann Brown)",
    category: "poussins",
    categoryLabel: "Poussins & Œufs à Couver",
    price: 950,
    priceUnit: "FCFA / poussin (Carton de 50)",
    minOrder: 50,
    inStock: true,
    badge: "Ponte Élevée",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=600&q=80",
    description: "Poussins femelles de race pondeuse réputée pour sa robustesse et un pic de ponte prolongé (jusqu'à 320 œufs/an).",
    specs: ["Souche : Lohmann Brown", "Sexage : 99% garanti", "Entrée en ponte : 18-20 semaines", "Calibre d'œufs : Moyen à gros"]
  },
  {
    id: "PROD-03",
    name: "Aliment Volaille - Démarrage Haute Énergie (Sac 50kg)",
    category: "provenderie",
    categoryLabel: "Provenderie & Nutrition",
    price: 21500,
    priceUnit: "FCFA / sac 50kg",
    minOrder: 1,
    inStock: true,
    badge: "Formule Équilibrée",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    description: "Formule enrichie en protéines brutes (21%), acides aminés essentiels et minéraux pour un démarrage squelettique et immunitaire solide (Jours 1 à 14).",
    specs: ["Conditionnement : Sac de 50 kg", "Teneur Protéines : 21%", "Contrôle bromatologique : Oui", "Anti-coccidien inclus"]
  },
  {
    id: "PROD-04",
    name: "Aliment Volaille - Finition Spéciale Croissance (Sac 50kg)",
    category: "provenderie",
    categoryLabel: "Provenderie & Nutrition",
    price: 19800,
    priceUnit: "FCFA / sac 50kg",
    minOrder: 1,
    inStock: true,
    badge: "Gain de Poids",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=600&q=80",
    description: "Aliment de finition haute densité pour maximiser l'engraissement et obtenir une chair ferme et savoureuse avant abattage.",
    specs: ["Conditionnement : Sac de 50 kg", "Teneur Protéines : 18.5%", "Origine : Céréales sélectionnées", "Idéal à partir de J28"]
  },
  {
    id: "PROD-05",
    name: "Kit Poly-Vitaminé & Anti-Stress Volaille (Flacon 1L)",
    category: "pharmacie",
    categoryLabel: "Pharmacie & Intrants",
    price: 8500,
    priceUnit: "FCFA / flacon",
    minOrder: 1,
    inStock: true,
    badge: "Essentiel Élevage",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    description: "Complexe de vitamines A, D3, E, K et B avec électrolytes. Indispensable lors des chaleurs, transferts, vaccinations et débecquages.",
    specs: ["Volume : 1 Litre buvable", "Posologie : 1ml / 2L d'eau de boisson", "Homologation vétérinaire : Oui"]
  },
  {
    id: "PROD-06",
    name: "Désinfectant Virucide & Bactéricide d'Élevage (Bidon 5L)",
    category: "pharmacie",
    categoryLabel: "Pharmacie & Intrants",
    price: 18000,
    priceUnit: "FCFA / bidon 5L",
    minOrder: 1,
    inStock: true,
    badge: "Biosécurité",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80",
    description: "Solution concentrée pour désinfection des bâtiments d'élevage, pédiluves, matériel de gavage et cages de transport.",
    specs: ["Spectre : Bactéries, Virus, Champignons", "Dilution : 1% à 2%", "Norme HACCP & Vétérinaire"]
  },
  {
    id: "PROD-07",
    name: "Savon Noir Écologique Purifiant AVS (Pain 250g)",
    category: "cosmetique",
    categoryLabel: "Cosmétique & Hygiène",
    price: 1500,
    priceUnit: "FCFA / unité",
    minOrder: 3,
    inStock: true,
    badge: "100% Artisanal & Local",
    image: "https://images.unsplash.com/photo-1607006314368-450f28e21a22?auto=format&fit=crop&w=600&q=80",
    description: "Formulé à partir d'huiles végétales locales saponifiées à froid. Doux pour la peau, antibactérien naturel et enrichi en glycérine.",
    specs: ["Poids : 250g", "Sans colorants de synthèse", "Fabrication locale Pointe-Noire"]
  },
  {
    id: "PROD-08",
    name: "Détergent Désinfectant Multi-Surfaces Professionnel (Bidon 5L)",
    category: "cosmetique",
    categoryLabel: "Cosmétique & Hygiène",
    price: 9500,
    priceUnit: "FCFA / bidon",
    minOrder: 1,
    inStock: true,
    badge: "Usage Pro & Agro",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=600&q=80",
    description: "Formule haute dégraissance pour cuisines professionnelles, laboratoires agroalimentaires, abattoirs et cliniques.",
    specs: ["Conditionnement : 5 Litres", "Action désodorisante fraîche", "Conforme protocole d'hygiène"]
  }
];

/**
 * MODULES DE FORMATION PROFESSIONNELLE & PRATIQUE
 */
export const TRAINING_MODULES = [
  {
    id: "TRAIN-01",
    title: "Maîtrise Complète de l'Élevage Avicole (Poulets de Chair & Pondeuses)",
    category: "Agropastoral",
    duration: "5 Jours (30h) - Théorie & Immersion Ferme-École",
    price: "75 000 FCFA",
    target: "Éleveurs débutants, porteurs de projets, techniciens agricoles",
    nextSession: "Du 15 au 19 Septembre 2026",
    modulesCovered: [
      "Conception et biosécurité du poulailler moderne en climat tropical",
      "Conduite du démarrage des poussins et gestion de la litière",
      "Plan de prophylaxie vétérinaire : vaccins, vermifuges, vitamines",
      "Nutrition et calcul du ratio coût/croissance",
      "Gestion comptable et rentabilité d'un cheptel avicole"
    ]
  },
  {
    id: "TRAIN-02",
    title: "Méthode HACCP & Hygiène Sanitaire des Aliments (Norme ISO 22000)",
    category: "QHSE & Agroalimentaire",
    duration: "3 Jours (18h) - Certifiant",
    price: "120 000 FCFA",
    target: "Responsables qualité, cuisiniers, gérants de restaurants/hôtels, transformateurs",
    nextSession: "Du 23 au 25 Septembre 2026",
    modulesCovered: [
      "Les 7 principes et 12 étapes de la méthode HACCP",
      "Identification des dangers microbiologiques, chimiques et physiques",
      "Mise en place des Points Critiques de Contrôle (CCP) et surveillance",
      "Traçabilité, gestion des non-conformités et audits internes",
      "Validation d'un Plan de Maîtrise Sanitaire (PMS)"
    ]
  },
  {
    id: "TRAIN-03",
    title: "Fabrication Artisanale & Industrielle de Savons et Détergents",
    category: "Technique & Savoir-faire",
    duration: "4 Jours (24h) - Pratique 100% Atelier",
    price: "60 000 FCFA",
    target: "Femmes entrepreneures, jeunes, créateurs d'entreprises locales",
    nextSession: "Du 06 au 09 Octobre 2026",
    modulesCovered: [
      "Chimie de la saponification à froid et règles de sécurité (soude)",
      "Formulation de savons durs, savons liquides et détergents ménagers",
      "Calcul des indices de saponification et surgraissage aux huiles locales",
      "Coloration naturelle, parfumerie et conditionnement commercial",
      "Calcul du coût de revient et stratégie de mise sur le marché"
    ]
  },
  {
    id: "TRAIN-04",
    title: "Auditeur Interne & Management Intégré QHSE (ISO 9001, 14001, 45001)",
    category: "Management & Entreprises",
    duration: "5 Jours (30h) - Certificat délivré",
    price: "250 000 FCFA",
    target: "Cadres HSE, directeurs d'exploitation, ingénieurs et consultants",
    nextSession: "Du 20 au 24 Octobre 2026",
    modulesCovered: [
      "Exigences communes de la structure HLS des normes ISO",
      "Évaluation des risques professionnels et analyse environnementale",
      "Méthodologie de conduite d'un audit interne (norme ISO 19011)",
      "Rédaction des fiches de non-conformité et plans d'actions correctives",
      "Pilotage des revues de direction et amélioration continue"
    ]
  }
];

/**
 * PRESTATIONS DE LA CLINIQUE VÉTÉRINAIRE (Prise de RDV)
 */
export const CLINIC_SERVICES = [
  { id: "CONSULT", name: "Consultation Médicale Générale", duration: "30-45 min", description: "Diagnostic clinique complet, auscultation et ordonnance de traitement." },
  { id: "VACCIN", name: "Vaccination & Carnet de Santé", duration: "20 min", description: "Vaccins chiots/chiens (Rage, Parvo, Maladie de Carré), chats et volailles." },
  { id: "CHIRURGIE", name: "Chirurgie & Soins d'Urgence", duration: "1h - 2h", description: "Stérilisation, césariennes, sutures de plaies et interventions d'urgence." },
  { id: "ELEVAGE_SUIVI", name: "Visite Sanitaire & Suivi d'Élevage", duration: "Demi-journée", description: "Déplacement vétérinaire sur votre site d'élevage, audit zootechnique et prophylaxie." },
  { id: "LABO", name: "Analyses de Laboratoire & Bromatologie", duration: "Variable", description: "Autopsie aviaire, parasitologie, coprologie et analyses bromatologiques des aliments." }
];

/**
 * BIOGRAPHIE DE LA FONDATRICE & DIRECTION
 */
export const FOUNDER_DATA = {
  name: "Dr Marie-Rose Edwige Rakié POUTYA SAIZONOU",
  title: "Fondatrice & Directrice Générale",
  credentials: [
    "Docteur en Médecine Vétérinaire",
    "Spécialiste en Management QHSE (Qualité, Hygiène, Sécurité, Environnement)",
    "Experte en Sécurité Sanitaire des Aliments (HACCP / ISO 22000)",
    "Formatrice chevronnée en développement agropastoral"
  ],
  bio: `Médecin Vétérinaire praticienne et Spécialiste en Management de la Qualité, Hygiène, Sécurité et Environnement (QHSE), le Docteur Marie-Rose Edwige Rakié POUTYA SAIZONOU cumule une expertise transversale reconnue dans la santé animale, la sécurité sanitaire des aliments et le développement agropastoral.

Ancienne Responsable Qualité dans l'industrie et entrepreneure engagée, elle fonde AGRO VÉTO SERVICES CONGO avec une ambition claire : structurer une offre complète et intégrée qui répond aux défis majeurs de l'élevage, de la transformation agroalimentaire et de la conformité normative en République du Congo et en Afrique Centrale.

Formatrice chevronnée et passionnée par le transfert de compétences, elle œuvre au quotidien pour l'autonomisation des éleveurs, la promotion des bonnes pratiques d'hygiène (HACCP) et l'accompagnement des entreprises vers l'excellence opérationnelle et le développement durable.`,
  
  quote: `« Bienvenue chez AGRO VÉTO SERVICES CONGO. Notre entreprise est née d'une conviction profonde : la santé animale, la qualité agroalimentaire et la gestion environnementale sont étroitement liées et constituent les piliers incontournables d'un développement économique durable. Ensemble, bâtissons une agriculture forte, des entreprises performantes et une alimentation saine pour tous. »`,
  
  vision: "Devenir la référence en Afrique Centrale dans l'intégration des services vétérinaires, de la performance agropastorale et du management QHSE, en impulsant une agriculture durable, une alimentation saine et des entreprises biologiquement et normativement conformes.",
  
  missions: [
    "Garantir la santé et le bien-être animal grâce à des soins d'excellence et des intrants sécurisés.",
    "Renforcer l'autonomie agropastorale par une provenderie performante et des fermes-écoles immersives.",
    "Élever les standards de conformité des entreprises via des audits ISO, HACCP et le QHSE partagé.",
    "Valoriser la transformation agroalimentaire, cosmétique et artisanale respectueuse des normes.",
    "Transmettre le savoir-faire pratique pour pérenniser les compétences techniques locales au Congo."
  ],

  values: [
    { title: "Excellence Scientifique & Rigueur", desc: "Une démarche médicale et technique encadrée par des données vérifiées et les standards internationaux (ISO, HACCP)." },
    { title: "Éthique & Bien-être Animal", desc: "Une pratique vétérinaire et un élevage respectueux de la vie animale et des écosystèmes." },
    { title: "Proximité & Engagement Terrain", desc: "Un accompagnement sur mesure, au plus près des besoins des éleveurs et des PME à Pointe-Noire et au Congo." },
    { title: "Innovation & Durabilité", desc: "Des solutions agropastorales et écologiques viables pour répondre aux défis alimentaires de demain." }
  ]
};

/**
 * STATISTIQUES D'IMPACT
 */
export const IMPACT_STATS = [
  { value: "6", label: "Pôles d'Expertise Intégrés", desc: "De la ferme à l'assiette" },
  { value: "+500", label: "Éleveurs & PME Accompagnés", desc: "À Pointe-Noire et au Congo" },
  { value: "99%", label: "Taux de Conformité Sanitaire", desc: "Normes HACCP & ISO" },
  { value: "24/7", label: "Urgences Clinique Vétérinaire", desc: "Disponibilité continue" }
];
