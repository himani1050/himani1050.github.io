import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'About',
    href: '#about'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsOpen(false);
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-elegant-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" onClick={e => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }} className="text-xl font-bold text-[#16383D] hover:text-[#234B9F] transition-colors duration-300">Himani Choudhary</a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map(item => <button key={item.name} onClick={() => scrollToSection(item.href)} className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
                  {item.name}
                </button>)}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-primary transition-colors duration-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => <button key={item.name} onClick={() => scrollToSection(item.href)} className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium w-full text-left">
                  {item.name}
                </button>)}
              <div className="px-3 py-2">
                <Button variant="outline" size="sm" className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;