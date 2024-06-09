import React, { useState } from 'react';
import './about.css';
import people1 from '../../assets/img/people-1.svg';
import people2 from '../../assets/img/people-2.svg';
// import computer1 from '../../assets/img/computer-1.svg';
import responsibility from '../../assets/icons/responsibility.svg';
import cf from '../../assets/logos/cf.png';
import microsoft from '../../assets/logos/microsoft.png';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';


interface SectionData {
  title: string;
  content: string;
  images?: string[];
  values?: string[];
  icons?: string[];
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


const AboutSection: React.FC<SectionData> = ({ title, content, images, values, icons }) => {
  const [t] = useTranslation("global");

  return (
    <motion.section 
      className="about-section"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="section-content">
        {title === t('about.about-title') ? (
          <div className="client-title-container client-title">
            <h2>{title}</h2>
          </div>
        ) : (
          <h2>{title}</h2>
        )}
        <p>{content}</p>
        {values && (
          <div className="values-cards">
            {values.map((value, index) => (
              <motion.div 
                className="value-card" 
                key={index}
                variants={childVariants}
              >
                {icons && <img src={icons[index]} alt={`Icon ${index + 1}`} className="value-icon" />}
                <p>{value}</p>
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
          className={`${title === t('about.clients-title') ? 'client-image' : 'about-image'}`}
          variants={childVariants}
        />
      ))}
    </div>
      )}
    </motion.section>
  );
};

const About: React.FC = () => {
  const [t, i18n] = useTranslation("global");

  const sections: SectionData[] = [
    {
      title: t('about.about-mission-title'),
      content: t('about.about-content'),
      images: [people1],
    },
    {
      title: t('about.about-vision-title'),
      content: t('about.vision-content'),
      images: [people2],
    },
    {
      title: t('about.about-values-title'),
      content: t('about.values-content'),
      values: [
        t('about.values-integrity'),
        t('about.values-innovation'),
        t('about.values-collaboration'),
        t('about.values-responsibility'),
        t('about.values-excellence'),
        t('about.values-excellence'),
      ],
      icons: [responsibility, responsibility, responsibility, responsibility, responsibility, responsibility],
    },
    // {
    //   title: t('about.about-clients-title'),
    //   content: t('about.clients-content'),
    //   images: [cf, microsoft],
    // },
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
