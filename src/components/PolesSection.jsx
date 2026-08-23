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
  Layers
} from 'lucide-react';
import { POLES } from '../data/companyData';

/**
 * Composant PolesSection (Les 6 Pôles d'Expertise & Activités)
 * - Navigation par onglets ou vue en grille
 * - Détail exhaustif des sous-activités de chaque pôle
 * - Actions directes pour commander ou demander un devis
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
    <section id="poles" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-sky-600" />
            <span>Offre Globale & Intégrée</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nos <span className="text-sky-700">6 Pôles d'Expertise</span> Métier
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            De la santé animale à la sécurité de l'assiette du consommateur : une couverture intégrale et scientifique de la chaîne de valeur agropastorale et industrielle.
          </p>
        </div>

        {/* Boutons sélecteurs des 6 Pôles (Onglets Desktop & Mobile scrollable) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start lg:justify-center">
          {POLES.map((pole, index) => {
            const Icon = iconList[index];
            const isActive = pole.id === activePoleId;
            return (
              <button
                key={pole.id}
                onClick={() => setActivePoleId(pole.id)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all shrink-0 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-102'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
                <span>Pôle 0{pole.id} : {pole.title.split(',')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Carte détaillée du Pôle actif */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-10 shadow-2xl border border-slate-700 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Colonne Gauche : Présentation et Prestations */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                    Pôle Stratégique N°0{currentPole.id}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {currentPole.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-base leading-relaxed">
                {currentPole.shortDesc}
              </p>

              {/* Liste à puces des fonctionnalités / prestations du pôle */}
              <div className="space-y-3 pt-2">
                {currentPole.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200 leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Bouton d'action contextuel selon le pôle */}
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => handlePoleCta(currentPole.code)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/40 transition-all hover:translate-x-1"
                >
                  <span>
                    {currentPole.code === 'SANTE_ANIMALE' ? 'Prendre RDV à la Clinique' :
                     currentPole.code === 'QHSE_RSE' ? 'Demander un Devis d\'Audit ISO' :
                     currentPole.code === 'FORMATION' ? 'Consulter le Programme de Formation' :
                     'Voir les Produits & Prestations'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onAction('contact')}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm border border-slate-700 transition-colors"
                >
                  <span>Poser une question technique</span>
                </button>
              </div>

            </div>

            {/* Colonne Droite : Carte récapitulative & Contact rapide */}
            <div className="lg:col-span-4 space-y-4">
              
              <div className="rounded-2xl bg-slate-800/80 border border-slate-700 p-6 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Engagement Qualité Pôle {currentPole.id}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Toutes les interventions de ce pôle sont supervisées par des praticiens et ingénieurs qualifiés sous le contrôle de la direction médicale et QHSE.
                </p>
                <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Localisation :</span>
                  <span className="font-bold text-white">Socoprise, Pointe-Noire</span>
                </div>
              </div>

              <div className="rounded-2xl bg-emerald-950/50 border border-emerald-800/60 p-6 space-y-3">
                <h4 className="text-sm font-bold text-emerald-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Besoin d'un accompagnement ?</span>
                </h4>
                <p className="text-xs text-emerald-100/80">
                  Notre équipe se déplace sur vos sites d'élevage ou dans vos usines agroalimentaires.
                </p>
                <button
                  onClick={() => onAction('contact')}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
                >
                  Prendre contact maintenant
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
