import React from 'react';
import QuoteGenerator from '../components/QuoteGenerator';

import PageHero from '../components/PageHero';

/**
 * Page Dédiée : Devis B2B, Management QHSE & Audits ISO (Teinte Douce & Reposante)
 */
export default function QuotePage({ showToast }) {
  return (
    <div className="pb-16 space-y-12 bg-[#f6f8fa] dark:bg-[#0b0f17] transition-colors">
      
      {/* Hero avec photographie haute résolution */}
      <PageHero
        title="Conseil en Management QHSE & Audits Normatifs"
        subtitle="Accompagnement ISO 9001, 14001, 45001, ISO 22000, démarche HACCP et formule « QHSE Partagé » pour les PME congolaises."
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Rassurance B2B sobre */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-3xl bg-[#fafbfc] dark:bg-[#121824] border border-slate-200/90 dark:border-slate-800 text-xs">
          <div>
            <span className="font-bold text-slate-900 dark:text-white block text-sm mb-1">Normes Internationales</span>
            <p className="text-slate-500 dark:text-slate-400">ISO 9001, ISO 14001, ISO 45001, ISO 22000 & démarche HACCP.</p>
          </div>

          <div>
            <span className="font-bold text-slate-900 dark:text-white block text-sm mb-1">Offre « QHSE Partagé »</span>
            <p className="text-slate-500 dark:text-slate-400">Externalisation souple et adaptée aux contraintes budgétaires des PME.</p>
          </div>

          <div>
            <span className="font-bold text-slate-900 dark:text-white block text-sm mb-1">Expertise de Terrain</span>
            <p className="text-slate-500 dark:text-slate-400">Supervision directe par un Manager QHSE certifié et Médecin Vétérinaire.</p>
          </div>
        </div>
      </div>

      <QuoteGenerator showToast={showToast} />

    </div>
  );
}
