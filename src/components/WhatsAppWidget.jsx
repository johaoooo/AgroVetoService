import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import logoPng from '../assets/logo.png';

/**
 * Composant WhatsAppWidget (Bouton flottant & Discussion rapide)
 * - Canal prioritaire #1 de conversion au Congo
 * - Propose des messages pré-formatés pour un clic direct
 */
export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    { label: "🐣 Commande Poussins / Provende", text: "Bonjour, je souhaite commander des poussins d'un jour et des aliments." },
    { label: "🩺 Urgence / RDV Clinique Vétérinaire", text: "Bonjour Docteur, j'ai besoin d'une consultation vétérinaire urgente." },
    { label: "📊 Devis Conseil QHSE / Audit ISO", text: "Bonjour, mon entreprise souhaite obtenir un devis pour un audit QHSE." },
    { label: "🎓 Inscription à une Formation", text: "Bonjour, je souhaite des renseignements sur les prochaines formations en ferme-école." }
  ];

  const handleSendMessage = (text) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Fenêtre pop-up de discussion rapide */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* En-tête WhatsApp */}
          <div className="bg-emerald-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white p-0.5 shrink-0">
                <img src={logoPng} alt="AVS" className="w-full h-full object-contain rounded-full" />
              </div>
              <div>
                <h4 className="text-xs font-bold leading-tight">AGRO VÉTO SERVICES CONGO</h4>
                <p className="text-[10px] text-emerald-200 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                  En ligne • Réponse rapide
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-emerald-800 text-emerald-100 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Corps de discussion */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="p-3 bg-white rounded-2xl shadow-xs border border-slate-100 text-xs text-slate-700">
              👋 Bonjour ! Comment pouvons-nous vous accompagner aujourd'hui ? Choisissez un motif ci-dessous :
            </div>

            <div className="space-y-2 pt-1">
              {quickMessages.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(item.text)}
                  className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50 text-slate-800 text-xs font-semibold border border-slate-200 hover:border-emerald-500 transition-colors flex items-center justify-between group"
                >
                  <span>{item.label}</span>
                  <Send className="w-3 h-3 text-slate-400 group-hover:text-emerald-700 shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Pied */}
          <div className="p-3 bg-white border-t border-slate-100 text-center">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Bonjour%20AGRO%20VETO%20SERVICES`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-emerald-700 hover:underline font-bold"
            >
              Ou écrivez-nous un message libre ➔
            </a>
          </div>

        </div>
      )}

      {/* Bouton Rond Flottant */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 border-2 border-white focus:outline-none cursor-pointer"
        aria-label="Ouvrir WhatsApp"
        title="Discuter sur WhatsApp"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
      </button>

    </div>
  );
}
