import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import robot from '../../assets/img/robot.png';

const Home: React.FC = () => {
  return (
    <div>
      <section className='welcome-web content-center content-app'>
        <div className="welcome-content">
          <div className="text-content">
            <h1>PackagePilot</h1>
            <p>Sailing together towards a future of more efficient shipments: Connecting ideas, resources, and talents to build a better tomorrow.</p>

            <div className="buttons-container">
   
              <Link to="contact" className="button-get-started btn-gs">Talk With Us</Link>
              <Link to="signup" className="button-get-started btn-gs">Get Started</Link>
            </div>
          </div>
        </div>
        <div className="image-content">
          <img src={robot} alt="Imagen de CollabNet" />
        </div>
      </section>

      <section className='what-we-provide content-center content-app'>
        <h2>¿Qué brindamos?</h2>
        <div className="cards-container">
          <div className="card">
            <i className='bx bx-planet' ></i>
            <h3>Acceso Centralizado</h3>
            <p>Efficiently connect teams and ideas to foster innovation.</p>
          </div>
          <div className="card">
            <i className='bx bx-shield-alt-2' ></i>
            <h3>100% Seguridad</h3>
            <p>Expand your reach and influence within our extensive network.</p>
          </div>
          <div className="card">
            <i className='bx bx-network-chart' ></i>
            <h3>Análisis Inteligente</h3>
            <p>Forge meaningful relationships that drive mutual success.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
