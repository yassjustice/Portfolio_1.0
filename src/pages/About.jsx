// pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/personalInfo";
import SkillsSection from "../components/SkillsSection";
import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../data/experience";
import { education } from "../data/education";
import styles from "../styles/About.module.css";

const About = () => {
    return (
        <div className={styles.aboutPage}>
            <section className={styles.aboutHero}>
                <div className={styles.aboutHeroContent}>
                    <motion.div
                        className={styles.aboutHeroText}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className={styles.pageTitle}>About Me</h1>
                        <p className={styles.heroSubtitle}>
                            Web & Mobile Developer with a Passion for Creation
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className={styles.aboutBioSection}>
                <div className={styles.aboutContainer}>
                    <motion.div
                        className={styles.imageContainer}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <img
                            src="/images/meXCropped.jpg"
                            alt={personalInfo.name}
                            className={styles.aboutImage}
                        />
                    </motion.div>

                    <motion.div
                        className={styles.aboutContent}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className={styles.aboutTitle}>My Journey</h2>
                        <div className={styles.aboutDescription}>
                            <p>
                                I'm a full-stack developer with hands-on
                                experience in web and mobile development, using
                                technologies like the MERN stack, ASP.NET, and
                                React Native. I’ve worked on real-world projects
                                through internships, bootcamps, and freelance
                                work.
                            </p>
                            <p>
                                My path wasn’t always straight — I started in
                                physics and chemistry before fully diving into
                                tech. Since then, I’ve completed formal studies,
                                joined bootcamps, and contributed to startups,
                                schools, and freelance projects.
                            </p>
                            <p>
                                I believe in improving step by step, staying
                                open to feedback, and working well with others.
                                That mindset keeps me grounded and helps me
                                grow.
                            </p>
                        </div>

                        <div className={styles.personalHighlights}>
                            <div className={styles.highlightItem}>
                                <span className={styles.highlightLabel}>
                                    Name:
                                </span>
                                <span className={styles.highlightValue}>
                                    {personalInfo.name}
                                </span>
                            </div>
                            <div className={styles.highlightItem}>
                                <span className={styles.highlightLabel}>
                                    Email:
                                </span>
                                <span className={styles.highlightValue}>
                                    {personalInfo.email}
                                </span>
                            </div>
                            <div className={styles.highlightItem}>
                                <span className={styles.highlightLabel}>
                                    Location:
                                </span>
                                <span className={styles.highlightValue}>
                                    {personalInfo.location}
                                </span>
                            </div>
                            <div className={styles.highlightItem}>
                                <span className={styles.highlightLabel}>
                                    Available for:
                                </span>
                                <span className={styles.highlightValue}>
                                    Freelance, Full-time opportunities
                                </span>
                            </div>
                        </div>

                        <motion.a
                            href="/resume.pdf"
                            className={styles.resumeButton}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            <SkillsSection />

            <section className={styles.experienceSection}>
                <h2 className={styles.sectionTitle}>Work Experience</h2>
                <div className={styles.experienceTimeline}>
                    {experiences.map((experience) => (
                        <ExperienceCard
                            key={experience.id}
                            experience={experience}
                        />
                    ))}
                </div>
            </section>

            <section className={styles.educationSection}>
                <h2 className={styles.sectionTitle}>Education</h2>
                <div className={styles.educationCards}>
                    {education.map((edu) => (
                        <motion.div
                            key={edu.id}
                            className={styles.educationCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className={styles.educationIcon}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 14l9-5-9-5-9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    />
                                </svg>
                            </div>
                            <div className={styles.educationContent}>
                                <h3 className={styles.educationDegree}>
                                    {edu.degree}
                                </h3>
                                <p className={styles.educationInstitution}>
                                    {edu.institution}
                                </p>
                                <p className={styles.educationPeriod}>
                                    {edu.period}
                                </p>
                                <p className={styles.educationDescription}>
                                    {edu.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
