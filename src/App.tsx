// src/App.tsx
import React from "react";
import NavBar from "./components/Navbar/Navbar";
import AboutSection from "./components/AboutSection/About";
import ServicesSection from "./components/ServicesSection/Services";
import WorkProcess from "./components/WorkProcess/WorkProcess";
import TestimonialsSectionDemo from "./components/ClientReview/ClientReview";
import FAQSection from "./components/FAQSection/Faq";
import HoverFooter from "./components/FooterSection/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import Contact from "./components/ContactUsSection/ContactSection";
import HeroSection from "./components/HeroSection/Hero";

// import Loader from "./components/box-loader"
const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <WorkProcess />
      <TestimonialsSectionDemo />
      <section id="contact">
        <Contact />
      </section>
    <section id="faq">

          <FAQSection />
    </section>
      <HoverFooter />
      <WhatsAppButton position="bottom-right" />
    </div>
  );
};

export default App;
