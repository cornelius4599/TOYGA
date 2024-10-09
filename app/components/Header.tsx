"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image
          src="/logo.jpg"
          alt="TOYGA Logo"
          width={80}
          height={80}
        />
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.line} ${isMenuOpen ? styles.active : ''}`}></div>
        <div className={`${styles.line} ${isMenuOpen ? styles.active : ''}`}></div>
        <div className={`${styles.line} ${isMenuOpen ? styles.active : ''}`}></div>
      </div>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <Link href="#about" className={styles.link} onClick={toggleMenu}>About</Link>
        <Link href="#events" className={styles.link} onClick={toggleMenu}>Events</Link>
      </nav>
    </header>
  );
};

export default Header;
