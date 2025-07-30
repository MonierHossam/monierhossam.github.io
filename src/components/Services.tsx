
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
  BookOpen,
  Monitor,
  Wrench,
  Users,
  Database,
  Repeat,
  Cpu
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Game Development',
    description:
      'Complete game development from idea to launch across mobile, PC, WebGL, and VR. Specializing in Unity with expertise in design, architecture, monetization, and publishing.',
    features: [
      'Unity, C#, .NET',
      '2D & 3D Games',
      'Prototyping to Publishing',
      'AdMob, Unity IAP, Analytics',
      'WebGL, Android, iOS, PC'
    ],
    icon: <Gamepad2 size={28} />,
    popular: true,
  },
  {
    id: 2,
    title: 'Multiplayer & Backend Systems',
    description:
      'Scalable multiplayer games and backend systems using PlayFab, Firebase, AWS, and Photon. Includes authentication, leaderboards, inventories, and live events.',
    features: [
      'Real-time & Turn-based Multiplayer',
      'PlayFab, Firebase, AWS, Photon, Fishnet',
      'Cloud Save, Auth, Leaderboards',
      'LiveOps, Offers, Remote Config',
      'Crash & Analytics Integration'
    ],
    icon: <Database size={28} />,
    popular: true,
  },
  {
    id: 3,
    title: 'XR, VR & Interactive Experiences',
    description:
      'Immersive XR/VR solutions and touchscreen installations for entertainment, education, and business using Unity, WebXR, and Oculus.',
    features: [
      'Oculus, Quest, Pico',
      'Touchscreen & WebXR Experiences',
      '3D Interactive Environments',
      'Gaze & Hand Interaction',
      'Performance Optimization'
    ],
    icon: <Monitor size={28} />,
    popular: true,
  },
  {
    id: 4,
    title: 'Tools, Plugins & Automation',
    description:
      'Custom Unity editor tools, automation systems, and game development plugins to boost team productivity and streamline workflows.',
    features: [
      'Unity Editor Extensions',
      'Build & Asset Automation',
      'Custom Visual Tools',
      'Plugins & Scripting APIs',
      'Project Generators & Templates'
    ],
    icon: <Wrench size={28} />,
    popular: false,
  },
  {
    id: 5,
    title: 'Hardware & IoT Integration',
    description:
      'Integration of Unity or mobile apps with real-world hardware using Arduino, Raspberry Pi, and sensors — for interactive systems, smart devices, or educational setups.',
    features: [
      'Arduino, Raspberry Pi, IoT',
      'Unity & Mobile Integration',
      'Sensors, Motors, LEDs, RFID',
      'Serial, Wi-Fi, MQTT Communication',
      'Physical UI & Control Systems'
    ],
    icon: <Cpu size={28} />,
    popular: false,
  },
  {
    id: 6,
    title: 'Consulting & Mentorship',
    description:
      'Expert guidance for developers and studios on game architecture, optimization, career growth, and project planning.',
    features: [
      '1:1 Mentoring & Coaching',
      'Architecture & Code Reviews',
      'Career & Freelance Guidance',
      'Workshops & Training',
      'Project Rescue & Planning'
    ],
    icon: <Users size={28} />,
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
            I deliver end-to-end game development services — from concept and prototyping to full production, optimization, and cross-platform deployment.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className={`service-card opacity-0 animate-fade-in egyptian-border flex flex-col h-full`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
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
              <CardFooter className="mt-auto">
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
