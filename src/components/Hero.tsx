import { useEffect, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-picture.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Dhanush Kunche – a passionate developer focused on web development, Java, and real-world AI solutions.";

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-background to-dark-darker"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-neon-purple/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-neon-glow/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fadeInUp">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Dhanush Kunche
                </span>
              </h1>
              <div className="text-xl sm:text-2xl text-muted-foreground font-medium">
                BTech IT Student & <span className="text-neon-purple">Web Developer</span>
              </div>
            </div>

            {/* Typing Animation */}
            <div className="h-24 sm:h-20">
              <p className="text-lg sm:text-xl text-foreground leading-relaxed font-poppins">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="font-poppins font-medium"
              >
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="neon"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="font-poppins font-medium"
              >
                Contact Me
              </Button>
            </div>

            {/* Resume Download */}
            <div className="pt-4">
              <a
                href="https://drive.google.com/file/d/1B7EYcTahzhWdiB9GrWOEAYv6Hq6LuETW/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-muted-foreground hover:text-neon-purple transition-colors duration-300 font-poppins"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30 animate-glow"></div>
              <img
                src={profileImage}
                alt="Dhanush Kunche"
                className="relative w-80 h-80 sm:w-96 sm:h-96 object-cover rounded-3xl shadow-neon border border-primary/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;