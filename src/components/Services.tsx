
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Gamepad2, 
  Code, 
  Palette, 
  Music, 
  Volume2,
  BookOpen
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Game Design',
    description: 'Complete game design services from concept to implementation. Creating engaging gameplay mechanics and immersive experiences.',
    icon: <Gamepad2 />,
    features: ['Game Concept Development', 'Mechanics Design', 'Level Design', 'Player Experience'],
    popular: true,
  },
  {
    id: 2,
    title: 'Game Development',
    description: 'Technical implementation of games using various engines and technologies. Expertise in Unity, Unreal Engine, and custom solutions.',
    icon: <Code />,
    features: ['Unity/Unreal Development', 'Mobile Game Development', 'Web-based Games', 'VR/AR Experiences'],
    popular: false,
  },
  {
    id: 3,
    title: 'Game Art & Animation',
    description: 'Creating visually stunning game assets from concept art to final implementation. Egyptian-themed art speciality.',
    icon: <Palette />,
    features: ['Character Design', 'Environment Art', 'UI/UX Design', '2D/3D Animation'],
    popular: false,
  },
  {
    id: 4,
    title: 'Sound Design',
    description: 'Crafting immersive audio experiences that bring your game world to life with atmospheric soundscapes and effects.',
    icon: <Volume2 />,
    features: ['Sound Effects', 'Ambient Sound', 'Voice Acting Direction', 'Audio Implementation'],
    popular: false,
  },
  {
    id: 5,
    title: 'Music Composition',
    description: 'Original music composition for games inspired by ancient Egyptian themes and modern game soundtracks.',
    icon: <Music />,
    features: ['Original Soundtracks', 'Adaptive Music', 'Theme Development', 'Cultural Authentic Sounds'],
    popular: false,
  },
  {
    id: 6,
    title: 'Narrative Design',
    description: 'Crafting compelling stories and narrative structures that engage players in Egyptian mythology and history.',
    icon: <BookOpen />,
    features: ['Story Development', 'Character Creation', 'Dialogue Writing', 'Historical Consultation'],
    popular: false,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 opacity-0 animate-fade-in">
            Game Development <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-100">
            I offer comprehensive game development services specialized in Egyptian-themed games,
            from initial concept to final release across multiple platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.id} className={`service-card opacity-0 animate-fade-in egyptian-border`} style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {service.icon}
                  </div>
                  {service.popular && <Badge className="bg-accent text-white">Popular</Badge>}
                </div>
                <CardTitle className="text-xl mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  <a href="#contact">Request Service</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6">
            Need a custom game development package? I can create a tailored solution for your specific project needs.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="#contact">Get Custom Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
