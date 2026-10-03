import React from 'react';
import { getCaseStudies } from '../../constants/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { ShieldCheck, Award, Building2 } from 'lucide-react';
import { Logo } from '../common/Logo';

export const AboutSection: React.FC = () => {
  const { language, t } = useLanguage();
  const caseStudies = getCaseStudies(language);

  return (
    <section id="nosotros" className="py-20 md:py-28 relative overflow-hidden bg-white/60 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Brand & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-200/90 dark:border-white/10 shadow-2xl w-full max-w-md">
              <Logo variant="full" showServicesIcons={true} />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-500 uppercase tracking-widest">
              <Building2 className="w-3.5 h-3.5" />
              <span>{t.about.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans text-balance">
              {t.about.title}
            </h2>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              {t.about.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl glass-card border border-slate-200/90 dark:border-white/5">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 uppercase">
                  <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>{t.about.sqaTitle}</span>
                </div>
                <p className="mt-1 text-xs text-slate-700 dark:text-slate-300">
                  {t.about.sqaDesc}
                </p>
              </div>

              <div className="p-4 rounded-xl glass-card border border-slate-200/90 dark:border-white/5">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-400 uppercase">
                  <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{t.about.ssdTitle}</span>
                </div>
                <p className="mt-1 text-xs text-slate-700 dark:text-slate-300">
                  {t.about.ssdDesc}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Case Studies & Concrete Proof Metrics (Adjacent Proof) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.about.caseStudiesTitle}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {t.about.caseStudiesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="rounded-2xl p-6 shadow-md hover:shadow-xl border border-slate-200/90 dark:border-white/10 flex flex-col justify-between hover:border-amber-500/60 transition-all duration-300 group bg-white dark:bg-slate-900/60"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-3">
                    <span className="font-semibold text-amber-700 dark:text-amber-400">{cs.sector}</span>
                    <span>{cs.location}</span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    {cs.headline}
                  </h4>

                  <p className="mt-2 text-xs text-slate-700 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {cs.solution}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 space-y-3">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {cs.metrics.map((m, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/5">
                        <p className="text-xs sm:text-sm font-black text-slate-950 dark:text-amber-400 font-mono">
                          {m.metric}
                        </p>
                        <p className="text-[9px] text-slate-600 dark:text-slate-400 leading-tight mt-0.5 font-medium">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cs.standardsComplied.map((std, i) => (
                      <span key={i} className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-transparent">
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
