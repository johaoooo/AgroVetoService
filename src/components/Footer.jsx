import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/companyData';
import logoPng from '../assets/logo.png';
import { FacebookIcon, LinkedInIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from './SocialIcons';

/**
 * Composant Footer Multi-Pages avec Liens React Router
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Colonne 1 : Entreprise */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logoPng} 
                alt="Logo AVS Congo" 
                className="h-12 w-auto object-contain bg-white rounded-lg p-1"
              />
              <div>
                <span className="text-base font-extrabold text-white block">
                  AGRO VÉTO SERVICES CONGO
                </span>
                <span className="text-xs text-emerald-400 font-semibold">
                  S.A.R.L.U. — Pointe-Noire
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.sloganLong}. Société régie par l'Acte uniforme OHADA relatif au droit des sociétés commerciales.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <p>
                <strong className="text-slate-300">Siège :</strong> {COMPANY_INFO.address.full}
              </p>
              <p>
                <strong className="text-slate-300">Téléphone :</strong> {COMPANY_INFO.phone}
              </p>
              <p>
                <strong className="text-slate-300">Email :</strong> {COMPANY_INFO.email}
              </p>
            </div>
          </div>

          {/* Colonne 2 : Pages du Site */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Pages du Site
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="hover:text-emerald-400 transition-colors">
                  À Propos & Direction
                </Link>
              </li>
              <li>
                <Link to="/poles" className="hover:text-emerald-400 transition-colors">
                  Les 6 Pôles
                </Link>
              </li>
              <li>
                <Link to="/boutique" className="hover:text-emerald-400 transition-colors">
                  Boutique & Intrants
                </Link>
              </li>
              <li>
                <Link to="/clinique" className="hover:text-emerald-400 transition-colors">
                  Clinique Vétérinaire
                </Link>
              </li>
              <li>
                <Link to="/formations" className="hover:text-emerald-400 transition-colors">
                  Centre de Formation
                </Link>
              </li>
              <li>
                <Link to="/devis-qhse" className="hover:text-emerald-400 transition-colors">
                  Devis QHSE
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact & Accès
                </Link>
              </li>
              <li>
                <Link to="/mon-compte" className="hover:text-emerald-400 transition-colors">
                  Espace Client
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Prestations Clés */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Pôles Clés
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/clinique" className="hover:text-sky-400 transition-colors">
                  Soins & Vaccins Animaux
                </Link>
              </li>
              <li>
                <Link to="/boutique" className="hover:text-emerald-400 transition-colors">
                  Poussins & Provende
                </Link>
              </li>
              <li>
                <Link to="/devis-qhse" className="hover:text-amber-400 transition-colors">
                  Audits ISO & HACCP
                </Link>
              </li>
              <li>
                <Link to="/devis-qhse" className="hover:text-amber-400 transition-colors">
                  Offre « QHSE Partagé »
                </Link>
              </li>
              <li>
                <Link to="/formations" className="hover:text-indigo-400 transition-colors">
                  Fermes-Écoles
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Réseaux Sociaux */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Réseaux Sociaux Officiels
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Suivez nos actualités agropastorales, astuces vétérinaires et dates de formation :
            </p>

            <div className="flex flex-wrap gap-2.5 pt-1">
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105 shadow-sm"
                title="Page Facebook"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>

              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-[#0A66C2] text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105 shadow-sm"
                title="Page LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Bonjour%20AGRO%20VETO%20SERVICES`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-[#25D366] text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105 shadow-sm"
                title="WhatsApp Direct"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>

              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105 shadow-sm"
                title="Compte Instagram"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              <a
                href={COMPANY_INFO.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105 border border-slate-700 shadow-sm"
                title="Compte TikTok"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} <span className="text-slate-300 font-semibold">AGRO VÉTO SERVICES CONGO S.A.R.L.U.</span> — Tous droits réservés.
          </p>

          <button
            onClick={scrollToTop}
            className="text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            Haut de page ↑
          </button>
        </div>

      </div>
    </footer>
  );
}
