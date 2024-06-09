import React from 'react';
import { features } from '../constants';
import Button from '../../components/button/Button';
import './business.css';

interface FeatureCardProps {
  icon: string;
  title: string;
  content: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, content, index }) => (
  <div className={`feature-card ${index !== features.length - 1 ? 'mb-6' : 'mb-0'}`}>
    <div className="icon-container">
      <img src={icon} alt="star" className="icon" />
    </div>
    <div className="feature-content">
      <h4 className="feature-title">{title}</h4>
      <p className="feature-description">{content}</p>
    </div>
  </div>
);

const Business: React.FC = () => (
  <section id="features" className="section">
    <div className="section-info">
      <h2 className="heading2">
        Bienvenido a la solución definitiva, <br className="sm-block hidden" />para la gestión de datos públicos.
      </h2>
      <p className="paragraph">
        Nuestra plataforma utiliza tecnología de vanguardia para ofrecerte búsquedas rápidas y precisas, análisis automatizado de textos, y recomendaciones basadas en inteligencia artificial.
      </p>
      <Button styles="mt-10" />
    </div>

    <div className="section-img">
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
