import React from 'react';
import './Footer.scss';

export default function Footer ()  {
return(
  <footer className="footer">
    <div className='Contact'>contato@arctech.com.br
      <br />
    (11) 98765-4321</div>
    <div className="footer__logo">ArcTech</div>
    <div className="footer__social">
      <a href="#">Facebook</a>
      <a href="#">Instagram</a>
      <a href="#">LinkedIn</a>
    </div>
    
    <p>Copyright © 2024 - ArcTech</p>
  </footer>
  )
}

