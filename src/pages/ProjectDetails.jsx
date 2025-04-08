import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { projects } from '../data/projects';
import styles from '../styles/ProjectDetails.module.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className={styles.projectNotFound}>
        <h2>Project Not Found</h2>
        <Link to="/projects" className={styles.backLink}>Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className={styles.projectDetailsPage}>
      <motion.div 
        className={styles.projectDetailsContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <button 
          className={styles.backButton}
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft /> Back
        </button>

        <motion.section 
          className={styles.projectHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className={styles.projectTitle}>{project.title}</h1>
          <p className={styles.projectDescription}>{project.fullDescription}</p>
          
          <div className={styles.projectLinks}>
            <a 
              href={project.sourceCode} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              <FaGithub /> View Source
            </a>
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>
        </motion.section>

        <motion.section 
          className={styles.projectGallery}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {project.images.map((image, index) => (
            <motion.div 
              key={index}
              className={styles.galleryItem}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={image} alt={`${project.title} screenshot ${index + 1}`} />
            </motion.div>
          ))}
        </motion.section>

        <motion.section 
          className={styles.projectFeatures}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Key Features</h2>
          <ul className={styles.featuresList}>
            {project.features.map((feature, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
              >
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section 
          className={styles.projectTech}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2>Technologies Used</h2>
          <div className={styles.techTags}>
            {project.technologies.map((tech, index) => (
              <motion.span 
                key={index} 
                className={styles.techTag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {project.testimonial && (
          <motion.section 
            className={styles.projectTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2>Client Testimonial</h2>
            <blockquote>
              <p>"{project.testimonial.quote}"</p>
              <footer>- {project.testimonial.author}</footer>
            </blockquote>
          </motion.section>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectDetails;