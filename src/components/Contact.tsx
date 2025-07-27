import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kunchedhanush295@gmail.com',
      href: 'mailto:kunchedhanush295@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9704754297',
      href: 'tel:+919704754297'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/dhanush-kunche-981209257',
      href: 'https://linkedin.com/in/dhanush-kunche-981209257'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/DhanushKunche',
      href: 'https://github.com/DhanushKunche'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark-bg to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-4">
              Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6 font-poppins">
              Let's collaborate and bring your ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-poppins mb-6">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed font-poppins mb-8">
                  I'm always excited to work on new projects and collaborate with fellow developers. 
                  Whether you have a project in mind or just want to connect, feel free to reach out!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card 
                    key={index}
                    className="p-6 bg-gradient-card border border-primary/10 shadow-card hover:shadow-neon/20 transition-all duration-300 group"
                  >
                    <a 
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 group-hover:text-neon-purple transition-colors duration-300"
                    >
                      <div className="p-3 bg-gradient-primary rounded-lg shadow-neon group-hover:shadow-glow transition-shadow duration-300">
                        <contact.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold font-poppins">{contact.label}</h4>
                        <p className="text-muted-foreground font-poppins break-all">{contact.value}</p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>

              {/* Location Info */}
              <Card className="p-6 bg-gradient-card border border-primary/10 shadow-card">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-lg shadow-neon">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-poppins">Location</h4>
                    <p className="text-muted-foreground font-poppins">Andhra Pradesh, India</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 bg-gradient-card border border-primary/10 shadow-card">
              <h3 className="text-2xl font-bold font-poppins mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium font-poppins mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="bg-glass-bg border-primary/20 focus:border-neon-purple font-poppins"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium font-poppins mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="bg-glass-bg border-primary/20 focus:border-neon-purple font-poppins"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium font-poppins mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="bg-glass-bg border-primary/20 focus:border-neon-purple font-poppins resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full font-poppins font-medium"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-border/50">
                <p className="text-center text-muted-foreground text-sm font-poppins">
                  I'll get back to you within 24 hours!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;