import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HERO_SLIDES, COMPANY_INFO } from '../data/companyData';
import heroAgroImg from '../assets/hero_agropastoral.jpg';

const DYNAMIC_NEWS_ITEMS = [
  {
    tag: "CLINIQUE & URGENCES",
    tagStyle: "text-sky-300 bg-sky-500/20 border-sky-400/30",
    title: "Garde Médicale & Urgences 24h/24",
    text: "Équipe vétérinaire d'astreinte active au quartier Socoprise. Soins intensifs, consultations et chirurgies.",
    status: "Service Actif"
  },
  {
    tag: "PROVENDERIE & INTRANTS",
    tagStyle: "text-emerald-300 bg-emerald-500/20 border-emerald-400/30",
    title: "Disponibilité Poussins Cobb 500",
    text: "Arrivage de poussins d'un jour vaccinés et provendes de démarrage/finition disponibles au magasin.",
    status: "Stock Disponible"
  },
  {
    tag: "CONSEIL & AUDITS QHSE",
    tagStyle: "text-amber-300 bg-amber-500/20 border-amber-400/30",
    title: "Accompagnement Normatif Entreprises",
    text: "Missions d'audits ISO 9001/14001/45001, démarche HACCP et mise en place du « QHSE Partagé ».",
    status: "Sur Demande"
  },
  {
    tag: "CENTRE DE FORMATION",
    tagStyle: "text-emerald-300 bg-emerald-500/20 border-emerald-400/30",
    title: "Inscriptions Fermes-Écoles Ouvertes",
    text: "Sessions pratiques certifiantes en conduite d'élevage avicole, biosécurité et rentabilité de cheptel.",
    status: "Inscriptions Ouvertes"
  },
  {
    tag: "LABORATOIRE VÉTÉRINAIRE",
    tagStyle: "text-sky-300 bg-sky-500/20 border-sky-400/30",
    title: "Analyses & Diagnostics Rapides",
    text: "Examens coprologiques, autopsies aviaires et analyses bromatologiques des aliments sous 24h.",
    status: "Laboratoire Ouvert"
  },
  {
    tag: "SAVOIR-FAIRE & ATELIERS",
    tagStyle: "text-amber-300 bg-amber-500/20 border-amber-400/30",
    title: "Fabrication de Savons & Détergents",
    text: "Formation 100% atelier sur la saponification à froid et la formulation de produits ménagers.",
    status: "Prochaine Session"
  }
];

/**
 * Composant HeroSlider — Actualités Dynamiques Bloc par Bloc Sans Icônes
 */
