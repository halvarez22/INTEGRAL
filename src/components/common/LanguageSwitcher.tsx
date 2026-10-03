import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { language, toggleLanguage, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center p-1 rounded-xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-xs font-bold shadow-xs select-none ${className}`}
      role="group"
      aria-label="Seleccionar idioma / Select language"
    >
      <Globe className="w-3.5 h-3.5 ml-1 mr-1.5 text-slate-500 dark:text-slate-400 shrink-0" aria-hidden="true" />
      
      <button
        type="button"
        onClick={() => setLanguage('es')}
        className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-all ${
          language === 'es'
            ? 'bg-amber-500 text-slate-950 shadow-xs scale-105'
            : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
        }`}
        aria-pressed={language === 'es'}
        title="Español"
      >
        ES
      </button>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-all ${
          language === 'en'
            ? 'bg-amber-500 text-slate-950 shadow-xs scale-105'
            : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
        }`}
        aria-pressed={language === 'en'}
        title="English"
      >
        EN
      </button>
    </div>
  );
};
