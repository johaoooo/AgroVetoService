import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageCircle, 
  ShieldCheck, 
  CreditCard, 
  User, 
  Phone, 
  MapPin 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

/**
 * Composant CartDrawer (Panier & Commande Sécurisée)
 */
export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onClearCart,
  showToast 
}) {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });
  const [isOrdering, setIsOrdering] = useState(false);

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleInputChange = (e) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const handleWhatsAppCheckout = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      showToast("Veuillez renseigner votre nom, téléphone et adresse de livraison.", "warning");
      return;
    }

    setIsOrdering(true);

    let message = `🛒 *NOUVELLE COMMANDE - AGRO VÉTO SERVICES CONGO*\n\n`;
    message += `👤 *Client :* ${customerInfo.name}\n`;
    message += `📞 *Téléphone :* ${customerInfo.phone}\n`;
    message += `📍 *Adresse :* ${customerInfo.address}\n`;
    if (customerInfo.notes) {
      message += `📝 *Remarques :* ${customerInfo.notes}\n`;
    }
    message += `\n📦 *DÉTAIL DES ARTICLES :*\n`;
    message += `--------------------------------\n`;

    cartItems.forEach((item, index) => {
      const lineTotal = item.price * item.quantity;
      message += `${index + 1}. *${item.name}*\n   Qté : ${item.quantity} x ${item.price.toLocaleString('fr-FR')} FCFA = ${lineTotal.toLocaleString('fr-FR')} FCFA\n`;
    });

    message += `--------------------------------\n`;
    message += `💰 *TOTAL : ${totalAmount.toLocaleString('fr-FR')} FCFA*\n\n`;
    message += `_Commande passée sur le site officiel AVS Congo._`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      showToast("Votre commande a été transmise sur WhatsApp !", "success");
      setIsOrdering(false);
      onClearCart();
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/70 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      
      <div className="w-full max-w-lg bg-white dark:bg-[#121824] h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300 border-l border-slate-200 dark:border-slate-800">
        
        {/* En-tête du Panier */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-900 text-white">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-emerald-400" strokeWidth={1.75} />
            <h2 className="text-base font-extrabold">Votre Panier d'Achat</h2>
            <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)} articles
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" strokeWidth={1.75} />
          </button>
        </div>

        {/* Corps du Panier */}
        <div className="p-5 grow overflow-y-auto space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto text-slate-400">
                <ShoppingBag className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-base font-bold text-slate-800 dark:text-slate-200">Votre panier est vide</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto mt-1">
                  Découvrez nos poussins d'un jour, aliments de provenderie et produits d'hygiène dans la boutique.
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-emerald-700 text-white text-xs font-bold rounded-xl cursor-pointer"
              >
                Explorer la boutique
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div 
                  key={item.id}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-[#192233] border border-slate-200 dark:border-slate-800"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded-xl shrink-0 bg-slate-200 dark:bg-slate-800"
                  />

                  <div className="grow min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs font-black text-emerald-800 dark:text-emerald-400 mt-0.5">
                      {item.price.toLocaleString('fr-FR')} FCFA
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-[#121824] overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                          aria-label="Diminuer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-slate-800 dark:text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                          aria-label="Augmenter"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1 text-slate-400 hover:text-red-600 transition-colors ml-auto cursor-pointer"
                        title="Supprimer"
                      >
                        <Trash2 className="w-4 h-4" strokeWidth={1.75} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-end pt-1">
                <button
                  onClick={onClearCart}
                  className="text-xs text-red-600 dark:text-red-400 hover:underline font-semibold cursor-pointer"
                >
                  Vider le panier
                </button>
              </div>
            </div>
          )}

          {/* Formulaire de livraison */}
          {cartItems.length > 0 && (
            <form onSubmit={handleWhatsAppCheckout} className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Informations de Livraison (Pointe-Noire & Congo)
              </h3>

              <div className="space-y-2.5">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Votre Nom & Prénom *"
                    value={customerInfo.name}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-[#192233] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Téléphone / WhatsApp *"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-[#192233] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="address"
                    required
                    placeholder="Adresse / Quartier de livraison (ex: Socoprise, Tié-Tié...) *"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-[#192233] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <textarea
                    name="notes"
                    rows={2}
                    placeholder="Remarques (ex: livraison urgente, retrait en clinique...)"
                    value={customerInfo.notes}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-[#192233] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Total et Validation */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-slate-900 dark:text-white font-black text-base">
                  <span>Total de la commande :</span>
                  <span className="text-emerald-700 dark:text-emerald-400">{totalAmount.toLocaleString('fr-FR')} FCFA</span>
                </div>

                <button
                  type="submit"
                  disabled={isOrdering}
                  className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <MessageCircle className="w-4 h-4 text-white" strokeWidth={1.75} />
                  <span>{isOrdering ? 'Préparation...' : 'Valider & Commander sur WhatsApp'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800 text-center bg-slate-50 dark:bg-[#0b0f17] text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" strokeWidth={1.75} />
          <span>Commande directe et vérification par nos équipes vétérinaires.</span>
        </div>

      </div>

    </div>
  );
}
