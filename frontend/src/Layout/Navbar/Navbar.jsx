import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export default function Navbar(){

    return(
        <nav className={styles.nav}>
            <div className={styles.logo}>
                SPE<span>N</span>CER
            </div>
            <div className={styles.navContainer}>
                <ul>
                    <li><NavLink to="/" className={styles.navLink} end>Home</NavLink></li>
                    <li><NavLink to="/about" className={styles.navLinks}>About</NavLink></li>
                    <li><NavLink to="/skills" className={styles.navLink}>Skills</NavLink></li>
                    <li><NavLink to="/projects" className={styles.navLink}>Projects</NavLink></li>
                    <li><NavLink to="/blog" className={styles.navLink}>Blog</NavLink></li>
                    <li><NavLink to="/contact" className={styles.navLink}>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
