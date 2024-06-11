import './testimonials-cards.css';
import testimonial1 from '../../../assets/img/people-testimonial-1.png';
import testimonial2 from '../../../assets/img/people-testimonial-2.png';
import testimonial3 from '../../../assets/img/people-testimonial-3.png';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

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
      <AnimatePresence>
        {testimonialsData.map((testimonial, index) => (
          <motion.div 
            key={index} 
            className='testimonial'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}>
            <img src={testimonial.photo} alt={`Image ${testimonial.name}`} />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.testimonial}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default TestimonialsCards;
