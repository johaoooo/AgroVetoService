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
    <div className="pt-28 pb-20 space-y-16 bg-[#f6f8fa]">
      
      {/* En-tête de page sobre */}
      <div className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
            Offre Globale & Intégrée
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Nos 6 Pôles d'Activités & d'Expertise
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Une prise en charge complète de la santé animale, de la provenderie, de la transformation agroalimentaire et des normes QHSE.
          </p>
        </div>
      </div>

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
                className="rounded-3xl bg-[#fafbfc] border border-slate-200/90 p-6 sm:p-10 shadow-xs space-y-6 hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" strokeWidth={1.75} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase block">
                        Pôle Stratégique N°0{pole.id}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                        {pole.title}
                      </h2>
                    </div>
                  </div>

                  <Link
                    to={cta.path}
                    className="self-start sm:self-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>{cta.label}</span>
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                  </Link>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {pole.shortDesc}
                </p>

                {/* Prestations du pôle */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {pole.features.map((feature, fIdx) => (
                    <div key={fIdx} className="p-3.5 rounded-2xl bg-[#f1f5f8] border border-slate-200/80 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                      <span className="text-emerald-700 font-bold">•</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
