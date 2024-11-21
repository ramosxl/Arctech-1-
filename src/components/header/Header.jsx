import React from 'react';
import './Header.scss';

export default function Header ()  {
  return(
  <header className="header">
    <div className="header__logo">
      <img id='react' src='/images/arc_tech_logo.png' />
      <img id='written' src='/images/arc_tech_logo2.png' />
    </div>
    <nav className="header__nav">
      <div className='nav-content'>
        <a href="">Sobre</a>
        <div className='line' />
      </div>
      <div className='nav-content'>
        <a href="#projetos">Projetos</a>
        <div className='line' />
      </div>
      <button className="header__contact">ENTRE EM CONTATO</button>
    </nav>
  </header>
  )
}



