import React from 'react';
import './testimonials-cards.css';
import testimonial1 from '../../../assets/img/people-testimonial-1.svg';
import testimonial2 from '../../../assets/img/people-testimonial-2.svg';
import testimonial3 from '../../../assets/img/people-testimonial-3.svg';
import { useTranslation } from 'react-i18next';

const TestimonialsCards = () => {
  const { t } = useTranslation("global");

  const testimonialsData = [
    {
      name: 'Andrea Johnson',
      photo: testimonial1,
      testimonial: t('home.testimonials.testimonial-card-one'),
    },
    {
      name: 'María García',
      photo: testimonial2,
      testimonial: t('home.testimonials.testimonial-card-two'),
    },
    {
      name: 'William Jones',
      photo: testimonial3,
      testimonial: t('home.testimonials.testimonial-card-three'),
    }
  ];

  return (
    <div className='testimonials-container'>
      {testimonialsData.map((testimonial, index) => (
        <div key={index} className='testimonial'>
          <img src={testimonial.photo} alt={`Image ${testimonial.name}`} />
          <h3>{testimonial.name}</h3>
          <p>{testimonial.testimonial}</p>
        </div>
      ))}
    </div>
  );
}

export default TestimonialsCards;
