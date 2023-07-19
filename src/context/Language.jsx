import { createContext, useEffect, useState } from "react";
import { strings } from "../locales/LocalizedStrings";

export const LanguageContext = createContext();

// eslint-disable-next-line react/prop-types
const LanguageContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "es"
  );

  useEffect(() => {
    setLoading(true);
    strings.setLanguage(language);
    localStorage.setItem("language", language);
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {!loading && children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
