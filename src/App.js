import React from 'react';
import Header from './components/header/Header';
import HeroSection from './components/hero-section/HeroSection';
import CasesSection from './components/cases-section/CasesSection';
import Testimonials from './components/testimonials/Testimonials';
import HowItWorks from './components/how-it-works/HowItWorks';
import Footer from './components/footer/Footer';
// import ContactForm from './components/contact-form/ContactForm';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <CasesSection />
      <Testimonials />
      <HowItWorks />
      {/* <ContactForm /> */}
      <Footer />
    </div>
  );
}

export default App;
