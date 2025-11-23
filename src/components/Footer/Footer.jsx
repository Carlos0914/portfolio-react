import { Github, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/Carlos0914" target="_blank" rel="noreferrer" className="social-link">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/carlos-lopez-dev/" target="_blank" rel="noreferrer" className="social-link">
            <Linkedin size={24} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Carlos López. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
