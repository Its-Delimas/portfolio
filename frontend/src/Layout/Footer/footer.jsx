import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socials}>
          {/*Github */}
          <a
            href="https://github.com/Its-Delimas"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Github
          </a>
          {/*LinkedIn */}
          <a
            href="https://www.linkedin.com/in/spencer-delimas"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            LinkedIn
          </a>
        </div>
        <div>
          <p className={styles.copyright}>
            {" "}
            © 2025 Spencer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
