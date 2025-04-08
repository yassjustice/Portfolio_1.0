// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from '../styles/Navbar.module.css';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <motion.span 
            className={styles.logoText}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            YH
          </motion.span>
        </Link>

        <button className={styles.menuIcon} onClick={toggleMenu} aria-label="Toggle menu">
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? 'close' : 'menu'}
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 90 : 0 }}
              exit={{ rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.div>
          </AnimatePresence>
        </button>

        <ThemeToggle />

        <nav className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
            { path: '/projects', label: 'Projects' },
            { path: '/contact', label: 'Contact' }
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`${styles.navLink} ${location.pathname === path ? styles.active : ''}`}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
          <motion.a
            href="/resume.pdf"
            className={styles.resumeButton}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;










