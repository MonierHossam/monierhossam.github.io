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
              About <span className="text-gradient">The Developer</span>
            </h2>
            <p className="text-gray-700 mb-6">
            I’m a Computer Science graduate from Egypt with over five years of hands-on experience in Unity game development. I've completed 40+ freelance projects on Upwork with a 100% success rate, earning a Top Rated badge for consistently delivering high-quality work. I specialize in mobile games but have also developed for web and VR platforms.
            </p>
            <p className="text-gray-700 mb-6">
              With expertise in multiple game engines including Unity and Unreal, I create memorable 
              gaming experiences for PC, console, and mobile platforms. My background in both game design 
              and development allows me to bring a comprehensive approach to every project.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                  <Trophy size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Experience</h4>
                  <p className="text-gray-600 text-sm">8+ Years</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                  <Gamepad2 size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Games</h4>
                  <p className="text-gray-600 text-sm">15+ Released</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                  <Users size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Happy Players</h4>
                  <p className="text-gray-600 text-sm">500K+</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                  <Code size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Technologies</h4>
                  <p className="text-gray-600 text-sm">Unity, Unreal, WebGL</p>
                </div>
              </div>
            </div>
            
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#contact">Let's Create Together</a>
            </Button>
          </div>
          
          <div className="order-1 md:order-2 opacity-0 animate-fade-in animate-delay-200">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/5 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/10 rounded-full"></div>
              
              <Card className="relative z-10 overflow-hidden egyptian-border">
                <CardContent className="p-0">
                  <img 
                    src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd" 
                    alt="Game Developer" 
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
              
              <div className="absolute top-4 right-4 transform translate-x-1/2 -translate-y-1/2">
                <div className="bg-white shadow-lg rounded-lg p-4">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white text-lg font-bold">
                    8+
                  </div>
                  <p className="text-center text-xs mt-1">Years Exp.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
