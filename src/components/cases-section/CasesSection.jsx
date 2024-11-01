import React from 'react';
import './CasesSection.scss';

const cases = Array(8).fill({ name: 'CNA', description: 'Descrição' });

export default function CasesSection  ()  {
  return(

  <section className="cases-section">
    <h2>ALGUNS DE <br /> NOSSOS <br />CASES</h2>
    <div className="cases-section__grid">
      {cases.map((item, index) => (
        <div key={index} className="case-card">
          <h3>{item.name}</h3>
          <p className='p1'>{item.description}</p>
          <button>Ver Mais</button>
        </div>
      ))}
    </div>
    <p><span id='blue'>Pequenas</span>, <span id='red'>Médias</span> e <span id='yellow'>Grandes</span> empresas. Criamos projetos de <br /> acordo com o seu perfil.</p>
    <hr />
  </section>
  )
}


