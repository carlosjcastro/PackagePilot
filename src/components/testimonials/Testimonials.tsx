import React from 'react';
import './testimonials.css';
import { feedback } from '../constants';
import Feedback from '../FeedbackCard/Feedback';

const Testimonials: React.FC = () => (
  <section id="clients" className="testimonials-section">
    <div className="gradient-background" />

    <div className="section-header">
      <h2 className="section-title">What People are saying about us</h2>
      <div className="section-description">
        <p className="section-paragraph">
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="feedback-container">
      {feedback.map((card) => (
        <Feedback key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
