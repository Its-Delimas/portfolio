import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socials}>
          {/*github */}
          {/*LinkedIn */}
        </div>
        <div>
          <p className={styles.copyright}>{/*copyright*/}</p>
        </div>
      </div>
    </footer>
  );
}
