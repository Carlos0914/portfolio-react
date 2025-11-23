import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../../context/Language';
import { strings } from '../../locales/LocalizedStrings';
import { 
  Home, 
  Briefcase, 
  FolderGit2, 
  Wrench, 
  Mail, 
  ChevronLeft, 
  ChevronRight,
  Globe
} from 'lucide-react';
import './Sidebar.css';

// eslint-disable-next-line react/prop-types
const Sidebar = ({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) => {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const navItems = [
    { path: '/', icon: <Home size={24} />, label: strings.navbar.about },
    { path: '/history', icon: <Briefcase size={24} />, label: strings.navbar.history },
    // { path: '/projects', icon: <FolderGit2 size={24} />, label: strings.navbar.projects },
    { path: '/services', icon: <Wrench size={24} />, label: strings.navbar.services },
    { path: '/contact', icon: <Mail size={24} />, label: strings.navbar.contact },
  ];

  return (
    <>
      <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo-text">Portfolio</div>
          <button className="toggle-btn" onClick={toggleSidebar}>
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        <nav className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-footer">
          <button className="lang-switch" onClick={toggleLanguage}>
            <Globe size={20} />
            {!collapsed && <span>{language === 'en' ? 'English' : 'Español'}</span>}
          </button>
        </div>
      </aside>
      
      {/* Overlay for mobile */}
      {mobileOpen && (
        <div 
          className="sidebar-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 99
          }}
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
