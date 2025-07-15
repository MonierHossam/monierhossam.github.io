
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Gamepad2, Trophy } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 hieroglyph-pattern">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-8 opacity-0 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Crafting <span className="text-gradient">Legendary</span> 
              <br /> Game <span className="text-gradient">Experiences</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Professional game developer bringing ancient worlds to life through immersive gameplay, 
              stunning visuals, and captivating narratives inspired by Egyptian mythology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-base bg-primary hover:bg-primary/90">
                <a href="#portfolio">View My Games</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base border-primary text-primary hover:bg-primary/10">
                <a href="#services">Services</a>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative opacity-0 animate-fade-in animate-delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-tr from-primary/20 to-accent/20 p-1 egyptian-border">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-10 z-0 rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1566577739112-5180d4bf9390" 
                alt="Game Development Workspace" 
                className="rounded-xl w-full h-auto relative z-10"
              />
              <div className="absolute -bottom-3 -right-3 h-24 w-24 bg-primary rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-3 -left-3 h-16 w-16 bg-accent rounded-full opacity-20 blur-xl"></div>
              
              <div className="absolute top-4 right-4 p-2 rounded-full bg-accent/80 text-white">
                <Trophy size={24} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <a 
            href="#portfolio" 
            className="animate-bounce flex flex-col items-center text-sm text-gray-500 hover:text-primary transition-colors"
          >
            <span className="mb-2">Explore My Work</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
