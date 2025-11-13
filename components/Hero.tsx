
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-green-400/10 [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
          Yohanes Fikru Temam
        </h1>
        <p className="text-2xl md:text-3xl text-green-400 font-semibold mb-8">
          Project Manager | Game Developer | Technical Lead
        </p>
        <a
          href="#projects"
          className="bg-green-500 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/20"
        >
          Explore My Work
        </a>
      </div>
      <div className="absolute bottom-10 w-full flex justify-center">
        <a href="#about" aria-label="Scroll down">
          <svg className="w-8 h-8 text-gray-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
