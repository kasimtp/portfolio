import React from 'react'; // ✅ REQUIRED for JSX to work
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import ParticleBackground from './components/Particle';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skill from './components/Skill';

// import Portfolio from './components/portfoilo';
const App = () => {
  return (
    <>
      {/* <ParticleBackground /> */}
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
      {/* <Portfolio /> */}
    </>
  );
};

export default App;
