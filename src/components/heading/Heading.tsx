import React from 'react';
import './headings.css';

interface HeadingProps {
  className?: string;
  title?: string;
}

const Heading: React.FC<HeadingProps> = ({ className, title }) => (
  <div className={`heading-container ${className}`}>
    {title && <h2 className="heading-title">{title}</h2>}
  </div>
);

export default Heading;
