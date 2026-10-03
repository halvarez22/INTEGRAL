import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onExploreServices: () => void;
  onRequestQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreServices,
  onRequestQuote,
}) => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Image with Dual Mode Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_solar_infrastructure_1791054682087.jpg"
          alt="Grupo Integral Infraestructura Solar y Vial"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        
        {/* Measured scrim maintaining crisp typography and contrast in both modes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#091E3A]/90 via-[#0B2545]/80 to-[#0B2545]/95 dark:from-[#070e1a]/95 dark:via-[#070e1a]/85 dark:to-[#070e1a] transition-colors duration-300" />
        
        {/* Subtle Brand Accent Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/20 dark:bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* Trust Kicker per Top Bar Contract & Anti-Slop (Plain text, no pills) */}
        <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-amber-400 uppercase mb-4 drop-shadow-sm">
          <span>{t.hero.kickerCiv}</span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-400">·</span>
          <span>{t.hero.kickerBess}</span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-400">·</span>
          <span>{t.hero.kickerAi}</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight max-w-5xl mx-auto text-balance font-sans leading-[1.08] drop-shadow-md">
          {t.hero.headline}
        </h1>

        {/* Concrete Value Proposition */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-100 dark:text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed text-balance drop-shadow-sm">
          {t.hero.tagline}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onRequestQuote}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-amber-500/25 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span>{t.hero.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 text-white font-bold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 border border-white/30 backdrop-blur-md shadow-md cursor-pointer"
          >
            <span>{t.hero.ctaSecondary}</span>
            <ChevronDown className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* Quantitative Proof Adjacency Banner */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-white/95 dark:bg-white/5 border border-slate-200/90 dark:border-white/10 shadow-2xl dark:shadow-none backdrop-blur-xl text-slate-900 dark:text-white transition-all">
            <div className="text-center p-2">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-amber-500 dark:text-amber-400 font-mono">
                {t.hero.statPaving} <span className="text-base text-slate-500 dark:text-slate-400 font-sans">m²</span>
              </p>
              <p className="text-xs text-slate-700 dark:text-slate-400 font-bold uppercase tracking-wider mt-1">
                {t.hero.statPavingLabel}
              </p>
            </div>

            <div className="text-center p-2">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-amber-500 dark:text-amber-400 font-mono">
                {t.hero.statBess} <span className="text-base text-slate-500 dark:text-slate-400 font-sans">MWh</span>
              </p>
              <p className="text-xs text-slate-700 dark:text-slate-400 font-bold uppercase tracking-wider mt-1">
                {t.hero.statBessLabel}
              </p>
            </div>

            <div className="text-center p-2">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-amber-500 dark:text-amber-400 font-mono">
                {t.hero.statLed}
              </p>
              <p className="text-xs text-slate-700 dark:text-slate-400 font-bold uppercase tracking-wider mt-1">
                {t.hero.statLedLabel}
              </p>
            </div>

            <div className="text-center p-2">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-cyan-600 dark:text-cyan-400 font-mono">
                {t.hero.statAi}
              </p>
              <p className="text-xs text-slate-700 dark:text-slate-400 font-bold uppercase tracking-wider mt-1">
                {t.hero.statAiLabel}
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
