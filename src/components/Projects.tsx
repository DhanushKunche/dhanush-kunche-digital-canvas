import { ExternalLink, Github, Calendar, User, Code } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Web-Based Patient Records Management Application',
      role: 'Designer & Developer',
      duration: 'Nov 2023 – Present',
      description: 'Developed a secure web application to manage patient records, enabling doctors to retrieve medical data efficiently during consultations. Features include secure authentication, real-time data management, and responsive design.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Firebase'],
      ide: 'VS Code',
      features: [
        'Secure patient data management',
        'Real-time data synchronization',
        'Responsive web design',
        'Doctor authentication system',
        'Medical history tracking'
      ],
      status: 'In Progress',
      type: 'Full-Stack Web Application'
    },
    {
      title: 'Quiz Application',
      role: 'Designer & Developer',
      duration: 'Jun 2024',
      description: 'Developed a secure web application to help students analyze their skills based on different skill sets. The application provides interactive quizzes with real-time scoring and detailed performance analytics.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Firebase'],
      ide: 'VS Code',
      features: [
        'Interactive quiz interface',
        'Real-time scoring system',
        'Performance analytics',
        'Skill assessment categories',
        'Progress tracking'
      ],
      status: 'Completed',
      type: 'Educational Web Application'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-dark-bg to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-4">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6 font-poppins">
              Building solutions that make a difference
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="p-8 bg-gradient-card border border-primary/10 shadow-card hover:shadow-neon/20 transition-all duration-300 group"
              >
                <div className="space-y-6">
                  {/* Project Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold font-poppins text-foreground group-hover:text-neon-purple transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Completed' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground font-poppins mb-2">{project.type}</p>
                    </div>
                    
                    <div className="flex flex-col sm:items-end gap-2">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="font-poppins text-sm">{project.duration}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <User className="h-4 w-4 mr-2" />
                        <span className="font-poppins text-sm">{project.role}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed font-poppins">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-lg font-poppins mb-3 flex items-center">
                      <Code className="h-5 w-5 text-neon-purple mr-2" />
                      Key Features
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="flex items-start text-muted-foreground font-poppins"
                        >
                          <span className="inline-block w-2 h-2 bg-gradient-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold font-poppins mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.techStack.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-glass-bg border border-primary/20 rounded-full text-sm font-medium font-poppins hover:border-neon-purple/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground font-poppins">
                      <strong>IDE:</strong> {project.ide}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border/50">
                    <Button variant="neon" size="sm" className="font-poppins">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                    <Button variant="outline" size="sm" className="font-poppins">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Card className="p-8 bg-gradient-card border border-primary/10">
              <h3 className="text-2xl font-bold font-poppins mb-4">Interested in My Work?</h3>
              <p className="text-muted-foreground font-poppins mb-6">
                Let's discuss how we can work together on your next project
              </p>
              <Button variant="hero" size="lg" className="font-poppins">
                Get In Touch
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;