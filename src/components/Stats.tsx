
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, Linkedin, Github } from 'lucide-react';

const Stats: React.FC = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);

  // Animation function for counting up
  const countUp = (target: number, setter: (value: number) => void, duration: number = 2000) => {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(Math.floor(start));
      }
    }, 16);
  };

  useEffect(() => {
    // Start animations with slight delays
    setTimeout(() => countUp(50, setProjectCount), 200);
    setTimeout(() => countUp(30, setClientCount), 400);
    setTimeout(() => countUp(5, setExperienceCount), 600);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5 hieroglyph-pattern">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Professional <span className="text-gradient">Game Developer</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about creating immersive gaming experiences with years of expertise in the industry
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center opacity-0 animate-fade-in">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              {projectCount}+
            </div>
            <div className="text-lg font-semibold text-gray-700">Projects Completed</div>
            <div className="text-sm text-gray-500">Games & Interactive Experiences</div>
          </div>

          <div className="text-center opacity-0 animate-fade-in animate-delay-200">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              {clientCount}+
            </div>
            <div className="text-lg font-semibold text-gray-700">Happy Clients</div>
            <div className="text-sm text-gray-500">Worldwide Collaborations</div>
          </div>

          <div className="text-center opacity-0 animate-fade-in animate-delay-400">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              {experienceCount}+
            </div>
            <div className="text-lg font-semibold text-gray-700">Years Experience</div>
            <div className="text-sm text-gray-500">In Game Development</div>
          </div>
        </div>

        {/* Professional Links */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Download CV
              <ExternalLink className="ml-2 h-3 w-3" />
            </a>
          </Button>

          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
              <ExternalLink className="ml-2 h-3 w-3" />
            </a>
          </Button>

          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.47 0 2.705 1.19 2.705 2.659 0 1.469-1.235 2.746-2.706 2.746zm-13.122 0c-1.471 0-2.706-1.277-2.706-2.746 0-1.47 1.235-2.659 2.706-2.659 1.99 0 2.632 1.917 2.839 3.06l.008.042.228 1.076c-.939.76-1.972 1.227-3.075 1.227z"/>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.561 13.158c-2.132 0-4.145-.967-5.561-2.674-1.416 1.707-3.429 2.674-5.561 2.674C4.785 15.158 2.439 12.42 2.439 9.412c0-3.009 2.346-5.747 4.999-5.747 2.28 0 3.66 1.283 4.562 2.589.902-1.306 2.282-2.589 4.561-2.589 2.654 0 4.999 2.738 4.999 5.747 0 3.008-2.345 5.746-4.999 5.746z"/>
              </svg>
              Upwork
              <ExternalLink className="ml-2 h-3 w-3" />
            </a>
          </Button>

          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.1 7.6c0 2.4-1.9 4.3-4.3 4.3s-4.3-1.9-4.3-4.3 1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3zm-8.6 0c0 2.4-1.9 4.3-4.3 4.3S3.9 10 3.9 7.6s1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3zM12 14.2c-1.8 0-3.3.7-4.5 1.8-1.2-1.1-2.7-1.8-4.5-1.8C1.3 14.2 0 15.5 0 17.2v4.6h24v-4.6c0-1.7-1.3-3-3-3-1.8 0-3.3.7-4.5 1.8-1.2-1.1-2.7-1.8-4.5-1.8z"/>
              </svg>
              Credly
              <ExternalLink className="ml-2 h-3 w-3" />
            </a>
          </Button>

          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
              <ExternalLink className="ml-2 h-3 w-3" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
