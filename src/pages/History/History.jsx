import { useContext } from "react";
import { Helmet } from "react-helmet";
import { strings } from "../../locales/LocalizedStrings";
import { LanguageContext } from "../../context/Language";
import BilboLogo from "../../assets/Bilbo.webp";
import ClickITLogo from "../../assets/ClickIT.png";
import GoogleLogo from "../../assets/Google.png";
import CapitalOneLogo from "../../assets/CapitalOne.png";
import CognizantLogo from "../../assets/cognizant.png";
import { Calendar, User, Tag, Monitor, Globe } from "lucide-react";
import "./History.css";

const History = () => {
  // Consume context to trigger re-render on language change
  useContext(LanguageContext);
  
  const {
    history: { google, capitalone, cognizant, clickit, bilbo },
  } = strings;

  return (
    <div className="history-container">
      <Helmet>
        <title>{strings.meta.history}</title>
      </Helmet>
      
      <h1>{strings.navbar.history}</h1>

      <div className="timeline">
        {/* Google */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
              <img src={GoogleLogo} alt="Google" className="company-logo" style={{background: "#fff"}}/>
            <h3 className="job-role">{google.role}</h3>
            
            <div className="job-details">
              <div className="detail-row">
                <Calendar size={18} />
                <span>{google.date}</span>
              </div>
              <div className="detail-row">
                <Tag size={18} />
                <span>{google.line}</span>
              </div>
              <div className="detail-row">
                <Monitor size={18} />
                <span>{google.tech}</span>
              </div>
              <div className="detail-row">
                <Globe size={18} />
                <a href="https://www.google.com" target="_blank" rel="noreferrer">
                  google.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Capital One */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <img src={CapitalOneLogo} alt="Capital One" className="company-logo" style={{background: "#fff"}} />
            <h3 className="job-role">{capitalone.role}</h3>
            
            <div className="job-details">
              <div className="detail-row">
                <Calendar size={18} />
                <span>{capitalone.date}</span>
              </div>
              <div className="detail-row">
                <Tag size={18} />
                <span>{capitalone.line}</span>
              </div>
              <div className="detail-row">
                <Monitor size={18} />
                <span>{capitalone.tech}</span>
              </div>
              <div className="detail-row">
                <Globe size={18} />
                <a href="https://www.capitalone.com" target="_blank" rel="noreferrer">
                  capitalone.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Cognizant */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <img src={CognizantLogo} alt="Cognizant" className="company-logo" style={{background: "#fff"}} />
            <h3 className="job-role">{cognizant.role}</h3>
            
            <div className="job-details">
              <div className="detail-row">
                <Calendar size={18} />
                <span>{cognizant.date}</span>
              </div>
              <div className="detail-row">
                <Tag size={18} />
                <span>{cognizant.line}</span>
              </div>
              <div className="detail-row">
                <Monitor size={18} />
                <span>{cognizant.tech}</span>
              </div>
              <div className="detail-row">
                <Globe size={18} />
                <a href="https://www.cognizant.com" target="_blank" rel="noreferrer">
                  cognizant.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ClickIT */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <img src={ClickITLogo} alt="ClickIT" className="company-logo" />
            <h3 className="job-role">{clickit.role}</h3>
            
            <div className="job-details">
              <div className="detail-row">
                <Calendar size={18} />
                <span>{clickit.date}</span>
              </div>
              <div className="detail-row">
                <Tag size={18} />
                <span>{clickit.line}</span>
              </div>
              <div className="detail-row">
                <Monitor size={18} />
                <span>{clickit.tech}</span>
              </div>
              <div className="detail-row">
                <Globe size={18} />
                <a href="https://www.clickittech.com" target="_blank" rel="noreferrer">
                  clickittech.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bilbo */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <img src={BilboLogo} alt="Bilbo" className="company-logo" />
            <h3 className="job-role">{bilbo.role}</h3>
            
            <div className="job-details">
              <div className="detail-row">
                <Calendar size={18} />
                <span>2020 - 2021</span>
              </div>
              <div className="detail-row">
                <Tag size={18} />
                <span>{bilbo.line}</span>
              </div>
              <div className="detail-row">
                <Monitor size={18} />
                <span>{bilbo.tech}</span>
              </div>
              <div className="detail-row">
                <Globe size={18} />
                <a href="https://www.bilbo.mx" target="_blank" rel="noreferrer">
                  bilbo.mx
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
