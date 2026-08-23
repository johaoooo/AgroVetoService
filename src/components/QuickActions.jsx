import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Stethoscope, ShoppingBag, ShieldCheck, GraduationCap, ArrowRight } from 'lucide-react';

/**
 * Composant QuickActions avec Navigation React Router
 */
export default function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      path: '/clinique',
      title: 'Clinique Vétérinaire',
      subtitle: 'Soins médicaux, vaccins et urgences 24/7 pour animaux de compagnie et fermes.',
      icon: Stethoscope,
      color: 'text-sky-700 bg-sky-100/60',
      borderAccent: 'border-t-sky-600',
      btnText: 'Prendre Rendez-vous'
    },
    {
      path: '/boutique',
      title: 'Boutique & Provenderie',
      subtitle: 'Poussins d\'un jour (Cobb 500), aliments équilibrés et intrants certifiés.',
      icon: ShoppingBag,
      color: 'text-emerald-700 bg-emerald-100/60',
      borderAccent: 'border-t-emerald-600',
      btnText: 'Commander en ligne'
    },
    {
      path: '/devis-qhse',
      title: 'Audits & Conseil QHSE',
      subtitle: 'Accompagnement ISO (9001, 14001, 22000), HACCP et formule QHSE Partagé.',
      icon: ShieldCheck,
      color: 'text-amber-800 bg-amber-100/60',
      borderAccent: 'border-t-amber-600',
      btnText: 'Devis Express B2B'
    },
    {
      path: '/formations',
      title: 'Fermes-Écoles & Formations',
      subtitle: 'Sessions certifiantes 100% pratiques en aviculture, fabrication et hygiène.',
      icon: GraduationCap,
      color: 'text-indigo-700 bg-indigo-100/60',
      borderAccent: 'border-t-indigo-600',
      btnText: 'Voir le Calendrier'
    }
  ];

  return (
    <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {actions.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`group cursor-pointer rounded-2xl bg-[#fafbfc] p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-3px] flex flex-col justify-between border-t-4 ${item.borderAccent}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color}`}>
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                </div>

                <h3 className="font-extrabold text-slate-900 text-base mb-2 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                  {item.subtitle}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 text-xs font-bold text-slate-800 group-hover:text-emerald-700 flex items-center justify-between transition-colors">
                <span>{item.btnText}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
