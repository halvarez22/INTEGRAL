import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Calculator, ArrowRight } from 'lucide-react';
import { ServiceId } from '../../types';

interface RoiCalculatorSectionProps {
  onQuoteWithEstimate: (service: ServiceId, note: string) => void;
}

export const RoiCalculatorSection: React.FC<RoiCalculatorSectionProps> = ({
  onQuoteWithEstimate,
}) => {
  const { language, t } = useLanguage();
  const [calculatorType, setCalculatorType] = useState<'solar' | 'paving' | 'lighting'>('solar');
  
  // Solar state
  const [monthlyBillMxn, setMonthlyBillMxn] = useState<number>(45000);
  
  // Paving state
  const [squareMeters, setSquareMeters] = useState<number>(3500);

  // Lighting state
  const [lightCount, setLightCount] = useState<number>(250);

  // Solar calculations
  const solarEstimatedSavingsMxn = Math.round(monthlyBillMxn * 0.92);
  const solarAnnualSavingsMxn = solarEstimatedSavingsMxn * 12;
  const solarSystemCostEstimate = Math.round(solarAnnualSavingsMxn * 2.85);
  const solarPaybackYears = (solarSystemCostEstimate / solarAnnualSavingsMxn).toFixed(1);
  const solarCo2Tons = (monthlyBillMxn * 0.00045 * 12).toFixed(1);

  // Paving calculations
  const pavingEstimatedWeeks = Math.max(2, Math.ceil(squareMeters / 1200));
  const pavingDesignLifeYears = 25;

  // Lighting calculations
  const lightKwhSavedYear = lightCount * 280;
  const lightSavingsMxnYear = lightKwhSavedYear * 3.65;

  const currencyLocale = language === 'en' ? 'en-US' : 'es-MX';
  const currencyCode = language === 'en' ? 'USD eq.' : 'MXN';

  return (
    <section id="calculadora" className="py-20 md:py-28 relative overflow-hidden bg-slate-100/70 dark:bg-slate-950/40 border-t border-slate-200/90 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-500 text-xs font-semibold tracking-wide uppercase mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.calculator.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans text-balance">
            {t.calculator.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 font-normal">
            {t.calculator.subtitle}
          </p>

          {/* Calculator Category Tabs */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-white/10 shadow-sm">
            <button
              onClick={() => setCalculatorType('solar')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                calculatorType === 'solar'
                  ? 'bg-amber-500 text-slate-950 shadow-md scale-[1.02]'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              {t.calculator.tabSolar}
            </button>
            <button
              onClick={() => setCalculatorType('lighting')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                calculatorType === 'lighting'
                  ? 'bg-amber-500 text-slate-950 shadow-md scale-[1.02]'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              {t.calculator.tabLighting}
            </button>
            <button
              onClick={() => setCalculatorType('paving')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                calculatorType === 'paving'
                  ? 'bg-amber-500 text-slate-950 shadow-md scale-[1.02]'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              {t.calculator.tabPaving}
            </button>
          </div>
        </div>

        {/* Calculator Main Glass Card */}
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-200/90 dark:border-white/10">
          
          {/* TAB 1: SOLAR */}
          {calculatorType === 'solar' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-2">
                    {t.calculator.solarInputLabel}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 font-bold">$</span>
                    <input
                      type="number"
                      step="1000"
                      min="5000"
                      max="2000000"
                      value={monthlyBillMxn}
                      onChange={(e) => setMonthlyBillMxn(Number(e.target.value) || 0)}
                      className="w-full pl-8 pr-16 py-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-mono font-bold text-lg focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500">{currencyCode}</span>
                  </div>
                </div>

                {/* Range Slider for Usability */}
                <div className="space-y-1">
                  <input
                    type="range"
                    min="10000"
                    max="500000"
                    step="5000"
                    value={monthlyBillMxn}
                    onChange={(e) => setMonthlyBillMxn(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-800 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                    <span>$10,000</span>
                    <span>$250,000</span>
                    <span>$500,000+</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-xs text-slate-800 dark:text-slate-300">
                  <p className="font-semibold text-amber-700 dark:text-amber-400 mb-1">{t.calculator.solarNoteTitle}</p>
                  {t.calculator.solarNoteDesc}
                </div>
              </div>

              {/* Solar Output Cards */}
              <div className="md:col-span-6 space-y-4">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/15 via-amber-50/80 to-white dark:from-amber-500/15 dark:via-slate-900/50 dark:to-slate-900/80 border border-amber-500/35 text-center sm:text-left shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-500">
                    {t.calculator.solarYearSavingsLabel}
                  </span>
                  <p className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white font-mono mt-1">
                    ${solarAnnualSavingsMxn.toLocaleString(currencyLocale)} <span className="text-xs text-amber-600 dark:text-amber-500 font-sans">{currencyCode}</span>
                  </p>
                  <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 font-semibold">
                    {t.calculator.solarMonthSavingsText} ~${solarEstimatedSavingsMxn.toLocaleString(currencyLocale)} {currencyCode}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 text-center shadow-xs">
                    <span className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400">
                      {t.calculator.solarRoiLabel}
                    </span>
                    <p className="text-xl font-black text-slate-900 dark:text-white font-mono mt-0.5">
                      {solarPaybackYears} <span className="text-xs text-slate-500">{language === 'en' ? 'Years' : 'Años'}</span>
                    </p>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-500 font-semibold">{t.calculator.solarRoiDetail}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 text-center shadow-xs">
                    <span className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400">
                      {t.calculator.solarCo2Label}
                    </span>
                    <p className="text-xl font-black text-slate-900 dark:text-white font-mono mt-0.5">
                      {solarCo2Tons} <span className="text-xs text-slate-500">{language === 'en' ? 'Tons/yr' : 'Ton/año'}</span>
                    </p>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-500 font-semibold">{t.calculator.solarCo2Detail}</span>
                  </div>
                </div>

                <button
                  onClick={() => onQuoteWithEstimate('paneles-solares', `${t.calculator.solarInputLabel} $${monthlyBillMxn} ${currencyCode}`)}
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold uppercase tracking-wider text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t.calculator.solarCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: LIGHTING */}
          {calculatorType === 'lighting' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-2">
                    {t.calculator.lightingInputLabel}
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="25"
                      min="20"
                      max="10000"
                      value={lightCount}
                      onChange={(e) => setLightCount(Number(e.target.value) || 0)}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-mono font-bold text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-xs"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500">{language === 'en' ? 'Fixtures' : 'Luminarias'}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <input
                    type="range"
                    min="50"
                    max="2000"
                    step="50"
                    value={lightCount}
                    onChange={(e) => setLightCount(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-800 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                    <span>50</span>
                    <span>1,000</span>
                    <span>2,000+</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-xs text-slate-800 dark:text-slate-300">
                  <p className="font-semibold text-emerald-700 dark:text-emerald-400 mb-1">{t.calculator.lightingNoteTitle}</p>
                  {t.calculator.lightingNoteDesc}
                </div>
              </div>

              <div className="md:col-span-6 space-y-4">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/15 via-emerald-50/80 to-white dark:from-emerald-500/15 dark:via-slate-900/50 dark:to-slate-900/80 border border-emerald-500/35 text-center sm:text-left shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                    {t.calculator.lightingYearSavingsLabel}
                  </span>
                  <p className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white font-mono mt-1">
                    ${Math.round(lightSavingsMxnYear).toLocaleString(currencyLocale)} <span className="text-xs text-emerald-600 dark:text-emerald-400 font-sans">{currencyCode}</span>
                  </p>
                  <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 font-semibold">
                    ~{(lightKwhSavedYear / 1000).toFixed(1)} {t.calculator.lightingKwhSavedText}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 text-center shadow-xs">
                    <span className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400">
                      {t.calculator.lightingLifeLabel}
                    </span>
                    <p className="text-xl font-black text-slate-900 dark:text-white font-mono mt-0.5">
                      100,000 <span className="text-xs text-slate-500">{language === 'en' ? 'Hrs' : 'Horas'}</span>
                    </p>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-500 font-semibold">{t.calculator.lightingLifeDetail}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 text-center shadow-xs">
                    <span className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400">
                      {t.calculator.lightingFailuresLabel}
                    </span>
                    <p className="text-xl font-black text-slate-900 dark:text-white font-mono mt-0.5">
                      -85% <span className="text-xs text-slate-500">{language === 'en' ? 'Reports' : 'Reportes'}</span>
                    </p>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-500 font-semibold">{t.calculator.lightingFailuresDetail}</span>
                  </div>
                </div>

                <button
                  onClick={() => onQuoteWithEstimate('iluminacion-led', `${t.calculator.lightingInputLabel} ${lightCount}`)}
                  className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold uppercase tracking-wider text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t.calculator.lightingCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: PAVING */}
          {calculatorType === 'paving' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-2">
                    {t.calculator.pavingInputLabel}
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="500"
                      min="500"
                      max="100000"
                      value={squareMeters}
                      onChange={(e) => setSquareMeters(Number(e.target.value) || 0)}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-mono font-bold text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500">m²</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <input
                    type="range"
                    min="1000"
                    max="20000"
                    step="500"
                    value={squareMeters}
                    onChange={(e) => setSquareMeters(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-800 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                    <span>1,000 m²</span>
                    <span>10,000 m²</span>
                    <span>20,000+ m²</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/25 text-xs text-slate-800 dark:text-slate-300">
                  <p className="font-semibold text-blue-700 dark:text-blue-400 mb-1">{t.calculator.pavingNoteTitle}</p>
                  {t.calculator.pavingNoteDesc}
                </div>
              </div>

              <div className="md:col-span-6 space-y-4">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-500/15 via-blue-50/80 to-white dark:from-blue-500/15 dark:via-slate-900/50 dark:to-slate-900/80 border border-blue-500/35 text-center sm:text-left shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                    {t.calculator.pavingDurationLabel}
                  </span>
                  <p className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white font-mono mt-1">
                    {pavingEstimatedWeeks} <span className="text-xs text-blue-600 dark:text-blue-400 font-sans">{language === 'en' ? 'Work Weeks' : 'Semanas de obra'}</span>
                  </p>
                  <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 font-semibold">
                    {t.calculator.pavingSpeedText}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 text-center shadow-xs">
                    <span className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400">
                      {t.calculator.pavingLifeLabel}
                    </span>
                    <p className="text-xl font-black text-slate-900 dark:text-white font-mono mt-0.5">
                      {pavingDesignLifeYears} <span className="text-xs text-slate-500">{language === 'en' ? 'Years' : 'Años'}</span>
                    </p>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-500 font-semibold">{t.calculator.pavingLifeDetail}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 text-center shadow-xs">
                    <span className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400">
                      {t.calculator.pavingIriLabel}
                    </span>
                    <p className="text-xl font-black text-slate-900 dark:text-white font-mono mt-0.5">
                      &lt; 1.6 <span className="text-xs text-slate-500">IRI</span>
                    </p>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-500 font-semibold">{t.calculator.pavingIriDetail}</span>
                  </div>
                </div>

                <button
                  onClick={() => onQuoteWithEstimate('pavimentacion', `${t.calculator.pavingInputLabel} ${squareMeters.toLocaleString(currencyLocale)} m²`)}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold uppercase tracking-wider text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t.calculator.pavingCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
