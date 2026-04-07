'use client';

import { scrollToSection } from '../utils/scrollToSection';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-background">
        <div className="grid-overlay"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="noise-texture"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line">Criamos</span>
          <span className="title-line accent">experiências</span>
          <span className="title-line">digitais</span>
        </h1>

        <p className="hero-subtitle">
          Design estratégico e desenvolvimento de alto impacto para marcas que querem destacar-se.
        </p>

        <div className="hero-buttons">
          <a href="#contacto" className="btn btn-primary" onClick={(e) => scrollToSection(e, '#contacto')}>Iniciar Projeto</a>
          <a href="#portfolio" className="btn btn-outline" onClick={(e) => scrollToSection(e, '#portfolio')}>Ver Portfólio</a>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
