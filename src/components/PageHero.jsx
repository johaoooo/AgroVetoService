import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Composant PageHero — Bannière avec Image Haute Résolution & Typographie Pro
 */
export default function PageHero({
  title,
  subtitle,
  category,
  image,
  breadcrumb = [],
  children
}) {
  return (
    <div className="relative pt-32 pb-16 md:pt-38 md:pb-20 overflow-hidden bg-slate-950 text-white min-h-[300px] flex items-center border-b border-slate-800">
      {/* 1. Image d'arrière-plan haute résolution avec dégradé subtil */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center brightness-90 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/75 to-slate-950/45"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30"></div>
      </div>

      {/* 2. Contenu texte structuré */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl space-y-4">
          
          {/* Fil d'Ariane (Breadcrumbs) */}
          <nav className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
            <Link to="/" className="hover:text-emerald-400 flex items-center gap-1 transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Accueil</span>
            </Link>
            {breadcrumb.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-slate-400" />
                {crumb.link ? (
                  <Link to={crumb.link} className="hover:text-emerald-400 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-emerald-400 font-semibold">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Catégorie / Eyebrow */}
          {category && (
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
              {category}
            </span>
          )}

          {/* Titre principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-md">
            {title}
          </h1>

          {/* Sous-titre */}
          {subtitle && (
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
              {subtitle}
            </p>
          )}

          {/* Éléments supplémentaires personnalisés (boutons, badges, filtres) */}
          {children && <div className="pt-2">{children}</div>}

        </div>
      </div>
    </div>
  );
}
