import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { FacebookIcon, LinkedInIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from './SocialIcons';

/**
 * Composant ContactSection avec Teinte Douce (Off-White)
 */
export default function ContactSection({ showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Commande Poussins / Aliments Provenderie',
    message: ''
  });

  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let msg = `📩 *MESSAGE DE CONTACT - SITE WEB AVS CONGO*\n\n`;
    msg += `👤 *Nom :* ${formData.name}\n`;
    msg += `📞 *Téléphone :* ${formData.phone}\n`;
    msg += `✉️ *Email :* ${formData.email || 'Non précisé'}\n`;
    msg += `🎯 *Motif :* ${formData.subject}\n\n`;
    msg += `💬 *Message :*\n${formData.message}\n`;

    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');

    setIsSent(true);
    showToast("Votre message a été transmis à notre équipe !", "success");
  };

  return (
    <section id="contact" className="py-16 bg-[#edf2f6] dark:bg-[#0b0f17] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Restons en <span className="text-emerald-700 dark:text-emerald-400">Contact</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal">
            Une question sur nos poussins, une commande de provenderie ou un projet d'audit QHSE ? Nos spécialistes vous répondent rapidement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Colonne Gauche : Coordonnées & Réseaux Sociaux */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl bg-[#fafbfc] dark:bg-[#121824] p-7 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
                Siège Social & Coordonnées
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block mb-0.5">Adresse Officielle :</span>
                  <p className="text-slate-600 dark:text-slate-300">{COMPANY_INFO.address.full}</p>
                </div>

                <div>
                  <span className="font-bold text-slate-900 dark:text-white block mb-0.5">Téléphone & WhatsApp :</span>
                  <p className="text-slate-600 dark:text-slate-300">{COMPANY_INFO.phone}</p>
                </div>

                <div>
                  <span className="font-bold text-slate-900 dark:text-white block mb-0.5">Courriel Professionnel :</span>
                  <p className="text-slate-600 dark:text-slate-300">{COMPANY_INFO.email}</p>
                </div>

                <div>
                  <span className="font-bold text-slate-900 dark:text-white block mb-0.5">Horaires d'Ouverture :</span>
                  <p className="text-slate-600 dark:text-slate-300">{COMPANY_INFO.openingHours.weekdays}</p>
                  <p className="text-slate-600 dark:text-slate-300">{COMPANY_INFO.openingHours.saturday}</p>
                  <p className="text-emerald-700 dark:text-emerald-400 font-bold mt-1">{COMPANY_INFO.openingHours.emergencies}</p>
                </div>
              </div>

              {/* Bloc Réseaux Sociaux */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-900 dark:text-white block mb-2.5">
                  Suivez-nous sur les réseaux :
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={COMPANY_INFO.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-200/80 dark:bg-slate-800 hover:bg-[#1877F2] text-slate-700 dark:text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-xs"
                    title="Facebook"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={COMPANY_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-200/80 dark:bg-slate-800 hover:bg-[#0A66C2] text-slate-700 dark:text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-xs"
                    title="LinkedIn"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Bonjour%20AGRO%20VETO%20SERVICES`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-200/80 dark:bg-slate-800 hover:bg-[#25D366] text-slate-700 dark:text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-xs"
                    title="WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={COMPANY_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-200/80 dark:bg-slate-800 hover:bg-[#E4405F] text-slate-700 dark:text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-xs"
                    title="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={COMPANY_INFO.socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-200/80 dark:bg-slate-800 hover:bg-black text-slate-700 dark:text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-xs"
                    title="TikTok"
                  >
                    <TikTokIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Bonjour%20AGRO%20VETO%20SERVICES`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer"
              >
                Ouvrir une discussion WhatsApp
              </a>

            </div>

            <div className="rounded-3xl bg-slate-900 text-white p-6 border border-slate-800 space-y-2 shadow-sm">
              <span className="text-xs font-bold text-emerald-400 block uppercase tracking-wider">
                Localisation à Pointe-Noire
              </span>
              <p className="text-xs text-slate-300">
                Idéalement situé sur l'Avenue Nelson Mandela (Rue Bissoute), accessible facilement pour tous vos retraits d'intrants et consultations vétérinaires.
              </p>
            </div>

          </div>

          {/* Colonne Droite : Formulaire */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#fafbfc] dark:bg-[#121824] p-7 sm:p-9 border border-slate-200/90 dark:border-slate-800 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                Envoyez-nous un Message
              </h3>

              {isSent ? (
                <div className="text-center py-10 space-y-3">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Message Transmis !</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Notre équipe a bien reçu votre demande et vous recontactera rapidement.</p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="px-5 py-2.5 bg-slate-900 dark:bg-emerald-600 text-white text-xs font-bold rounded-xl cursor-pointer"
                  >
                    Envoyer un autre message
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
                        placeholder="Ex: Mme Ndoudi"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#f1f5f8] dark:bg-[#192233] border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:bg-white dark:focus:bg-[#192233] text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Téléphone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="Ex: +242 06 534 87 23"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#f1f5f8] dark:bg-[#192233] border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:bg-white dark:focus:bg-[#192233] text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Courriel (Optionnel)</label>
                      <input
                        type="email"
                        placeholder="contact@exemple.cg"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#f1f5f8] dark:bg-[#192233] border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:bg-white dark:focus:bg-[#192233] text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Objet de la demande *</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#f1f5f8] dark:bg-[#192233] border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:bg-white dark:focus:bg-[#192233] text-slate-900 dark:text-white"
                      >
                        <option value="Commande Poussins / Aliments Provenderie">Commande Poussins / Aliments Provenderie</option>
                        <option value="Rendez-vous Clinique Vétérinaire">Rendez-vous Clinique Vétérinaire</option>
                        <option value="Inscription Formations Pratiques">Inscription Formations Pratiques</option>
                        <option value="Demande d'Audit & Conseil QHSE">Demande d'Audit & Conseil QHSE</option>
                        <option value="Partenariat ou Autre demande">Partenariat ou Autre demande</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Votre Message détaillé *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Précisez votre besoin, vos quantités ou vos questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#f1f5f8] dark:bg-[#192233] border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:bg-white dark:focus:bg-[#192233] text-slate-900 dark:text-white resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-slate-900 dark:bg-emerald-600 hover:bg-emerald-700 dark:hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-xs cursor-pointer"
                  >
                    Envoyer via WhatsApp Direct
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
