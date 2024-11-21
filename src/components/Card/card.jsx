import React from "react";
import "./card.scss";

function Apps() {
  return (
    <div className="App">
    
      <main className="content">
        <h2>Como funcionam <br /> nossos processos?</h2>
        <div className="cards">
          <Card
            title="Sites Responsivos"
            description="Sites que se adaptam 
            perfeitamente ao tamanho
             da tela de computador, celular ou tablet."
          />
          <Card
            title="User Experience"
            description="Estratégias de UX/UI focadas em otimizar a navegação e melhorar a usabilidade, entregando qualidade."
          />
          <Card
            title="Layout Personalizado"
            description="O layout exclusivo representa sua marca com cores, fontes e design únicos para sua empresa."
          />
          <Card
            title="Suporte Contínuo"
            description="Conte com um time de suporte disponível para resolver tudo o que precisar, quando precisar."
          />
          <Card
            title="Pronto para o Google"
            description="Desenvolvemos sites otimizados para mecanismos de busca como Google."
          />
          <Card
            title="Personalização Total"
            description="Desenvolvemos tudo sob medida para atender às suas necessidades exclusivas."
          />
        </div>
      </main>
    
    </div>
  );
}
export default Apps;

function Card({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}