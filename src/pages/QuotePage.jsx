import React from 'react';
import QuoteGenerator from '../components/QuoteGenerator';

/**
 * Page Dédiée : Devis B2B, Management QHSE & Audits ISO (Teinte Douce & Reposante)
 */
export default function QuotePage({ showToast }) {
  return (
    <div className="pt-28 pb-16 space-y-12 bg-[#f6f8fa]">
      
      {/* En-tête de page sobre */}
      <div className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
            Accompagnement & Conformité Entreprises
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Conseil en Management QHSE & Audits Normatifs
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Accompagnement ISO 9001, 14001, 45001, ISO 22000, démarche HACCP et formule « QHSE Partagé » pour les PME congolaises.
          </p>
        </div>
      </div>

      {/* Rassurance B2B sobre */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-3xl bg-[#fafbfc] border border-slate-200/90 text-xs">
          <div>
            <span className="font-bold text-slate-900 block text-sm mb-1">Normes Internationales</span>
            <p className="text-slate-500">ISO 9001, ISO 14001, ISO 45001, ISO 22000 & démarche HACCP.</p>
          </div>

          <div>
            <span className="font-bold text-slate-900 block text-sm mb-1">Offre « QHSE Partagé »</span>
            <p className="text-slate-500">Externalisation souple et adaptée aux contraintes budgétaires des PME.</p>
          </div>

          <div>
            <span className="font-bold text-slate-900 block text-sm mb-1">Expertise de Terrain</span>
            <p className="text-slate-500">Supervision directe par un Manager QHSE certifié et Médecin Vétérinaire.</p>
          </div>
        </div>
      </div>

      <QuoteGenerator showToast={showToast} />

    </div>
  );
}
