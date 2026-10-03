import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, Translations, TRANSLATIONS } from '../constants/translations';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('gid_language');
      if (stored === 'es' || stored === 'en') {
        return stored;
      }
      // Check browser preference if available
      const browserLang = navigator.language?.toLowerCase();
      if (browserLang && browserLang.startsWith('en')) {
        return 'en';
      }
    }
    return 'es'; // Spanish default
  });

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
    try {
      localStorage.setItem('gid_language', language);
    } catch {
      // Ignore local storage error
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = TRANSLATIONS[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
