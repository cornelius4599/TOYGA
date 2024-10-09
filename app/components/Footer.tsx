import React from 'react';
import styles from './Footer.module.css'; // Import the CSS module

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h2 className={styles.footerHeading}>Stay Connected</h2>
          <p className={styles.footerText}>Follow us on our social media platforms!</p>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a>
          </div>
        </div>
        
        <div className={styles.footerSection}>
          <h2 className={styles.footerHeading}>Contact Us</h2>
          <p className={styles.footerText}>Email: info@owyouthfestival.com</p>
          <p className={styles.footerText}>Phone: +123 456 7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