export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  // Génération dynamique des actualités avec horodatage réel
  const getFormattedTime = (minutesOffset = 0) => {
    const now = new Date(Date.now() - minutesOffset * 60 * 1000);
    return now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  };

  const [newsFeed, setNewsFeed] = useState([
    {
      ...DYNAMIC_NEWS_ITEMS[0],
      id: 1,
      time: getFormattedTime(3)
    },
    {
      ...DYNAMIC_NEWS_ITEMS[1],
      id: 2,
      time: getFormattedTime(1)
    }
  ]);
  const [newsIndex, setNewsIndex] = useState(2);

  const slideBackgrounds = [
    heroAgroImg,
    "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80"
  ];

  // Gestion du diaporama gauche
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8500);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Arrivée dynamique d'un nouveau bloc d'actualité toutes les 3.5 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      const template = DYNAMIC_NEWS_ITEMS[newsIndex];
      const newBlock = {
        ...template,
        id: Date.now(),
        time: getFormattedTime(0)
      };

      setNewsFeed((prev) => {
        const updated = [...prev, newBlock];
        return updated.slice(-3);
      });

      setNewsIndex((prev) => (prev + 1) % DYNAMIC_NEWS_ITEMS.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [newsIndex]);

  const slide = HERO_SLIDES[currentSlide];
  const bgImage = slideBackgrounds[currentSlide] || heroAgroImg;

  const handleAction = (actionKey) => {
    switch (actionKey) {
      case 'poles':
        navigate('/poles');
        break;
      case 'quote':
        navigate('/devis-qhse');
        break;
      case 'shop':
        navigate('/boutique');
        break;
      case 'clinic':
        navigate('/clinique');
        break;
      case 'training':
        navigate('/formations');
        break;
      case 'about':
        navigate('/a-propos');
        break;
      default:
        navigate('/contact');
    }
  };

  return (
    <section 
      className="relative pt-32 pb-16 md:pt-38 md:pb-22 overflow-hidden flex items-center bg-slate-950 text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Image d'arrière-plan panoramique */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="AGRO VÉTO SERVICES CONGO"
          className="w-full h-full object-cover object-center transition-all duration-1000 brightness-90 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/70 to-slate-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30"></div>
      </div>

      {/* 2. Contenu principal structuré */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Colonne Gauche : Présentation principale */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
              {slide.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
              {slide.subtitle}
            </p>

            {/* Boutons d'action */}
            <div className="pt-1 flex flex-wrap gap-3 sm:gap-4">
              <button
                onClick={() => handleAction(slide.ctaPrimary.action)}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-950/60 transition cursor-pointer hover:scale-101"
              >
                {slide.ctaPrimary.text}
              </button>

              <button
                onClick={() => handleAction(slide.ctaSecondary.action)}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-md transition cursor-pointer"
              >
                {slide.ctaSecondary.text}
              </button>
            </div>

            {/* Réassurance discrète */}
            <div className="pt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/15 text-xs text-slate-300">
              <div>
                <span className="font-bold text-emerald-400 block">Direction Vétérinaire</span>
                <span>Dr POUTYA SAIZONOU</span>
              </div>
              <div>
                <span className="font-bold text-emerald-400 block">Normes & Sécurité</span>
                <span>ISO 9001, 14001, HACCP</span>
              </div>
              <div>
                <span className="font-bold text-emerald-400 block">Siège National</span>
                <span>Socoprise, Pointe-Noire</span>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Flux d'Actualités Dynamiques Bloc par Bloc Sans Icônes */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* En-tête du flux */}
            <div className="flex items-center justify-between pb-2.5 border-b border-white/20">
              <div>
                <span className="text-xs font-black text-white tracking-widest uppercase block">
                  ACTUALITÉS & EN DIRECT
                </span>
                <span className="text-[11px] text-slate-400">
                  Pointe-Noire • Centre Opérationnel AVS
                </span>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/25 border border-emerald-400/50 text-[10px] font-black text-emerald-300 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>EN DIRECT</span>
              </div>
            </div>

            {/* Pile dynamique des blocs de messages qui défilent vers le haut */}
            <div className="space-y-3 min-h-[250px] flex flex-col justify-end">
              {newsFeed.map((item, index) => {
                const isLatest = index === newsFeed.length - 1;

                return (
                  <div
                    key={item.id}
                    className={`p-4 rounded-2xl transition-all duration-700 transform border shadow-lg ${
                      isLatest
                        ? 'bg-slate-900/90 backdrop-blur-md border-emerald-500/60 shadow-emerald-950/50 translate-y-0 scale-100'
                        : 'bg-slate-950/70 backdrop-blur-sm border-white/15 opacity-75 scale-98 hover:opacity-100'
                    }`}
                  >
                    {/* En-tête de la carte */}
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className={`px-2.5 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider border ${item.tagStyle}`}>
                        {item.tag}
                      </span>
                      <div className="flex items-center gap-2 text-[11px] text-slate-300">
                        <span className="font-semibold text-emerald-400">{item.status}</span>
                        <span className="text-slate-400">•</span>
                        <span>{item.time}</span>
                      </div>
                    </div>

                    {/* Titre & Contenu */}
                    <div className="space-y-1">
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-slate-200 text-xs leading-relaxed font-normal">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Raccourcis d'accès direct sobres et sans icônes */}
            <div className="pt-2.5 border-t border-white/15 space-y-2.5">
              <div className="grid grid-cols-3 gap-2 text-xs">
                <button
                  onClick={() => navigate('/clinique')}
                  className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold transition cursor-pointer text-center truncate shadow-xs backdrop-blur-xs"
                >
                  Clinique 24/7
                </button>
                <button
                  onClick={() => navigate('/boutique')}
                  className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold transition cursor-pointer text-center truncate shadow-xs backdrop-blur-xs"
                >
                  Poussins & Intrants
                </button>
                <button
                  onClick={() => navigate('/devis-qhse')}
                  className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold transition cursor-pointer text-center truncate shadow-xs backdrop-blur-xs"
                >
                  Audits QHSE
                </button>
              </div>

              {/* Bouton direct WhatsApp sans icône superflue */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Bonjour%20AGRO%20VETO%20SERVICES%2C%20je%20souhaite%20des%20informations.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold transition shadow-md cursor-pointer text-center"
              >
                Contacter la Permanence AVS sur WhatsApp
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
