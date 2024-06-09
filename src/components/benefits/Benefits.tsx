import React from 'react';
import { benefits } from '../../components/constants';
import Heading from '../../components/heading/Heading';
import Section from '../../components/section/Section';
import './benefits.css';

const Benefits: React.FC = () => {
  return (
    <Section id="features">
      <div className="container">
        <Heading
          className="heading-container"
          title="Chat Smarter, Not Harder with Brainwave"
        />
        <div className="benefits-container">
          {benefits.map((item: any) => (
            <div className="benefit-item" key={item.id}>
              <div
                className="benefit-content"
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                }}
              >
                <h5 className="benefit-title">{item.title}</h5>
                <p className="benefit-text">{item.text}</p>
                <div className="benefit-footer">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="explore-more">Explore more</p>
                </div>
              </div>
              <div
                className="benefit-overlay"
                style={{ clipPath: 'url(#benefits)' }}
              >
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
