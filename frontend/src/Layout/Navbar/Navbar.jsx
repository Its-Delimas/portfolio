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
                    <li><NavLink to="/" className={({isActive})=>
                        isActive ? `${styles.navLink} ${styles.active}`: styles.navLink
                    } end>Home</NavLink></li>
                    <li><NavLink to="/about" className={({isActive})=>
                        isActive ? `${styles.navLink} ${styles.active}`: styles.navLink
                    }>About</NavLink></li>
                    <li><NavLink to="/skills" className={({isActive})=>
                        isActive ? `${styles.navLink} ${styles.active}`: styles.navLink
                    }>Skills</NavLink></li>
                    <li><NavLink to="/projects" className={({isActive})=>
                        isActive ? `${styles.navLink} ${styles.active}`: styles.navLink
                    }>Projects</NavLink></li>
                    <li><NavLink to="/blog" className={({isActive})=>
                        isActive ? `${styles.navLink} ${styles.active}`: styles.navLink
                    }>Blog</NavLink></li>
                    <li><NavLink to="/contact" className={({isActive})=>
                        isActive ? `${styles.navLink} ${styles.active}`: styles.navLink
                    }>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
