// components/SkillsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import styles from '../styles/SkillsSection.module.css';

const SkillsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const skillCategories = [
    { title: "Languages", items: skills.languages },
    { title: "Frameworks", items: skills.frameworks },
    { title: "Databases", items: skills.databases },
    { title: "Tools", items: skills.tools },
    { title: "Methodologies", items: skills.methodologies }
  ];

  return (
    <section className={styles.skillsSection}>
      <motion.h2 
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills & Expertise
      </motion.h2>
      
      <motion.div 
        className={styles.skillsContainer}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index} 
            className={styles.skillCategory}
            variants={item}
          >
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.skillList}>
              {category.items.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  className={styles.skillTag}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'var(--primary-color-dark)' 
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;