import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Stethoscope, 
  Wheat, 
  ShieldCheck, 
  MessageCircle, 
  MapPin, 
  ArrowUpRight, 
  Clock, 
  ChevronRight,
  Terminal,
  Activity,
  Sparkles
} from 'lucide-react';
import { HERO_SLIDES, COMPANY_INFO } from '../data/companyData';
import heroAgroImg from '../assets/hero_agropastoral.jpg';

const STREAM_MESSAGES = [
  { 
    tag: "CLINIQUE", 
    tagColor: "text-sky-300 bg-sky-500/20 border-sky-400/30", 
    text: "Urgences vétérinaires 24h/24, consultations et chirurgies actives au quartier Socoprise, Pointe-Noire." 
  },
  { 
    tag: "PROVENDERIE", 
    tagColor: "text-emerald-300 bg-emerald-500/20 border-emerald-400/30", 
    text: "Arrivage permanent de poussins d'un jour Cobb 500 vaccinés et aliments provenderie haute performance." 
  },
  { 
    tag: "CONSEIL QHSE", 
    tagColor: "text-amber-300 bg-amber-500/20 border-amber-400/30", 
    text: "Accompagnement normatif ISO 9001/14001/45001, méthode HACCP & formule « QHSE Partagé » pour les entreprises." 
  },
  { 
    tag: "FERMES-ÉCOLES", 
    tagColor: "text-emerald-300 bg-emerald-500/20 border-emerald-400/30", 
    text: "Sessions de formation 100% pratiques en élevage avicole, gestion de cheptel et biosécurité terrain." 
  },
  { 
    tag: "LABORATOIRE", 
    tagColor: "text-sky-300 bg-sky-500/20 border-sky-400/30", 
    text: "Analyses bromatologiques, coprologie, autopsies aviaires et diagnostic vétérinaire de précision." 
  },
  { 
    tag: "SAVOIR-FAIRE", 
    tagColor: "text-amber-300 bg-amber-500/20 border-amber-400/30", 
    text: "Ateliers pratiques de saponification, formulation de savons durs, liquides et détergents ménagers." 
  },
  { 
    tag: "DIRECTION", 
    tagColor: "text-emerald-300 bg-emerald-500/20 border-emerald-400/30", 
    text: "Dr POUTYA SAIZONOU : L'expertise au service de la santé animale, de la qualité agroalimentaire et du QHSE." 
  }
];

/**
 * Composant HeroSlider avec flux de texte direct sans cadre englobant
 */
