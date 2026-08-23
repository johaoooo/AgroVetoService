import React, { useState } from 'react';
import { TRAINING_MODULES, COMPANY_INFO } from '../data/companyData';
import { X } from 'lucide-react';

/**
 * Composant TrainingSection (Centre de Formation Minimaliste)
 */
export default function TrainingSection({ showToast }) {
  const [selectedModule, setSelectedModule] = useState(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [regData, setRegData] = useState({
    name: '',
    phone: '',
    email: '',
    participantsCount: '1',
    notes: ''
  });

  const handleOpenRegister = (module) => {
    setSelectedModule(module);
    setIsRegisterOpen(true);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!selectedModule) return;

    let message = `🎓 *INSCRIPTION FORMATION - AVS CONGO*\n\n`;
    message += `📚 *Module :* ${selectedModule.title}\n`;
    message += `👤 *Candidat :* ${regData.name}\n`;
    message += `📞 *Téléphone :* ${regData.phone}\n`;
    message += `✉️ *Email :* ${regData.email || 'Non renseigné'}\n`;
    message += `👥 *Nombre :* ${regData.participantsCount}\n`;
    message += `📅 *Session :* ${selectedModule.nextSession}\n`;
    message += `💰 *Tarif :* ${selectedModule.price}\n`;
    if (regData.notes) {
      message += `📝 *Notes :* ${regData.notes}\n`;
    }

    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    showToast("Votre pré-inscription a été envoyée avec succès !", "success");
    setIsRegisterOpen(false);
  };

  return (
    <section id="training" className="py-16 bg-slate-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Formations Pratiques & Fermes-Écoles
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Apprenez sur le terrain avec des vétérinaires, formulateurs et experts QHSE certifiés. Des programmes axés sur la rentabilité et l'autonomie.
          </p>
        </div>

        {/* Grille des modules de formation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {TRAINING_MODULES.map((module) => (
            <div
              key={module.id}
              className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200 shadow-xs hover:border-indigo-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">
                    {module.category}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    {module.duration.split('-')[0]}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-3 leading-snug">
                  {module.title}
                </h3>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 mb-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Prochaine session :</span>
                    <span className="font-bold text-indigo-900">{module.nextSession}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Public cible :</span>
                    <span className="font-medium text-slate-800">{module.target}</span>
                  </div>
                </div>

                {/* Programme synthétique */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Compétences visées :
                  </h4>
                  <ul className="space-y-1.5">
                    {module.modulesCovered.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="text-indigo-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tarif et Inscription */}
              <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Investissement</span>
                  <span className="text-xl font-black text-slate-900">{module.price}</span>
                </div>

                <button
                  onClick={() => handleOpenRegister(module)}
                  className="px-6 py-3 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer text-center"
                >
                  S'inscrire à cette session
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* MODALE D'INSCRIPTION */}
      {isRegisterOpen && selectedModule && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 my-8">
            
            <button
              onClick={() => setIsRegisterOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-5 pb-3 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900">
                Pré-inscription à la formation
              </h3>
              <p className="text-xs text-slate-500 truncate max-w-xs mt-0.5">
                {selectedModule.title}
              </p>
            </div>

            <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl mb-4 text-xs text-indigo-900 space-y-1">
              <p className="font-bold">Session : {selectedModule.nextSession}</p>
              <p>Tarif : {selectedModule.price} (Certificat délivré)</p>
            </div>

            <form onSubmit={handleRegisterSubmit} className="space-y-3.5 text-xs sm:text-sm">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Nom & Prénom *</label>
                <input
                  type="text"
                  required
                  placeholder="Votre nom complet"
                  value={regData.name}
                  onChange={(e) => setRegData({ ...regData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Téléphone / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="+242 06 ..."
                  value={regData.phone}
                  onChange={(e) => setRegData({ ...regData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Adresse Email</label>
                <input
                  type="email"
                  placeholder="votre.email@exemple.com"
                  value={regData.email}
                  onChange={(e) => setRegData({ ...regData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Nombre de personnes</label>
                <select
                  value={regData.participantsCount}
                  onChange={(e) => setRegData({ ...regData, participantsCount: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                >
                  <option value="1">1 participant</option>
                  <option value="2 à 4">2 à 4 participants</option>
                  <option value="5 et plus">5 participants et plus (Groupe)</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Remarques ou Attentes</label>
                <textarea
                  rows="2"
                  placeholder="Précisez votre niveau ou vos attentes spécifiques..."
                  value={regData.notes}
                  onChange={(e) => setRegData({ ...regData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-sm transition-all text-center cursor-pointer mt-2"
              >
                Confirmer ma Pré-inscription
              </button>
            </form>

          </div>
        </div>
      )}
    </section>
  );
}
