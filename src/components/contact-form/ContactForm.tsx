import React from 'react';
import './ContactForm.scss';

const ContactForm = () => (
  <section className="contact-form">
    <h2>Entre em Contato</h2>
    <form>
      <input type="text" placeholder="Nome" required />
      <input type="text" placeholder="Telefone" required />
      <input type="email" placeholder="E-mail" required />
      <textarea placeholder="Mensagem" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  </section>
);

export default ContactForm;
