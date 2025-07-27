import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-darker border-t border-border/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-poppins bg-gradient-primary bg-clip-text text-transparent">
                Dhanush Kunche
              </h3>
              <p className="text-muted-foreground font-poppins">
                BTech IT Student & Web Developer passionate about creating innovative solutions 
                and building scalable applications.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold font-poppins">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Contact', href: '#contact' }
                ].map((link) => (
                  <button
                    key={link.name}
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-muted-foreground hover:text-neon-purple transition-colors duration-300 text-left font-poppins"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold font-poppins">Get In Touch</h4>
              <div className="space-y-2 text-muted-foreground font-poppins">
                <p>kunchedhanush295@gmail.com</p>
                <p>+91 9704754297</p>
                <p>Andhra Pradesh, India</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border/30">
            <div className="flex items-center space-x-2 text-muted-foreground font-poppins mb-4 sm:mb-0">
              <span>© {currentYear} Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>by Dhanush Kunche</span>
            </div>

            {/* Back to Top Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-neon-purple font-poppins"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;