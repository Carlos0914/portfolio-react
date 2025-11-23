import { createContext, useEffect, useState } from "react";
import { strings } from "../locales/LocalizedStrings";

export const LanguageContext = createContext();

// eslint-disable-next-line react/prop-types
const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language") || "es";
    strings.setLanguage(savedLanguage);
    return savedLanguage;
  });
  const [version, setVersion] = useState(0);

  const changeLanguage = (newLanguage) => {
    // Update strings FIRST, synchronously, before state updates
    strings.setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    // Then trigger state updates which will cause re-renders
    setLanguage(newLanguage);
    setVersion(v => v + 1);
  };

  // Backup: also update in effect in case something goes wrong
  useEffect(() => {
    strings.setLanguage(language);
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, version }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
