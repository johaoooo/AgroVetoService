import React, { useState } from 'react';
import { X, User, Phone, Lock, ShieldCheck } from 'lucide-react';

/**
 * Modale d'Authentification Ultra-Rapide (Formulaire Court & Efficace)
 * - 3 champs essentiels seulement : Nom, Téléphone/WhatsApp, Mot de passe
 */
export default function AuthModal({ isOpen, onClose, onLoginSuccess, showToast }) {
  const [isRegister, setIsRegister] = useState(true);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: ''
  });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      if (!formData.name.trim() || !formData.phone.trim() || !formData.password.trim()) {
        showToast("Veuillez renseigner votre nom, téléphone et mot de passe.", "warning");
        return;
      }

      const user = {
        id: 'usr_' + Date.now(),
        fullName: formData.name.trim(),
        phone: formData.phone.trim(),
        createdAt: new Date().toLocaleDateString('fr-FR')
      };

      try {
        localStorage.setItem('avs_user', JSON.stringify(user));
        onLoginSuccess(user);
        showToast(`Compte créé avec succès ! Bienvenue, ${user.fullName}.`, "success");
        onClose();
      } catch (err) {
        showToast("Erreur lors de l'enregistrement.", "error");
      }
    } else {
      if (!formData.phone.trim() || !formData.password.trim()) {
        showToast("Veuillez saisir votre téléphone et mot de passe.", "warning");
        return;
      }

      const user = {
        id: 'usr_logged',
        fullName: formData.name.trim() || 'Client AVS',
        phone: formData.phone.trim(),
        createdAt: '2026'
      };

      localStorage.setItem('avs_user', JSON.stringify(user));
      onLoginSuccess(user);
      showToast(`Connexion réussie ! Heureux de vous revoir.`, "success");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-[#fafbfc] dark:bg-[#121824] rounded-3xl max-w-sm w-full p-6 sm:p-7 shadow-2xl border border-slate-200 dark:border-slate-800 relative animate-in zoom-in-95">
        
        {/* Bouton Fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" strokeWidth={1.75} />
        </button>

        {/* En-tête court */}
        <div className="text-center mb-5 space-y-1">
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
            {isRegister ? 'Créer un Compte Express' : 'Connexion Espace Client'}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {isRegister ? 'Accédez au suivi de vos commandes et consultations.' : 'Entrez vos identifiants pour continuer.'}
          </p>
        </div>

        {/* Formulaire Ultra-Court */}
        <form onSubmit={handleSubmit} className="space-y-3 text-xs sm:text-sm">
          
          {isRegister && (
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Nom Complet ou Entreprise *</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" strokeWidth={1.75} />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Ex: Jean Makosso"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#f1f5f8] dark:bg-[#192233] border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:bg-white dark:focus:bg-[#192233] text-slate-900 dark:text-white text-xs"
                />
              </div>
            </div>
          )}

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Numéro WhatsApp / Téléphone *</label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" strokeWidth={1.75} />
              <input
                type="tel"
                name="phone"
                required
                placeholder="+242 06 ..."
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full pl-9 pr-3 py-2.5 bg-[#f1f5f8] dark:bg-[#192233] border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:bg-white dark:focus:bg-[#192233] text-slate-900 dark:text-white text-xs"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Mot de Passe *</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" strokeWidth={1.75} />
              <input
                type="password"
                name="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-9 pr-3 py-2.5 bg-[#f1f5f8] dark:bg-[#192233] border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:bg-white dark:focus:bg-[#192233] text-slate-900 dark:text-white text-xs"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm transition-all text-center cursor-pointer mt-2 shadow-xs"
          >
            {isRegister ? 'Créer mon Compte en 1 Clic' : 'Se Connecter'}
          </button>
        </form>

        {/* Toggle rapide Connexion / Inscription */}
        <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-center text-xs">
          {isRegister ? (
            <p className="text-slate-600 dark:text-slate-400">
              Déjà un compte ?{' '}
              <button
                type="button"
                onClick={() => setIsRegister(false)}
                className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline cursor-pointer"
              >
                Se connecter
              </button>
            </p>
          ) : (
            <p className="text-slate-600 dark:text-slate-400">
              Pas encore de compte ?{' '}
              <button
                type="button"
                onClick={() => setIsRegister(true)}
                className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline cursor-pointer"
              >
                Créer un compte
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
