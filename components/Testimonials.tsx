'use client';

import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface Testimonial {
  text: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'A Linear Creative transformou completamente a nossa presença digital. O resultado superou todas as expectativas.',
    author: 'Miguel Santos',
    role: 'CEO, TechStart',
  },
  {
    text: 'Profissionalismo e criatividade em cada detalhe. A automação que criaram poupou-nos 20h semanais.',
    author: 'Ana Costa',
    role: 'COO, Innovatech',
  },
  {
    text: 'O MVP foi entregue em 3 semanas e permitiu-nos validar o produto com investidores. Excelente trabalho.',
    author: 'Ricardo Oliveira',
    role: 'Founder, GreenApp',
  },
];

export default function Testimonials() {
  const testimonialsRef = useInViewAnimation({ threshold: 0.1, delay: 100 });

  return (
    <section className="testimonials" id="testemunhos">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">O que dizem sobre nós</span>
          <h2 className="section-title">Testemunhos</h2>
        </div>

        <div className="testimonials-grid" ref={testimonialsRef}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">&quot;{testimonial.text}&quot;</p>
              <div className="testimonial-author">
                <div className="author-avatar" aria-hidden="true"></div>
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
