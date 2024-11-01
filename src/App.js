import React from 'react';
import Header from './components/header/Header';
import HeroSection from './components/hero-section/HeroSection';
import CasesSection from './components/cases-section/CasesSection';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
import Processes from './components/processes/Processes';
import Foco from './components/foco/focus';
import Speciality from './components/Speciality/desenvol'
// import ContactForm from './components/contact-form/ContactForm';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Processes/>
      <Foco/>
      <CasesSection />
      <Testimonials />
      {/* <ContactForm /> */}
      <Footer />
    </div>
  );
}

export default App;
