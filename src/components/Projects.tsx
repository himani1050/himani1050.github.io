import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Dna, BarChart3, Brain, Database, Droplets, Leaf } from "lucide-react";
const Projects = () => {
  const projects = [{
    title: "Transcriptomic Data Analysis Platform",
    description: "Designed and deployed a comprehensive transcriptomic data analysis report generation platform with Python backend and fully functional APIs for seamless integration and automated analysis workflows.",
    icon: BarChart3,
    color: "text-primary",
    bgColor: "bg-primary/10",
    technologies: ["Python", "FastAPI", "DESeq2", "pandas", "numpy", "plotly", "Docker"],
    github: "#",
    demo: "#",
    highlights: ["Automated report generation", "RESTful API integration", "Scalable Python backend", "Publication-ready visualizations"]
  }, {
    title: "Metagenomic Analysis Platform",
    description: "Built and deployed a metagenomic data analysis report generation platform using R, enabling automated generation of high-quality PDF reports with comprehensive taxonomic and functional analysis.",
    icon: Dna,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    technologies: ["R", "QIIME2", "ggplot2", "knitr", "rmarkdown", "phyloseq", "vegan"],
    github: "#",
    demo: "#",
    highlights: ["Automated PDF report generation", "Taxonomic classification", "Functional analysis", "Interactive visualizations"]
  }, {
    title: "Automated Metagenomic Pipeline",
    description: "Led collaboration and mentorship efforts for developing an automated metagenomic analysis pipeline using QIIME2 and Bash scripting, streamlining microbiome data processing workflows.",
    icon: Database,
    color: "text-accent",
    bgColor: "bg-accent/10",
    technologies: ["QIIME2", "Bash", "Python", "Nextflow", "Docker", "Linux"],
    github: "#",
    demo: "#",
    highlights: ["End-to-end automation", "Team collaboration", "Reproducible workflows", "Quality control integration"]
  }, {
    title: "ML Biomarker Prediction Model",
    description: "Developed a machine learning-based biomarker prediction model utilizing gene expression data for diagnostic and prognostic insights, incorporating feature selection and model validation.",
    icon: Brain,
    color: "text-primary-light",
    bgColor: "bg-primary/5",
    technologies: ["Python", "scikit-learn", "pandas", "matplotlib", "seaborn", "GATK"],
    github: "#",
    demo: "#",
    highlights: ["Machine learning implementation", "Gene expression analysis", "Diagnostic insights", "Model validation pipeline"]
  }];
  const courseworkProjects = [{
    title: "International Project - NIWASm",
    description: "Blended Mobility focusing on Norway-India Water-Soil Microbiome Nexus in collaboration with University of Southeastern Norway (Mar 2023 – Present)",
    technologies: ["Python", "R", "GATK", "Nextflow", "QIIME2", "Bioinformatics"]
  }, {
    title: "Master Thesis - Protein Analysis",
    description: "Time series approach to detect structural signatures in proteins using conformational states potentials (Nov 2023 – May 2024)",
    technologies: ["Python", "R", "Biopython", "pandas", "Statistics"]
  }, {
    title: "ML Transcriptomics Project",
    description: "Predictive modeling for breast cancer classification using gene expression profiles and machine learning techniques",
    technologies: ["Python", "scikit-learn", "pandas", "numpy", "Transcriptomics"]
  }, {
    title: "Deep Learning - Plant Disease Detection",
    description: "Potato plant disease detection using CNN-based image classification for agricultural diagnostics",
    technologies: ["Python", "TensorFlow", "OpenCV", "CNN", "Computer Vision"]
  }];
  return <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            
          </div>

          {/* Main Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => <Card key={project.title} className="bg-gradient-card border-0 shadow-elegant-md hover:shadow-elegant-lg transition-all duration-300 group animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${project.bgColor} p-3 rounded-lg`}>
                      <project.icon className={`h-6 w-6 ${project.color}`} />
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground text-sm">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.highlights.map((highlight, idx) => <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                          {highlight}
                        </li>)}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map(tech => <span key={tech} className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded-md border">
                        {tech}
                      </span>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {/* Academic Projects Section */}
          <section>
            <div>
              <h2 className="font-bold text-foreground mb-8 text-center" style={{ fontSize: '36px' }}>
                Academic Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {courseworkProjects.map((project, index) => {
                  // Define icons for each project
                  const getProjectIcon = (title: string) => {
                    if (title.includes("NIWASm")) return <Droplets className="h-8 w-8 text-blue-500" />;
                    if (title.includes("Protein Analysis")) return <Dna className="h-8 w-8 text-purple-500" />;
                    if (title.includes("ML Transcriptomics")) return <Brain className="h-8 w-8" style={{ color: '#3C6FD2' }} />;
                    if (title.includes("Plant Disease")) return <Leaf className="h-8 w-8 text-emerald-500" />;
                    return <Database className="h-8 w-8 text-primary" />;
                  };
                  
                  return (
                    <Card 
                      key={project.title} 
                      className="bg-gradient-card border-0 shadow-elegant-sm hover:shadow-elegant-md transition-all duration-300 animate-fade-in-up group"
                      style={{
                        animationDelay: `${(index + 4) * 0.1}s`
                      }}
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="p-3 bg-muted/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                            {getProjectIcon(project.title)}
                          </div>
                          <h4 className="font-semibold text-foreground">{project.title}</h4>
                          <p className="text-sm text-muted-foreground">{project.description}</p>
                          <div className="flex flex-wrap gap-1 justify-center">
                            {project.technologies.map(tech => (
                              <span key={tech} className="text-xs px-2 py-0.5 bg-muted/30 text-muted-foreground rounded border-0">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>;
};
export default Projects;