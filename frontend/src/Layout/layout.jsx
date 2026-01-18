import {Outlet} from "react-router-dom";
import styles from './layout.module.css'

export default function Layout(){

    return(
        <div className={styles.layout}>
            <nav>Navbar will go here</nav>

            <main>
                <Outlet />
            </main>

            <footer>Footer will go here</footer>
        </div>
    )
}