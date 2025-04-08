// components/ExperienceCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/ExperienceCard.module.css';

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div 
      className={styles.experienceCard}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.experienceTimeline}>
        <div className={styles.timelineDot}></div>
        <div className={styles.timelineLine}></div>
      </div>
      <div className={styles.experienceContent}>
        <div className={styles.experienceHeader}>
          <h3 className={styles.title}>{experience.title}</h3>
          <p className={styles.company}>{experience.company}</p>
          <p className={styles.period}>{experience.period}</p>
        </div>
        <p className={styles.description}>{experience.description}</p>
        <ul className={styles.achievements}>
          {experience.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;