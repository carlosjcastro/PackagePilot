import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import robot from '../../assets/img/robot.webp';
import TestimonialsCards from './testimonials/TestimonialsCards';
import { useTranslation } from 'react-i18next';
import client1 from '../../assets/logos/microsoft.png';
import client2 from '../../assets/logos/cf.png';
import { motion, AnimatePresence } from 'framer-motion';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <div>
      {/* Hero */}
      <section className='welcome-web content-center content-app'>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="welcome-content">
            <div className="text-content">
              <h1>PackagePilot</h1>
              <p>{t("home.hero-description")}</p>

              <div className="buttons-container">
                <Link to="/contact" className="button-get-started btn-gs">{t("home.hero-btn-twu")}</Link>
                <Link to="/shipments" className="button-get-started btn-gs">{t("home.hero-btn-gs")}</Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="image-content">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            src={robot}
            alt="PackagePilot" />
        </div>
      </section>

      {/* What We Provide */}
      <section className='what-we-provide content-center content-app'>
        <h2>{t("home.whatweprovide-title")}</h2>
        <AnimatePresence>
          <div className="cards-container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card">
              <i className='bx bx-planet' ></i>
              <h3>{t("home.wwp-access-title")}</h3>
              <p>{t("home.wwp-access-text")}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="card">
              <i className='bx bx-shield-alt-2' ></i>
              <h3>{t("home.wwp-security-title")}</h3>
              <p>{t("home.wwp-security-text")}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="card">
              <i className='bx bx-network-chart' ></i>
              <h3>{t("home.wwp-intelligence-title")}</h3>
              <p>{t("home.wwp-intelligence-text")}</p>
            </motion.div>
          </div>
        </AnimatePresence>
      </section>

      {/* Testimonials */}
      <section className='testimonials content-center content-app'>
        <h2>{t("home.testimonials.testimonial-title")}</h2>
        <TestimonialsCards />
      </section>

       {/* Our Clients */}
       <section className='our-clients content-center content-app'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}>
          {t("home.our-clients-title")}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="clients-container">
          <a href="https://www.microsoft.com/" target="_blank" rel="noopener noreferrer">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={client1}
              alt="Microsoft"
              title='Microsoft'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </a>
          <a href="https://codigofacilito.com/" target="_blank" rel="noopener noreferrer">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={client2}
              alt="Código Facilito"
              title='Código Facilito'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
