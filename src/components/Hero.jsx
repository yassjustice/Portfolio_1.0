// components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    // Hide scroll indicator after 5 seconds
    const timer = setTimeout(() => {
      setShowScroll(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroWrapper}>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm <span className={styles.highlight}>{personalInfo.name}</span>
            <br />
            {personalInfo.title}
          </motion.h1>

          <motion.p 
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div 
            className={styles.heroCTA}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/projects" className={styles.primaryButton}>
              View My Work
            </Link>
            <Link to="/contact" className={styles.secondaryButton}>
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.heroImageWrapper}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.imageContainer}>
            <motion.div 
              className={styles.imageBackground}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
            <motion.img 
              src="/images/Photo_Hakimi_Yassir.jpg"
              alt={personalInfo.name}
              className={styles.profileImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showScroll && (
          <motion.div 
            className={styles.scrollIndicator}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.8 }}
          >
            <div className={styles.mouseIcon}>
              <div className={styles.mouseWheel} />
            </div>
            <span className={styles.scrollText}>Scroll Down</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;