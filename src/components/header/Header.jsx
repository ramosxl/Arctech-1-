import React from 'react';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="header__logo">
      <img id='react' src='/images/arc_tech_logo.png' />
      <img id='written' src='/images/arc_tech_logo2.png' />
    </div>
    <nav className="header__nav">
      <div className='nav-content'>
        <a href="#sobre">Sobre</a>
        <div className='line' />
      </div>
      <div className='nav-content'>
        <a href="#projetos">Projetos</a>
        <div className='line' />
      </div>
      <button className="header__contact">Entre em Contato</button>
    </nav>
  </header>
);

export default Header;
