import React from "react";
import { Navbar } from "./components/landing/Navbar";
import { Hero } from "./components/landing/Hero";
import { Stats } from "./components/landing/Stats";
import { GrowthSystem } from "./components/landing/GrowthSystem";
import { BusinessSolution } from "./components/landing/BusinessSolution";
import { Recruitment } from "./components/landing/Recruitment";
import { FAQ } from "./components/landing/FAQ";
import { ContactForm } from "./components/landing/ContactForm";
import { Footer } from "./components/landing/Footer";

const App = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Oswald:wght@400;500;600;700&display=swap');
        
        .font-oswald {
          font-family: 'Oswald', sans-serif;
        }
        .font-dela {
          font-family: 'Dela Gothic One', cursive;
        }
      `}</style>
      <div className="min-h-screen bg-white text-black selection:bg-[#C9252C] selection:text-white font-sans antialiased overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <GrowthSystem />
          <BusinessSolution />
          <Recruitment />
          <ContactForm />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
