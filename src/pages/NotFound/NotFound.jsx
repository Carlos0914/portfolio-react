import { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { strings } from "../../locales/LocalizedStrings";
import { LanguageContext } from "../../context/Language";
import "./NotFound.css";

const NotFound = () => {
  // Consume context to trigger re-render on language change
  useContext(LanguageContext);
  
  return (
    <div className="notfound-container">
      <Helmet>
        <title>{strings.notFound.title}</title>
      </Helmet>
      
      <div className="notfound-content">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">{strings.notFound.title}</h2>
        <p className="notfound-message">{strings.notFound.message}</p>
        <Link to="/" className="notfound-button">
          {strings.notFound.homeButton}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
