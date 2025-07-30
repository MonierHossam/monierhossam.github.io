import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Trophy,
  Gamepad2,
  Code,
  Users
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Hey, I'm <span className="text-gradient">Monier Hossam</span>
            </h2>
            <p className="text-gray-700 mb-6">
Welcome to my digital space! My journey into game development began back in 12th grade, when I developed and published my first Android game in 2017 — earning over 11,000 downloads. That early spark ignited a lasting passion for interactive technology and creating engaging digital experiences.
            </p>
            <p className="text-gray-700 mb-6">
Since then, I’ve self-published a total of 3 mobile games, collectively surpassing 22,000 downloads. I’ve also spent over five years building and publishing mobile, VR, and multiplayer games using Unity and C#. Along the way, I became a certified cloud developer and an Arduino enthusiast. I specialize in crafting gameplay systems, integrating third-party tools and SDKs, and connecting services like PlayFab, AdMob, and Photon to build scalable, monetized games.            </p>
            <p className="text-gray-700 mb-6">
With 50+ completed projects and a 100% success score on Upwork, I’ve helped studios and clients around the world bring their visions to life. When I’m not developing games, I enjoy exploring new technologies, working on hardware projects, or mentoring fellow developers.
            </p>
                        <p className="text-gray-700 mb-6">
Let’s connect and create something extraordinary!
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#contact">Let's Create Together</a>
            </Button>
          </div>
          <div className="order-1 md:order-2 opacity-0 animate-fade-in animate-delay-200 flex flex-col items-center">
            <div className="relative mb-6">
              <img 
                src="/imgs/monier.jpg" 
                alt="Monier Hossam" 
                className="w-40 h-40 rounded-full border-4 border-primary shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
