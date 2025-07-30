import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Code, Cpu, Hammer, Wrench, GitBranch, Brush, Layers, Monitor } from 'lucide-react';

const skills = [
  {
    category: 'Programming',
    icon: <Code className="mr-2 h-5 w-5 text-primary" />,
    items: ['C#', 'C++', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Game & Backend Tech',
    icon: <Cpu className="mr-2 h-5 w-5 text-primary" />,
    items: [
      'Unity', 'Unreal Engine', 'Photon', 'FishNet',
      'PlayFab', 'Firebase', 'AWS', 'Azure',
      'Unity IAP', 'AdMob', 'Game Publishing'
    ],
  },
  {
    category: 'Tools',
    icon: <Hammer className="mr-2 h-5 w-5 text-primary" />,
    items: ['Git', 'GitHub', 'Jira', 'Trello', 'Postman', 'Figma'],
  },
  {
    category: 'AR/VR & Hardware',
    icon: <Wrench className="mr-2 h-5 w-5 text-primary" />,
    items: ['AR Foundation', 'XR Interaction Toolkit', 'Meta Quest', 'Arduino', 'ESP32'],
  },
];


const Skills: React.FC = () => (
  <section id="skills" className="py-20 bg-secondary/10">
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
          My <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A quick overview of my technical toolkit and favorite technologies.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((group) => (
          <div key={group.category} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="mb-4">{group.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-primary">{group.category}</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {group.items.map((skill) => (
                <Badge key={skill} className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills; 