import { SectionWrapper, SectionHeader } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ExternalLink, Github, Shield, MessageSquare, Stethoscope, Code2, Cpu, Terminal, BookOpen } from "lucide-react";
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
    gradient: "from-primary/10 to-transparent",
  },
  {
    id: "clinic-management",
    title: "Clinic Management System",
    badge: "Full-Stack",
    icon: Stethoscope,
    tech: ["React.js", "Tailwind CSS", "Node.js"],
    impact:
      "Complete patient dashboard with appointment booking system and a robust Admin Panel for streamlined hospital management and patient record handling.",
    gradient: "from-chart-2/10 to-transparent",
  },
  {
    id: "chatly",
    title: "Chatly Messenger",
    badge: "Real-Time",
    icon: MessageSquare,
    tech: ["React.js", "Node.js", "Socket.IO"],
    impact:
      "Real-time two-way messaging application with instant delivery, online presence indicators, and a scalable backend connection handling architecture.",
    gradient: "from-chart-3/10 to-transparent",
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
    id: "assembly-lang",
    title: "Assembly Language Project",
    description: "Low-level systems programming showcasing deep hardware understanding.",
    icon: Cpu,
    lang: "Assembly",
  },
  {
    id: "automation-scripts",
    title: "Automation Scripts",
    description: "Python tools for workflow optimization and task automation.",
    icon: Terminal,
    lang: "Python",
  },
  {
    id: "academic-labs",
    title: "Academic Labs",
    description: "Various projects in C#, .NET Core, and SQL for coursework and research.",
    icon: BookOpen,
    lang: "C# / SQL",
  },
];

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <SectionHeader
        label="Project Catalog"
        title="Featured Projects"
        description="From AI-powered surveillance systems to real-time messaging platforms - engineering solutions that solve real-world problems."
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
            <Card className="h-full hover-elevate overflow-visible">
              <CardContent className="p-6 flex flex-col h-full">
                <div className={`w-full h-1 rounded-full bg-gradient-to-r ${project.gradient} mb-5 -mt-1`} />

                <div className="flex items-start justify-between gap-2 mb-4">
                  <div className="p-2 rounded-md bg-primary/10">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs font-mono shrink-0">
                    {project.badge}
                  </Badge>
                </div>

                <h3 className="text-lg font-semibold mb-3" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {project.impact}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs font-mono">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div>
        <h3 className="font-mono text-xs tracking-widest uppercase text-primary mb-6" data-testid="text-github-repos-label">
          GitHub Repository Deep-Dive
        </h3>
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
              <Card className="h-full hover-elevate overflow-visible">
                <CardContent className="p-5 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <repo.icon className="w-4 h-4 text-primary shrink-0" />
                    <h4 className="text-sm font-semibold truncate">{repo.title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-3">
                    {repo.description}
                  </p>
                  <span className="font-mono text-xs text-primary/60">{repo.lang}</span>
                </CardContent>
              </Card>
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
            <Button variant="outline" className="gap-2">
              <Github className="w-4 h-4" />
              View Full GitHub Profile
              <ExternalLink className="w-3 h-3" />
            </Button>
          </a>
        </div>
      </div>

      <GithubActivity />
    </SectionWrapper>
  );
}
