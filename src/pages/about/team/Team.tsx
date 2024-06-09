// import React from 'react';
import './team.css';
import 'boxicons';
import { motion } from 'framer-motion';
import Carlos from '../../../assets/team/Carlos.jpg';
import Liliana from '../../../assets/team/Liliana.jpg'
import { useTranslation } from 'react-i18next';

const members = [
  {
    name: 'Carlos Castro',
    role: 'Front-end Developer & Azure AI Engineer',
    bio: '',
    avatar: Carlos,
    social: {
      portfolio: 'https://cjcastrogalante.com',
      linkedin: 'https://www.linkedin.com/in/carlosjcastrog',
      github: 'https://github.com/carlosjcastro'
    }
  },
  {
    name: 'Lliliana Escobar',
    role: 'Front-end Developer',
    bio: '',
    avatar: Liliana, // Agrega la ruta de la imagen de Lliliana aquí
    social: {
      portfolio: 'https://cjcastrogalante.com',
      linkedin: 'https://www.linkedin.com/in/liliana-escobar-a9714a22a',
      github: 'https://github.com/usuario_github'
    }
  },

];

const Team = () => {
  const [t] = useTranslation("global");
  return (
    <div className="team-section">
      <div className="container-team">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {t("team.about-team-title")}
        </motion.h1>
        <motion.p 
          className="section-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {t("team.about-team-text")}
        </motion.p>
        <div className="team-members">
          {members.map((member, index) => (
            <motion.div 
              className="team-member" 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="avatar">
                <img src={member.avatar} alt={member.name} />
                <div className="avatar-fallback">{member.name.charAt(0)}</div>
              </div>
              <div className="member-details">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
                {member.social && (
                  <div className="social-links">
                    {member.social.portfolio && (
                      <a href={member.social.portfolio} target="_blank" rel="noopener noreferrer"><i className='bx bx-link custom-icon'></i></a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin custom-icon'></i></a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer"><i className='bx bxl-github custom-icon'></i></a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
