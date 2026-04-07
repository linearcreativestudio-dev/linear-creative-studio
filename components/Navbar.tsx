'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useTextScramble } from '../hooks/useTextScramble';
import { scrollToSection } from '../utils/scrollToSection';
import { socialLinks } from '../utils/socialLinks';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Testemunhos', href: '#testemunhos' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHoveringRef = useRef(false);

  const { displayText, scramble } = useTextScramble('LINEAR');

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled((prev) => {
        const next = window.scrollY > 50;
        return prev !== next ? next : prev;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoMouseEnter = useCallback(async () => {
    if (isHoveringRef.current) return;
    isHoveringRef.current = true;
    try {
      await scramble('LINEAR');
    } finally {
      isHoveringRef.current = false;
    }
  }, [scramble]);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    scrollToSection(e, href);
    setMobileMenuOpen(false);
  }, []);

  const closeMenu = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link
            href="#inicio"
            className="logo"
            onMouseEnter={handleLogoMouseEnter}
          >
            <span className="logo-text">
              {displayText.split('').map((char, index) => {
                const isScrambled = index >= 'LINEAR'.length || char !== 'LINEAR'[index];
                return (
                  <span
                    key={index}
                    style={isScrambled ? { color: 'var(--electric-lime)' } : {}}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
            <span className="logo-dot">.</span>
          </Link>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className="btn-contact"
            onClick={(e) => handleNavClick(e, '#contacto')}
          >
            Iniciar Projeto
          </a>

          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ──────────────────────────────────────── */}
      <div
        className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      />

      <div className={`mobile-menu-full ${mobileMenuOpen ? 'active' : ''}`}>
        {/* Close button */}
        

        {/* Navigation links */}
        <div className="mobile-menu-content">
          <ul className="mobile-nav-links-full">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={`mobile-nav-item`}
                style={{ '--item-index': index } as React.CSSProperties}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="mobile-menu-cta">
            <a
              href="#contacto"
              className="btn btn-primary"
              onClick={(e) => handleNavClick(e, '#contacto')}
            >
              Iniciar Projeto
            </a>
          </div>

          {/* Social links */}
          <div className="mobile-menu-social">
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
