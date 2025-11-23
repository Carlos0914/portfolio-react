import { useContext } from "react";
import { Helmet } from "react-helmet";
import { strings } from "../../locales/LocalizedStrings";
import { LanguageContext } from "../../context/Language";
import images from "../../assets/services";
import "./Services.css";

const Services = () => {
  // Consume context to trigger re-render on language change
  useContext(LanguageContext);
  
  return (
    <div className="services-container">
      <Helmet>
        <title>{strings.meta.services}</title>
      </Helmet>
      
      <h1>{strings.navbar.services}</h1>
      <p className="services-headline">
        {strings.services.headline}
      </p>

      <div className="services-list">
        {strings.services.titles.map((title, index) => (
          <div 
            key={index} 
            className={`service-item ${index % 2 !== 0 ? 'reverse' : ''}`}
          >
            <div 
              className="service-image" 
              style={{ backgroundImage: `url(${images[index]})` }} 
            />
            <div className="service-content">
              <h3>{title}</h3>
              <p>{strings.services.items[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
