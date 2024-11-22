import React from "react";
import "./card.scss";

function Apps() {
  return (
    <div className="App">
      <h2>Como funcionam <br /> nossos processos?</h2>
      <div className="app-cards">
        <div className="app-card">
          <h3>Sites Responsivos</h3>
          <p>Sites que se adaptam perfeitamente ao tamanho da tela de computador, celular ou tablet.</p>
        </div>
        <div className="app-card">
          <h3>User Experience</h3>
          <p>Estratégias de UX/UI focadas em otimizar a navegação e melhorar a usabilidade, entregando qualidade.</p>
        </div>
        <div className="app-card">
          <h3>Layout Personalizado</h3>
          <p>O layout exclusivo representa sua marca com cores, fontes e design únicos para sua empresa.</p>
        </div>
        <div className="app-card">
          <h3>Suporte Contínuo</h3>
          <p>Conte com um time de suporte disponível para resolver tudo o que precisar, quando precisar.</p>
        </div>
        <div className="app-card">
          <h3>Pronto para o Google</h3>
          <p>Desenvolvemos sites otimizados para mecanismos de busca como Google.</p>
        </div>
        <div className="app-card">
          <h3>Personalização Total</h3>
          <p>Desenvolvemos tudo sob medida para atender às suas necessidades exclusivas.</p>
        </div>
      </div>
    </div>
  );
}

export default Apps;