export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  // État pour l'animation de saisie de texte (Typewriter) et défilement vertical
  const [completedLines, setCompletedLines] = useState([
    {
      id: 0,
      tag: STREAM_MESSAGES[0].tag,
      tagColor: STREAM_MESSAGES[0].tagColor,
      text: STREAM_MESSAGES[0].text
    }
  ]);
  const [currentMsgIndex, setCurrentMsgIndex] = useState(1);
  const [typedChars, setTypedChars] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const streamEndRef = useRef(null);

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

  // Logique d'écriture caractère par caractère et défilement vers le haut
  useEffect(() => {
    const targetMsg = STREAM_MESSAGES[currentMsgIndex];
    if (!targetMsg) return;

    if (isTyping) {
      if (typedChars.length < targetMsg.text.length) {
        const timeout = setTimeout(() => {
          setTypedChars(targetMsg.text.slice(0, typedChars.length + 1));
        }, 28);
        return () => clearTimeout(timeout);
      } else {
        // Message complet : faire une pause avant de valider la ligne
        const timeout = setTimeout(() => {
          setCompletedLines((prev) => {
            const nextLines = [
              ...prev,
              {
                id: Date.now(),
                tag: targetMsg.tag,
                tagColor: targetMsg.tagColor,
                text: targetMsg.text
              }
            ];
            // Garder les 4 dernières lignes pour assurer un défilement fluide
            return nextLines.slice(-4);
          });
          setTypedChars('');
          setIsTyping(false);
        }, 1600);
        return () => clearTimeout(timeout);
      }
    } else {
      // Passer au message suivant
      const timeout = setTimeout(() => {
        setCurrentMsgIndex((prev) => (prev + 1) % STREAM_MESSAGES.length);
        setIsTyping(true);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [typedChars, isTyping, currentMsgIndex]);

  // Auto-scroll doux vers le bas quand une nouvelle ligne s'écrit
  useEffect(() => {
    if (streamEndRef.current) {
      streamEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [completedLines, typedChars]);

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

  const currentMsgObj = STREAM_MESSAGES[currentMsgIndex];

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

          {/* Colonne Droite : Capsule Translucide Haute Lisibilité */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-slate-950/65 backdrop-blur-md border border-white/20 p-5 sm:p-6 shadow-2xl space-y-4 text-white">
              
              {/* En-tête avec indicateur direct */}
              <div className="flex items-center justify-between pb-3 border-b border-white/20">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Terminal className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-black text-white tracking-wider uppercase font-sans">
                    AVS CONGO • FLUX EN DIRECT
                  </span>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/25 border border-emerald-400/50 text-[10px] font-black text-emerald-300 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>LIVE</span>
                </div>
              </div>

              {/* Zone de texte avec contraste renforcé */}
              <div className="h-[215px] overflow-y-auto space-y-3.5 text-xs pr-1 scrollbar-none flex flex-col justify-end">
                
                {/* Lignes précédemment complétées qui défilent vers le haut */}
                {completedLines.map((line) => (
                  <div 
                    key={line.id} 
                    className="space-y-1 transition-all duration-500 opacity-85 hover:opacity-100"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider border shadow-xs ${line.tagColor}`}>
                        {line.tag}
                      </span>
                      <span className="text-[11px] text-slate-300 font-sans font-medium">
                        Pointe-Noire
                      </span>
                    </div>
                    <p className="text-slate-100 text-xs sm:text-[13px] font-sans font-normal leading-relaxed pl-2.5 border-l-2 border-white/30 drop-shadow-xs">
                      {line.text}
                    </p>
                  </div>
                ))}

                {/* Ligne actuellement en cours de saisie */}
                {isTyping && currentMsgObj && (
                  <div className="space-y-1 pt-1">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider border shadow-xs ${currentMsgObj.tagColor} animate-pulse`}>
                        {currentMsgObj.tag}
                      </span>
                      <span className="text-[11px] text-emerald-300 font-sans font-bold flex items-center gap-1">
                        <Activity className="w-3.5 h-3.5 animate-spin text-emerald-400" />
                        <span>Transmission en direct...</span>
                      </span>
                    </div>
                    <p className="text-white font-bold text-xs sm:text-[13px] font-sans leading-relaxed pl-2.5 border-l-2 border-emerald-400 drop-shadow-sm">
                      <span>{typedChars}</span>
                      <span className="inline-block w-1.5 h-4 bg-emerald-400 animate-pulse ml-1 align-middle"></span>
                    </p>
                  </div>
                )}

                <div ref={streamEndRef} />
              </div>

              {/* Raccourcis d'accès rapide discrets */}
              <div className="pt-3 border-t border-white/20 space-y-2.5">
                <div className="grid grid-cols-3 gap-2 text-[11px]">
                  <button
                    onClick={() => navigate('/clinique')}
                    className="py-2 px-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold transition cursor-pointer text-center truncate flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Stethoscope className="w-3 h-3 text-sky-300 shrink-0" />
                    <span>Clinique</span>
                  </button>
                  <button
                    onClick={() => navigate('/boutique')}
                    className="py-2 px-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold transition cursor-pointer text-center truncate flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Wheat className="w-3 h-3 text-emerald-300 shrink-0" />
                    <span>Poussins</span>
                  </button>
                  <button
                    onClick={() => navigate('/devis-qhse')}
                    className="py-2 px-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold transition cursor-pointer text-center truncate flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <ShieldCheck className="w-3 h-3 text-amber-300 shrink-0" />
                    <span>QHSE</span>
                  </button>
                </div>

                {/* Bouton direct WhatsApp */}
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Bonjour%20AGRO%20VETO%20SERVICES%2C%20je%20souhaite%20des%20informations.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Échanger en direct sur WhatsApp</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
