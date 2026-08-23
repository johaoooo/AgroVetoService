import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HERO_SLIDES, COMPANY_INFO } from '../data/companyData';
import heroAgroImg from '../assets/hero_agropastoral.jpg';

const SHOWCASE_ITEMS = [
  {
    id: 'clinic',
    category: 'PÔLE SANTÉ ANIMALE',
    title: 'Clinique Vétérinaire & Urgences 24/7',
    badge: 'Permanence Continue',
    description: 'Consultations médicales, vaccinations, chirurgies et suivi zootechnique à Pointe-Noire sous la direction du Dr POUTYA SAIZONOU.',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80',
    position: 'center 25%',
    link: '/clinique',
    ctaText: 'Prendre Rendez-vous'
  },
  {
    id: 'shop',
    category: 'PÔLE INTRANTS & ÉLEVAGE',
    title: 'Provenderie & Poussins Cobb 500',
    badge: 'Arrivage Permanent',
    description: 'Distribution de poussins d\'un jour vaccinés, provendes de démarrage et croissance, et compléments nutritionnels homologués.',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=80',
    position: 'center center',
    link: '/boutique',
    ctaText: 'Commander des Intrants'
  },
  {
    id: 'qhse',
    category: 'PÔLE ENTREPRISES & AUDITS',
    title: 'Conseil en Management QHSE',
    badge: 'ISO 9001 • HACCP',
    description: 'Accompagnement à la certification, sécurité sanitaire des aliments, audits normatifs et formule sur-mesure de « QHSE Partagé ».',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    position: 'center 35%',
    link: '/devis-qhse',
    ctaText: 'Demander un Devis QHSE'
  },
  {
    id: 'training',
    category: 'PÔLE TRANSMISSION & SAVOIR',
    title: 'Fermes-Écoles & Formations',
    badge: '100% Pratique Terrain',
    description: 'Sessions certifiantes en conduite d\'élevage avicole, biosécurité sanitaire et fabrication artisanale de savons et détergents.',
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1200&q=80',
    position: 'center 20%',
    link: '/formations',
    ctaText: 'Voir les Formations'
  }
];

/**
 * Composant HeroSlider — Design Executive, Épuré, Lumineux et 100% Professionnel
 */
export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeShowcase, setActiveShowcase] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  const slideBackgrounds = [
    heroAgroImg,
    "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80"
  ];

  // Rotation synchronisée du hero principal
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Rotation dynamique automatique du showcase droite (toutes les 4.5 secondes)
  useEffect(() => {
    if (isPaused) return;
    const showcaseInterval = setInterval(() => {
      setActiveShowcase((prev) => (prev + 1) % SHOWCASE_ITEMS.length);
    }, 4500);
    return () => clearInterval(showcaseInterval);
  }, [isPaused]);

  const slide = HERO_SLIDES[currentSlide];
  const bgImage = slideBackgrounds[currentSlide] || heroAgroImg;
  const currentItem = SHOWCASE_ITEMS[activeShowcase];

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
      {/* 1. Image d'arrière-plan panoramique avec dégradé subtil */}
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

          {/* Colonne Droite : Showcase Interactif Compact & Haute Définition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-2xl overflow-hidden bg-slate-900/90 border border-white/20 shadow-xl transition-all">
              
              {/* Photo du pôle actif compacte et parfaitement cadrée */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  style={{ objectPosition: currentItem.position || 'center center' }}
                  className="w-full h-full object-cover transition-all duration-700 brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                {/* Titre immersif sur le bas de l'image */}
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] font-extrabold tracking-widest text-emerald-300 uppercase block mb-0.5">
                    {currentItem.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight drop-shadow-md">
                    {currentItem.title}
                  </h3>
                </div>
              </div>

              {/* Contenu textuel concis & navigation rapide */}
              <div className="p-4 sm:p-5 space-y-3 bg-slate-950/95 border-t border-white/10">
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {currentItem.description}
                </p>

                {/* Navigation par onglets compacts & Barre de progression */}
                <div className="space-y-1.5 pt-1.5 border-t border-white/10">
                  <div className="grid grid-cols-4 gap-1">
                    {SHOWCASE_ITEMS.map((item, idx) => {
                      const isActive = activeShowcase === idx;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveShowcase(idx)}
                          className={`py-1 px-1 text-[10px] sm:text-[11px] font-bold rounded-lg transition-all text-center cursor-pointer truncate ${
                            isActive
                              ? 'bg-emerald-600 text-white shadow-xs'
                              : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {item.id === 'clinic' && 'Clinique'}
                          {item.id === 'shop' && 'Poussins'}
                          {item.id === 'qhse' && 'QHSE'}
                          {item.id === 'training' && 'Formation'}
                        </button>
                      );
                    })}
                  </div>

                  {/* Barre de progression fluide */}
                  <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                    <div 
                      key={activeShowcase}
                      className="bg-emerald-400 h-full transition-all duration-4500 ease-linear"
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                </div>

                {/* Boutons d'action compacts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                  <button
                    onClick={() => navigate(currentItem.link)}
                    className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-sm cursor-pointer text-center"
                  >
                    {currentItem.ctaText}
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Bonjour%20AGRO%20VETO%20SERVICES%2C%20je%20souhaite%20des%20informations%20concernant%20%3A%20${encodeURIComponent(currentItem.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition cursor-pointer text-center truncate"
                  >
                    WhatsApp
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
