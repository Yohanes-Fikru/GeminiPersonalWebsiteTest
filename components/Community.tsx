
import React from 'react';
import type { CommunityItem } from '../types';

const communityData: CommunityItem[] = [
    {
        title: 'Game Jams Organizer',
        description: 'Since 2018, I have been an active participant and now an organizer of Game Jams. I help bring the game development community together in Ethiopia, empowering more people to see the power of making games through events like ChewataCon.',
        image: 'https://picsum.photos/seed/gamejam1/600/400'
    },
    {
        title: 'Game Academy Initiative',
        description: 'I created the Game Dev Academy to teach people how to make games. With tracks in Programming, 2D/3D Art, and Design, this initiative, developed with Creative Hub Ethiopia, aims to foster and grow the local game development community.',
        image: 'https://picsum.photos/seed/academy/600/400'
    },
    {
        title: 'CSEC Co-Founder',
        description: 'In 2017, I co-founded the Computer Science and Engineering Club (CSEC) at my university. It has grown from an ICPC training group into a hub for competitive programming, software development, and knowledge sharing.',
        image: 'https://picsum.photos/seed/csec/600/400'
    }
];

const Community: React.FC = () => {
    return (
        <section id="community" className="py-20 bg-[#0D1117]">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 text-white">Community & Initiatives</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {communityData.map((item) => (
                        <div key={item.title} className="bg-[#161B22] rounded-lg overflow-hidden border border-gray-700 flex flex-col">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-green-400 mb-3">{item.title}</h3>
                                <p className="text-gray-400 flex-grow">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Community;
