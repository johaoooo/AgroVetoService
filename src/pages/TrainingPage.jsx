import React from 'react';
import TrainingSection from '../components/TrainingSection';

import PageHero from '../components/PageHero';

/**
 * Page Dédiée : Centre de Formation (Teinte Douce & Reposante)
 */
export default function TrainingPage({ showToast }) {
  return (
    <div className="pb-16 space-y-12 bg-[#f6f8fa] dark:bg-[#0b0f17] transition-colors">
      
      {/* Hero avec photographie haute résolution */}
      <PageHero
        title="Centre de Formation & Fermes-Écoles"
        subtitle="Des formations 100% pratiques et certifiantes en élevage avicole, hygiène HACCP, fabrication de détergents et audits ISO."
        image="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Rassurance pédagogique sobre */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-3xl bg-[#fafbfc] dark:bg-[#121824] border border-slate-200/90 dark:border-slate-800 text-xs">
          <div>
            <span className="font-bold text-slate-900 dark:text-white block text-sm mb-1">Attestations Certifiantes</span>
            <p className="text-slate-500 dark:text-slate-400">Validation officielle des acquis et délivrance de certificat de fin de formation.</p>
          </div>

          <div>
            <span className="font-bold text-slate-900 dark:text-white block text-sm mb-1">Immersion Ferme-École</span>
            <p className="text-slate-500 dark:text-slate-400">Pratique directe sur cheptel vivant et ateliers techniques de production.</p>
          </div>

          <div>
            <span className="font-bold text-slate-900 dark:text-white block text-sm mb-1">Suivi Post-Formation</span>
            <p className="text-slate-500 dark:text-slate-400">Accompagnement continu par nos vétérinaires pour la rentabilité de votre projet.</p>
          </div>
        </div>
      </div>

      <TrainingSection showToast={showToast} />

    </div>
  );
}
