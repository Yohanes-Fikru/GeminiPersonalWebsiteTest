
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Community from './components/Community';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-[#0D1117] text-gray-200 font-sans leading-relaxed tracking-wide">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Community />
      </main>
      <Contact />
    </div>
  );
};

export default App;
