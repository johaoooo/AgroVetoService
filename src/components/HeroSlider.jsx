import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HERO_SLIDES, COMPANY_INFO } from '../data/companyData';
import heroAgroImg from '../assets/hero_agropastoral.jpg';

/**
 * Composant HeroSlider avec Navigation React Router
 */
export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  const slideBackgrounds = [
    heroAgroImg,
    "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80"
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7500);
    return () => clearInterval(interval);
  }, [isPaused]);

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
      className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden text-white min-h-[620px] flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Image d'arrière-plan très visible et lumineuse */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Arrière-plan AGRO VÉTO SERVICES CONGO"
          className="w-full h-full object-cover object-center transition-all duration-1000 brightness-95 contrast-105"
        />
        {/* Dégradé léger */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-slate-950/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/40"></div>
      </div>

      {/* 2. Contenu au premier plan */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Colonne Gauche : Titre et Descriptif */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
              {slide.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-2xl font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              {slide.subtitle}
            </p>

            {/* Boutons d'action */}
            <div className="pt-2 flex flex-wrap gap-3 sm:gap-4">
              <button
                onClick={() => handleAction(slide.ctaPrimary.action)}
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-2xl shadow-emerald-950/70 transition-all cursor-pointer hover:scale-102"
              >
                {slide.ctaPrimary.text}
              </button>

              <button
                onClick={() => handleAction(slide.ctaSecondary.action)}
                className="px-6 py-3.5 rounded-xl bg-slate-950/80 hover:bg-slate-900 text-slate-100 font-semibold text-sm sm:text-base border border-slate-600 backdrop-blur-md transition-all cursor-pointer shadow-lg"
              >
                {slide.ctaSecondary.text}
              </button>
            </div>

            {/* Réassurance sobre */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/20 text-xs">
              <div className="p-2 rounded-xl bg-slate-950/40 backdrop-blur-xs">
                <span className="font-bold text-emerald-400 block">Direction Vétérinaire</span>
                <span className="text-slate-200">Dr POUTYA SAIZONOU</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-950/40 backdrop-blur-xs">
                <span className="font-bold text-emerald-400 block">Normes & Sécurité</span>
                <span className="text-slate-200">ISO 9001, 14001, HACCP</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-950/40 backdrop-blur-xs">
                <span className="font-bold text-emerald-400 block">Siège National</span>
                <span className="text-slate-200">Socoprise, Pointe-Noire</span>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Fiche sobre */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-slate-950/85 backdrop-blur-md p-6 sm:p-8 border border-slate-700/80 shadow-2xl space-y-5">
              
              <div>
                <h3 className="font-extrabold text-white text-lg">AGRO VÉTO SERVICES CONGO</h3>
                <p className="text-xs text-emerald-400 mt-0.5 font-semibold">S.A.R.L.U. • Pointe-Noire</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                <p className="text-sm font-medium text-slate-200 italic leading-relaxed">
                  « {COMPANY_INFO.sloganShort} »
                </p>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/70">
                  <span className="text-slate-300">Clinique & Urgences</span>
                  <span className="font-bold text-sky-400">24h/24 & 7j/7</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/70">
                  <span className="text-slate-300">Provenderie & Intrants</span>
                  <span className="font-bold text-emerald-400">Poussins, OAC, Aliments</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/70">
                  <span className="text-slate-300">Audits & Formations</span>
                  <span className="font-bold text-amber-400">ISO 9001, 14001, HACCP</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Bonjour%20AGRO%20VETO%20SERVICES`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold transition-colors shadow-md"
              >
                Contacter l'équipe via WhatsApp
              </a>

              {/* Puces de défilement */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-center gap-2">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentSlide === idx ? 'w-7 bg-emerald-400' : 'w-2 bg-slate-500 hover:bg-slate-400'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
