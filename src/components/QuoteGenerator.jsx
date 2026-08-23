import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';

/**
 * Composant QuoteGenerator (Générateur de Devis QHSE Épuré)
 * - Suppression des icônes pour un aspect formulaire B2B ultra-professionnel
 */
export default function QuoteGenerator({ showToast }) {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    sector: 'Agroalimentaire & Transformation',
    companySize: '11 - 50 salariés',
    servicesRequested: ['Offre « QHSE Partagé » (Externalisation PME)'],
    description: '',
    urgency: 'Dans les 30 jours'
  });

  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    'Offre « QHSE Partagé » (Externalisation PME)',
    'Accompagnement ISO 9001 (Système de Management de la Qualité)',
    'Accompagnement ISO 14001 (Management Environnemental)',
    'Accompagnement ISO 45001 (Santé & Sécurité au Travail)',
    'Audit HACCP & ISO 22000 (Sécurité des Aliments)',
    'Étude d\'Impact Environnemental & RSE',
    'Élaboration du Document Unique des Risques (DUERP)',
    'Formation Spécifique Intra-Entreprise'
  ];

  const handleCheckboxChange = (service) => {
    setFormData((prev) => {
      const exists = prev.servicesRequested.includes(service);
      const updated = exists
        ? prev.servicesRequested.filter((s) => s !== service)
        : [...prev.servicesRequested, service];
      return { ...prev, servicesRequested: updated };
    });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.servicesRequested.length === 0) {
      showToast("Veuillez sélectionner au moins une prestation QHSE.", "warning");
      return;
    }

    let message = `📊 *DEMANDE DE DEVIS QHSE / AUDIT - AVS CONGO*\n\n`;
    message += `🏢 *Entreprise :* ${formData.companyName}\n`;
    message += `👤 *Contact :* ${formData.contactPerson}\n`;
    message += `📞 *Téléphone :* ${formData.phone}\n`;
    message += `✉️ *Email :* ${formData.email}\n`;
    message += `🏭 *Secteur :* ${formData.sector}\n`;
    message += `👥 *Effectif :* ${formData.companySize}\n`;
    message += `⏱️ *Délai souhaité :* ${formData.urgency}\n\n`;
    message += `🎯 *PRESTATIONS :*\n`;
    formData.servicesRequested.forEach((srv) => {
      message += `• ${srv}\n`;
    });
    if (formData.description) {
      message += `\n📝 *Précisions :*\n${formData.description}\n`;
    }

    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    showToast("Votre demande de devis a été transmise à la Direction QHSE !", "success");
  };

  return (
    <section id="quote" className="py-16 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section sobre */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
            Pôle B2B & Conseil Entreprises
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Demande de Devis QHSE & Audits ISO
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal">
            PME, industries ou institutions : bénéficiez d'un diagnostic d'experts certifiés sous la supervision du Dr POUTYA SAIZONOU.
          </p>
        </div>

        {/* Formulaire */}
        <div className="max-w-4xl mx-auto bg-slate-800 rounded-3xl p-6 sm:p-10 border border-slate-700 shadow-xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <h3 className="text-2xl font-bold text-white">Demande de Devis Transmise</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Notre pôle Management QHSE étudie votre demande et vous transmettra une proposition technique et financière sous 24h à 48h.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs cursor-pointer"
              >
                Soumettre une autre demande
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Étape 1 */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider border-b border-slate-700 pb-2">
                  1. Identité de l'Entreprise
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-300 font-semibold block mb-1.5">
                      Nom de la Société / Organisation *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      placeholder="Ex: Entreprise Agro..."
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 font-semibold block mb-1.5">
                      Nom & Fonction du Contact *
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      required
                      placeholder="Ex: M. Dupont - Responsable QHSE"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 font-semibold block mb-1.5">
                      Téléphone / WhatsApp Professionnel *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+242 06 ..."
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 font-semibold block mb-1.5">
                      Adresse Email Professionnelle *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="contact@entreprise.cg"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 font-semibold block mb-1.5">
                      Secteur d'Activité
                    </label>
                    <select
                      name="sector"
                      value={formData.sector}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="Agroalimentaire & Transformation">Agroalimentaire & Transformation</option>
                      <option value="Élevage & Production Animale">Élevage & Production Animale</option>
                      <option value="Pétrole, Gaz & Mines">Pétrole, Gaz & Mines</option>
                      <option value="Hôtellerie & Restauration">Hôtellerie & Restauration</option>
                      <option value="BTP, Transport & Logistique">BTP, Transport & Logistique</option>
                      <option value="Santé, Pharmaceutique & Cosmétique">Santé & Cosmétique</option>
                      <option value="Autre secteur">Autre secteur</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 font-semibold block mb-1.5">
                      Taille de l'Effectif
                    </label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="1 à 10 salariés (TPE)">1 à 10 salariés (TPE)</option>
                      <option value="11 à 50 salariés (PME)">11 à 50 salariés (PME)</option>
                      <option value="51 à 250 salariés (Moyenne Entreprise)">51 à 250 salariés (Moyenne Entreprise)</option>
                      <option value="Plus de 250 salariés (Grand Groupe)">Plus de 250 salariés (Grand Groupe)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Étape 2 */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider border-b border-slate-700 pb-2">
                  2. Prestations QHSE & Audits Souhaités
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {availableServices.map((service, idx) => {
                    const isChecked = formData.servicesRequested.includes(service);
                    return (
                      <label
                        key={idx}
                        className={`flex items-start gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-emerald-950/60 border-emerald-500 text-white'
                            : 'bg-slate-900/50 border-slate-700 text-slate-300 hover:bg-slate-900'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCheckboxChange(service)}
                          className="mt-1 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                        />
                        <span className="text-xs sm:text-sm font-medium">
                          {service}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Étape 3 */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider border-b border-slate-700 pb-2">
                  3. Détails du Projet
                </h3>

                <textarea
                  name="description"
                  rows="3"
                  placeholder="Décrivez brièvement vos attentes ou vos objectifs de mise en conformité..."
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base transition-all text-center cursor-pointer"
                >
                  Envoyer la Demande de Devis Express
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-2">
                  Réponse garantie sous 24h à 48h par le pôle QHSE d'AGRO VÉTO SERVICES CONGO.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
