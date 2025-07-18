import { Button } from "@/components/ui/button";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Himani Choudhary</h3>
            <p className="text-primary-foreground/80 mb-4">
              Bioinformatician passionate about transforming biological data into meaningful insights.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent transition-colors duration-300">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary-light transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent transition-colors duration-300">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map(item => <li key={item}>
                  <button onClick={() => {
                const element = document.querySelector(`#${item.toLowerCase()}`);
                element?.scrollIntoView({
                  behavior: 'smooth'
                });
              }} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                    {item}
                  </button>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>chaudharyhimani2510@gmail.com</p>
              <p>Gurugram, India</p>
              <p className="text-sm">
                Open to opportunities in bioinformatics and computational biology
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © 2024 YourName. Built with{" "}
              <Heart className="inline h-4 w-4 text-red-400 mx-1" />
              using React & Tailwind CSS
            </p>
            
            <Button variant="ghost" size="icon" onClick={scrollToTop} className="text-primary-foreground hover:text-accent transition-colors duration-300">
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;