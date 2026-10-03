import React, { useState } from 'react';
import { PrototypeDevice } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { MobilePrototype } from './MobilePrototype';
import { WebDashboardPrototype } from './WebDashboardPrototype';
import { Smartphone, Monitor, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export const MockupShowcaseSection: React.FC = () => {
  const { t } = useLanguage();
  const [device, setDevice] = useState<PrototypeDevice>('web');

  return (
    <section id="mockups" className="py-20 md:py-28 relative overflow-hidden bg-slate-100/90 dark:bg-[#070e1c]/80 border-y border-slate-200/90 dark:border-white/5 transition-colors">
      {/* Background ambient light mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-amber-500/10 via-blue-600/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 dark:bg-amber-500/15 border border-amber-500/40 text-amber-700 dark:text-amber-400 text-xs font-bold tracking-wide uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{t.mockups.badge}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans text-balance">
            {t.mockups.title}
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 font-normal leading-relaxed">
            {t.mockups.subtitle}
          </p>

          {/* Device Selector Tabs */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-300 dark:border-white/10 shadow-sm">
            <button
              onClick={() => setDevice('web')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                device === 'web'
                  ? 'bg-amber-500 text-slate-950 shadow-md scale-[1.02]'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>{t.mockups.webTab}</span>
            </button>

            <button
              onClick={() => setDevice('mobile')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                device === 'mobile'
                  ? 'bg-amber-500 text-slate-950 shadow-md scale-[1.02]'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>{t.mockups.mobileTab}</span>
            </button>
          </div>
        </div>

        {/* Mockup Interactive Frame Showcase */}
        <div className="relative mx-auto transition-all duration-500">
          {device === 'web' ? (
            <div className="max-w-5xl mx-auto">
              <WebDashboardPrototype />
            </div>
          ) : (
            <div className="max-w-md mx-auto py-4">
              <MobilePrototype />
            </div>
          )}
        </div>

        {/* Feature Badges per ISO/IEC 27034 & SQA */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-4 rounded-xl glass-card text-center sm:text-left flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                {t.mockups.antiGodTitle}
              </h4>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                {t.mockups.antiGodDesc}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl glass-card text-center sm:text-left flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                {t.mockups.ssdTitle}
              </h4>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                {t.mockups.ssdDesc}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl glass-card text-center sm:text-left flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                {t.mockups.uFirstTitle}
              </h4>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                {t.mockups.uFirstDesc}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
