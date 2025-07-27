import { GraduationCap, User, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const timeline = [
    {
      period: '2019-2020',
      title: '10th Grade',
      institution: 'Sri Sadguru Vidyalayam',
      icon: GraduationCap,
    },
    {
      period: '2020-2022',
      title: 'Intermediate',
      institution: 'Narayana Junior College',
      icon: GraduationCap,
    },
    {
      period: '2022-2026',
      title: 'BTech - Information Technology',
      institution: 'Vishnu Institute of Technology',
      icon: GraduationCap,
      current: true,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div className="space-y-6">
              <Card className="p-8 bg-gradient-card border border-primary/10 shadow-card">
                <div className="flex items-center mb-6">
                  <User className="h-8 w-8 text-neon-purple mr-3" />
                  <h3 className="text-2xl font-semibold font-poppins">Who I Am</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed font-poppins">
                  I'm Dhanush Kunche, a BTech student in Information Technology at Vishnu Institute of Technology (2022–2026). 
                  I specialize in Java, web development, and have completed certifications in Java Programming. 
                  I'm passionate about building scalable applications and exploring AI-powered solutions to real-world problems.
                </p>
              </Card>
            </div>

            {/* Education Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold font-poppins mb-8 flex items-center">
                <Calendar className="h-8 w-8 text-neon-purple mr-3" />
                Educational Journey
              </h3>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30"></div>
                
                {timeline.map((item, index) => (
                  <div key={index} className="relative mb-8 last:mb-0">
                    {/* Timeline Dot */}
                    <div className={`absolute left-4 w-4 h-4 rounded-full border-2 ${
                      item.current 
                        ? 'bg-neon-purple border-neon-purple shadow-neon' 
                        : 'bg-glass-bg border-primary'
                    }`}></div>
                    
                    {/* Content */}
                    <div className="ml-12">
                      <Card className={`p-6 bg-gradient-card border transition-all duration-300 hover:shadow-neon/50 ${
                        item.current 
                          ? 'border-neon-purple/30 shadow-neon/20' 
                          : 'border-primary/10'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-lg font-poppins">{item.title}</h4>
                          <span className={`text-sm px-3 py-1 rounded-full ${
                            item.current 
                              ? 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30' 
                              : 'bg-glass-bg text-muted-foreground'
                          }`}>
                            {item.period}
                          </span>
                        </div>
                        <p className="text-muted-foreground font-poppins">{item.institution}</p>
                        {item.current && (
                          <span className="inline-block mt-2 text-xs text-neon-purple font-medium">Current</span>
                        )}
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;