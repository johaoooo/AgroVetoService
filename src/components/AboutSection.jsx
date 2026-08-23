import React from 'react';
import { 
  Award, 
  Quote, 
  Target, 
  Compass, 
  HeartHandshake, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Stethoscope,
  GraduationCap,
  MapPin
} from 'lucide-react';
import { FOUNDER_DATA, COMPANY_INFO } from '../data/companyData';
import logoPng from '../assets/logo.png';
import founderPhoto from '../assets/dr_poutya.jpeg';

/**
 * Composant AboutSection (Présentation de la Fondatrice & Mot de la Direction)
 * - Intégration du portrait professionnel du Dr POUTYA
 * - Mise en avant de la légitimité médicale et scientifique
 * - Mot d'accueil institutionnel, Vision, Missions et Valeurs
 */
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[#0b0f17] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* EN-TÊTE ET PROFIL DE LA FONDATRICE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Colonne Gauche : Portrait Professionnel & Carte d'Identité */}
          <div className="lg:col-span-5">
            <div className="relative group">
              
              {/* Cadre lumineux et dégradé subtil */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-emerald-600 via-sky-600 to-amber-500 opacity-25 blur-xl group-hover:opacity-40 transition-opacity"></div>
              
              <div className="relative rounded-3xl bg-slate-900 text-white overflow-hidden border border-slate-800 shadow-2xl">
                
                {/* Photo de la Fondatrice / Direction */}
                <div className="relative aspect-4/3 sm:aspect-1/1 bg-slate-950 overflow-hidden">
                  <img
                    src={FOUNDER_DATA.photo || founderPhoto}
                    alt={FOUNDER_DATA.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  
                  {/* Badge Vétérinaire & QHSE sur la photo */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-emerald-400 text-xs font-extrabold border border-emerald-500/40 flex items-center gap-1.5 shadow-lg">
                      <Stethoscope className="w-3.5 h-3.5 text-emerald-400" />
                      Direction Médicale
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-amber-500/90 text-slate-950 text-xs font-black shadow-md">
                      Pointe-Noire
                    </span>
                  </div>

                  {/* Nom & Titre en surimpression basse */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-1">
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest block">
                      Fondatrice & Directrice Générale
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                      {FOUNDER_DATA.name}
                    </h3>
                  </div>
                </div>

                {/* Titres & Qualifications Professionnelles */}
                <div className="p-6 space-y-3 bg-slate-900 border-t border-slate-800">
                  <div className="space-y-2">
                    {FOUNDER_DATA.credentials.map((cred, index) => (
                      <div key={index} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="font-medium">{cred}</span>
                      </div>
                    ))}
                  </div>

                  {/* Mention institutionnelle */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <span>AGRO VÉTO SERVICES SARLU</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Socoprise
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Colonne Droite : Biographie & Présentation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
              <span>Gouvernance & Expertise Médicale</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Une Vision Intégrée au Service de la <span className="text-emerald-700 dark:text-emerald-400">Sécurité Alimentaire</span>
              </h2>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                S.A.R.L.U. au Capital de 1.000.000 FCFA • Siège social à Socoprise, Pointe-Noire (Congo)
              </p>
            </div>

            <div className="prose prose-slate dark:prose-invert text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Sous l'impulsion du <strong>{FOUNDER_DATA.name}</strong>, <strong>AGRO VÉTO SERVICES CONGO</strong> est née d'une conviction profonde : la souveraineté alimentaire et la prospérité agropastorale de la République du Congo exigent l'alliance indissociable de la <em>rigueur médicale vétérinaire</em> et de l'<em>excellence normative internationale</em> (QHSE).
              </p>
              <p>
                Forte d'un double parcours de <strong>Docteur en Médecine Vétérinaire</strong> et de <strong>Manager Spécialiste QHSE</strong> diplômée de l'ISM Paris, elle a conçu une structure multisectorielle unique capable d'accompagner aussi bien les éleveurs familiaux, les coopératives avicoles que les grands groupes industriels et pétroliers de la place.
              </p>
            </div>

            {/* Citation & Mot de la Directrice */}
            <div className="p-6 rounded-2xl bg-[#fafbfc] dark:bg-[#121824] border border-slate-200 dark:border-slate-800 space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                Le Mot de la Direction
              </p>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                {FOUNDER_DATA.quote}
              </p>
              <div className="pt-3 mt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-900 dark:text-white">
                  — {FOUNDER_DATA.name}
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                  Médecin Vétérinaire & Spécialiste QHSE
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* VISION, MISSIONS ET VALEURS CARDINALES */}
        <div className="space-y-12">
          
          {/* Vision & Missions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision */}
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 shadow-xl border border-slate-700 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-white">NOTRE VISION</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {FOUNDER_DATA.vision}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-bold text-emerald-400">
                Pôle d'excellence agropastorale & QHSE en Afrique Centrale
              </div>
            </div>

            {/* Missions */}
            <div className="rounded-3xl bg-emerald-50 dark:bg-[#121824] border border-emerald-200/80 dark:border-slate-800 p-8 shadow-lg flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-emerald-950 dark:text-emerald-400">NOS MISSIONS</h3>
                <ul className="space-y-2.5">
                  {FOUNDER_DATA.missions.map((mission, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* 4 Valeurs Cardinales */}
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-6 text-center">
              Nos 4 Valeurs Cardinales
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FOUNDER_DATA.values.map((val, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-[#121824] border border-slate-200 dark:border-slate-800 shadow-md hover:border-emerald-500/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-black text-sm mb-3">
                    0{idx + 1}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
