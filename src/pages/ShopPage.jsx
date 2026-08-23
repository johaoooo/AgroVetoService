import React from 'react';
import ShopSection from '../components/ShopSection';
import { ShoppingBag, ShieldCheck, Truck, CreditCard } from 'lucide-react';

import PageHero from '../components/PageHero';

/**
 * Page Dédiée : Boutique & Approvisionnement en Intrants
 */
export default function ShopPage({ onAddToCart, setIsCartOpen }) {
  return (
    <div className="pb-16 space-y-12 bg-white">
      
      {/* Hero avec photographie haute résolution */}
      <PageHero
        category="Approvisionnement Agropastoral Sécurisé"
        title="Boutique & Intrants Vétérinaires"
        subtitle="Commandez vos poussins d'un jour Cobb 500, aliments provenderie certifiés, compléments nutritionnels et produits d'hygiène à Pointe-Noire."
        image="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1920&q=80"
        breadcrumb={[{ label: 'Boutique & Intrants' }]}
      />

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
