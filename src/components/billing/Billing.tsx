import React from 'react';
import apple from '../../assets/apple.svg'
import work from '../../assets/work.jpg'
import google from '../../assets/google.svg'
import './billing.css';

const Billing: React.FC = () => (
  <section id="product" className="section-reverse">
    <div className="section-img-reverse">
      <img 
        src={work} 
        alt="billing" 
        className="billing-image" 
      />

      {/* gradient start */}
      <div className="white-gradient" />
      <div className="pink-gradient" />
      {/* gradient end */}
    </div>

    <div className="section-info">
      <h2 className="heading2">
        Easily control your <br className="sm-block hidden" /> billing & invoicing
      </h2>
      <p className="paragraph">
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>

      <div className="button-container">
        <img 
          src={apple} 
          alt="apple_store" 
          className="store-button" 
        />
        <img 
          src={google} 
          alt="google_play" 
          className="store-button" 
        />
      </div>
    </div>
  </section>
);

export default Billing;
