import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  ShoppingCart, 
  Menu, 
  X, 
  MapPin, 
  MessageCircle, 
  ShieldCheck, 
  Stethoscope, 
  User,
  Sun,
  Moon
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import logoPng from '../assets/logo.png';

/**
 * Composant Header Multi-Pages avec Switch Mode Sombre / Mode Clair
 */
export default function Header({ 
  cartCount, 
  setIsCartOpen, 
  currentUser, 
  onOpenAuthModal,
  darkMode,
  toggleDarkMode
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors d'un changement de page
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/a-propos', label: 'À Propos' },
    { path: '/poles', label: 'Nos 6 Pôles' },
    { path: '/boutique', label: 'Boutique' },
    { path: '/clinique', label: 'Clinique' },
    { path: '/formations', label: 'Formations' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleAccountClick = () => {
    if (currentUser) {
      navigate('/mon-compte');
    } else {
      onOpenAuthModal();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Barre supérieure discrète */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" strokeWidth={1.75} />
              Socoprise, Pointe-Noire (Congo)
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="hidden sm:inline text-slate-400">
              {COMPANY_INFO.openingHours.weekdays}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              to="/clinique"
              className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors font-semibold cursor-pointer"
            >
              <Stethoscope className="w-3.5 h-3.5" strokeWidth={1.75} />
              <span>Urgences Vétérinaires 24/7</span>
            </Link>
            <span className="text-slate-700">•</span>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Bonjour%20AGRO%20VETO%20SERVICES`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold"
            >
              <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.75} />
              <span>WhatsApp Pro</span>
            </a>
          </div>
        </div>
      </div>

      {/* Barre de navigation principale */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#f6f8fa]/95 dark:bg-[#0b0f17]/95 backdrop-blur-md shadow-sm py-2.5 border-b border-slate-200/90 dark:border-slate-800' 
          : 'bg-[#f6f8fa] dark:bg-[#0b0f17] py-3 shadow-xs border-b border-slate-200/60 dark:border-slate-800/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo officiel menant à l'accueil */}
          <Link 
            to="/"
            className="flex items-center focus:outline-none transition-transform hover:opacity-95 cursor-pointer"
            aria-label="Retour à l'accueil"
          >
            <img 
              src={logoPng} 
              alt="AGRO VÉTO SERVICES CONGO" 
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </Link>

          {/* Liens de navigation Desktop avec URL réelles */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? 'text-emerald-800 dark:text-emerald-300 bg-emerald-100/70 dark:bg-emerald-950/60 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-emerald-800 dark:hover:text-emerald-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Boutons d'action à droite */}
          <div className="flex items-center space-x-2 sm:space-x-2.5">
            
            {/* Bouton Switch Mode Sombre / Mode Clair */}
            <button
              onClick={toggleDarkMode}
              className="p-2 sm:p-2.5 rounded-xl bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-amber-300 transition-all border border-slate-300/80 dark:border-slate-700 cursor-pointer shadow-2xs"
              title={darkMode ? "Passer en Mode Clair" : "Passer en Mode Sombre"}
              aria-label="Changer de thème"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-300" strokeWidth={2} />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" strokeWidth={2} />
              )}
            </button>

            {/* Bouton Compte Client */}
            <button
              onClick={handleAccountClick}
              className={`flex items-center gap-1.5 p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                currentUser
                  ? 'bg-emerald-100/70 dark:bg-emerald-950/70 border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-300'
                  : 'bg-slate-200/60 dark:bg-slate-800 border-slate-300/80 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              title={currentUser ? "Mon Espace Compte" : "Se connecter / Créer un compte"}
            >
              <User className="w-4 h-4" strokeWidth={1.75} />
              <span className="hidden md:inline">
                {currentUser ? (currentUser.fullName.split(' ')[0]) : 'Mon Compte'}
              </span>
            </button>

            {/* Panier */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 sm:p-2.5 rounded-xl bg-slate-200/60 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-emerald-800 dark:hover:text-emerald-400 transition-all border border-slate-300/80 dark:border-slate-700 cursor-pointer"
              title="Voir mon panier"
              aria-label="Panier d'achat"
            >
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.75} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-slate-950 font-extrabold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Bouton Devis QHSE vers /devis-qhse */}
            <Link
              to="/devis-qhse"
              className={`hidden sm:inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer shadow-xs ${
                location.pathname === '/devis-qhse'
                  ? 'bg-emerald-800 text-white ring-2 ring-emerald-600'
                  : 'bg-emerald-700 hover:bg-emerald-800 text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4" strokeWidth={1.75} />
              <span>Devis QHSE</span>
            </Link>

            {/* Menu Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-xl bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" strokeWidth={1.75} /> : <Menu className="w-5 h-5" strokeWidth={1.75} />}
            </button>
          </div>
        </div>

        {/* Menu Déroulant Mobile avec Liens React Router */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#f6f8fa] dark:bg-[#0b0f17] border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`w-full px-4 py-3 text-sm font-semibold rounded-xl text-left cursor-pointer block ${
                      isActive
                        ? 'bg-emerald-100/70 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-300 font-bold border-l-4 border-emerald-600'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <Link
                to="/devis-qhse"
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-700 text-white font-bold text-sm rounded-xl"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Demander un Devis QHSE</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
