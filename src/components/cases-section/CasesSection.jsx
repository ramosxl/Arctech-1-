import React from 'react';
import './CasesSection.scss';

const cases = Array(6).fill({ name: 'Nome Empresa', description: 'Descrição' });

export default function CasesSection  ()  {
  return(

  <section className="cases-section">
    <h2>Alguns de <br /> nossos <br />cases</h2>
    <div className="cases-section__grid">
      {cases.map((item, index) => (
        <div key={index} className="case-card">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <button>Ver Mais</button>
        </div>
      ))}
    </div>
    <p><span id='blue'>Pequenas</span>, <span id='red'>Médias</span> e <span id='yellow'>Grandes espresas</span>. Criamos projetos de acordo com o seu perfil.</p>
    <hr />
  </section>
  )
}


