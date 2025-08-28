'use client';

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Language = 'es' | 'en';

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'es',
  toggleLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'es' || savedLang === 'en') setLanguage(savedLang);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
