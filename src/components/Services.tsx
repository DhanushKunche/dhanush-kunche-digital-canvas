import { Code, Globe, Database, Smartphone, Zap, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Full-Stack Web Development',
      description: 'Complete web application development from frontend to backend, using modern technologies like React, Node.js, and databases.',
      features: [
        'Responsive UI/UX Design',
        'Backend API Development',
        'Database Integration',
        'Performance Optimization'
      ]
    },
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Creating beautiful, interactive user interfaces with modern frameworks and ensuring cross-browser compatibility.',
      features: [
        'React & JavaScript',
        'HTML5 & CSS3',
        'Responsive Design',
        'Modern UI Libraries'
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Building robust server-side applications with secure APIs, database management, and scalable architecture.',
      features: [
        'Node.js Development',
        'API Design & Integration',
        'Database Management',
        'Server Configuration'
      ]
    },
    {
      icon: Smartphone,
      title: 'Responsive Web Design',
      description: 'Ensuring your web applications work seamlessly across all devices and screen sizes.',
      features: [
        'Mobile-First Approach',
        'Cross-Device Testing',
        'Performance Optimization',
        'User Experience Focus'
      ]
    },
    {
      icon: Zap,
      title: 'Real-Time Applications',
      description: 'Developing applications with real-time data synchronization using Firebase and modern web technologies.',
      features: [
        'Real-Time Data Sync',
        'Live Updates',
        'Firebase Integration',
        'WebSocket Implementation'
      ]
    },
    {
      icon: Shield,
      title: 'Secure Applications',
      description: 'Implementing security best practices to protect user data and ensure application integrity.',
      features: [
        'Authentication Systems',
        'Data Encryption',
        'Security Audits',
        'Best Practices Implementation'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-4">
              What I <span className="bg-gradient-primary bg-clip-text text-transparent">Offer</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6 font-poppins max-w-3xl mx-auto">
              I offer full-stack web development services, including responsive UI design, 
              backend integration, and real-time data management solutions.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card border border-primary/10 shadow-card hover:shadow-neon/20 transition-all duration-300 group hover:scale-105"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="p-3 bg-gradient-primary rounded-lg shadow-neon w-fit group-hover:shadow-glow transition-shadow duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-poppins group-hover:text-neon-purple transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed font-poppins">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-start text-sm text-muted-foreground font-poppins"
                      >
                        <span className="inline-block w-1.5 h-1.5 bg-gradient-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold font-poppins text-center mb-12">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Development Process</span>
            </h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your requirements and goals' },
                { step: '02', title: 'Planning', desc: 'Creating detailed project roadmap and timeline' },
                { step: '03', title: 'Development', desc: 'Building your application with best practices' },
                { step: '04', title: 'Deployment', desc: 'Testing, optimization, and successful launch' }
              ].map((phase, index) => (
                <div 
                  key={index}
                  className="text-center space-y-3 group"
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-neon group-hover:shadow-glow transition-shadow duration-300">
                      <span className="text-white font-bold text-lg">{phase.step}</span>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gradient-primary opacity-30"></div>
                    )}
                  </div>
                  <h4 className="font-semibold text-lg font-poppins group-hover:text-neon-purple transition-colors duration-300">
                    {phase.title}
                  </h4>
                  <p className="text-muted-foreground text-sm font-poppins">
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;