import React, { useState } from 'react';
import { 
  Stethoscope, 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  User, 
  ShieldCheck, 
  Send,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { CLINIC_SERVICES, COMPANY_INFO, FOUNDER_DATA } from '../data/companyData';
import founderPhoto from '../assets/dr_poutya.jpeg';

/**
 * Composant ClinicBooking (Prise de Rendez-vous Clinique Vétérinaire)
 * - Intègre la photo et la réassurance du Dr POUTYA
 * - Prise en charge des animaux de compagnie et cheptels de ferme
 * - Choix du lieu (Clinique à Socoprise ou Déplacement sur site)
 */
export default function ClinicBooking({ isOpen, onClose, showToast }) {
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

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedService = CLINIC_SERVICES.find(s => s.id === bookingData.serviceId)?.name || 'Consultation';

    let message = `🩺 *PRISE DE RENDEZ-VOUS CLINIQUE VÉTÉRINAIRE - AVS CONGO*\n\n`;
    message += `👤 *Propriétaire :* ${bookingData.ownerName}\n`;
    message += `📞 *Téléphone :* ${bookingData.phone}\n`;
    message += `🐾 *Type d'animal :* ${bookingData.animalType} ${bookingData.animalName ? `(${bookingData.animalName})` : ''}\n`;
    message += `🩺 *Prestation :* ${selectedService}\n`;
    message += `📍 *Lieu :* ${bookingData.location}\n`;
    message += `📅 *Date souhaitée :* ${bookingData.preferredDate || 'Dès que possible'}\n`;
    message += `⏰ *Créneau :* ${bookingData.preferredTime}\n`;
    if (bookingData.notes) {
      message += `📝 *Symptômes / Précisions :* ${bookingData.notes}\n`;
    }

    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    showToast("Votre demande de rendez-vous a été transmise à la clinique !", "success");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 my-8">
        
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* En-tête avec vignette du Dr POUTYA */}
        <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-slate-100">
          <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 border-2 border-sky-600 shadow-md">
            <img 
              src={founderPhoto} 
              alt={FOUNDER_DATA.name} 
              className="w-full h-full object-cover object-top" 
            />
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white"></span>
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs text-sky-700 font-bold">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Clinique Vétérinaire AVS Congo</span>
            </div>
            <h3 className="text-lg font-black text-slate-900 leading-tight">
              Prendre Rendez-vous Médical
            </h3>
            <p className="text-[11px] text-slate-500">
              Supervisé par {FOUNDER_DATA.name}
            </p>
          </div>
        </div>

        {/* Alerte Urgences 24/7 */}
        <div className="mb-4 p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Urgence vitale immédiate ?</span> Contactez directement le service d'urgence vétérinaire au <span className="font-bold text-amber-950">{COMPANY_INFO.phone}</span>.
          </div>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs sm:text-sm">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Votre Nom & Prénom *</label>
              <input
                type="text"
                name="ownerName"
                required
                placeholder="Ex: M. Makosso"
                value={bookingData.ownerName}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-600 focus:bg-white"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Numéro WhatsApp / Appel *</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+242 06 ..."
                value={bookingData.phone}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-600 focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Type d'Animal / Cheptel *</label>
              <select
                name="animalType"
                value={bookingData.animalType}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-600 focus:bg-white"
              >
                <option value="Chien / Chiot">Chien / Chiot</option>
                <option value="Chat / Chaton">Chat / Chaton</option>
                <option value="Élevage de Volailles (Poulets / Pondeuses)">Élevage de Volailles</option>
                <option value="Porcins / Suidés">Porcins / Porcs</option>
                <option value="Petits Ruminants (Caprins, Ovins)">Caprins / Ovins</option>
                <option value="Autre animal">Autre animal</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Nom ou Effectif</label>
              <input
                type="text"
                name="animalName"
                placeholder="Ex: Max (ou 500 poulets)"
                value={bookingData.animalName}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-600 focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Motif de la Consultation *</label>
            <select
              name="serviceId"
              value={bookingData.serviceId}
              onChange={handleInputChange}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-600 focus:bg-white"
            >
              {CLINIC_SERVICES.map(srv => (
                <option key={srv.id} value={srv.id}>
                  {srv.name} ({srv.duration})
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Lieu du Rendez-vous</label>
              <select
                name="location"
                value={bookingData.location}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-600 focus:bg-white"
              >
                <option value="Clinique AVS (Socoprise, Pointe-Noire)">À la Clinique (Socoprise)</option>
                <option value="Déplacement vétérinaire sur site d'élevage">Visite sur mon site d'élevage</option>
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
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-600 focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Symptômes ou Précisions</label>
            <textarea
              name="notes"
              rows="2"
              placeholder="Décrivez les symptômes observés (fièvre, baisse de ponte, perte d'appétit, vaccin à renouveler)..."
              value={bookingData.notes}
              onChange={handleInputChange}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-600 focus:bg-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-sky-700 hover:bg-sky-800 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <Send className="w-4 h-4" />
            <span>Confirmer la Demande de Rendez-vous</span>
          </button>
        </form>

      </div>
    </div>
  );
}
