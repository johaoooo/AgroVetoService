import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  User, 
  ShoppingBag, 
  Stethoscope, 
  GraduationCap, 
  LogOut
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

/**
 * Page Dédiée : Espace Compte Client / Tableau de Bord
 */
export default function AccountPage({ currentUser, onLogout, onOpenAuthModal }) {
  const [activeTab, setActiveTab] = useState('orders');
  const navigate = useNavigate();

  if (!currentUser) {
    return (
      <div className="pt-36 pb-24 max-w-lg mx-auto px-4 text-center space-y-4">
        <div className="w-16 h-16 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto text-slate-500 dark:text-slate-400">
          <User className="w-8 h-8" strokeWidth={1.5} />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Espace Compte Non Connecté</h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Veuillez vous connecter ou créer un compte pour accéder à votre tableau de bord et vos commandes.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <button
            onClick={onOpenAuthModal}
            className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl cursor-pointer shadow-xs"
          >
            Se connecter / Créer un compte
          </button>
          <Link
            to="/"
            className="px-6 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs rounded-xl cursor-pointer"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const isCompany = currentUser.userType === 'company';

  return (
    <div className="pb-20 space-y-12 bg-[#f6f8fa] dark:bg-[#0b0f17] transition-colors">
      
      {/* En-tête du Tableau de Bord avec arrière-plan photo */}
      <div className="relative pt-32 pb-14 bg-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
            alt="Tableau de bord"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-extrabold text-xl shadow-lg shrink-0">
                {currentUser.fullName ? currentUser.fullName.charAt(0).toUpperCase() : 'U'}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                    {currentUser.fullName}
                  </h1>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                    {isCompany ? 'Compte Entreprise' : 'Compte Éleveur'}
                  </span>
                </div>
                {currentUser.companyName && (
                  <p className="text-xs text-amber-300 mt-0.5">{currentUser.companyName}</p>
                )}
                <p className="text-xs text-slate-400 mt-0.5">
                  Membre depuis {currentUser.createdAt || '2026'} • Pointe-Noire (Congo)
                </p>
              </div>
            </div>

            <button
              onClick={onLogout}
              className="self-start sm:self-auto flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-red-900/40 text-slate-300 hover:text-red-300 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" strokeWidth={1.75} />
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Colonne Gauche : Navigation */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl bg-[#fafbfc] dark:bg-[#121824] border border-slate-200/90 dark:border-slate-800 p-5 shadow-xs space-y-2">
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'orders'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800'
                }`}
              >
                <ShoppingBag className="w-4 h-4" strokeWidth={1.75} />
                <span>Mes Commandes & Intrants</span>
              </button>

              <button
                onClick={() => setActiveTab('appointments')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'appointments'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800'
                }`}
              >
                <Stethoscope className="w-4 h-4" strokeWidth={1.75} />
                <span>Suivi Vétérinaire & RDV</span>
              </button>

              <button
                onClick={() => setActiveTab('trainings')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'trainings'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800'
                }`}
              >
                <GraduationCap className="w-4 h-4" strokeWidth={1.75} />
                <span>Formations & Attestations</span>
              </button>

              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'profile'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800'
                }`}
              >
                <User className="w-4 h-4" strokeWidth={1.75} />
                <span>Mes Informations</span>
              </button>
            </div>

            {/* Assistance directe */}
            <div className="rounded-3xl bg-slate-900 text-white p-6 border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-emerald-400 block uppercase tracking-wider">
                Support Dédié AVS
              </span>
              <p className="text-xs text-slate-300">
                Une question sur une commande ou un suivi vétérinaire ?
              </p>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Bonjour%20mon%20nom%20est%20${encodeURIComponent(currentUser.fullName)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
              >
                Contacter un conseiller
              </a>
            </div>
          </div>

          {/* Colonne Droite : Contenu de l'Onglet */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl bg-[#fafbfc] dark:bg-[#121824] border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-xs min-h-[400px]">
              
              {/* Onglet 1 : Commandes */}
              {activeTab === 'orders' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Historique des Commandes</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Retrouvez le suivi de vos approvisionnements et livraisons.</p>
                    </div>
                    <Link
                      to="/boutique"
                      className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-emerald-600 text-white text-xs font-bold hover:bg-slate-800 dark:hover:bg-emerald-500 transition-colors cursor-pointer"
                    >
                      Commander en boutique
                    </Link>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#f1f5f8] dark:bg-[#192233] border border-slate-200 dark:border-slate-800 text-center space-y-3">
                    <ShoppingBag className="w-8 h-8 text-slate-400 dark:text-slate-500 mx-auto" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Aucune commande en attente</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Vos prochaines commandes validées sur WhatsApp apparaîtront ici.</p>
                    </div>
                    <Link
                      to="/boutique"
                      className="inline-block text-xs font-bold text-emerald-800 dark:text-emerald-400 hover:underline cursor-pointer"
                    >
                      Commander des poussins ou aliments de provenderie →
                    </Link>
                  </div>
                </div>
              )}

              {/* Onglet 2 : Rendez-vous Clinique */}
              {activeTab === 'appointments' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Suivi Vétérinaire & RDV</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Consultations, calendrier vaccinal et visites de cheptel.</p>
                    </div>
                    <Link
                      to="/clinique"
                      className="px-4 py-2 rounded-xl bg-sky-700 text-white text-xs font-bold hover:bg-sky-800 transition-colors cursor-pointer"
                    >
                      Nouveau Rendez-vous
                    </Link>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#f1f5f8] dark:bg-[#192233] border border-slate-200 dark:border-slate-800 text-center space-y-3">
                    <Stethoscope className="w-8 h-8 text-slate-400 dark:text-slate-500 mx-auto" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Aucun rendez-vous planifié</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Prenez rendez-vous à la clinique Socoprise ou sur exploitation.</p>
                    </div>
                    <Link
                      to="/clinique"
                      className="inline-block text-xs font-bold text-sky-800 dark:text-sky-400 hover:underline cursor-pointer"
                    >
                      Planifier une consultation vétérinaire →
                    </Link>
                  </div>
                </div>
              )}

              {/* Onglet 3 : Formations */}
              {activeTab === 'trainings' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Formations & Fermes-Écoles</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Sessions pratiques certifiantes et attestations officielles.</p>
                    </div>
                    <Link
                      to="/formations"
                      className="px-4 py-2 rounded-xl bg-indigo-700 text-white text-xs font-bold hover:bg-indigo-800 transition-colors cursor-pointer"
                    >
                      Voir les sessions
                    </Link>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#f1f5f8] dark:bg-[#192233] border border-slate-200 dark:border-slate-800 text-center space-y-3">
                    <GraduationCap className="w-8 h-8 text-slate-400 dark:text-slate-500 mx-auto" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Aucune formation en cours</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Consultez le calendrier des prochaines sessions certifiantes.</p>
                    </div>
                    <Link
                      to="/formations"
                      className="inline-block text-xs font-bold text-indigo-800 dark:text-indigo-400 hover:underline cursor-pointer"
                    >
                      Découvrir le catalogue des formations →
                    </Link>
                  </div>
                </div>
              )}

              {/* Onglet 4 : Informations du Profil */}
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Coordonnées du Compte</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Vos coordonnées utilisées pour la livraison et la facturation.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="p-4 rounded-2xl bg-[#f1f5f8] dark:bg-[#192233] border border-slate-200 dark:border-slate-800 space-y-1">
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold block">Nom Complet</span>
                      <span className="font-bold text-slate-900 dark:text-white">{currentUser.fullName}</span>
                    </div>

                    {currentUser.companyName && (
                      <div className="p-4 rounded-2xl bg-[#f1f5f8] dark:bg-[#192233] border border-slate-200 dark:border-slate-800 space-y-1">
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold block">Nom de l'Entreprise</span>
                        <span className="font-bold text-slate-900 dark:text-white">{currentUser.companyName}</span>
                      </div>
                    )}

                    <div className="p-4 rounded-2xl bg-[#f1f5f8] dark:bg-[#192233] border border-slate-200 dark:border-slate-800 space-y-1">
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold block">Téléphone / WhatsApp</span>
                      <span className="font-bold text-slate-900 dark:text-white">{currentUser.phone}</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#f1f5f8] dark:bg-[#192233] border border-slate-200 dark:border-slate-800 space-y-1">
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold block">Adresse Email</span>
                      <span className="font-bold text-slate-900 dark:text-white">{currentUser.email || 'Non renseignée'}</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#f1f5f8] dark:bg-[#192233] border border-slate-200 dark:border-slate-800 space-y-1">
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold block">Ville / Localisation</span>
                      <span className="font-bold text-slate-900 dark:text-white">{currentUser.city || 'Pointe-Noire'}</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#f1f5f8] dark:bg-[#192233] border border-slate-200 dark:border-slate-800 space-y-1">
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold block">Type de Compte</span>
                      <span className="font-bold text-emerald-800 dark:text-emerald-400">
                        {isCompany ? 'Entreprise / PME (B2B)' : 'Éleveur / Particulier'}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Pour modifier vos informations officielles ou transférer votre compte, contactez la direction AVS Congo.
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
