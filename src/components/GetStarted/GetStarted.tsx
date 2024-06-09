import React from 'react';
import { arrowUp } from '../../assets';
import './getstarted.css';

const GetStarted: React.FC = () => (
  <div className="get-started">
    <div className="inner-container">
      <div className="flex-row">
        <p className="get-started-text">
          <span className="text-gradient">Get</span>
          <img src={arrowUp} alt="arrow-up" className="arrow-icon" />
        </p>
      </div>
      <p className="get-started-text">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
