import React from 'react';
import './Footer.scss';

export default function Footer ()  {
return(
  <footer className="footer">
    <div className='Contact'>contato@arctech.com.br
      <br />
    (11) 98765-4321</div>
    <div className="footer__logo">
    <img id='written' src='/images/arc_tech_logo2.png' />

    </div>
    <div className="footer__social">
      <a href="">Facebook</a>
      <a href="https://www.instagram.com/arctech___/profilecard/?igsh=OHdieHU5MW85YXJ6">Instagram</a>
      <a href="">LinkedIn</a>
    </div>
    
    <p>Copyright © 2024 - ArcTech</p>
  </footer>
  )
}

