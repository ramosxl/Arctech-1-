import React from 'react';
import './HowItWorks.scss';

const features = [
  { title: 'Sites Responsivos', description: 'Seu site se adapta...' },
  { title: 'User Experience', description: 'Design pensado...' },
  { title: 'Pronto para o Google', description: 'Melhores práticas de SEO...' },
  { title: 'Layout Personalizado', description: 'Desenvolvemos do zero...' },
];

const HowItWorks = () => (
  <section className="how-it-works">
    <h2>Como funcionam nossos processos?</h2>
    <div className="how-it-works__grid">
      {features.map((item, index) => (
        <div key={index} className="feature-card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
