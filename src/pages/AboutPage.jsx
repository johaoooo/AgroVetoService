import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FOUNDER_DATA, 
  COMPANY_INFO, 
  IMPACT_STATS 
} from '../data/companyData';
import founderPhoto from '../assets/dr_poutya.jpeg';
import PageHero from '../components/PageHero';
import { 
  Award, 
  ShieldCheck, 
  Stethoscope, 
  CheckCircle2, 
  Building2, 
  Target, 
  HeartHandshake, 
  Sparkles, 
  MessageCircle, 
  ArrowRight, 
  Quote, 
  FileText, 
  Users, 
  Compass, 
  GraduationCap,
  MapPin
} from 'lucide-react';

/**
 * Page Dédiée : À Propos de la Fondatrice, Vision & Statuts AVS Congo
 * Design Haute Définition, Léger, Épuré et 100% Professionnel
 */
export default function AboutPage() {
  const valueIcons = [Award, HeartHandshake, Target, Sparkles];
  const statIcons = [Building2, Users, ShieldCheck, Stethoscope];

  return (
    <div className="pb-24 space-y-16 sm:space-y-20 bg-[#f6f8fa] dark:bg-[#0b0f17] transition-colors">
      
      {/* 1. Hero avec photographie haute résolution */}
      <PageHero
        title="Présentation de la Fondatrice & Direction"
        subtitle="Découvrez le parcours, la vision stratégique et les engagements du Dr Marie-Rose Edwige Rakié POUTYA SAIZONOU au service du Congo."
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* 2. Bandeau Chiffres Clés & Impact */}
        <section>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {IMPACT_STATS.map((stat, idx) => {
              const Icon = statIcons[idx] || ShieldCheck;
              return (
                <div 
                  key={idx}
                  className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#121824] border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-emerald-500/50 transition-all flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100/70 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                      {stat.value}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                      {stat.label}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. Profil Détaillé de la Fondatrice & Biographie */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Colonne Gauche : Portrait Officiel & Fiche Exécutive */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-slate-900 text-white overflow-hidden border border-slate-800 shadow-2xl sticky top-28">
              
              {/* Photo de portrait officielle */}
              <div className="relative aspect-4/3 sm:aspect-square bg-slate-950 overflow-hidden">
                <img
                  src={FOUNDER_DATA.photo || founderPhoto}
                  alt={FOUNDER_DATA.name}
                  className="w-full h-full object-cover object-top brightness-100 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                {/* Badge médical sur la photo */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-emerald-400 text-xs font-bold border border-emerald-500/30 flex items-center gap-1.5 shadow-lg">
                    <Stethoscope className="w-3.5 h-3.5" />
                    <span>Direction Générale</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/90 text-slate-950 text-xs font-black shadow-md">
                    Pointe-Noire
                  </span>
                </div>
              </div>

              {/* Détails & Qualifications */}
              <div className="p-6 sm:p-7 space-y-5">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                    Fondatrice & Directrice Générale
                  </span>
                  <h3 className="text-xl font-extrabold text-white mt-1 leading-snug">
                    {FOUNDER_DATA.name}
                  </h3>
                  <p className="text-xs text-emerald-400 font-semibold mt-1">
                    Médecin Vétérinaire & Spécialiste en Management QHSE
                  </p>
                </div>

                {/* Titres & Certifications */}
                <div className="space-y-2.5 pt-3 border-t border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Titres & Domaines d'Expertise :
                  </span>
                  {FOUNDER_DATA.credentials.map((cred, index) => (
                    <div key={index} className="text-xs text-slate-300 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="leading-snug">{cred}</span>
                    </div>
                  ))}
                </div>

                {/* Bouton de contact direct */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Bonjour%20Dr%20POUTYA%20SAIZONOU`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Contacter le cabinet de Direction</span>
                  </a>
                </div>

                {/* Coordonnées institutionnelles */}
                <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1.5">
                  <p className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span><strong>Société :</strong> {COMPANY_INFO.name}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                    <span><strong>Siège :</strong> {COMPANY_INFO.address.full}</span>
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Colonne Droite : Biographie Professionnelle & Piliers */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Titre de section */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block">
                Parcours & Vision Stratégique
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Une Expertise Médicale et Managériale au Service du Développement Durable
              </h2>
              
              <div className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
                <p>
                  Médecin Vétérinaire praticienne et Spécialiste en Management de la Qualité, Hygiène, Sécurité et Environnement (QHSE), le <strong>Docteur Marie-Rose Edwige Rakié POUTYA SAIZONOU</strong> cumule une expertise transversale reconnue dans la santé animale, la sécurité sanitaire des aliments et le développement agropastoral.
                </p>
                <p>
                  Ancienne Responsable Qualité dans l'industrie et entrepreneure engagée, elle fonde <strong>AGRO VÉTO SERVICES CONGO</strong> avec une ambition claire : structurer une offre complète et intégrée qui répond aux défis majeurs de l'élevage, de la transformation agroalimentaire et de la conformité normative en République du Congo et en Afrique Centrale.
                </p>
                <p>
                  Formatrice chevronnée et passionnée par le transfert de compétences, elle œuvre au quotidien pour l'autonomisation des éleveurs, la promotion des bonnes pratiques d'hygiène (HACCP) et l'accompagnement des entreprises vers l'excellence opérationnelle et le développement durable.
                </p>
              </div>
            </div>

            {/* 3 Cartes de Piliers d'Action */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white dark:bg-[#121824] border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-100/80 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xs">Santé Animale</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  Diagnostics cliniques, prophylaxie et chirurgie vétérinaire 24/7.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#121824] border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-sky-100/80 dark:bg-sky-950/70 text-sky-700 dark:text-sky-400 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xs">Normes QHSE</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  Audits ISO 9001/14001/45001, HACCP et offre « QHSE Partagé ».
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#121824] border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-indigo-100/80 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-400 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xs">Fermes-Écoles</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  Transfert de savoir-faire 100% pratique pour l'autonomie des éleveurs.
                </p>
              </div>
            </div>

            {/* Mot de la Direction Stylisé */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-emerald-950/90 text-white border border-emerald-800 shadow-xl space-y-4 overflow-hidden">
              <Quote className="w-16 h-16 text-emerald-700/20 absolute -top-2 -right-2 pointer-events-none" />
              
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                Mot de la Direction Générale
              </span>
              
              <p className="text-sm sm:text-base text-emerald-100 italic leading-relaxed relative z-10 font-normal">
                {FOUNDER_DATA.quote}
              </p>

              <div className="pt-4 border-t border-emerald-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 relative z-10">
                <span className="text-xs font-extrabold text-white">
                  — {FOUNDER_DATA.name}
                </span>
                <span className="text-[11px] font-semibold text-emerald-300">
                  Médecin Vétérinaire & Spécialiste QHSE
                </span>
              </div>
            </div>

          </div>

        </section>

        {/* 4. Vision 2030 & 5 Engagements Métier */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block">
              Notre Cap
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Vision Stratégique & Engagements Métier
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Carte Vision */}
            <div className="lg:col-span-5 rounded-3xl bg-slate-900 text-white p-8 sm:p-10 space-y-5 shadow-xl border border-slate-800 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Compass className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                  Cap Stratégique 2030
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold leading-snug">
                  NOTRE VISION
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {FOUNDER_DATA.vision}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800 text-xs text-slate-400">
                <span>Engagés pour la souveraineté alimentaire et la conformité au Congo.</span>
              </div>
            </div>

            {/* Carte 5 Missions Métier */}
            <div className="lg:col-span-7 rounded-3xl bg-white dark:bg-[#121824] border border-slate-200/90 dark:border-slate-800 p-8 sm:p-10 shadow-xs space-y-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block mb-1">
                  Actions Concrètes sur le Terrain
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  NOS 5 MISSIONS ESSENTIELLES
                </h3>
              </div>

              <ul className="space-y-3.5">
                {FOUNDER_DATA.missions.map((mission, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-400 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{mission}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Standards internationaux appliqués localement.</span>
                <Link to="/poles" className="font-bold text-emerald-700 dark:text-emerald-400 hover:underline">
                  Découvrir nos 6 pôles →
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* 5. Les 4 Valeurs Cardinales */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block">
              Notre ADN
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Nos 4 Valeurs Cardinales
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Ces principes guident chacune de nos interventions médicales, zootechniques et industrielles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUNDER_DATA.values.map((val, idx) => {
              const Icon = valueIcons[idx] || Award;
              return (
                <div 
                  key={idx} 
                  className="p-6 rounded-3xl bg-white dark:bg-[#121824] border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-emerald-500/50 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" strokeWidth={1.75} />
                      </div>
                      <span className="text-2xl font-black text-slate-200 dark:text-slate-700">
                        0{idx + 1}
                      </span>
                    </div>

                    <h4 className="font-extrabold text-slate-900 dark:text-white text-sm mb-2 leading-snug">
                      {val.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. Cadre Juridique & Statuts OHADA */}
        <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121824] border border-slate-200/90 dark:border-slate-800 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg">
                  Cadre Juridique, Statuts & Transparence
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong>AGRO VÉTO SERVICES CONGO</strong> est constituée sous la forme d'une Société à Responsabilité Limitée Unipersonnelle (S.A.R.L.U.), régie par l'Acte uniforme OHADA relatif au droit des sociétés commerciales et du GIE.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                <strong>Siège Social :</strong> {COMPANY_INFO.address.full} • Pointe-Noire (République du Congo).
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/contact"
                className="px-5 py-3 rounded-xl bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 dark:hover:bg-emerald-500 text-white font-bold text-xs transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Nous situer à Pointe-Noire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 7. Appel à l'action final */}
        <section className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center space-y-5 shadow-xl border border-slate-800">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Envie de collaborer avec AGRO VÉTO SERVICES CONGO ?
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto font-normal leading-relaxed">
            Éleveur, agro-industriel ou responsable QHSE : nos équipes et le Dr POUTYA SAIZONOU se tiennent à votre disposition pour concrétiser vos ambitions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/devis-qhse"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-md"
            >
              Demander un devis QHSE
            </Link>
            <Link
              to="/clinique"
              className="px-6 py-3.5 rounded-xl bg-slate-800 text-white font-semibold text-xs sm:text-sm hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer"
            >
              Prendre RDV Clinique
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-slate-800 text-slate-300 font-semibold text-xs sm:text-sm hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer"
            >
              Écrire à la Direction
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
