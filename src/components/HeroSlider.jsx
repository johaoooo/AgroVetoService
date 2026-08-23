import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Stethoscope, 
  Wheat, 
  ShieldCheck, 
  MessageCircle, 
  MapPin, 
  ArrowUpRight, 
  Clock, 
  ChevronRight
} from 'lucide-react';
import { HERO_SLIDES, COMPANY_INFO } from '../data/companyData';
import heroAgroImg from '../assets/hero_agropastoral.jpg';

/**
 * Composant HeroSlider — Hauteur Naturelle à Gauche et Bloc Droit Parfaitement Calibré
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
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden flex items-center bg-slate-950 text-white"
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
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/35"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/30"></div>
      </div>

      {/* 2. Contenu principal au format naturel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Colonne Gauche : Hauteur naturelle initiale sans contraintes forcées */}
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
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-950/60 transition cursor-pointer hover:scale-101 flex items-center gap-2"
              >
                <span>{slide.ctaPrimary.text}</span>
                <ArrowUpRight className="w-4 h-4" />
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

          {/* Colonne Droite : Fiche Translucide adaptée à la hauteur du bloc gauche */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-950/50 backdrop-blur-md border border-white/15 p-5 sm:p-6 shadow-2xl space-y-3.5 text-white">
              
              {/* En-tête : Titre & Localisation */}
              <div className="border-b border-white/10 pb-2.5">
                <h3 className="font-bold text-white text-base tracking-tight">
                  AGRO VÉTO SERVICES CONGO
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-emerald-300/90 font-medium mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>S.A.R.L.U. • Pointe-Noire, Congo</span>
                </div>
              </div>

              {/* Slogan sobre et compact */}
              <div className="py-2 px-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <p className="text-xs font-medium text-slate-200 italic">
                  « {COMPANY_INFO.sloganShort || "De la santé animale à l'excellence QHSE"} »
                </p>
              </div>

              {/* Les 3 Pôles Clés compacts */}
              <div className="space-y-1.5 text-xs">
                {/* Pôle 1 */}
                <div 
                  onClick={() => navigate('/clinique')}
                  className="flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-sky-500/20 text-sky-300 flex items-center justify-center shrink-0">
                      <Stethoscope className="w-3 h-3" />
                    </div>
                    <span className="font-medium text-slate-100 text-[12px]">Clinique & Urgences</span>
                  </div>
                  <span className="font-semibold text-sky-300 bg-sky-500/15 px-2 py-0.5 rounded-md text-[10px] flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5" />
                    24h/24 & 7j/7
                  </span>
                </div>

                {/* Pôle 2 */}
                <div 
                  onClick={() => navigate('/boutique')}
                  className="flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                      <Wheat className="w-3 h-3" />
                    </div>
                    <span className="font-medium text-slate-100 text-[12px]">Provenderie & Intrants</span>
                  </div>
                  <span className="font-semibold text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded-md text-[10px]">
                    Poussins, OAC, Aliments
                  </span>
                </div>

                {/* Pôle 3 */}
                <div 
                  onClick={() => navigate('/formations')}
                  className="flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-3 h-3" />
                    </div>
                    <span className="font-medium text-slate-100 text-[12px]">Audits & Formations</span>
                  </div>
                  <span className="font-semibold text-amber-300 bg-amber-500/15 px-2 py-0.5 rounded-md text-[10px]">
                    ISO 9001, 14001, HACCP
                  </span>
                </div>
              </div>

              {/* Bouton d'action WhatsApp */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Bonjour%20AGRO%20VETO%20SERVICES%2C%20je%20souhaite%20des%20renseignements.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Contacter l'équipe via WhatsApp</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>

              {/* Pagination discrète */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] text-slate-400">Présentation</span>
                <div className="flex items-center gap-1.5">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        currentSlide === idx ? 'w-5 bg-emerald-400' : 'w-1.5 bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Diapositive ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
