import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }} />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-background/20" />
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => <div key={i} className="absolute rounded-full opacity-20 animate-float" style={{
        width: Math.random() * 4 + 2 + 'px',
        height: Math.random() * 4 + 2 + 'px',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        backgroundColor: i % 3 === 0 ? 'hsl(215 85% 35%)' : i % 3 === 1 ? 'hsl(158 65% 45%)' : 'hsl(185 85% 55%)',
        animationDelay: Math.random() * 3 + 's'
      }} />)}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Decoding Life Through
            <span className="block bg-clip-text bg-gradient-to-r from-accent to-secondary-light text-slate-50">
              Data Science
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">Bioinformatician passionate about transforming biological data into meaningful insights</p>
          
          <div className="flex items-center justify-center gap-6 pt-8">
            <Button variant="outline" size="lg" className="bg-card/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm transition-all duration-300" onClick={() => window.open('mailto:chaudharyhimani2510@gmail.com', '_blank')}>
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent transition-colors duration-300" onClick={() => window.open('https://github.com/himani1050', '_blank')}>
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary-light transition-colors duration-300" onClick={() => window.open('https://www.linkedin.com/in/himani-choudhary-752834249/', '_blank')}>
                <Linkedin className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
      </div>
    </section>;
};
export default Hero;