import { Code, Database, Globe, Terminal } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Java', level: 90 },
        { name: 'C', level: 80 },
        { name: 'SQL', level: 85 },
        { name: 'JavaScript', level: 88 },
      ],
    },
    {
      category: 'Web Development',
      icon: Globe,
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'Node.js', level: 82 },
        { name: 'React', level: 85 },
      ],
    },
    {
      category: 'Tools & Technologies',
      icon: Terminal,
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Firebase', level: 80 },
        { name: 'Git', level: 85 },
        { name: 'MongoDB', level: 75 },
      ],
    },
    {
      category: 'Database',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'Firebase', level: 80 },
        { name: 'MongoDB', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-dark-bg to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-4">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6 font-poppins">
              Technologies and tools I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex} 
                className="p-8 bg-gradient-card border border-primary/10 shadow-card hover:shadow-neon/20 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-primary rounded-lg shadow-neon mr-4">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold font-poppins">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium font-poppins">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-glass-bg rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out shadow-neon/50"
                          style={{ 
                            width: `${skill.level}%`,
                            animation: `fadeInUp 1s ease-out ${skillIndex * 0.1}s both`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-12 text-center">
            <h4 className="text-lg font-semibold font-poppins mb-6 text-muted-foreground">Other Technologies</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {['React', 'Tailwind CSS', 'Express.js', 'Postman', 'Figma', 'Linux'].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-glass-bg border border-primary/20 rounded-full text-sm font-medium font-poppins hover:border-neon-purple/50 hover:shadow-neon/20 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;