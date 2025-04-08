// components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className={styles.projectCard}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.imageWrapper}>
        <img 
          src={project.images[0]} 
          alt={project.title}
          className={styles.projectImage}
          loading="lazy"
        />
        <div className={styles.imageOverlay}>
          <div className={styles.projectLinks}>
            {project.sourceCode && (
              <a 
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                <FaGithub /> Code
              </a>
            )}
            {project.liveDemo && (
              <a 
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                <FaExternalLinkAlt /> Demo
              </a>
            )}
          </div>
        </div>
      </div>

      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.shortDescription}</p>
        
        <div className={styles.techStack}>
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className={styles.techTag}>{tech}</span>
          ))}
          {project.technologies.length > 3 && (
            <span className={styles.moreTag}>
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <Link 
          to={`/projects/${project.id}`} 
          className={styles.viewDetailsLink}
        >
          View Details <FaArrowRight />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
