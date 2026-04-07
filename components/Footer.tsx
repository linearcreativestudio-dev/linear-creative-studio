'use client';

import Link from 'next/link';
import { scrollToSection } from '../utils/scrollToSection';
import { socialLinks } from '../utils/socialLinks';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <span className="logo-text">LINEAR</span>
              <span className="logo-dot">.</span>
            </Link>
            <p>Design estratégico e desenvolvimento de alto impacto.</p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Navegação</h4>
              <ul>
                <li><a href="#servicos" onClick={(e) => scrollToSection(e, '#servicos')}>Serviços</a></li>
                <li><a href="#portfolio" onClick={(e) => scrollToSection(e, '#portfolio')}>Portfólio</a></li>
                <li><a href="#testemunhos" onClick={(e) => scrollToSection(e, '#testemunhos')}>Testemunhos</a></li>
                <li><a href="#contacto" onClick={(e) => scrollToSection(e, '#contacto')}>Contacto</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Serviços</h4>
              <ul>
                <li><a href="#contacto" onClick={(e) => scrollToSection(e, '#contacto')}>Web Development</a></li>
                <li><a href="#contacto" onClick={(e) => scrollToSection(e, '#contacto')}>Automações</a></li>
                <li><a href="#contacto" onClick={(e) => scrollToSection(e, '#contacto')}>MVP</a></li>
                <li><a href="#contacto" onClick={(e) => scrollToSection(e, '#contacto')}>Design</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Social</h4>
              <ul>
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Linear Creative. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
