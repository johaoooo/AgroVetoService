import React from 'react';
import ShopSection from '../components/ShopSection';
import { ShoppingBag, ShieldCheck, Truck, CreditCard } from 'lucide-react';

import PageHero from '../components/PageHero';

/**
 * Page Dédiée : Boutique & Approvisionnement en Intrants
 */
export default function ShopPage({ onAddToCart, setIsCartOpen }) {
  return (
    <div className="pb-16 space-y-12 bg-white dark:bg-[#0b0f17] transition-colors">
      
      {/* Hero avec photographie haute résolution */}
      <PageHero
        title="Boutique & Intrants Vétérinaires"
        subtitle="Commandez vos poussins d'un jour Cobb 500, aliments provenderie certifiés, compléments nutritionnels et produits d'hygiène à Pointe-Noire."
        image="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Rassurance de livraison & Mobile Money */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-3xl bg-slate-50 dark:bg-[#121824] border border-slate-200 dark:border-slate-800 text-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">Intrants 100% Homologués</span>
              <p className="text-slate-500 dark:text-slate-400">Poussins vaccinés et formules testées en laboratoire</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Truck className="w-6 h-6 text-sky-600 dark:text-sky-400 shrink-0" />
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">Livraison & Retrait Facile</span>
              <p className="text-slate-500 dark:text-slate-400">Retrait au siège (Socoprise) ou livraison sur site</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0" />
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">Paiement Mobile Money</span>
              <p className="text-slate-500 dark:text-slate-400">MTN Mobile Money, Airtel Money ou espèces</p>
            </div>
          </div>
        </div>
      </div>

      {/* Catalogue complet */}
      <ShopSection onAddToCart={onAddToCart} setIsCartOpen={setIsCartOpen} />

    </div>
  );
}
