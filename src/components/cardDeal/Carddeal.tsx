import React from 'react';
import imagen from '../../assets/imagen.jpeg';
import Button from '../../components/button/Button';
import './cardDeal.css';

const CardDeal: React.FC = () => (
  <section className="section">
    <div className="section-info">
      <h2 className="heading2">
        Find a better card deal <br className="sm-block hidden" /> in few easy steps.
      </h2>
      <p className="paragraph">
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor. Aliquet ultrices ac, ametau.
      </p>
      <Button styles="mt-10" />
    </div>

    <div className="section-img">
      <img 
        src={imagen} 
        alt="billing" 
        className="billing-image" 
      />
    </div>
  </section>
);

export default CardDeal;
