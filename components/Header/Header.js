// components/Header/Header.js
'use client';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Mobile Menu Toggle */}
        <button 
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={menuOpen}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.logoText}>LOGO</span>
        </div>

        {/* Desktop Navigation */}
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li><a href="#shop">SHOP</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#stories">STORIES</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>
        </nav>

        {/* Right Icons */}
        <div className={styles.icons}>
          <button className={styles.icon} aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2"/>
              <path d="M14 14L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          
          <button className={styles.icon} aria-label="Wishlist">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 18L8.55 16.7C4 12.6 1 9.9 1 6.5C1 3.9 3 2 5.5 2C7 2 8.5 2.8 10 4.1C11.5 2.8 13 2 14.5 2C17 2 19 3.9 19 6.5C19 9.9 16 12.6 11.45 16.7L10 18Z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </button>
          
          <button className={styles.icon} aria-label="Shopping cart">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M1 1H3L3.4 3M5 11H15L19 3H3.4M5 11L3.4 3M5 11L3 15H17M7 18C7 18.5523 6.55228 19 6 19C5.44772 19 5 18.5523 5 18C5 17.4477 5.44772 17 6 17C6.55228 17 7 17.4477 7 18ZM17 18C17 18.5523 16.5523 19 16 19C15.4477 19 15 18.5523 15 18C15 17.4477 15.4477 17 16 17C16.5523 17 17 17.4477 17 18Z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </button>
          
          <button className={styles.icon} aria-label="User profile">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M2 18C2 14.6863 4.68629 12 8 12H12C15.3137 12 18 14.6863 18 18" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </button>

          <select className={styles.languageSelect} aria-label="Select language">
            <option value="en">ENG</option>
            <option value="es">ESP</option>
            <option value="fr">FRA</option>
          </select>
        </div>
      </div>
    </header>
  );
}
