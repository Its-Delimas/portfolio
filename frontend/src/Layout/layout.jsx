import {Outlet} from "react-router-dom";
import styles from './layout.module.css'
import Navbar from './Navbar/Navbar.jsx'

export default function Layout(){

    return(
        <div className={styles.layout}>
            <Navbar />

            <main>
                <Outlet />
            </main>

            <footer>Footer will go here</footer>
        </div>
    )
}