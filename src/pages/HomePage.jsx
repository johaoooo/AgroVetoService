import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import QuickActions from '../components/QuickActions';
import WhyChooseUs from '../components/WhyChooseUs';
import { POLES, PRODUCTS_CATALOG, FOUNDER_DATA } from '../data/companyData';
import founderPhoto from '../assets/dr_poutya.jpeg';

/**
 * Page d'Accueil Principale Multi-Pages
 */
export default function HomePage({ onAddToCart, setIsCartOpen }) {
  const featuredProducts = PRODUCTS_CATALOG.slice(0, 4);
  const navigate = useNavigate();

  return (
    <div className="space-y-16 pb-16 bg-[#f6f8fa] dark:bg-[#0b0f17] transition-colors">
      
      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* 2. Cartes d'accès rapide aux autres pages */}
      <QuickActions />

      {/* 3. Pourquoi Nous Choisir ? */}
      <WhyChooseUs />

      {/* 4. Aperçu des 6 Pôles d'Activités */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Nos Pôles d'Activités & d'Expertise
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
              Une chaîne de valeur intégrée de la santé animale à la conformité industrielle.
            </p>
          </div>
          <Link
            to="/poles"
            className="text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 font-bold text-sm cursor-pointer"
          >
            Voir les 6 pôles en détail →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POLES.map((pole) => (
            <div
              key={pole.id}
              onClick={() => navigate('/poles')}
              className="p-6 rounded-3xl bg-[#fafbfc] dark:bg-[#121824] border border-slate-200/90 dark:border-slate-800 hover:border-emerald-500 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 block mb-2">Pôle 0{pole.id}</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {pole.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4">
                  {pole.shortDesc}
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                Découvrir ce pôle →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Aperçu Boutique E-Commerce */}
      <section className="bg-[#edf2f6] dark:bg-[#0f141d] py-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-slate-300/80 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Intrants & Produits Phares
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                Poussins d'un jour, aliments provenderie et produits d'hygiène disponibles à Pointe-Noire.
              </p>
            </div>
            <Link
              to="/boutique"
              className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 dark:hover:bg-emerald-500 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
            >
              Accéder à la boutique complète
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-3xl bg-[#fafbfc] dark:bg-[#121824] border border-slate-200/90 dark:border-slate-800 p-5 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="aspect-16/11 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 mb-4 shadow-2xs">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover brightness-100 contrast-105 hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase block mb-1">
                    {product.categoryLabel}
                  </span>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2 line-clamp-2">{product.name}</h4>
                  <p className="text-base font-black text-slate-900 dark:text-white mb-4">
                    {product.price.toLocaleString('fr-FR')} <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">FCFA</span>
                  </p>
                </div>
                <button
                  onClick={() => {
                    onAddToCart(product);
                    setIsCartOpen(true);
                  }}
                  className="w-full py-2.5 rounded-xl bg-emerald-100/80 dark:bg-emerald-950/60 hover:bg-emerald-700 dark:hover:bg-emerald-600 hover:text-white text-emerald-900 dark:text-emerald-300 font-bold text-xs transition-all text-center cursor-pointer shadow-2xs"
                >
                  Ajouter au panier
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bloc Direction & Fondatrice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl border border-slate-800">
          <div className="lg:col-span-4">
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl">
              <img 
                src={founderPhoto} 
                alt={FOUNDER_DATA.name} 
                className="w-full h-full object-cover object-top brightness-105 contrast-105" 
              />
            </div>
          </div>
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              Mot de la Direction
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {FOUNDER_DATA.name}
            </h3>
            <p className="text-xs text-emerald-400 font-semibold">
              Médecin Vétérinaire & Spécialiste en Management QHSE
            </p>
            <p className="text-slate-300 text-sm italic leading-relaxed">
              {FOUNDER_DATA.quote}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/a-propos"
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all cursor-pointer shadow-md"
              >
                Lire la biographie complète
              </Link>
              <Link
                to="/contact"
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-all cursor-pointer border border-slate-700"
              >
                Contacter le cabinet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Appel à l'action final */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center space-y-5 shadow-xl border border-slate-800">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Bâtissons Ensemble Votre Réussite Agropastorale & QHSE
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Que vous soyez éleveur, responsable d'entreprise ou apprenant, nos spécialistes sont à votre écoute à Pointe-Noire.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/devis-qhse"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-md"
            >
              Demander un devis d'audit
            </Link>
            <Link
              to="/clinique"
              className="px-6 py-3.5 rounded-xl bg-slate-800 text-white font-semibold text-xs sm:text-sm hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer"
            >
              Prendre RDV Clinique Vétérinaire
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
