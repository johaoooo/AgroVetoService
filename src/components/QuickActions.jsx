import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Stethoscope, ShoppingBag, ShieldCheck, GraduationCap, ArrowRight } from 'lucide-react';

/**
 * Composant QuickActions — Cartes Modernes avec Photographies Thématiques
 */
export default function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      path: '/clinique',
      title: 'Clinique Vétérinaire',
      subtitle: 'Soins médicaux, chirurgie et urgences 24/7 pour animaux de compagnie et élevages.',
      icon: Stethoscope,
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
      badge: '24h/24 & 7j/7',
      color: 'text-sky-700 bg-sky-100/70',
      btnText: 'Prendre Rendez-vous'
    },
    {
      path: '/boutique',
      title: 'Boutique & Provenderie',
      subtitle: 'Poussins d\'un jour Cobb 500, aliments équilibrés et intrants d\'élevage certifiés.',
      icon: ShoppingBag,
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=600&q=80',
      badge: 'Stock Garanti',
      color: 'text-emerald-700 bg-emerald-100/70',
      btnText: 'Commander en ligne'
    },
    {
      path: '/devis-qhse',
      title: 'Audits & Conseil QHSE',
      subtitle: 'Accompagnement ISO (9001, 14001, 22000), HACCP et formule QHSE Partagé pour PME.',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
      badge: 'Experts Certifiés',
      color: 'text-amber-800 bg-amber-100/70',
      btnText: 'Devis Express B2B'
    },
    {
      path: '/formations',
      title: 'Fermes-Écoles & Formations',
      subtitle: 'Sessions certifiantes 100% pratiques en aviculture, fabrication et hygiène industrielle.',
      icon: GraduationCap,
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
      badge: '100% Pratique',
      color: 'text-indigo-700 bg-indigo-100/70',
      btnText: 'Voir le Calendrier'
    }
  ];

  return (
    <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {actions.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.path}
              onClick={() => navigate(item.path)}
              className="group cursor-pointer rounded-2xl bg-white overflow-hidden shadow-md hover:shadow-xl border border-slate-200/80 transition-all duration-300 hover:translate-y-[-4px] flex flex-col justify-between"
            >
              {/* Photo d'en-tête avec badge contextuel */}
              <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 w-9 h-9 rounded-xl backdrop-blur-md bg-white/90 shadow-sm flex items-center justify-center">
                  <Icon className="w-5 h-5 text-slate-900" strokeWidth={1.8} />
                </div>
                <div className="absolute bottom-2.5 right-3 text-[11px] font-bold text-white bg-slate-950/70 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/20">
                  {item.badge}
                </div>
              </div>

              {/* Corps texte organisé */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>

                {/* Pied de carte avec lien d'action */}
                <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-bold text-slate-900 group-hover:text-emerald-700 flex items-center justify-between transition-colors">
                  <span>{item.btnText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
