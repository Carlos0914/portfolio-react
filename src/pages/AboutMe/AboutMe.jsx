import { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { strings } from "../../locales/LocalizedStrings";
import { LanguageContext } from "../../context/Language";
import logos from "../../assets/logos";
import ProfilePicture from "../../assets/pp.png";
import { GraduationCap, MapPin, Calendar, Award, Wrench } from "lucide-react";
import "./AboutMe.css";

const AboutMe = () => {
  // Consume context to trigger re-render on language change
  useContext(LanguageContext);
  
  return (
    <div className="about-container">
      <Helmet>
        <title>{strings.meta.home}</title>
      </Helmet>

      <h1>{strings.navbar.about}</h1>

      <div className="profile-section">
        <img src={ProfilePicture} alt="Profile" className="profile-image" />
        <div className="profile-text">
          <p>{strings.home.line1}</p>
          <p>{strings.home.line2}</p>
          <p>{strings.home.line3}</p>
          <p>{strings.home.line4}</p>
          <p>
            {strings.formatString(
              strings.home.line5,
              <Link to="/history" className="link-highlight">{strings.navbar.history}</Link>
            )}
          </p>
        </div>
      </div>

      <div className="education-section">
        <h2 className="section-title">
          <GraduationCap size={32} />
          {strings.home.education}
        </h2>
        
        <div className="education-list">
          <div className="education-item">
            <h4>{strings.home.degree}</h4>
            <div className="info-row">
              <span className="info-item">
                <MapPin size={18} /> {strings.home.university}
              </span>
              <span className="info-item">
                <Calendar size={18} /> 2017 - 2022
              </span>
              <span className="info-item">
                <Award size={18} /> {strings.home.note} (96.88 / 100)
              </span>
            </div>
          </div>

          <div className="education-item">
            <h4>AWS Certified Cloud Practitioner</h4>
            <div className="info-row">
              <span className="info-item">
                <MapPin size={18} /> Amazon Web Services
              </span>
              <span className="info-item">
                <Calendar size={18} /> 2022
              </span>
            </div>
          </div>

          <div className="education-item">
            <h4>AWS Certified Developer - Associate</h4>
            <div className="info-row">
              <span className="info-item">
                <MapPin size={18} /> Amazon Web Services
              </span>
              <span className="info-item">
                <Calendar size={18} /> 2023
              </span>
            </div>
          </div>

          <div className="education-item">
            <h4>AWS Certified Solutions Architect - Associate</h4>
            <div className="info-row">
              <span className="info-item">
                <MapPin size={18} /> Amazon Web Services
              </span>
              <span className="info-item">
                <Calendar size={18} /> 2024
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="tech-stack">
        <h2 className="section-title">
          <Wrench size={32} />
          {strings.home.techStack}
        </h2>

        <h3>{strings.home.main}</h3>
        <div className="tech-grid">
          {["MONGODB", "EXPRESS", "REACT", "NODE"]
            .map((x) => logos[x])
            .map((x) => (
              <div key={x.name} className="tech-item" title={x.name}>
                <img src={x.logo} alt={x.name} />
              </div>
            ))}
        </div>

        <h3>{strings.home.programming_languages}</h3>
        <div className="tech-grid">
          {Object.values(logos)
            .filter((x) => x.tags.includes("language"))
            .map((x) => (
              <div key={x.name} className="tech-item" title={x.name}>
                <img src={x.logo} alt={x.name} />
              </div>
            ))}
        </div>

        <h3>Backend</h3>
        <div className="tech-grid">
          {Object.values(logos)
            .filter((x) => x.tags.includes("backend"))
            .map((x) => (
              <div key={x.name} className="tech-item" title={x.name}>
                <img src={x.logo} alt={x.name} />
              </div>
            ))}
        </div>

        <h3>Frontend</h3>
        <div className="tech-grid">
          {Object.values(logos)
            .filter((x) => x.tags.includes("frontend"))
            .map((x) => (
              <div key={x.name} className="tech-item" title={x.name}>
                <img src={x.logo} alt={x.name} />
              </div>
            ))}
        </div>

        <h3>{strings.home.databases}</h3>
        <div className="tech-grid">
          {Object.values(logos)
            .filter((x) => x.tags.includes("database"))
            .map((x) => (
              <div key={x.name} className="tech-item" title={x.name}>
                <img src={x.logo} alt={x.name} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
