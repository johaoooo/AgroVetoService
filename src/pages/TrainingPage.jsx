import React from 'react';
import TrainingSection from '../components/TrainingSection';

/**
 * Page Dédiée : Centre de Formation (Teinte Douce & Reposante)
 */
export default function TrainingPage({ showToast }) {
  return (
    <div className="pt-28 pb-16 space-y-12 bg-[#f6f8fa]">
      
      {/* En-tête de page sobre */}
      <div className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block">
            Renforcement de Capacités & Autonomie
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Centre de Formation & Fermes-Écoles
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Des formations 100% pratiques et certifiantes en élevage avicole, hygiène HACCP, fabrication de détergents et audits ISO.
          </p>
        </div>
      </div>

      {/* Rassurance pédagogique sobre */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-3xl bg-[#fafbfc] border border-slate-200/90 text-xs">
          <div>
            <span className="font-bold text-slate-900 block text-sm mb-1">Attestations Certifiantes</span>
            <p className="text-slate-500">Validation officielle des acquis et délivrance de certificat de fin de formation.</p>
          </div>

          <div>
            <span className="font-bold text-slate-900 block text-sm mb-1">Immersion Ferme-École</span>
            <p className="text-slate-500">Pratique directe sur cheptel vivant et ateliers techniques de production.</p>
          </div>

          <div>
            <span className="font-bold text-slate-900 block text-sm mb-1">Suivi Post-Formation</span>
            <p className="text-slate-500">Accompagnement continu par nos vétérinaires pour la rentabilité de votre projet.</p>
          </div>
        </div>
      </div>

      <TrainingSection showToast={showToast} />

    </div>
  );
}
