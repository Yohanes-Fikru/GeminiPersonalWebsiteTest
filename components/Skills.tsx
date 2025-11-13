
import React from 'react';
import type { SkillCategory } from '../types';

const skillData: SkillCategory[] = [
    {
        name: 'Project Management',
        skills: ['Requirement Engineering', 'Team Leadership', 'Project Documentation', 'Client Communication', 'Risk Management', 'Agile Methodologies']
    },
    {
        name: 'Software Development',
        skills: ['Unity Game Development', 'System Integrations', 'Web Technologies', 'VR Development', 'Web 3.0', 'AI & Automation']
    },
    {
        name: 'Technical Tools',
        skills: ['Jira', 'Trello', 'Git', 'Slack', 'Asana', 'ERP Solutions', 'Unity Engine']
    },
    {
        name: 'Programming Languages',
        skills: ['C#', 'Python', 'C++']
    }
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 text-white">My Arsenal of Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillData.map((category) => (
                        <div key={category.name} className="bg-[#161B22] p-6 rounded-lg border border-gray-700">
                            <h3 className="text-xl font-bold text-green-400 mb-4">{category.name}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="bg-gray-700 text-gray-300 text-sm font-medium px-3 py-1.5 rounded-md">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
