import React from 'react';
import Header from './components/header/Header';
import HeroSection from './components/hero-section/HeroSection';
import Footer from './components/footer/Footer';
import Processes from './components/processes/Processes';
import Foco from './components/foco/focus';
import Testimonials from './components/depoimentos/depoiments';
import Desenvolvimento from './components/especialidade/speciality';
import Apps from './components/card/card';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Processes/>
      <Foco/>
      <Testimonials/>
      <Desenvolvimento/>
      {/* <ContactForm /> */}
      <Apps />
      <Footer />
    </div>
  );
}

export default App;