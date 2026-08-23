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
    <div className="pb-20 space-y-16 bg-[#f6f8fa]">
      
      {/* Hero avec photographie haute résolution */}
      <PageHero
        category="Soins Médicaux & Suivi Zootechnique"
        title="Clinique Vétérinaire & Pharmacie AVS"
        subtitle="Consultations, chirurgies, vaccinations, urgences 24h/24 & 7j/7 et suivi d'élevages agropastoraux à Pointe-Noire."
        image="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1920&q=80"
        breadcrumb={[{ label: 'Clinique Vétérinaire' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Bandeau d'Urgences 24/7 */}
        <div className="p-6 rounded-3xl bg-amber-50/80 border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-extrabold text-amber-950 text-base">
              Service d'Urgences Vétérinaires 24h/24 & 7j/7
            </h3>
            <p className="text-xs text-amber-900 mt-0.5">
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
            <h2 className="text-xl font-extrabold text-slate-900">
              Prestations Cliniques
            </h2>

            <div className="space-y-3">
              {CLINIC_SERVICES.map((srv) => (
                <div key={srv.id} className="p-4 rounded-2xl bg-[#fafbfc] border border-slate-200/90 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900 text-sm">{srv.name}</h4>
                    <span className="text-xs text-sky-700 font-semibold">{srv.duration}</span>
                  </div>
                  <p className="text-xs text-slate-500">{srv.description}</p>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-2 shadow-sm">
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
            <div className="rounded-3xl bg-[#fafbfc] border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-200">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border border-slate-300 shrink-0">
                  <img src={founderPhoto} alt={FOUNDER_DATA.name} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Formulaire de Prise de Rendez-vous
                  </h3>
                  <p className="text-xs text-slate-500">
                    Encadré par le {FOUNDER_DATA.name}
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-3">
                  <h4 className="text-lg font-bold text-slate-900">Demande de RDV Enregistrée !</h4>
                  <p className="text-xs text-slate-600">Notre équipe médicale vous contactera pour confirmer l'heure de passage.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl cursor-pointer"
                  >
                    Prendre un autre rendez-vous
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Votre Nom & Prénom *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: M. Jean"
                        value={bookingData.ownerName}
                        onChange={handleInputChange}
                        name="ownerName"
                        className="w-full px-3.5 py-2.5 bg-[#f1f5f8] border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Téléphone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+242 06 ..."
                        value={bookingData.phone}
                        onChange={handleInputChange}
                        name="phone"
                        className="w-full px-3.5 py-2.5 bg-[#f1f5f8] border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Type d'Animal / Cheptel *</label>
                      <select
                        name="animalType"
                        value={bookingData.animalType}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 bg-[#f1f5f8] border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-600 focus:bg-white"
                      >
                        <option value="Chien / Chiot">Chien / Chiot</option>
                        <option value="Chat / Chaton">Chat / Chaton</option>
                        <option value="Élevage de Volailles (Poulets / Pondeuses)">Élevage de Volailles</option>
                        <option value="Porcins / Porcs">Porcins / Porcs</option>
                        <option value="Petits Ruminants (Caprins, Ovins)">Caprins / Ovins</option>
                        <option value="Autre animal">Autre animal</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Prestation Souhaitée *</label>
                      <select
                        name="serviceId"
                        value={bookingData.serviceId}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 bg-[#f1f5f8] border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-600 focus:bg-white"
                      >
                        {CLINIC_SERVICES.map(srv => (
                          <option key={srv.id} value={srv.id}>
                            {srv.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Lieu du Rendez-vous</label>
                      <select
                        name="location"
                        value={bookingData.location}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 bg-[#f1f5f8] border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-600 focus:bg-white"
                      >
                        <option value="Clinique AVS (Socoprise, Pointe-Noire)">À la Clinique (Socoprise)</option>
                        <option value="Déplacement sur mon site d'élevage">Visite sur mon site d'élevage</option>
                        <option value="Consultation à domicile">Visite à domicile</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Date Souhaitée</label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={bookingData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 bg-[#f1f5f8] border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Symptômes ou Précisions</label>
                    <textarea
                      name="notes"
                      rows="3"
                      placeholder="Décrivez les symptômes ou vos attentes..."
                      value={bookingData.notes}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 bg-[#f1f5f8] border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-600 focus:bg-white"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-sm transition-all text-center cursor-pointer mt-2"
                  >
                    Envoyer ma Demande de Rendez-vous
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
