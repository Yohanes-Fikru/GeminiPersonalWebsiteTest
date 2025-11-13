
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0D1117]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <img 
              src="https://picsum.photos/seed/yohanes/400/400" 
              alt="Yohanes Fikru Temam" 
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-green-400 shadow-2xl shadow-green-500/10"
            />
          </div>
          <div className="md:w-2/3 text-lg text-gray-300 space-y-4">
            <p>
              I'm a Unity developer, game studio co-founder, and tech content creator passionate about building meaningful experiences. With a background in software development and game programming, I've worked on mobile games, strategy prototypes, and AI-driven applications, always pushing the limits of what's possible with Unity.
            </p>
            <p>
              As a skilled Project Manager with 3+ years of experience, I excel at leading cross-functional teams, managing remote talent, and delivering complex projects on time. My expertise spans requirement gathering, project planning, and client communication, with a strong technical foundation in Unity, system integration, and Web 3.0 technologies.
            </p>
             <p>
              As the co-founder of Muqecha, I lead development while managing projects and collaborating with a growing creative team. Our studio focuses on making games that spark conversation, and I'm deeply committed to fostering a vibrant game development community in Ethiopia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
