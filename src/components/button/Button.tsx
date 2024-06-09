import React from "react";
import './button.css';

interface ButtonProps {
  styles?: string;
}

const Button: React.FC<ButtonProps> = ({ styles }) => (
  <button type="button" className={`custom-button-add ${styles}`}>
    Get Started
  </button>
);

export default Button;
