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
      
      <div className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
        
        {/* En-tête du Panier */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-900 text-white">
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
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                <ShoppingBag className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-base font-bold text-slate-800">Votre panier est vide</p>
                <p className="text-xs text-slate-500 max-w-xs mx-auto mt-1">
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
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded-xl shrink-0 bg-slate-200"
                  />

                  <div className="grow min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs font-black text-emerald-800 mt-0.5">
                      {item.price.toLocaleString('fr-FR')} FCFA
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                          aria-label="Diminuer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
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
                  className="text-xs text-red-600 hover:underline font-semibold cursor-pointer"
                >
                  Vider le panier
                </button>
              </div>
            </div>
          )}

          {/* Formulaire de livraison */}
          {cartItems.length > 0 && (
            <form onSubmit={handleWhatsAppCheckout} className="pt-4 border-t border-slate-200 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Informations de Livraison (Pointe-Noire & Congo)
              </h3>

              <div className="space-y-2">
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" strokeWidth={1.75} />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Votre Nom & Prénom *"
                    value={customerInfo.name}
                    onChange={handleInputChange}
                    className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                </div>

                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" strokeWidth={1.75} />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Numéro WhatsApp / Téléphone *"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                </div>

                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" strokeWidth={1.75} />
                  <input
                    type="text"
                    name="address"
                    required
                    placeholder="Quartier / Adresse à Pointe-Noire *"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                </div>

                <textarea
                  name="notes"
                  rows="2"
                  placeholder="Remarques éventuelles (date de retrait/livraison)..."
                  value={customerInfo.notes}
                  onChange={handleInputChange}
                  className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                ></textarea>
              </div>

              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 space-y-1">
                <p className="font-bold flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-amber-700" strokeWidth={1.75} />
                  <span>Paiements acceptés :</span>
                </p>
                <p>MTN Mobile Money, Airtel Money ou Paiement au siège (Socoprise).</p>
              </div>

              <div className="pt-2">
                <div className="flex justify-between items-center text-sm font-extrabold text-slate-900 mb-3">
                  <span>Total de la commande :</span>
                  <span className="text-xl text-emerald-800 font-black">
                    {totalAmount.toLocaleString('fr-FR')} FCFA
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isOrdering}
                  className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-white" strokeWidth={1.75} />
                  <span>Valider & Commander sur WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="p-4 border-t border-slate-100 text-center bg-slate-50 text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" strokeWidth={1.75} />
          <span>Commande directe et vérification par nos équipes vétérinaires.</span>
        </div>

      </div>

    </div>
  );
}
