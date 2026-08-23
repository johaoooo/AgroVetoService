import React from 'react';
import ContactSection from '../components/ContactSection';

/**
 * Page Dédiée : Contact & Localisation (Teinte Douce & Reposante)
 */
export default function ContactPage({ showToast }) {
  return (
    <div className="pt-28 pb-16 space-y-12 bg-[#f6f8fa]">
      
      {/* En-tête de page sobre */}
      <div className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
            Nous Trouver & Échanger
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Contact & Localisation du Siège
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Retrouvez-nous au quartier Socoprise à Pointe-Noire ou écrivez-nous pour toute commande ou demande de renseignement.
          </p>
        </div>
      </div>

      <ContactSection showToast={showToast} />

    </div>
  );
}
