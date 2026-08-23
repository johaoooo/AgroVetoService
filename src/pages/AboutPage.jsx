import React from 'react';
import { Link } from 'react-router-dom';
import { FOUNDER_DATA, COMPANY_INFO } from '../data/companyData';
import founderPhoto from '../assets/dr_poutya.jpeg';

import PageHero from '../components/PageHero';

/**
 * Page Dédiée : À Propos de la Fondatrice & Statuts OHADA
 */
export default function AboutPage() {
  return (
    <div className="pb-20 space-y-16 bg-[#f6f8fa] dark:bg-[#0b0f17] transition-colors">
      
      {/* Hero avec photographie haute résolution */}
      <PageHero
        category="Direction Générale & Gouvernance"
        title="Présentation de la Fondatrice & Direction"
        subtitle="Découvrez le parcours, la vision et les engagements du Dr Marie-Rose Edwige Rakié POUTYA SAIZONOU."
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80"
        breadcrumb={[{ label: 'À Propos' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Profil de la Fondatrice */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Colonne Gauche : Photo Portrait & Fiche */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-slate-900 text-white overflow-hidden border border-slate-800 shadow-2xl sticky top-28">
              <div className="aspect-square bg-slate-950 overflow-hidden">
                <img
                  src={founderPhoto}
                  alt={FOUNDER_DATA.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                    Fondatrice & Directrice Générale
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {FOUNDER_DATA.name}
                  </h3>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  {FOUNDER_DATA.credentials.map((cred, index) => (
                    <div key={index} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1">
                  <p>
                    <strong className="text-slate-200">Société :</strong> AGRO VÉTO SERVICES CONGO S.A.R.L.U.
                  </p>
                  <p>
                    <strong className="text-slate-200">Siège :</strong> {COMPANY_INFO.address.full}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Biographie Détaillée */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Biographie Professionnelle
              </h2>
              <div className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
                {FOUNDER_DATA.bio.split('\n\n').map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Mot de la Direction */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#fafbfc] dark:bg-[#121824] border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-4">
              <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider block">
                Mot de la Direction
              </span>
              <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                {FOUNDER_DATA.quote}
              </p>
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-900 dark:text-white">
                  — {FOUNDER_DATA.name}
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                  Médecin Vétérinaire & Spécialiste QHSE
                </span>
              </div>
            </div>

            {/* Statuts & Forme Juridique */}
            <div className="p-6 rounded-3xl bg-[#fafbfc] dark:bg-[#121824] border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Cadre Juridique & Statuts
              </h3>
              <p>
                <strong>AGRO VÉTO SERVICES CONGO</strong> est constituée sous la forme d'une Société à Responsabilité Limitée Unipersonnelle (S.A.R.L.U.), régie par l'Acte uniforme OHADA relatif au droit des sociétés commerciales et du GIE.
              </p>
              <p>
                <strong>Siège Social :</strong> {COMPANY_INFO.address.full}.
              </p>
            </div>
          </div>

        </div>

        {/* Vision & Missions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-slate-900 text-white p-8 space-y-4 shadow-xl border border-slate-800">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Cap Stratégique</span>
            <h3 className="text-xl font-extrabold">NOTRE VISION</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {FOUNDER_DATA.vision}
            </p>
          </div>

          <div className="rounded-3xl bg-emerald-50/70 dark:bg-[#121824] border border-emerald-200 dark:border-slate-800 p-8 space-y-4 shadow-xs">
            <span className="text-xs font-bold text-emerald-900 dark:text-emerald-400 uppercase tracking-widest block">Engagements Métier</span>
            <h3 className="text-xl font-extrabold text-emerald-950 dark:text-emerald-300">NOS MISSIONS</h3>
            <ul className="space-y-2">
              {FOUNDER_DATA.missions.map((mission, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">•</span>
                  <span>{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4 Valeurs Cardinales */}
        <div>
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white text-center mb-8">
            Nos 4 Valeurs Cardinales
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUNDER_DATA.values.map((val, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-[#fafbfc] dark:bg-[#121824] border border-slate-200/90 dark:border-slate-800 shadow-xs">
                <span className="text-2xl font-black text-slate-300 dark:text-slate-600 block mb-3">0{idx + 1}</span>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">{val.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
