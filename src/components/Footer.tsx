import React from "react";
import { Github, ArrowRight } from "lucide-react";
import styles from "../styles/components/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Nitesh Giri. All rights reserved.</p>

      <div className={styles.footerSocialLinks}>
        <a
          href="https://github.com/your-github-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className={styles.footerSocialLink}
        >
          <Github size={28} />
        </a>
      </div>
      <div className={styles.footerDownloadButtonWrapper}>
        <a
          href="/path/to/your/resume.pdf"
          download="Nitesh_Giri_Resume.pdf"
          className={styles.footerDownloadButton}
        >
          Download Resume
          <ArrowRight size={18} style={{ marginLeft: "0.5rem" }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
