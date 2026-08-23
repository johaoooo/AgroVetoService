import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, GitMerge, Users, GraduationCap, Leaf, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US, IMPACT_STATS } from '../data/companyData';

/**
 * Composant WhyChooseUs — Design Structuré avec Photos & Textes Organisés
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

  const visualHighlights = [
    {
      title: "Clinique & Santé Animale",
      subtitle: "Plateau technique moderne et interventions de terrain 24/7",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80",
      tag: "Médecine Vétérinaire"
    },
    {
      title: "Provenderie & Intrants Certifiés",
      subtitle: "Nutrition optimale et souches sélectionnées de poussins",
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=600&q=80",
      tag: "Production Agropastorale"
    },
    {
      title: "Audits ISO & Formations Pratiques",
      subtitle: "Mise en conformité HACCP et transmission de savoir-faire",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      tag: "Excellence QHSE"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Pourquoi Choisir <span className="text-emerald-700">AGRO VÉTO SERVICES CONGO</span> ?
          </h2>
          
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Une synergie unique entre expertise médicale vétérinaire, maîtrise des normes internationales et accompagnement agropastoral de terrain.
          </p>
        </div>

        {/* 3 Cartes Visuelles Photos + Textes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {visualHighlights.map((vh, i) => (
            <div key={i} className="group rounded-2xl bg-white overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={vh.image}
                  alt={vh.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-950/75 backdrop-blur-xs text-emerald-300 text-[11px] font-bold border border-white/20">
                  {vh.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 text-base mb-1.5">{vh.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{vh.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Grille des 5 Piliers Stratégiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;

            return (
              <div
                key={item.id}
                className="rounded-2xl p-6 bg-white text-slate-900 shadow-xs border border-slate-200/90 hover:border-emerald-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-50 text-emerald-700 border border-emerald-100">
                      <IconComponent className="w-5 h-5" strokeWidth={1.8} />
                    </div>
                    <span className="text-xs font-bold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold mb-2 text-slate-900 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Excellence opérationnelle garantie</span>
                </div>
              </div>
            );
          })}

          {/* Carte Contact Direct */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald-900 to-slate-900 text-white shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-300">
                  <ShieldCheck className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <span className="text-xs font-bold text-emerald-300">06</span>
              </div>
              <h3 className="text-base font-bold mb-1.5">Un Projet d'Audit ou d'Élevage ?</h3>
              <p className="text-xs text-emerald-100/80 leading-relaxed mb-4">
                Bénéficiez d'un diagnostic personnalisé avec le Dr POUTYA et nos spécialistes.
              </p>
            </div>
            <button
              onClick={() => navigate('/devis-qhse')}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition shadow-sm cursor-pointer"
            >
              <span>Demander un diagnostic</span>
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Chiffres clés */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {IMPACT_STATS.map((stat, i) => (
              <div key={i} className="pt-4 sm:pt-0 px-2 space-y-1">
                <p className="text-2xl sm:text-3xl font-black text-emerald-700 tracking-tight">
                  {stat.value}
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
