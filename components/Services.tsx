'use client';

import { useInViewAnimation } from '../hooks/useInViewAnimation';
import type { ReactNode } from 'react';
import WaveCard from './WaveCard';

// ── SVG Icons ──────────────────────────────────────────────────────────────
const WebIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
    <line x1="4" y1="16" x2="44" y2="16" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <circle cx="18" cy="12" r="1.5" fill="currentColor" />
    <circle cx="24" cy="12" r="1.5" fill="currentColor" />
    <rect x="8" y="20" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="26" y="20" width="14" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="26" y="32" width="14" height="4" rx="2" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const AutomationIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
    <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
    <path d="M24 8v6M24 34v6M8 24h6M34 24h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="24" r="2" fill="currentColor" />
  </svg>
);

const MVPIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M8 36L24 8l16 28H8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <rect x="18" y="24" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M24 24v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="24" cy="16" r="1.5" fill="currentColor" />
  </svg>
);

const DesignIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2" />
    <path d="M12 40c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M32 12l4-4M34 12l2-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="24" cy="16" r="3" fill="currentColor" opacity="0.3" />
  </svg>
);

// ── Icon map ───────────────────────────────────────────────────────────────
const iconMap: Record<string, () => ReactNode> = {
  web: WebIcon,
  automation: AutomationIcon,
  mvp: MVPIcon,
  design: DesignIcon,
};

// ── Card data ──────────────────────────────────────────────────────────────
const services = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'Sites e aplicações web modernas, responsivas e otimizadas para performance e SEO.',
    icon: 'web',
    tags: ['FRONTEND', 'BACKEND'],
    gradient: 'linear-gradient(135deg, #A8D600 0%, #7BA800 100%)',
  },
  {
    id: 'automation',
    title: 'Automações',
    description: 'Fluxos automatizados que poupam tempo e aumentam a eficiência do seu negócio.',
    icon: 'automation',
    tags: ['WORKFLOWS', 'INTEGRATIONS'],
    gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
  },
  {
    id: 'mvp',
    title: 'MVP',
    description: 'Produto mínimo viável para validar ideias rapidamente e iterar com feedback real.',
    icon: 'mvp',
    tags: ['VALIDATE', 'ITERATE'],
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)',
  },
  {
    id: 'design',
    title: 'Design',
    description: 'Identidade visual, UI/UX design e branding que comunicam a essência da sua marca.',
    icon: 'design',
    tags: ['UI/UX', 'BRANDING'],
    gradient: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
  },
];

// ── Main component ─────────────────────────────────────────────────────────
export default function Services() {
  const gridRef = useInViewAnimation({ threshold: 0.1, delay: 120 });

  return (
    <section className="services" id="servicos">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">O que fazemos</span>
          <h2 className="section-title">Serviços</h2>
        </div>

        <div className="services-grid-v2" ref={gridRef}>
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={service.id} className="service-card-wrapper" data-index={service.id}>
                <WaveCard
                  title={service.title}
                  description={service.description}
                  icon={IconComponent && <IconComponent />}
                  gradient={service.gradient}
                  tags={service.tags}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
