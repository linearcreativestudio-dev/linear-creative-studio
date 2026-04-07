'use client';

import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface Project {
  title: string;
  category: string;
  imageClass: string;
}

const projects: Project[] = [
  {
    title: 'Nova Brand Identity',
    category: 'Web Design',
    imageClass: 'img-1',
  },
  {
    title: 'Urban Store',
    category: 'E-commerce',
    imageClass: 'img-2',
  },
  {
    title: 'Analytics Pro',
    category: 'Dashboard',
    imageClass: 'img-3',
  },
  {
    title: 'FitTracker App',
    category: 'Mobile App',
    imageClass: 'img-4',
  },
  {
    title: 'CloudSync Platform',
    category: 'SaaS',
    imageClass: 'img-5',
  },
  {
    title: 'EcoTrack Dashboard',
    category: 'Green Tech',
    imageClass: 'img-6',
  },
  {
    title: 'Finova Banking',
    category: 'Fintech',
    imageClass: 'img-7',
  },
];

export default function Portfolio() {
  const gridRef = useInViewAnimation({ threshold: 0.1, delay: 100 });

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Trabalhos selecionados</span>
          <h2 className="section-title">Portfólio</h2>
        </div>

        <div className="portfolio-grid" ref={gridRef}>
          {projects.map((project) => (
            <div
              key={project.title}
              className="portfolio-item"
            >
              <div className="portfolio-image">
                <div className={`placeholder-img ${project.imageClass}`}></div>
              </div>
              <div className="portfolio-overlay">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <button type="button" className="project-link">
                  Ver Projeto
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
