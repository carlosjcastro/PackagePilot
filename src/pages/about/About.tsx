import React from 'react';
import './about.css';
import people1 from '../../assets/img/people-1.svg';
import people2 from '../../assets/img/people-2.svg';
import rocket from '../../assets/icons/rocket.svg';
import responsibility from '../../assets/icons/responsibility.svg';
import medal from '../../assets/icons/medal.svg'
import collaboration from '../../assets/icons/collaboration.svg';
import trust from '../../assets/icons/trust.svg';
import client from '../../assets/icons/client.svg';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface ValueData {
  text: string;
  icon: string;
  shortContent: string;
}

interface SectionData {
  title: string;
  content: string;
  values?: ValueData[];
  images?: string[];
}

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};  

const AboutSection: React.FC<SectionData> = ({ title, content, images, values }) => {
  return (
    <motion.section 
      className="about-section"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="section-content">
        <h2>{title}</h2>
        <p>{content}</p>
        {values && (
          <div className="values-cards">
            {values.map((value, index) => (
              <motion.div 
                className="value-card" 
                key={index}
                variants={childVariants}
              >
                <img src={value.icon} alt={`Icon ${index + 1}`} className="value-icon" />
                <p className='title-value-cards'>{value.text}</p>
                <p>{value.shortContent}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      {images && images.length > 0 && (
        <div className="images-container">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`${title} image ${index + 1}`}
              className="about-image"
              variants={childVariants}
            />
          ))}
        </div>
      )}
    </motion.section>
  );
};

const About: React.FC = () => {
  const { t } = useTranslation("global");

  const sections: SectionData[] = [
    {
      title: t('about.about-vision-title'),
      content: t('about.about-vision-text'),
      images: [people2],
    },
    {
      title: t('about.about-mission-title'),
      content: t('about.about-mission-text'),
      images: [people1],
    },
    {
      title: t('about.about-values-title'),
      content: t('about.about-values-text'),
      values: [
        { text: t('about.about-value-card-innovation'), icon: rocket, shortContent: t('about.about-value-card-innovation-text') },
        { text: t('about.about-value-card-trust'), icon: trust, shortContent: t('about.about-value-card-trust-text') },
        { text: t('about.about-value-card-collaboration'), icon: collaboration, shortContent: t('about.about-value-card-collaboration-text') },
        { text: t('about.about-value-card-excellence'), icon: medal, shortContent: t('about.about-value-card-excellence-text') },
        { text: t('about.about-value-card-customerfocus'), icon: client, shortContent: t('about.about-value-card-customerfocus-text') },
        { text: t('about.about-value-card-responsibility'), icon: responsibility, shortContent: t('about.about-value-card-responsibility-text') },
      ],
    },
  ];
  
  return (
    <div className="about-container">
      <header className="about-header">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
         {t('about.about-title')}
        </motion.h1>
      </header>

      <div className="sections-container">
        {sections.map((section, index) => (
          <AboutSection key={index} {...section} />
        ))}
      </div>
    </div>
  );
};

export default About;
