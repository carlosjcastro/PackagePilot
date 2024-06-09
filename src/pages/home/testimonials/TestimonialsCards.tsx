import React from 'react'
import './testimonials-cards.css'
import testimonial1 from '../../../assets/img/people-testimonial-1.svg'
import testimonial2 from '../../../assets/img/people-testimonial-2.svg'
import testimonial3 from '../../../assets/img/people-testimonial-3.svg'

const testimonialsData = [
    {
      name: 'Andrea',
      photo: testimonial1,
      testimonial: '"PackagePilot ha transformado la manera en que gestionamos nuestros envíos. ¡Altamente recomendado!"'
    },
    {
      name: 'María García',
      photo: testimonial2,
      testimonial: '"La atención del equipo de PackagePilot es excepcional. No podríamos estar más satisfechos."'
    },
    {
      name: 'William Jones',
      photo: testimonial3,
      testimonial: '"Gracias a PackagePilot, nuestras operaciones logísticas son más eficientes que nunca."'
    }
  ];

const TestimonialsCards = () => {
  return (
    <div>
         <div className='testimonials-container'>
      {testimonialsData.map((testimonial, index) => (
        <div key={index} className='testimonial'>
          <img src={testimonial.photo} alt={`Foto de ${testimonial.name}`} />
          <h3>{testimonial.name}</h3>
          <p>{testimonial.testimonial}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default TestimonialsCards
