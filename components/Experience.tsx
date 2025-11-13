
import React, { useState } from 'react';
import type { ExperienceItem } from '../types';

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    company: 'Efuye Gela',
    role: 'Senior Game Developer',
    period: 'May 2024 - Present',
    location: 'Addis Ababa, Ethiopia',
    url: 'https://efuyegela.com/',
    description: [
      'Worked on diverse web and native VR projects showcasing cultural artifacts.',
      'Supervised and trained junior developers in Unity game development.',
      'Led multiple teams on projects ranging from E-commerce to custom VR games.',
      'Organized community events like Hackathons and Game Jams.',
    ],
  },
  {
    id: 2,
    company: 'Addisinno',
    role: 'AI & Automation Specialist',
    period: 'Nov 2023 - Present',
    location: 'Addis Ababa, Ethiopia',
    url: '#',
    description: [
      'Developed and implemented automation systems across multiple servers.',
      'Researched AI and automation tools for business process improvement.',
      'Created personas for effective lead generation outreach campaigns.',
      'Coordinated corporate website development with UI/UX and Full Stack teams.',
    ],
  },
  {
    id: 3,
    company: 'Muqecha Studios',
    role: 'Lead Unity Developer',
    period: 'Feb 2023 - Present',
    location: 'Addis Ababa, Ethiopia',
    url: '#',
    description: [
      "Developed and launched the Android game 'Lomi', implementing combat and AI systems.",
      'Integrated third-party systems and SDKs, ensuring compatibility.',
      'Led cross-platform project development, coordinating teams for timely delivery.',
    ],
  },
  {
    id: 4,
    company: 'Excellerent Solutions',
    role: 'Lead Unity Developer & PM',
    period: 'Dec 2021 - May 2023',
    location: 'Pittsburgh, USA (Remote)',
    url: 'https://excellerentsolutions.com/',
    description: [
      'Led development for a cross-platform game with a remote team.',
      'Interfaced with clients to define requirements and manage documentation.',
      'Ensured smooth integration of game features with blockchain and backend services.',
    ],
  },
];

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(experienceData[0].id);

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Professional Experience</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex md:flex-col md:w-1/4 overflow-x-auto pb-4 md:pb-0">
            {experienceData.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-left p-4 rounded-lg transition-all duration-300 w-full min-w-[150px] md:min-w-0 ${
                  activeTab === item.id
                    ? 'bg-green-500/20 text-green-400'
                    : 'text-gray-400 hover:bg-gray-800/50'
                }`}
              >
                <h3 className="font-bold text-lg">{item.company}</h3>
                <p className="text-sm">{item.role}</p>
              </button>
            ))}
          </div>
          <div className="md:w-3/4">
            {experienceData.map((item) => (
              <div
                key={item.id}
                className={`transition-opacity duration-500 ${activeTab === item.id ? 'opacity-100 block' : 'opacity-0 hidden'}`}
              >
                <div className="bg-[#161B22] p-6 rounded-lg border border-gray-700">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-xl font-bold text-white">{item.role} @ <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">{item.company}</a></h3>
                        <p className="text-sm text-gray-500">{item.period} &bull; {item.location}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
                    {item.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
