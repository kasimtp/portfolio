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
    <div className="min-h-screen bg-green-50/40 dark:bg-gray-950 transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skill />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
