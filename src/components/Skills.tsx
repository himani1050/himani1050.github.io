import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Code, Database, BarChart3, Cpu, TestTube, Dna, ChevronDown } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "Python", level: 90, description: "Specialized in data analysis, machine learning, and bioinformatics libraries including Pandas, NumPy, and Biopython." },
        { name: "R", level: 85, description: "Expert in statistical analysis, Bioconductor packages, and data visualization with ggplot2." },
        { name: "Bash/Shell", level: 80, description: "Proficient in pipeline automation and server management for high-throughput workflows." }
      ]
    },
    {
      title: "Bioinformatics Tools",
      icon: Dna,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: [
        { name: "BLAST", level: 85, description: "Expert in sequence alignment and homology searches for comparative genomics." },
        { name: "BWA/Bowtie", level: 80, description: "Proficient in read mapping and alignment for next-generation sequencing data." },
        { name: "SAMtools", level: 75, description: "Skilled in BAM/SAM file manipulation and processing for genomic analysis." },
        { name: "GATK", level: 70, description: "Experienced in variant calling and analysis using GATK best practices." },
        { name: "QIIME2", level: 80, description: "Advanced microbiome analysis and taxonomic classification workflows." },
        { name: "Galaxy", level: 75, description: "Proficient with web-based bioinformatics workflow platform for reproducible research." }
      ]
    },
    {
      title: "Data Analysis",
      icon: BarChart3,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        { name: "Pandas/NumPy", level: 90, description: "Expert in data manipulation and analysis using Python's core scientific libraries." },
        { name: "Machine Learning", level: 75, description: "Proficient with Scikit-learn for feature engineering and predictive modeling." },
        { name: "Statistics", level: 80, description: "Advanced knowledge in hypothesis testing and regression analysis techniques." },
        { name: "Data Visualization", level: 85, description: "Skilled in creating publication-ready plots using Matplotlib, Seaborn, and ggplot2." },
        { name: "Pathway Analysis", level: 75, description: "Experienced in STRING and KEGG pathway enrichment analysis for biological insights." }
      ]
    },
    {
      title: "Databases & Infrastructure",
      icon: Database,
      color: "text-primary-light",
      bgColor: "bg-primary/5",
      skills: [
        { name: "FastAPI", level: 75, description: "Expert in modern Python web framework for building high-performance APIs." },
        { name: "Docker", level: 75, description: "Proficient in containerization and deployment for reproducible environments." },
        { name: "Git/GitHub", level: 85, description: "Advanced version control and collaboration workflows for scientific projects." }
      ]
    },
    {
      title: "Genomics & NGS",
      icon: TestTube,
      color: "text-secondary-light",
      bgColor: "bg-secondary/5",
      skills: [
        { name: "RNA-seq Analysis", level: 80, description: "Expert in gene expression analysis and differential expression studies." },
        { name: "Variant Calling", level: 75, description: "Skilled in SNP/INDEL detection and annotation using industry-standard tools." },
        { name: "Quality Control", level: 85, description: "Proficient with FastQC, trimming, and filtering for data preprocessing." },
        { name: "Genome Assembly", level: 65, description: "Experienced in de novo assembly techniques for novel genome construction." },
        { name: "Metagenomics", level: 75, description: "Advanced skills in QIIME2, DADA2, shotgun sequencing, taxonomic classification, and diversity analysis." }
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for modern bioinformatics and computational biology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className={`${category.bgColor} border-0 shadow-elegant-md hover:shadow-elegant-lg transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`${category.bgColor} p-3 rounded-lg mr-4`}>
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="w-full flex items-center justify-between p-4 rounded-lg border border-border bg-background hover:bg-muted/50 transition-colors" style={{ color: '#16383D' }}>
                        <span className="font-medium">View Skills</span>
                        <ChevronDown className="h-4 w-4" style={{ color: '#16383D' }} />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-80 bg-popover border border-border z-50">
                      {category.skills.map((skill) => (
                        <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                          <HoverCardTrigger asChild>
                            <DropdownMenuItem className="flex justify-between items-center p-3 cursor-pointer hover:bg-muted/50">
                              <div className="flex items-center gap-3">
                                <span className="font-medium text-foreground">{skill.name}</span>
                              </div>
                            </DropdownMenuItem>
                          </HoverCardTrigger>
                          <HoverCardContent 
                            className="w-80 bg-popover border border-border p-4 z-50" 
                            side="right"
                            align="start"
                          >
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <h4 className="font-semibold text-foreground">{skill.name}</h4>
                              </div>
                              <p className="text-sm text-muted-foreground">{skill.description}</p>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;