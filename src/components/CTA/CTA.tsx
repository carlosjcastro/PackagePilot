import React from 'react';
import './cta.css';

interface ButtonProps {
  styles?: string;
}

const Button: React.FC<ButtonProps> = ({ styles }) => (
  <button type="button" className={`custom-button-cta ${styles}`}>
    Get Started
  </button>
);

export default Button;
