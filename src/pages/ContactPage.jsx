import React from 'react';
import ContactSection from '../components/ContactSection';

import PageHero from '../components/PageHero';

/**
 * Page Dédiée : Contact & Localisation (Teinte Douce & Reposante)
 */
export default function ContactPage({ showToast }) {
  return (
    <div className="pb-16 space-y-12 bg-[#f6f8fa] dark:bg-[#0b0f17] transition-colors">
      
      {/* Hero avec photographie haute résolution */}
      <PageHero
        category="Nous Trouver & Échanger"
        title="Contact & Localisation du Siège"
        subtitle="Retrouvez-nous au quartier Socoprise à Pointe-Noire ou écrivez-nous pour toute commande ou demande de renseignement."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
        breadcrumb={[{ label: 'Contact & Siège' }]}
      />

      <ContactSection showToast={showToast} />

    </div>
  );
}
