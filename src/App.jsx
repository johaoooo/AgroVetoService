import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import AuthModal from './components/AuthModal';
import WhatsAppWidget from './components/WhatsAppWidget';
import ScrollToTop from './components/ScrollToTop';

// Importation des 9 Pages Indépendantes (Vraie Architecture Multi-Pages)
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PolesPage from './pages/PolesPage';
import ShopPage from './pages/ShopPage';
import ClinicPage from './pages/ClinicPage';
import TrainingPage from './pages/TrainingPage';
import QuotePage from './pages/QuotePage';
import ContactPage from './pages/ContactPage';
import AccountPage from './pages/AccountPage';

/**
 * Orchestrateur Principal Multi-Pages avec React Router (URLs Distinctes)
 */
export default function App() {
  // Gestion du Panier (avec persistance localStorage)
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('avs_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Gestion de l'Utilisateur Connecté (avec persistance localStorage)
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('avs_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Système de Mode Sombre / Clair (avec persistance localStorage)
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('avs_theme');
    if (saved) return saved === 'dark';
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('avs_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('avs_theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  // Système de Toast Notifications
  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem('avs_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`"${product.name}" ajouté à votre panier !`, 'success');
  };

  const handleUpdateQuantity = (productId, delta) => {
    setCartItems(prev => {
      return prev.map(item => {
        if (item.id === productId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
    showToast("Article retiré du panier", "info");
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    localStorage.setItem('avs_user', JSON.stringify(user));
    setIsAuthModalOpen(false);
    showToast(`Bienvenue, ${user.fullName} ! Votre compte est actif.`, 'success');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('avs_user');
    showToast("Vous avez été déconnecté avec succès.", "info");
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#f6f8fa] dark:bg-[#0b0f17] text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-emerald-500 selection:text-white">
        
        {/* Défilement automatique vers le haut à chaque changement d'URL */}
        <ScrollToTop />

        {/* 1. Header Multi-Pages avec Switch Thème */}
        <Header
          cartCount={cartCount}
          setIsCartOpen={setIsCartOpen}
          currentUser={currentUser}
          onOpenAuthModal={() => setIsAuthModalOpen(true)}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        {/* 2. Système de Routage Multi-Pages */}
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onAddToCart={handleAddToCart} 
                  setIsCartOpen={setIsCartOpen} 
                />
              } 
            />
            
            <Route 
              path="/a-propos" 
              element={<AboutPage />} 
            />
            
            <Route 
              path="/poles" 
              element={<PolesPage />} 
            />
            
            <Route 
              path="/boutique" 
              element={
                <ShopPage 
                  onAddToCart={handleAddToCart} 
                  setIsCartOpen={setIsCartOpen} 
                />
              } 
            />
            
            <Route 
              path="/clinique" 
              element={<ClinicPage showToast={showToast} />} 
            />
            
            <Route 
              path="/formations" 
              element={<TrainingPage showToast={showToast} />} 
            />
            
            <Route 
              path="/devis-qhse" 
              element={<QuotePage showToast={showToast} />} 
            />
            
            <Route 
              path="/contact" 
              element={<ContactPage showToast={showToast} />} 
            />
            
            <Route 
              path="/mon-compte" 
              element={
                <AccountPage
                  currentUser={currentUser}
                  onLogout={handleLogout}
                  onOpenAuthModal={() => setIsAuthModalOpen(true)}
                  showToast={showToast}
                />
              } 
            />

            {/* Redirection automatique vers la racine pour les routes inconnues */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* 3. Footer avec Liens React Router */}
        <Footer />

        {/* 4. Panier Coulissant Global */}
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveFromCart}
          onClearCart={handleClearCart}
          currentUser={currentUser}
          showToast={showToast}
        />

        {/* 5. Modale d'Authentification Express */}
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          onLoginSuccess={handleLoginSuccess}
          showToast={showToast}
        />

        {/* 6. Bouton WhatsApp Flottant */}
        <WhatsAppWidget />

        {/* 7. Notifications Toast */}
        {toast && (
          <div className="fixed bottom-6 left-6 z-50 animate-in slide-in-from-bottom duration-300">
            <div className={`px-4 py-3 rounded-2xl shadow-xl text-xs sm:text-sm font-bold flex items-center gap-2 border ${
              toast.type === 'success' ? 'bg-slate-900 text-white border-emerald-500/50' :
              toast.type === 'error' ? 'bg-rose-950 text-rose-100 border-rose-600' :
              'bg-slate-900 text-white border-slate-700'
            }`}>
              <span className={`w-2 h-2 rounded-full ${
                toast.type === 'success' ? 'bg-emerald-400' :
                toast.type === 'error' ? 'bg-rose-400' : 'bg-sky-400'
              }`}></span>
              <span>{toast.message}</span>
            </div>
          </div>
        )}

      </div>
    </BrowserRouter>
  );
}
