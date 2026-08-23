import React, { useState } from 'react';
import { CLINIC_SERVICES, COMPANY_INFO, FOUNDER_DATA } from '../data/companyData';
import founderPhoto from '../assets/dr_poutya.jpeg';

import PageHero from '../components/PageHero';

/**
 * Page Dédiée : Clinique Vétérinaire (Teinte Douce & Reposante)
 */
export default function ClinicPage({ showToast }) {
  const [bookingData, setBookingData] = useState({
    ownerName: '',
    phone: '',
    animalType: 'Chien / Chiot',
    animalName: '',
    serviceId: 'CONSULT',
    location: 'Clinique AVS (Socoprise, Pointe-Noire)',
    preferredDate: '',
    preferredTime: 'Matin (08h30 - 12h00)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedService = CLINIC_SERVICES.find(s => s.id === bookingData.serviceId)?.name || 'Consultation';

    let message = `🩺 *PRISE DE RENDEZ-VOUS CLINIQUE VÉTÉRINAIRE - AVS CONGO*\n\n`;
    message += `👤 *Propriétaire :* ${bookingData.ownerName}\n`;
    message += `📞 *Téléphone :* ${bookingData.phone}\n`;
    message += `🐾 *Animal :* ${bookingData.animalType} ${bookingData.animalName ? `(${bookingData.animalName})` : ''}\n`;
    message += `🩺 *Prestation :* ${selectedService}\n`;
    message += `📍 *Lieu :* ${bookingData.location}\n`;
    message += `📅 *Date souhaitée :* ${bookingData.preferredDate || 'Dès que possible'}\n`;
    message += `⏰ *Créneau :* ${bookingData.preferredTime}\n`;
    if (bookingData.notes) {
      message += `📝 *Symptômes :* ${bookingData.notes}\n`;
    }

    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    showToast("Votre demande de rendez-vous a été transmise à la clinique !", "success");
  };

  return (
    <div className="pb-20 space-y-16 bg-[#f6f8fa] dark:bg-[#0b0f17] transition-colors">
      
      {/* Hero avec photographie haute résolution */}
      <PageHero
        title="Clinique Vétérinaire & Pharmacie AVS"
        subtitle="Consultations, chirurgies, vaccinations, urgences 24h/24 & 7j/7 et suivi d'élevages agropastoraux à Pointe-Noire."
        image="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1920&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Bandeau d'Urgences 24/7 */}
        <div className="p-6 rounded-3xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-extrabold text-amber-950 dark:text-amber-300 text-base">
              Service d'Urgences Vétérinaires 24h/24 & 7j/7
            </h3>
            <p className="text-xs text-amber-900 dark:text-amber-200/80 mt-0.5">
              Intervention rapide en clinique ou déplacement d'urgence sur exploitation.
            </p>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs shrink-0"
          >
            Appel d'Urgence : {COMPANY_INFO.phone}
          </a>
        </div>

        {/* Grille : Services et Formulaire */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Colonne Gauche : Liste des prestations médicales */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
              Prestations Cliniques
            </h2>

            <div className="space-y-3">
              {CLINIC_SERVICES.map((srv) => (
                <div key={srv.id} className="p-4 rounded-2xl bg-[#fafbfc] dark:bg-[#121824] border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{srv.name}</h4>
                    <span className="text-xs text-sky-700 dark:text-sky-400 font-semibold">{srv.duration}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{srv.description}</p>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-2 shadow-sm border border-slate-800">
              <span className="text-xs font-bold text-emerald-400 block uppercase tracking-wider">
                Adresse & Horaires
              </span>
              <p className="text-xs text-slate-300">
                Quartier Socoprise, Avenue Nelson Mandela, Rue Bissoute, Pointe-Noire.
              </p>
              <p className="text-xs text-slate-400">
                {COMPANY_INFO.openingHours.weekdays} • {COMPANY_INFO.openingHours.saturday}
              </p>
            </div>
          </div>

          {/* Colonne Droite : Formulaire interactif */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#fafbfc] dark:bg-[#121824] border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 shrink-0">
                  <img src={FOUNDER_DATA.photo || founderPhoto} alt={FOUNDER_DATA.name} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Formulaire de Prise de Rendez-vous
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Encadré par le {FOUNDER_DATA.name}
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-3">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Demande de RDV Enregistrée !</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Notre équipe médicale vous contactera pour confirmer l'heure de passage.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 bg-slate-900 dark:bg-emerald-600 text-white text-xs font-bold rounded-xl cursor-pointer"
                  >
                    Prendre un autre rendez-vous
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Votre Nom & Prénom *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: M. Makosso"
                        value={bookingData.ownerName}
                        onChange={handleInputChange}
                        name="ownerName"
                        className="w-full px-3.5 py-2.5 bg-[#f1f5f8] dark:bg-[#192233] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-sky-600 focus:bg-white dark:focus:bg-[#192233]"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Téléphone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="Ex: +242 06 534 87 23"
                        value={bookingData.phone}
                        onChange={handleInputChange}
                        name="phone"
                        className="w-full px-3.5 py-2.5 bg-[#f1f5f8] dark:bg-[#192233] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-sky-600 focus:bg-white dark:focus:bg-[#192233]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Type d'animal / Espèce *</label>
                      <select
                        name="animalType"
                        value={bookingData.animalType}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 bg-[#f1f5f8] dark:bg-[#192233] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-sky-600 focus:bg-white dark:focus:bg-[#192233]"
                      >
                        <option value="Chien / Chiot">Chien / Chiot</option>
                        <option value="Chat / Chaton">Chat / Chaton</option>
                        <option value="Élevage Avicole (Poussins/Poulets)">Élevage Avicole (Poussins/Poulets)</option>
                        <option value="Élevage Porcin">Élevage Porcin</option>
                        <option value="Petits Ruminants (Chèvres, Moutons)">Petits Ruminants (Chèvres, Moutons)</option>
                        <option value="Autre animal">Autre animal</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Nom ou identification de l'animal</label>
                      <input
                        type="text"
                        name="animalName"
                        placeholder="Ex: Rocky, Lot n°12..."
                        value={bookingData.animalName}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 bg-[#f1f5f8] dark:bg-[#192233] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-sky-600 focus:bg-white dark:focus:bg-[#192233]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Motif de consultation *</label>
                      <select
                        name="serviceId"
                        value={bookingData.serviceId}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 bg-[#f1f5f8] dark:bg-[#192233] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-sky-600 focus:bg-white dark:focus:bg-[#192233]"
                      >
                        {CLINIC_SERVICES.map(srv => (
                          <option key={srv.id} value={srv.id}>
                            {srv.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Lieu souhaité *</label>
                      <select
                        name="location"
                        value={bookingData.location}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 bg-[#f1f5f8] dark:bg-[#192233] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-sky-600 focus:bg-white dark:focus:bg-[#192233]"
                      >
                        <option value="Clinique AVS (Socoprise, Pointe-Noire)">Clinique AVS (Socoprise, Pointe-Noire)</option>
                        <option value="Déplacement vétérinaire sur site / à domicile">Déplacement vétérinaire sur site / à domicile</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Symptômes ou précisions</label>
                    <textarea
                      name="notes"
                      rows="3"
                      placeholder="Décrivez les signes observés ou vos besoins particuliers..."
                      value={bookingData.notes}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 bg-[#f1f5f8] dark:bg-[#192233] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-sky-600 focus:bg-white dark:focus:bg-[#192233] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-slate-900 dark:bg-emerald-600 hover:bg-emerald-700 dark:hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-xs cursor-pointer"
                  >
                    Confirmer la demande de RDV via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
