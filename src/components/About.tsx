import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Heart } from "lucide-react";
const About = () => {
  return <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about bridging the gap between biology and technology through computational approaches
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Education Card */}
            <Card className="bg-gradient-card border-0 shadow-elegant-md hover:shadow-elegant-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-primary">MSc Bioinformatics</h4>
                    <p className="text-muted-foreground">Savitribai Phule Pune University • 2022-2024</p>
                    <p className="text-sm mt-2 text-foreground/80">Specialized in computational biology, machine learning applications in genomics, transcriptomics, metagenomics, and statistical analysis of biological data.</p>
                  </div>
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">Distinction</span>
                      <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full">Computational Biology</span>
                      <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full">Data Science</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience Card */}
            <Card className="bg-gradient-card border-0 shadow-elegant-md hover:shadow-elegant-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-secondary/10 p-3 rounded-lg mr-4">
                    <Briefcase className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Experience</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-secondary">Technical Head</h4>
                    <p className="text-muted-foreground">Edgene Biomed Pvt Ltd • 2024-Present</p>
                    <p className="text-sm mt-2 text-foreground/80">
                      Analyzing genomic data, developing analysis pipelines, and creating 
                      visualizations for biological insights and research support.
                    </p>
                  </div>
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full font-medium">Leadership</span>
                      <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full">Pipeline Development</span>
                      <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full">Data Analysis</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bio Section */}
          <Card className="bg-gradient-card border-0 shadow-elegant-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-8">
                <div className="bg-accent/10 p-3 rounded-lg mr-4">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">My Journey 🗺️</h3>
              </div>
              
              {/* Roadmap Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-secondary opacity-30"></div>
                
                <div className="space-y-8">
                  {/* Chapter 1 */}
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-6 border-2 border-accent/30">
                      <span className="text-accent font-bold">🎓</span>
                    </div>
                    <div className="flex-grow">
                      <div className="bg-accent/5 p-4 rounded-lg border border-accent/10">
                        <h4 className="text-lg font-semibold text-accent mb-2">Chapter 1: The Awakening</h4>
                        <p className="text-foreground/90">
                          Started my MSc journey thinking "How hard could computational biology be?" 
                          <em className="text-accent"> *Famous last words* </em> 
                          Quickly discovered that DNA sequences are basically nature's way of coding... 
                          and debugging is just as frustrating! 🧬💻
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Chapter 2 */}
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-6 border-2 border-primary/30">
                      <span className="text-primary font-bold">🔬</span>
                    </div>
                    <div className="flex-grow">
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <h4 className="text-lg font-semibold text-primary mb-2">Chapter 2: The Plot Thickens</h4>
                        <p className="text-foreground/90">
                          Dove into transcriptomics, metagenomics, and machine learning. 
                          Built CNNs to detect plant diseases (turns out plants get sick too, who knew?). 
                          International collaboration with Norway taught me that science has no borders... 
                          but timezone differences are still a pain! 🌍⏰
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Chapter 3 */}
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-6 border-2 border-secondary/30">
                      <span className="text-secondary font-bold">💼</span>
                    </div>
                    <div className="flex-grow">
                      <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/10">
                        <h4 className="text-lg font-semibold text-secondary mb-2">Chapter 3: Level Up!</h4>
                        <p className="text-foreground/90">
                          Became Technical Head at Edgene Biomed. Now I wrangle production pipelines, 
                          mentor teammates, and occasionally explain why "it works on my machine" 
                          isn't a valid deployment strategy. Docker containers became my best friends! 🐳✨
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Current Status */}
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mr-6 border-2 border-accent/30 animate-pulse">
                      <span className="text-white font-bold">🚀</span>
                    </div>
                    <div className="flex-grow">
                      <div className="bg-gradient-to-r from-accent/5 to-secondary/5 p-4 rounded-lg border border-accent/20">
                        <h4 className="text-lg font-semibold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-2">
                          Current Status: Data Wizard 🧙‍♀️
                        </h4>
                        <p className="text-foreground/90">
                          Transforming genomic chaos into actionable insights daily. 
                          Still debugging pipelines at 2 AM (some things never change), 
                          but now I do it with style and blazing-fast FastAPI endpoints.
                          <strong className="text-accent"> The DNA doesn't stand a chance! </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default About;