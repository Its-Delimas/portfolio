import { Link } from 'react-router-dom';
import styles from './home.module.css';

export default function Home() {
    return (
        <div className={styles.homePage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.greeting}>Hi, I'm Spencer</span>
                    <h1 className={styles.heroTitle}>
                        Full Stack Developer
                    </h1>
                    <p className={styles.heroDescription}>
                        I specialize in building scalable, SEO-optimized web applications
                        with clean architecture and efficient algorithms. Passionate about
                        writing maintainable code and solving complex problems.
                    </p>
                    <div className={styles.heroActions}>
                        <Link to="/projects" className={styles.primaryBtn}>
                            View My Work
                        </Link>
                        <Link to="/contact" className={styles.secondaryBtn}>
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </section>

            {/* Skills Preview */}
            <section className={styles.skillsPreview}>
                <h2 className={styles.sectionTitle}>Tech Stack</h2>
                <div className={styles.skillsGrid}>
                    <div className={styles.skillCard}>
                        <h3>Frontend</h3>
                        <p>React, JavaScript, HTML5, CSS3</p>
                    </div>
                    <div className={styles.skillCard}>
                        <h3>Backend</h3>
                        <p>Node.js, Express, MongoDB</p>
                    </div>
                    <div className={styles.skillCard}>
                        <h3>Tools</h3>
                        <p>Git, Vite, VS Code</p>
                    </div>
                    <div className={styles.skillCard}>
                        <h3>Focus</h3>
                        <p>Clean Code, DSA, SEO</p>
                    </div>
                </div>
            </section>

            {/* Featured Projects Preview */}
            <section className={styles.projectsPreview}>
                <h2 className={styles.sectionTitle}>Featured Projects</h2>
                <p className={styles.comingSoon}>Projects coming soon...</p>
                <Link to="/projects" className={styles.viewAllLink}>
                    View All Projects →
                </Link>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <h2>Let's Build Something Together</h2>
                <p>I'm currently available for freelance work and full-time opportunities.</p>
                <Link to="/contact" className={styles.primaryBtn}>
                    Contact Me
                </Link>
            </section>
        </div>
    );
}