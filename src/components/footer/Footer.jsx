import React from 'react';
import './Footer.scss';

export default function Footer ()  {
return(
  <footer className="footer">
    <div className="footer__logo">ArcTech</div>
    <p>Copyright © 2024 - ArcTech</p>
    <div className="footer__social">
      <a href="#">Facebook</a>
      <a href="#">Instagram</a>
      <a href="#">LinkedIn</a>
    </div>
  </footer>
  )
}

