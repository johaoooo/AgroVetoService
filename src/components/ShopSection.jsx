import React, { useState } from 'react';
import { PRODUCTS_CATALOG } from '../data/companyData';
import { X, Search } from 'lucide-react';

/**
 * Composant ShopSection avec Images Produits Nettes et Bien Visibles
 */
export default function ShopSection({ onAddToCart, setIsCartOpen }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);
  const [addedProductId, setAddedProductId] = useState(null);

  const categories = [
    { id: 'all', label: 'Tous les Produits' },
    { id: 'poussins', label: 'Poussins & Œufs à Couver' },
    { id: 'provenderie', label: 'Provenderie & Nutrition' },
    { id: 'pharmacie', label: 'Pharmacie & Intrants' },
    { id: 'cosmetique', label: 'Cosmétique & Hygiène' }
  ];

  const filteredProducts = PRODUCTS_CATALOG.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAdd = (product, e) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1500);
  };

  return (
    <section id="shop" className="py-16 bg-[#edf2f6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-slate-300/80 pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Catalogue des Produits & Intrants
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mt-1">
              Commandez vos poussins vaccinés, aliments formulés, médicaments vétérinaires et produits d'hygiène à Pointe-Noire.
            </p>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all self-start md:self-auto shrink-0 cursor-pointer shadow-xs"
          >
            Voir mon Panier
          </button>
        </div>

        {/* Barre de contrôle : Filtres & Recherche */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-[#fafbfc] text-slate-700 hover:bg-slate-200 border border-slate-300/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="min-w-[260px] relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" strokeWidth={1.75} />
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#fafbfc] border border-slate-300/80 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 shadow-2xs"
            />
          </div>
        </div>

        {/* Grille des produits avec images éclatantes et bien visibles */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#fafbfc] rounded-3xl border border-slate-200 p-8 space-y-3">
            <p className="text-base font-bold text-slate-700">Aucun produit ne correspond à votre recherche.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-2 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl cursor-pointer"
            >
              Afficher tout le catalogue
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProductForModal(product)}
                className="group cursor-pointer rounded-3xl bg-[#fafbfc] border border-slate-200/90 shadow-sm hover:border-emerald-500 hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden"
              >
                {/* Image du produit grande et lumineuse */}
                <div className="relative aspect-16/11 bg-slate-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108 brightness-100 contrast-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-slate-950/80 text-white text-[11px] font-bold shadow-xs">
                      {product.badge}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between grow">
                  <div>
                    <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                      {product.categoryLabel}
                    </span>
                    <h3 className="font-extrabold text-slate-900 text-sm leading-snug mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mb-4">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Prix unitaire</span>
                      <span className="text-base sm:text-lg font-black text-slate-900">
                        {product.price.toLocaleString('fr-FR')} <span className="text-xs font-bold text-emerald-700">FCFA</span>
                      </span>
                    </div>

                    <button
                      onClick={(e) => handleAdd(product, e)}
                      className="px-3.5 py-2 rounded-xl text-xs font-bold transition-all bg-emerald-100/80 text-emerald-900 hover:bg-emerald-700 hover:text-white cursor-pointer shadow-2xs"
                    >
                      {addedProductId === product.id ? 'Ajouté !' : 'Ajouter'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* MODAL FICHE PRODUIT */}
      {selectedProductForModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#fafbfc] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedProductForModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300 transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              <div className="rounded-2xl overflow-hidden aspect-square bg-slate-200 shadow-md">
                <img
                  src={selectedProductForModal.image}
                  alt={selectedProductForModal.name}
                  className="w-full h-full object-cover brightness-100 contrast-105"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    {selectedProductForModal.categoryLabel}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                    {selectedProductForModal.name}
                  </h3>
                </div>

                <div className="p-3 rounded-xl bg-slate-100 border border-slate-200">
                  <span className="text-xs text-slate-500 block">Tarif</span>
                  <span className="text-2xl font-black text-slate-900">
                    {selectedProductForModal.price.toLocaleString('fr-FR')} FCFA
                  </span>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    {selectedProductForModal.priceUnit}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedProductForModal.description}
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase text-slate-700 tracking-wider">
                    Spécifications :
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {selectedProductForModal.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={(e) => {
                    handleAdd(selectedProductForModal, e);
                    setSelectedProductForModal(null);
                    setIsCartOpen(true);
                  }}
                  className="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm transition-all text-center cursor-pointer shadow-md"
                >
                  Ajouter au panier & Commander
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
