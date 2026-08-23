import React, { useState } from 'react';
import { 
  Stethoscope, 
  ShieldCheck, 
  Apple, 
  Sparkles, 
  GraduationCap, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Layers,
  MapPin
} from 'lucide-react';
import { POLES } from '../data/companyData';

/**
 * Composant PolesSection — Les 6 Pôles d'Expertise avec Images & Textes Organisés
 */
export default function PolesSection({ onAction, onOpenModal }) {
  const [activePoleId, setActivePoleId] = useState(1);

  const iconList = [
    Stethoscope,    // Pôle 1
    ShieldCheck,    // Pôle 2
    Apple,          // Pôle 3
    Sparkles,       // Pôle 4
    GraduationCap,  // Pôle 5
    Building2       // Pôle 6
  ];

  const currentPole = POLES.find((p) => p.id === activePoleId) || POLES[0];
  const CurrentIcon = iconList[currentPole.id - 1] || Layers;

  const handlePoleCta = (poleCode) => {
    switch (poleCode) {
      case 'SANTE_ANIMALE':
        onOpenModal('clinic');
        break;
      case 'QHSE_RSE':
        onAction('quote');
        break;
      case 'FORMATION':
        onAction('training');
        break;
      case 'AGROALIMENTAIRE':
      case 'COSMETIQUE_HYGIENE':
      case 'EVENEMENTIEL_COMMERCE':
        onAction('shop');
        break;
      default:
        onAction('contact');
    }
  };

  return (
    <section id="poles" className="py-20 bg-slate-50 dark:bg-[#0b0f17] relative border-t border-slate-200/70 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Nos <span className="text-emerald-700 dark:text-emerald-400">6 Pôles d'Expertise</span> Métier
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 font-normal">
            De la santé animale à la sécurité de l'assiette du consommateur : une couverture intégrale et scientifique de la chaîne de valeur agropastorale et industrielle.
          </p>
        </div>

        {/* Onglets sélecteurs des 6 Pôles */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-3 mb-8 no-scrollbar justify-start lg:justify-center">
          {POLES.map((pole, index) => {
            const Icon = iconList[index];
            const isActive = pole.id === activePoleId;
            return (
              <button
                key={pole.id}
                onClick={() => setActivePoleId(pole.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 dark:bg-emerald-600 text-white shadow-md'
                    : 'bg-white dark:bg-[#121824] hover:bg-slate-200/70 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`} />
                <span>Pôle 0{pole.id} : {pole.title.split(',')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Carte détaillée du Pôle avec Photographie & Contenu structuré */}
        <div className="rounded-3xl bg-white dark:bg-[#121824] text-slate-900 dark:text-white p-6 sm:p-8 md:p-10 shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Colonne Gauche : Présentation et Prestations */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400 flex items-center justify-center shrink-0 font-bold">
                  <CurrentIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block">
                    Pôle Stratégique N°0{currentPole.id}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {currentPole.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentPole.shortDesc}
              </p>

              {/* Liste structurée des prestations */}
              <div className="space-y-2.5 pt-1">
                {currentPole.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-[#192233] border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Bouton d'action */}
              <div className="pt-3 flex flex-wrap gap-3">
                <button
                  onClick={() => handlePoleCta(currentPole.code)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition cursor-pointer"
                >
                  <span>
                    {currentPole.code === 'SANTE_ANIMALE' ? 'Prendre RDV à la Clinique' :
                     currentPole.code === 'QHSE_RSE' ? 'Demander un Devis d\'Audit' :
                     currentPole.code === 'FORMATION' ? 'Programme de Formation' :
                     'Voir les Produits & Intrants'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onAction('contact')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm transition cursor-pointer"
                >
                  <span>Contacter un expert</span>
                </button>
              </div>

            </div>

            {/* Colonne Droite : Photographie Haute Résolution du Pôle & Badge Qualité */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Photo du Pôle */}
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-md bg-slate-100">
                <img
                  src={currentPole.image}
                  alt={currentPole.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 block mb-0.5">
                    Activité Terrain
                  </span>
                  <h4 className="text-sm font-bold leading-snug drop-shadow-sm">
                    {currentPole.title.split(',')[0]}
                  </h4>
                </div>
              </div>

              {/* Bloc engagement qualité */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Siège Socoprise, Pointe-Noire</span>
                </div>
                <span className="font-bold text-slate-800">Supervision Médicale & QHSE</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
