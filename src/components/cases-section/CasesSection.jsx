import React from 'react';
import './CasesSection.scss';

const cases = Array(6).fill({ name: 'Nome Empresa', description: 'Descrição' });

const CasesSection = () => (
  <section className="cases-section">
    <h2>Alguns de nossos cases</h2>
    <div className="cases-section__grid">
      {cases.map((item, index) => (
        <div key={index} className="case-card">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <button>Ver Mais</button>
        </div>
      ))}
    </div>
    <p>Pequenas, médias e grandes empresas. Criamos projetos de acordo com o seu perfil.</p>
  </section>
);

export default CasesSection;
