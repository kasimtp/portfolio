import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skill from './components/Skill';

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-600/30 selection:text-blue-600 transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skill />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
