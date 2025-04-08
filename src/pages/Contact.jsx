import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Replace with actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
    }

    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div className={styles.contactPage}>
      <motion.div 
        className={styles.contactHero}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.pageTitle}>Get In Touch</h1>
        <p className={styles.pageSubtitle}>Let's turn your ideas into reality</p>
      </motion.div>

      <div className={styles.contactContainer}>
        <motion.div 
          className={styles.contactInfo}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>Let's Connect</h2>
          <p className={styles.sectionDescription}>
            Feel free to reach out for collaborations, opportunities, or just a friendly hello
          </p>
          
          <div className={styles.contactDetails}>
            <motion.div 
              className={styles.contactItem}
              whileHover={{ x: 5 }}
            >
              <FaEnvelope />
              <a href="mailto:your.email@example.com">your.email@example.com</a>
            </motion.div>
            
            <motion.div 
              className={styles.contactItem}
              whileHover={{ x: 5 }}
            >
              <FaMapMarkerAlt />
              <span>Your Location, Country</span>
            </motion.div>
          </div>

          <div className={styles.socialLinks}>
            <motion.a 
              href="https://github.com/yourusername"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
              <span>GitHub</span>
            </motion.a>
            
            <motion.a 
              href="https://linkedin.com/in/yourusername"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.form 
          className={styles.contactForm}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.formInput}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.formInput}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject" className={styles.formLabel}>Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className={styles.formInput}
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>Message</label>
            <textarea
              id="message"
              name="message"
              className={styles.formTextarea}
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            />
          </div>

          <motion.button 
            type="submit" 
            className={`${styles.submitButton} ${status ? styles[status] : ''}`}
            disabled={status === 'sending'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {status === 'sending' ? 'Sending...' : 
             status === 'success' ? 'Sent!' : 
             status === 'error' ? 'Error!' : 
             'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;