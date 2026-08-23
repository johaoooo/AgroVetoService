import React from 'react';

/**
 * Composant PageHero — Bannière avec Image Haute Résolution & Typographie Pro Épurée
 */
export default function PageHero({
  title,
  subtitle,
  image,
  children
}) {
  return (
    <div className="relative pt-32 pb-14 md:pt-36 md:pb-18 overflow-hidden bg-slate-950 text-white min-h-[260px] flex items-center border-b border-slate-800">
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

      {/* 2. Contenu texte structuré épuré */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl space-y-3">
          
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

          {/* Éléments supplémentaires personnalisés */}
          {children && <div className="pt-2">{children}</div>}

        </div>
      </div>
    </div>
  );
}
