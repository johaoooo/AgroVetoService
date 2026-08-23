import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, GitMerge, Users, GraduationCap, Leaf, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_US, IMPACT_STATS } from '../data/companyData';

/**
 * Composant WhyChooseUs avec Navigation React Router
 */
export default function WhyChooseUs() {
  const navigate = useNavigate();

  const iconMap = {
    ShieldCheck: ShieldCheck,
    GitMerge: GitMerge,
    Users: Users,
    GraduationCap: GraduationCap,
    Leaf: Leaf
  };

  return (
    <section className="py-16 bg-[#eef2f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Pourquoi Choisir <span className="text-emerald-700">AGRO VÉTO SERVICES CONGO</span> ?
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Opter pour notre structure, c'est faire le choix d'un partenaire stratégique complet qui allie rigueur scientifique, maîtrise du terrain et conformité aux standards internationaux.
          </p>
        </div>

        {/* Grille des 5 Piliers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            const isFeatured = index === 0;

            return (
              <div
                key={item.id}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all ${
                  isFeatured
                    ? 'bg-slate-900 text-white shadow-xl md:col-span-2 lg:col-span-1 border border-slate-800'
                    : 'bg-[#fafbfc] text-slate-900 shadow-xs border border-slate-200/90 hover:border-emerald-500/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isFeatured ? 'bg-emerald-500 text-slate-950' : 'bg-emerald-100/70 text-emerald-800'
                    }`}>
                      <IconComponent className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <span className="text-xs font-black text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold mb-3 tracking-tight ${
                    isFeatured ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isFeatured ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {item.description}
                  </p>
                </div>

                <div className={`mt-6 pt-4 border-t text-xs font-semibold ${
                  isFeatured ? 'border-slate-800 text-emerald-400' : 'border-slate-200 text-emerald-700'
                }`}>
                  Excellence opérationnelle garantie
                </div>
              </div>
            );
          })}

          {/* Carte Contact Direct */}
          <div className="rounded-3xl p-7 bg-emerald-900 text-white shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-300">
                  <ShieldCheck className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <span className="text-xs font-black text-emerald-200">06</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Un Projet d'Audit ou d'Élevage ?</h3>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed mb-6">
                Bénéficiez d'un diagnostic personnalisé avec le Dr POUTYA et notre équipe de spécialistes.
              </p>
            </div>
            <button
              onClick={() => navigate('/devis-qhse')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-emerald-900 font-bold text-xs hover:bg-emerald-50 transition-colors shadow-xs cursor-pointer"
            >
              <span>Demander un diagnostic</span>
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Chiffres clés */}
        <div className="rounded-3xl bg-[#fafbfc] border border-slate-200/90 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            {IMPACT_STATS.map((stat, i) => (
              <div key={i} className="pt-4 sm:pt-0 px-2 space-y-1">
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  <span className="text-emerald-700">{stat.value}</span>
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-800">{stat.label}</p>
                <p className="text-[11px] text-slate-500">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
