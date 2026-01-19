import styles from "./home.module.css";
import {Link} from 'react-router-dom'

function Home(){

    return (
        <section className={styles.hero}>
                <h1>Hi🖐🏾 Welcome to My Portfolio</h1>
                <p>I'm link <span>FULL-STACK</span> developer<br />
                    specialised on building scalable, SEO-optimized applications with clean architecture and efficient algorithm
                </p>
            <Link to="/projects" className={styles.ctaButton}>
                View projects
            </Link>
        </section>
    )
}
export default Home;