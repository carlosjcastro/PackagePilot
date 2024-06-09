import React from 'react';
import { Link } from 'react-router-dom';
import {ArrowForward } from '@mui/icons-material';
import packagepilot from '../../assets/logos/PackagePilot-Logo.png'
import './footer.css';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img className='logo-footer' src={packagepilot} alt="" title='PackagePilot'/>
          <h1>PackagePilot</h1>
        </div>
        <div className="footer-grid">
          <div className="footer-item">
            <div className="footer-title">Empresa</div>
            <Link to="/aboutus" className="footer-link">About Us</Link>
            <Link to="/team" className="footer-link">Team</Link>
          </div>
          {/* <div className="footer-item">
            <div className="footer-title">Productos</div>
            <Link to="/products/product1" className="footer-link">Producto 1</Link>
            <Link to="/products/product2" className="footer-link">Producto 2</Link>
            <Link to="/products/product3" className="footer-link">Producto 3</Link>
            <Link to="/products/product4" className="footer-link">Producto 4</Link>
          </div> */}
          <div className="footer-item">
            <div className="footer-title">Soporte</div>
            <Link to="/docs" className="footer-link">Documentación</Link>
            <Link to="/community" className="footer-link">Comunidad</Link>
            <Link to="/faq" className="footer-link">FAQ</Link>
            <Link to="/help" className="footer-link">Ayuda</Link>
          </div>
          <div className="footer-item">
            <div className="footer-title">Legal</div>
            <Link to="/terms" className="footer-link">Términos de Uso</Link>
            <Link to="/privacy" className="footer-link">Privacidad</Link>
            <Link to="/cookies" className="footer-link">Cookies</Link>
            <Link to="/licenses" className="footer-link">Licencias</Link>
          </div>
          <div className="footer-item">
  <div className="footer-title">Redes Sociales</div>
  <span className="social-link">
    <a href="https://github.com" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub<ArrowForward /></a>
  </span>
  <span className="social-link">
    <a href="https://linkedin.com" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn<ArrowForward /></a>
  </span>
</div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} PackagePilot. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
