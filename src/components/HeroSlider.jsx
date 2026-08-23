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
  ChevronRight,
  Sparkles,
  GraduationCap,
  Award,
  BellRing,
  CheckCircle2
} from 'lucide-react';
import { HERO_SLIDES, COMPANY_INFO } from '../data/companyData';
import heroAgroImg from '../assets/hero_agropastoral.jpg';

const LIVE_MESSAGE_FEED = [
  { 
    id: 1,
    tag: "CLINIQUE & URGENCES", 
    tagColor: "text-sky-300 bg-sky-500/25 border-sky-400/40", 
    icon: Stethoscope,
    time: "À l'instant",
    title: "Permanence Vétérinaire 24h/24",
    text: "Soins d'urgence, chirurgie et consultations médicales assurés en continu au quartier Socoprise, Pointe-Noire." 
  },
  { 
    id: 2,
    tag: "PROVENDERIE CERTIFIÉE", 
    tagColor: "text-emerald-300 bg-emerald-500/25 border-emerald-400/40", 
    icon: Wheat,
    time: "Il y a 1 min",
    title: "Arrivage Poussins Cobb 500",
    text: "Poussins d'un jour vaccinés, aliments démarrages/finitions et compléments nutritionnels disponibles en stock." 
  },
  { 
    id: 3,
    tag: "CONSEIL & AUDITS QHSE", 
    tagColor: "text-amber-300 bg-amber-500/25 border-amber-400/40", 
    icon: ShieldCheck,
    time: "Il y a 3 min",
    title: "Accompagnement ISO & HACCP",
    text: "Diagnostics normatifs ISO 9001/14001/45001, sécurité alimentaire et formule sur-mesure « QHSE Partagé »." 
  },
  { 
    id: 4,
    tag: "CENTRE DE FORMATION", 
    tagColor: "text-emerald-300 bg-emerald-500/25 border-emerald-400/40", 
    icon: GraduationCap,
    time: "Il y a 5 min",
    title: "Fermes-Écoles & Pratique Terrain",
    text: "Inscriptions ouvertes pour les modules certifiants en conduite d'élevage avicole et biosécurité des fermes." 
  },
  { 
    id: 5,
    tag: "ANALYSES DE LABORATOIRE", 
    tagColor: "text-sky-300 bg-sky-500/25 border-sky-400/40", 
    icon: Sparkles,
    time: "Il y a 8 min",
    title: "Laboratoire Vétérinaire AVS",
    text: "Analyses de coprologie, autopsies aviaires et contrôles bromatologiques de qualité des aliments." 
  },
  { 
    id: 6,
    tag: "DIRECTION GÉNÉRALE", 
    tagColor: "text-amber-300 bg-amber-500/25 border-amber-400/40", 
    icon: Award,
    time: "Il y a 12 min",
    title: "Dr POUTYA SAIZONOU",
    text: "Une approche intégrée et rigoureuse : de la santé animale à l'excellence des standards QHSE au Congo." 
  }
];

/**
 * Composant HeroSlider avec flux de messages arrivant bloc par bloc
 */
export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  // État du flux de messages arrivant bloc par bloc
  const [visibleMessages, setVisibleMessages] = useState([
    LIVE_MESSAGE_FEED[0],
    LIVE_MESSAGE_FEED[1]
  ]);
  const [nextMsgIndex, setNextMsgIndex] = useState(2);

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

  // Arrivée d'un nouveau bloc de message toutes les 3.2 secondes avec défilement vers le haut
  useEffect(() => {
    const timer = setInterval(() => {
      const newMsg = {
        ...LIVE_MESSAGE_FEED[nextMsgIndex],
        instanceId: Date.now()
      };
      
      setVisibleMessages((prev) => {
        // Conserver les 2 ou 3 derniers blocs pour un défilement vertical parfait
        const updated = [...prev, newMsg];
        return updated.slice(-3);
      });

      setNextMsgIndex((prev) => (prev + 1) % LIVE_MESSAGE_FEED.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [nextMsgIndex]);

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

          {/* Colonne Droite : Flux de Messages Arrivant BLOC PAR BLOC */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* En-tête du flux de messages */}
            <div className="flex items-center justify-between pb-2 border-b border-white/20">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <BellRing className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-black text-white tracking-wider uppercase font-sans">
                  ACTUALITÉS & SERVICES EN DIRECT
                </span>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-400/50 text-[10px] font-black text-emerald-300 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>LIVE FEED</span>
              </div>
            </div>

            {/* Pile verticale de blocs de messages qui montent */}
            <div className="space-y-3 min-h-[240px] flex flex-col justify-end">
              {visibleMessages.map((msg, index) => {
                const IconComponent = msg.icon || Sparkles;
                const isLatest = index === visibleMessages.length - 1;

                return (
                  <div
                    key={msg.instanceId || msg.id}
                    className={`p-4 rounded-2xl transition-all duration-700 transform border shadow-lg ${
                      isLatest
                        ? 'bg-slate-900/85 backdrop-blur-md border-emerald-500/50 shadow-emerald-950/40 translate-y-0 scale-100'
                        : 'bg-slate-950/65 backdrop-blur-sm border-white/15 opacity-75 scale-98 hover:opacity-100'
                    }`}
                  >
                    {/* Ligne d'en-tête du bloc */}
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-white/10 text-emerald-400 flex items-center justify-center shrink-0">
                          <IconComponent className="w-3.5 h-3.5" />
                        </div>
                        <span className={`px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider border ${msg.tagColor}`}>
                          {msg.tag}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-300 font-medium">
                        {msg.time}
                      </span>
                    </div>

                    {/* Titre et contenu du bloc */}
                    <div className="space-y-0.5 pl-8">
                      <h4 className="text-xs font-bold text-white leading-tight">
                        {msg.title}
                      </h4>
                      <p className="text-slate-200 text-xs leading-relaxed font-normal">
                        {msg.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Raccourcis d'accès direct */}
            <div className="pt-2 border-t border-white/15 space-y-2.5">
              <div className="grid grid-cols-3 gap-2 text-[11px]">
                <button
                  onClick={() => navigate('/clinique')}
                  className="py-2 px-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold transition cursor-pointer text-center truncate flex items-center justify-center gap-1.5 shadow-xs backdrop-blur-xs"
                >
                  <Stethoscope className="w-3 h-3 text-sky-300 shrink-0" />
                  <span>Clinique</span>
                </button>
                <button
                  onClick={() => navigate('/boutique')}
                  className="py-2 px-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold transition cursor-pointer text-center truncate flex items-center justify-center gap-1.5 shadow-xs backdrop-blur-xs"
                >
                  <Wheat className="w-3 h-3 text-emerald-300 shrink-0" />
                  <span>Poussins</span>
                </button>
                <button
                  onClick={() => navigate('/devis-qhse')}
                  className="py-2 px-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold transition cursor-pointer text-center truncate flex items-center justify-center gap-1.5 shadow-xs backdrop-blur-xs"
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
    </section>
  );
}
