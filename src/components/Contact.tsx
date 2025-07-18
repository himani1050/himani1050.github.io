import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Download,
  Calendar
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chaudharyhimani2510@gmail.com",
      href: "mailto:chaudharyhimani2510@gmail.com",
      color: "text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/himani-choudhary-752834249",
      href: "https://www.linkedin.com/in/himani-choudhary-752834249/",
      color: "text-secondary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/himani1050",
      href: "https://github.com/himani1050",
      color: "text-accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gurugram, India",
      href: null,
      color: "text-muted-foreground"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Open to opportunities in bioinformatics, computational biology, and data science roles
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
                <p className="text-muted-foreground mb-8">
                  I'm passionate about collaborating on projects that leverage computational approaches 
                  to solve biological problems. Whether you're interested in discussing research 
                  opportunities, potential collaborations, or just want to connect, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center space-x-4">
                    <div className="bg-card p-3 rounded-lg shadow-elegant-sm">
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-foreground hover:text-primary transition-colors duration-300"
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Quick Actions</h4>
                <div className="flex flex-wrap gap-3">
                  <Button variant="default" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download CV
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Schedule Meeting
                  </Button>
                </div>
              </div>

              {/* Availability Status */}
              <Card className="bg-gradient-card border-0 shadow-elegant-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Current Status</h4>
                      <p className="text-sm text-muted-foreground">
                        Open to new opportunities and collaborations
                      </p>
                    </div>
                    <span className="px-3 py-1 text-sm text-secondary bg-secondary/10 rounded-full border-0">
                      Available
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;