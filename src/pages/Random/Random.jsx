import { useContext } from "react";
import { Helmet } from "react-helmet";
import { strings } from "../../locales/LocalizedStrings";
import { LanguageContext } from "../../context/Language";

const Random = () => {
  // Consume context to trigger re-render on language change
  useContext(LanguageContext);
  
  return (
    <div>
      <Helmet>
        <title>Random Stuff | Carlos Lopez Lopez</title>
      </Helmet>
      <h1>Random</h1>
      <p>Coming soon...</p>
    </div>
  );
};

export default Random;
