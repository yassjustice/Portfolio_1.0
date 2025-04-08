// pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import styles from '../styles/Home.module.css';

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={styles.homePage}>
      <Hero />
      
      <section className={styles.featuredProjects}>
        <div className={styles.sectionHeader}>
          <motion.h2 
            className={styles.sectionTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className={styles.sectionSubtitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Check out some of my recent work and creative solutions
          </motion.p>
        </div>
        
        <div className={styles.projectsGrid}>
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className={styles.viewAllContainer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          whileHover={{ y: -2 }}
        >
          <Link to="/projects" className={styles.viewAllLink}>
            View All Projects
          </Link>
        </motion.div>
      </section>
      
      <section className={styles.aboutPreview}>
        <div className={styles.aboutContent}>
          <motion.div 
            className={styles.aboutText}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={styles.sectionTitle}>About Me</h2>
            <p className={styles.aboutDescription}>
              I'm a passionate web and mobile developer with a strong background in creating responsive, 
              user-friendly applications. My approach combines technical expertise with an athletic mindset 
              of discipline and continuous improvement.
            </p>
            <Link to="/about" className={styles.readMoreLink}>
              Read More About Me <FaArrowRight />
            </Link>
          </motion.div>
          
          <motion.div 
            className={styles.aboutImage}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src="/images/aboutPreview.jpeg" alt="About Me" />
          </motion.div>
        </div>
      </section>
      
      <section className={styles.contactPreview}>
        <motion.div 
          className={styles.contactContent}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Let's Work Together</h2>
          <p className={styles.contactText}>
            Have a project in mind or want to discuss opportunities? <br />
            I'm always open to new ideas and collaborations.
          </p>
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact" className={styles.contactButton}>
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;