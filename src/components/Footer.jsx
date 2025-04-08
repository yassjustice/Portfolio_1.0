// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub />, url: personalInfo.github, label: "GitHub" },
    { icon: <FaLinkedinIn />, url: personalInfo.linkedin, label: "LinkedIn" },
    { icon: <FaTwitter />, url: personalInfo.twitter, label: "Twitter" },
    { icon: <FaEnvelope />, url: `mailto:${personalInfo.email}`, label: "Email" }
  ];

  const footerLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <motion.div 
            className={styles.footerLogo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className={styles.logoLink}>
              <span className={styles.logoText}>{personalInfo.initials}</span>
            </Link>
            <p className={styles.tagline}>Web & Mobile Developer</p>
          </motion.div>

          <motion.nav 
            className={styles.footerNav}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {footerLinks.map((link, index) => (
              <Link 
                key={index} 
                to={link.path} 
                className={styles.footerLink}
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>

          <motion.div 
            className={styles.socialLinks}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={styles.socialIcon}
                whileHover={{ scale: 1.2, rotate: 8 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className={styles.footerBottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className={styles.copyright}>
            &copy; {currentYear} {personalInfo.name}. Made with <FaHeart className={styles.heartIcon} /> in Morocco
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;