import { SectionWrapper, SectionHeader } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ExternalLink, Github, Shield, Brain, Stethoscope, Code2, Cpu, Terminal, BookOpen, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubActivity } from "@/components/github-activity";

const flagshipProjects = [
  {
    id: "ai-threat-detection",
    title: "AI Threat Detection System",
    badge: "Flagship",
    icon: Shield,
    tech: ["MERN", "Python", "I3D", "RetinaFace", "Computer Vision"],
    impact:
      "Real-time weapon detection (guns/knives), behavioral analysis via I3D models, automated police alerts with live CCTV footage integration. A comprehensive AI-powered security surveillance solution.",
    accentColor: "from-primary/20 via-primary/8 to-transparent",
    borderGlow: "hover:shadow-[0_0_0_1px_hsl(190_100%_50%/0.25),0_12px_40px_hsl(190_100%_50%/0.1)]",
  },
  {
    id: "clinic-management",
    title: "Clinic Management System",
    badge: "Full-Stack",
    icon: Stethoscope,
    tech: ["React.js", "Tailwind CSS", "Node.js"],
    impact:
      "Complete patient dashboard with appointment booking system and a robust Admin Panel for streamlined hospital management and patient record handling.",
    accentColor: "from-chart-2/20 via-chart-2/8 to-transparent",
    borderGlow: "hover:shadow-[0_0_0_1px_hsl(210_95%_60%/0.2),0_12px_40px_hsl(210_95%_60%/0.08)]",
  },
  {
    id: "efficient-net-classifier",
    title: "EfficientNet Custom Gender Classifier",
    badge: "Deep Learning",
    icon: Brain,
    tech: ["Python", "EfficientNet", "TensorFlow", "CNN", "Computer Vision"],
    impact:
      "Advanced deep learning model for gender classification using fine-tuned EfficientNet architecture. Achieves high accuracy through transfer learning and optimized neural network training.",
    accentColor: "from-chart-3/20 via-chart-3/8 to-transparent",
    borderGlow: "hover:shadow-[0_0_0_1px_hsl(180_90%_50%/0.2),0_12px_40px_hsl(180_90%_50%/0.08)]",
  },
];

const githubRepos = [
  {
    id: "ds-algo-oop",
    title: "DS-ALGO-and-OOP",
    description: "C++ implementations of complex data structures and Object-Oriented patterns.",
    icon: Code2,
    lang: "C++",
  },
  {
    id: "mern-stack",
    title: "MERN Stack Projects",
    description: "Full-stack web applications built with MongoDB, Express, React, and Node.js.",
    icon: Code2,
    lang: "JavaScript/TypeScript",
  },
  {
    id: "automation-scripts",
    title: "Automation Scripts",
    description: "Python tools for workflow optimization and task automation.",
    icon: Terminal,
    lang: "Python",
  },
  {
    id: "ai-ml-models",
    title: "AI/ML Models & Integration",
    description: "Trained deep learning models and seamlessly integrated them into production websites and applications.",
    icon: Brain,
    lang: "Python / TensorFlow",
  },
];

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <SectionHeader
        label="Project Catalog"
        title="Featured Projects"
        description="From AI-powered surveillance systems to real-time messaging platforms — engineering solutions that solve real-world problems."
      />

      <div className="grid gap-6 lg:grid-cols-3 mb-16">
        {flagshipProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            data-testid={`card-project-${project.id}`}
          >
            <div className={`group h-full rounded-xl border border-border/60 bg-card/70 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/20 ${project.borderGlow}`}>
              <div className={`h-px w-full bg-gradient-to-r ${project.accentColor}`} />
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-start justify-between gap-2 mb-5">
                  <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs font-mono shrink-0 border-border/60 text-muted-foreground"
                  >
                    {project.badge}
                  </Badge>
                </div>

                <h3 className="text-lg font-semibold mb-3 group-hover:text-foreground transition-colors" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {project.impact}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs font-mono hover:bg-primary/12 hover:text-primary transition-colors cursor-default">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-6 bg-primary/60 block" />
          <h3 className="font-mono text-xs tracking-widest uppercase text-primary" data-testid="text-github-repos-label">
            GitHub Repository Deep-Dive
          </h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {githubRepos.map((repo, i) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              data-testid={`card-repo-${repo.id}`}
            >
              <div className="group h-full rounded-xl border border-border/60 bg-card/60 p-5 flex flex-col transition-all duration-300 hover:border-primary/20 hover:bg-card/80">
                <div className="flex items-center gap-3 mb-3">
                  <repo.icon className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors shrink-0" />
                  <h4 className="text-sm font-semibold truncate">{repo.title}</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-3">
                  {repo.description}
                </p>
                <span className="font-mono text-xs text-primary/50">{repo.lang}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/Muzammil592"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-github-profile"
          >
            <Button
              variant="outline"
              className="gap-2 border-border/60 hover:border-primary/40 hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              View Full GitHub Profile
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </a>
        </div>
      </div>

      <GithubActivity />
    </SectionWrapper>
  );
}
