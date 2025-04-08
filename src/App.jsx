// App.jsx - Main application component
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ThemeMetaColor from './components/ThemeMetaColor';
import styles from './styles/App.module.css';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <ThemeMetaColor />
      <div className={styles.app}>
        <Navbar />
        <motion.main 
          className={styles.mainContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;