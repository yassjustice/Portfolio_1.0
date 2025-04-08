// pages/Projects.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  // Extract all unique technologies from projects
  const allTechnologies = ['all', ...new Set(
    projects.flatMap(project => project.technologies)
  )];

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project =>
        project.technologies.includes(filter)
      );
      setFilteredProjects(filtered);
    }
  }, [filter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className={styles.projectsPage}>
      <motion.section 
        className={styles.projectsHero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.pageTitle}>My Projects</h1>
        <p className={styles.heroSubtitle}>Explore my latest work and side projects</p>
      </motion.section>

      <section className={styles.projectsFilter}>
        <div className={styles.filterContainer}>
          {allTechnologies.map((tech, index) => (
            <motion.button
              key={index}
              className={`${styles.filterButton} ${filter === tech ? styles.active : ''}`}
              onClick={() => setFilter(tech)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </motion.button>
          ))}
        </div>
      </section>

      <motion.section 
        className={styles.projectsGrid}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))
        ) : (
          <motion.div 
            className={styles.noProjects}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3>No projects found with this technology</h3>
            <p>Try selecting a different filter</p>
          </motion.div>
        )}
      </motion.section>

      <motion.section 
        className={styles.contactCta}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.ctaContent}>
          <h2>Have a project in mind?</h2>
          <p>Let's collaborate and bring your ideas to life</p>
          <motion.a 
            href="/contact"
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default Projects;