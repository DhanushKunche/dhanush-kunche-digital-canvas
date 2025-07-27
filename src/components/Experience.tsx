import { Award, Briefcase, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'AICTE Google AI/ML Virtual Internship',
      organization: 'AICTE & Google',
      duration: '2024',
      type: 'Virtual Internship',
      description: 'Participated in an intensive AI/ML virtual internship program focusing on machine learning fundamentals, data science techniques, and real-world AI applications.',
      achievements: [
        'Completed comprehensive AI/ML curriculum',
        'Gained hands-on experience with machine learning algorithms',
        'Learned data preprocessing and model evaluation techniques',
        'Explored real-world applications of AI in various industries'
      ],
      icon: Award,
      badge: 'AI/ML'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-4">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6 font-poppins">
              Professional journey and learning experiences
            </p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="p-8 bg-gradient-card border border-primary/10 shadow-card hover:shadow-neon/20 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon and Badge */}
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-gradient-primary rounded-xl shadow-neon">
                      <exp.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold font-poppins text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-neon-purple font-medium font-poppins">
                          {exp.organization}
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:items-end gap-2">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="font-poppins">{exp.duration}</span>
                        </div>
                        <span className="inline-block px-3 py-1 bg-neon-purple/20 text-neon-purple border border-neon-purple/30 rounded-full text-sm font-medium">
                          {exp.badge}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed font-poppins">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg font-poppins flex items-center">
                        <Briefcase className="h-5 w-5 text-neon-purple mr-2" />
                        Key Learning Outcomes
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li 
                            key={achIndex}
                            className="flex items-start text-muted-foreground font-poppins"
                          >
                            <span className="inline-block w-2 h-2 bg-gradient-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="p-6 bg-gradient-card border border-primary/10 rounded-lg">
              <p className="text-lg text-muted-foreground font-poppins">
                Looking for more opportunities to learn and contribute to innovative projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;