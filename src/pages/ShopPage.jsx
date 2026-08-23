import React from 'react';
import ShopSection from '../components/ShopSection';
import { ShoppingBag, ShieldCheck, Truck, CreditCard } from 'lucide-react';

/**
 * Page Dédiée : Boutique & Approvisionnement en Intrants
 */
export default function ShopPage({ onAddToCart, setIsCartOpen }) {
  return (
    <div className="pt-28 pb-16 space-y-12">
      
      {/* En-tête de page épuré */}
      <div className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
            Approvisionnement Agropastoral Sécurisé
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Boutique & Intrants Vétérinaires
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Commandez vos poussins d'un jour, aliments provenderie certifiés, compléments nutritionnels et produits d'hygiène à Pointe-Noire.
          </p>
        </div>
      </div>

      {/* Rassurance de livraison & Mobile Money */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-200 text-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
            <div>
              <span className="font-bold text-slate-900 block">Intrants 100% Homologués</span>
              <p className="text-slate-500">Poussins vaccinés et formules testées en laboratoire</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Truck className="w-6 h-6 text-sky-600 shrink-0" />
            <div>
              <span className="font-bold text-slate-900 block">Livraison & Retrait Facile</span>
              <p className="text-slate-500">Retrait au siège (Socoprise) ou livraison sur site</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-amber-600 shrink-0" />
            <div>
              <span className="font-bold text-slate-900 block">Paiement Mobile Money</span>
              <p className="text-slate-500">MTN Mobile Money, Airtel Money ou espèces</p>
            </div>
          </div>
        </div>
      </div>

      {/* Catalogue complet */}
      <ShopSection onAddToCart={onAddToCart} setIsCartOpen={setIsCartOpen} />

    </div>
  );
}
