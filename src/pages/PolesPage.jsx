import React from 'react';
import { Link } from 'react-router-dom';
import { POLES } from '../data/companyData';
import { 
  Stethoscope, 
  ShieldCheck, 
  Apple, 
  Sparkles, 
  GraduationCap, 
  Building2, 
  ArrowRight 
} from 'lucide-react';

import PageHero from '../components/PageHero';

/**
 * Page Dédiée : Nos 6 Pôles d'Activités & d'Expertise
 */
export default function PolesPage() {
  const iconList = [
    Stethoscope,    // Pôle 1
    ShieldCheck,    // Pôle 2
    Apple,          // Pôle 3
    Sparkles,       // Pôle 4
    GraduationCap,  // Pôle 5
    Building2       // Pôle 6
  ];

  const getCtaLink = (poleCode) => {
    switch (poleCode) {
      case 'SANTE_ANIMALE':
        return { path: '/clinique', label: 'Prendre RDV Clinique' };
      case 'QHSE_RSE':
        return { path: '/devis-qhse', label: 'Demander un Devis' };
      case 'FORMATION':
        return { path: '/formations', label: 'Voir Formations' };
      default:
        return { path: '/boutique', label: 'Accéder à la boutique' };
    }
  };

  return (
    <div className="pb-20 space-y-16 bg-[#f6f8fa] dark:bg-[#0b0f17] transition-colors">
      
      {/* Hero avec photographie haute résolution */}
      <PageHero
        title="Nos 6 Pôles d'Activités & d'Expertise"
        subtitle="Une prise en charge complète de la santé animale, de la provenderie, de la transformation agroalimentaire et des normes QHSE."
        image="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Liste des 6 pôles */}
        <div className="space-y-8">
          {POLES.map((pole, index) => {
            const Icon = iconList[index] || ShieldCheck;
            const cta = getCtaLink(pole.code);

            return (
              <div
                key={pole.id}
                id={`pole-${pole.id}`}
                className="rounded-3xl bg-white dark:bg-[#121824] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6 hover:border-emerald-500/40 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100/70 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" strokeWidth={1.75} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block">
                        Pôle Stratégique N°0{pole.id}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                        {pole.title}
                      </h2>
                    </div>
                  </div>

                  <Link
                    to={cta.path}
                    className="self-start sm:self-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>{cta.label}</span>
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                  </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Colonne Prestations */}
                  <div className="lg:col-span-8 space-y-4">
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {pole.shortDesc}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
                      {pole.features.map((feature, fIdx) => (
                        <div key={fIdx} className="p-3 rounded-xl bg-slate-50 dark:bg-[#192233] border border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-200 flex items-start gap-2">
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Colonne Photo */}
                  <div className="lg:col-span-4">
                    <div className="h-48 sm:h-56 w-full rounded-2xl overflow-hidden shadow-sm bg-slate-100 dark:bg-slate-800">
                      <img
                        src={pole.image}
                        alt={pole.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
