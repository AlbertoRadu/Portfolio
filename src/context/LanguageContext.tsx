import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

import en from '../locales/en.json';
import es from '../locales/es.json';
import ca from '../locales/ca.json';

type Language = 'en' | 'es' | 'ca';

const translations = { en, es, ca };

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    if (saved === 'en' || saved === 'es' || saved === 'ca') {
      return saved;
    }
    // Fallback to browser preference or Spanish
    const browserLang = navigator.language.slice(0, 2);
    if (browserLang === 'ca') return 'ca';
    if (browserLang === 'en') return 'en';
    return 'es'; // default fallback
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio_lang', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let current: any = translations[language];
    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        return key;
      }
    }
    return typeof current === 'string' ? current : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
