import { Link } from 'react-router-dom';
import styles from './home.module.css';

export default function Home() {
    return (
        <div className={styles.homePage}>
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
        </div>
    );
}