import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer/footer.jsx";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <nav>
        <Navbar />
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
