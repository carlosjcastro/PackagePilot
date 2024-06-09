import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import robot from '../../assets/img/robot.png';
import TestimonialsCards from './testimonials/TestimonialsCards';
import { useTranslation } from 'react-i18next';


const Home: React.FC = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <div>
      <section className='welcome-web content-center content-app'>
        <div className="welcome-content">
          <div className="text-content">
            <h1>PackagePilot</h1>
            <p>{t("home.hero-description")}</p>

            <div className="buttons-container">
   
              <Link to="contact" className="button-get-started btn-gs">Talk With Us</Link>
              <Link to="/shipments" className="button-get-started btn-gs">Get Started</Link>
            </div>
          </div>
        </div>
        <div className="image-content">
          <img src={robot} alt="Imagen de CollabNet" />
        </div>
      </section>

      <section className='what-we-provide content-center content-app'>
        <h2>{t("home.whatweprovide-title")}</h2>
        <div className="cards-container">
          <div className="card">
            <i className='bx bx-planet' ></i>
            <h3>{t("home.wwp-access-title")}</h3>
            <p>{t("home.wwp-access-text")}</p>
          </div>
          <div className="card">
            <i className='bx bx-shield-alt-2' ></i>
            <h3>{t("home.wwp-security-title")}</h3>
            <p>{t("home.wwp-security-text")}</p>
          </div>
          <div className="card">
            <i className='bx bx-network-chart' ></i>
            <h3>{t("home.wwp-intelligence-title")}</h3>
            <p>{t("home.wwp-intelligence-text")}</p>
          </div>
        </div>
      </section>

      <section className='testimonials content-center content-app'>
        <h2>¿De qué hablan nuestros clientes?</h2>
        <TestimonialsCards />
      </section>
    </div>
  );
};

export default Home;
