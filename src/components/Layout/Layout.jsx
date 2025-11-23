import { useState, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import { Menu } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { LanguageContext } from '../../context/Language';
import './Layout.css';

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // Consume context to trigger re-render on language change
  useContext(LanguageContext);

  return (
    <div className="layout">
      <Toaster position="top-right" />
      <Sidebar 
        collapsed={collapsed} 
        setCollapsed={setCollapsed} 
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      
      <main className={`main-content ${collapsed ? 'collapsed' : ''}`}>
        <div className="mobile-header">
          <button onClick={() => setMobileOpen(true)}>
            <Menu size={24} color="var(--text-primary)" />
          </button>
          <span className="logo-text" style={{ fontSize: '1.2rem' }}>Portfolio</span>
          <div style={{ width: 24 }}></div> {/* Spacer for centering */}
        </div>

        <div className="page-container">
          <Outlet />
        </div>
        
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
