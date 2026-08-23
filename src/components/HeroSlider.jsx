import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Stethoscope, 
  Wheat, 
  ShieldCheck, 
  MessageCircle, 
  MapPin, 
  Activity, 
  ArrowUpRight, 
  Sparkles, 
  Clock, 
  Award,
  ChevronRight
} from 'lucide-react';
import { HERO_SLIDES, COMPANY_INFO } from '../data/companyData';
import heroAgroImg from '../assets/hero_agropastoral.jpg';

/**
 * Composant HeroSlider avec Hero Droit dynamique et professionnel
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
      className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden text-white min-h-[660px] flex items-center"
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
        {/* Dégradé cinématique */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40"></div>
      </div>

      {/* 2. Contenu au premier plan */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Colonne Gauche : Titre et Descriptif */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
              {slide.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-2xl font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              {slide.subtitle}
            </p>

            {/* Boutons d'action */}
            <div className="pt-2 flex flex-wrap gap-3 sm:gap-4">
              <button
                onClick={() => handleAction(slide.ctaPrimary.action)}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-emerald-950/70 transition-all cursor-pointer hover:scale-102 flex items-center gap-2"
              >
                <span>{slide.ctaPrimary.text}</span>
                <ArrowUpRight className="w-4 h-4" />
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
              <div className="p-2.5 rounded-xl bg-slate-950/50 backdrop-blur-md border border-white/10">
                <span className="font-bold text-emerald-400 block">Direction Vétérinaire</span>
                <span className="text-slate-200">Dr POUTYA SAIZONOU</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/50 backdrop-blur-md border border-white/10">
                <span className="font-bold text-emerald-400 block">Normes & Sécurité</span>
                <span className="text-slate-200">ISO 9001, 14001, HACCP</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/50 backdrop-blur-md border border-white/10">
                <span className="font-bold text-emerald-400 block">Siège National</span>
                <span className="text-slate-200">Socoprise, Pointe-Noire</span>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Fiche Hero Dynamique & Ultra Pro */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Effet d'aura lumineuse en arrière-plan */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 via-teal-500/20 to-sky-500/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-700"></div>

              {/* Conteneur principal Glassmorphic */}
              <div className="relative rounded-3xl bg-slate-950/80 backdrop-blur-xl p-6 sm:p-7 border border-emerald-500/25 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] space-y-5">
                
                {/* 1. Header Fiche : Titre & Localisation avec Badge Actif */}
                <div className="flex items-start justify-between gap-3 border-b border-slate-800/80 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                        <Activity className="w-4 h-4" />
                      </div>
                      <h3 className="font-black text-white text-lg tracking-tight">
                        AGRO VÉTO SERVICES CONGO
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium pl-10">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>S.A.R.L.U. • Pointe-Noire, Congo</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    Actif
                  </span>
                </div>

                {/* 2. Slogan dynamique avec surbrillance */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-emerald-950/30 border border-emerald-500/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-teal-500"></div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-100 italic leading-relaxed pl-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 not-italic" />
                    <span>« {COMPANY_INFO.sloganShort || "De la santé animale à l'excellence QHSE"} »</span>
                  </p>
                </div>

                {/* 3. Lignes de Services Interactives & Pro */}
                <div className="space-y-2.5 text-xs">
                  {/* Service 1 : Clinique */}
                  <div 
                    onClick={() => navigate('/clinique')}
                    className="group/item flex items-center justify-between p-3 rounded-2xl bg-slate-900/70 hover:bg-slate-850 border border-slate-800 hover:border-sky-500/40 transition-all duration-200 cursor-pointer shadow-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-sky-500/15 text-sky-400 border border-sky-500/25 flex items-center justify-center group-hover/item:scale-105 transition">
                        <Stethoscope className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-slate-200 font-bold block text-[13px]">Clinique & Urgences</span>
                        <span className="text-[11px] text-slate-400">Soins vétérinaires & hospitalisation</span>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-sky-300 bg-sky-950/60 px-2.5 py-1 rounded-lg border border-sky-500/30 text-[11px] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      24h/24 & 7j/7
                    </span>
                  </div>

                  {/* Service 2 : Provenderie */}
                  <div 
                    onClick={() => navigate('/boutique')}
                    className="group/item flex items-center justify-between p-3 rounded-2xl bg-slate-900/70 hover:bg-slate-850 border border-slate-800 hover:border-emerald-500/40 transition-all duration-200 cursor-pointer shadow-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 flex items-center justify-center group-hover/item:scale-105 transition">
                        <Wheat className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-slate-200 font-bold block text-[13px]">Provenderie & Intrants</span>
                        <span className="text-[11px] text-slate-400">Nutrition & élevage</span>
                      </div>
                    </div>
                    <span className="font-semibold text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-500/30 text-[11px]">
                      Poussins, OAC, Aliments
                    </span>
                  </div>

                  {/* Service 3 : Audits & Formations */}
                  <div 
                    onClick={() => navigate('/formations')}
                    className="group/item flex items-center justify-between p-3 rounded-2xl bg-slate-900/70 hover:bg-slate-850 border border-slate-800 hover:border-amber-500/40 transition-all duration-200 cursor-pointer shadow-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/25 flex items-center justify-center group-hover/item:scale-105 transition">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-slate-200 font-bold block text-[13px]">Audits & Formations</span>
                        <span className="text-[11px] text-slate-400">Certification & hygiène</span>
                      </div>
                    </div>
                    <span className="font-semibold text-amber-300 bg-amber-950/60 px-2.5 py-1 rounded-lg border border-amber-500/30 text-[11px]">
                      ISO 9001, 14001, HACCP
                    </span>
                  </div>
                </div>

                {/* 4. Bouton WhatsApp Dynamique & Interactif */}
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Bonjour%20AGRO%20VETO%20SERVICES%2C%20je%20souhaite%20des%20renseignements.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-black transition-all duration-200 shadow-xl shadow-emerald-950/60 hover:shadow-emerald-500/25 hover:scale-101 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Contacter l'équipe via WhatsApp</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                {/* 5. Indicateurs de défilement (Slider Dots) */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-medium">Navigation Rapide</span>
                  <div className="flex items-center gap-2">
                    {HERO_SLIDES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          currentSlide === idx 
                            ? 'w-7 bg-gradient-to-r from-emerald-400 to-teal-400 shadow-xs shadow-emerald-400/50' 
                            : 'w-2 bg-slate-600 hover:bg-slate-400'
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
