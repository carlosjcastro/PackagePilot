import React, { useState, useEffect } from 'react';
import './menu.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import collabnet from '../../assets/logos/collabnet.png';
import packagepilot from '../../assets/logos/PackagePilot-Logo.png'

interface SVGProps {
  width: number;
  height: number;
  fillColor: string;
}

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [t, i18n] = useTranslation("global");
  const [language, setLanguage] = useState('en');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsSubmenuOpen(false);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const svgProps: SVGProps = {
    width: 24,
    height: 24,
    fillColor: 'blue',
  };

  return (
    <header className="header">
      <div className="container-menu">
        <NavLink to="/" className={`logo ${isOpen ? 'active' : ''}`}>
          <img className='collabnet-logo' src={packagepilot} alt="" />
        </NavLink>
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" activeClassName="active" className="nav-link" onClick={toggleMenu}>
            {t('header.menu-home')}
          </NavLink>
          <div className="menu-item">
            <a href="#" onClick={toggleSubmenu}>
              {t('header.menu-about')}
            </a>
            {isSubmenuOpen && (
              <div className="sub-menu">
                <NavLink to="/aboutus" activeclassname="active" className="nav-link" onClick={toggleMenu}>
                  {t('header.menu-aboutUs')}
                </NavLink>
                <NavLink to="/team" activeclassname="active" className="nav-link" onClick={toggleMenu}>
                  {t('header.menu-ourTeam')}
                </NavLink>
              </div>
            )}
          </div>
          <NavLink to="/contact" activeclassname="active" className="nav-link" onClick={toggleMenu}>
            {t('header.menu-contact')}
          </NavLink>
        </nav>

        <div className="actions">
        <NavLink to="/login" className="btn" onClick={toggleMenu}>
            Log In
          </NavLink>
          <NavLink to="/signup"  className="btn btn btn-secondary" onClick={toggleMenu}>
            Get Started
          </NavLink>
          {/* Botón de cambio de idioma */}
          <div className="translation">
            <button className={language === 'es' ? "actived" : ""} onClick={toggleLanguage}>
              <div className="button-content">
                <span className="en-text">EN</span>
                <span className="es-text">ES</span>
              </div>
              <div className="indicator"></div>
            </button>
          </div>
        </div>

        <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </div>
      {isOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Menu;
