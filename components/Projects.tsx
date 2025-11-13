
import React from 'react';
import type { Project } from '../types';

const projectsData: Project[] = [
  {
    title: 'LOMI',
    company: 'Muqecha Studios',
    image: 'https://picsum.photos/seed/lomi/600/400',
    genre: 'Action / 3rd Person Shooter',
    synopsis: "Lomi is a 3rd person shooter survival game about a girl named Hilaria in the Ethiopian holiday of 'Timket'. She tries to survive bachelors pursuing her. Will Hilaria finally find her freedom? The game addresses the culture of cat-calling and its detrimental effects.",
    roles: ['Lead Developer', 'Game Designer', 'Systems Programmer'],
    links: {
      playstore: '#',
      trailer: '#',
    },
  },
  {
    title: 'Bit-Racer',
    company: 'Excellerent Solutions',
    image: 'https://picsum.photos/seed/bitracer/600/400',
    genre: 'Online Multiplayer / Trivia',
    synopsis: 'A mobile (iOS and Android) multiplayer where players enter a race and compete by typing prompts or answering trivia questions before their competitors.',
    roles: ['Team Lead', 'Project Management', 'Systems Implementation', 'UI Redesign', 'Deployment'],
    links: {},
  },
    {
    title: 'VR Show Room Tour',
    company: 'Keste Damena',
    image: 'https://picsum.photos/seed/vrshowroom/600/400',
    genre: 'Virtual Reality / Simulation',
    synopsis: 'An immersive VR experience allowing users to tour a virtual showroom. This project showcases cultural and community artifacts for local and international clients in a high-fidelity environment.',
    roles: ['Senior VR Developer', 'Project Lead'],
    links: {},
  },
  {
    title: 'Turn Based Strategy Prototype',
    company: 'UpWork',
    image: 'https://picsum.photos/seed/strategygame/600/400',
    genre: 'Strategy / Prototype',
    synopsis: 'A prototype for a turn-based strategy game, focusing on core mechanics, AI decision-making, and game-loop validation for a client project.',
    roles: ['Solo Developer', 'Game Mechanics Designer'],
    links: {},
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-[#161B22] rounded-lg overflow-hidden border border-gray-700 group transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-green-400 mb-1">{project.title}</h3>
      <p className="text-sm text-gray-500 mb-3 font-semibold">{project.company}</p>
      <p className="text-gray-400 mb-4 h-24 overflow-y-auto">{project.synopsis}</p>
      
      <div className="mb-4">
        <h4 className="font-semibold text-white mb-2">My Roles:</h4>
        <div className="flex flex-wrap gap-2">
          {project.roles.map((role) => (
            <span key={role} className="bg-gray-700 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">{role}</span>
          ))}
        </div>
      </div>
      
      <div className="flex items-center gap-4 mt-4">
        {project.links.playstore && <a href={project.links.playstore} className="text-green-400 hover:underline">Play Store</a>}
        {project.links.trailer && <a href={project.links.trailer} className="text-green-400 hover:underline">Trailer</a>}
      </div>
    </div>
  </div>
);


const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-[#0D1117]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
