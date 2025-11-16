'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import { useUIStore } from '@/store/uiStore';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#origin', label: 'Origin' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#vision', label: 'Vision' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const { menuOpen, toggleMenu, setMenuOpen } = useUIStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      role="banner"
    >
      <nav className={styles.nav} role="navigation" aria-label="Main navigation">
        <Link href="/" className={styles.logo} aria-label="Home">
          Ansh Chaurasiya
        </Link>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={styles.navLink}
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <Cross1Icon width={24} height={24} />
          ) : (
            <HamburgerMenuIcon width={24} height={24} />
          )}
        </button>
      </nav>
    </header>
  );
}
