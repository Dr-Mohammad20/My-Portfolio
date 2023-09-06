'use client';

import { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('En');

  const changeLanguage = () => {
    setLanguage((prev) => (prev === 'En' ? 'Fa' : 'En'));
  };

  return (
    <LanguageContext.Provider value={{ changeLanguage, language }}>
      {children}
    </LanguageContext.Provider>
  );
};
