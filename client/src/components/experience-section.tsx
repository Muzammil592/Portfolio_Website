import { SectionWrapper, SectionHeader } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: "devieo",
    title: "Frontend Developer Intern",
    company: "DEVIEO",
    period: "March 2023 - July 2023",
    focus: "Industry-standard Frontend Development",
    description:
      "Developed responsive UI/UX using ReactJS, built reusable component architecture for scalable applications, and maintained codebase integrity through Git version control.",
    skills: ["React.js", "JavaScript", "Git", "Responsive Design", "Component Architecture"],
  },
  {
    id: "creative-energy",
    title: "Full-Stack Developer",
    company: "Creative Energy Project",
    period: "November 2025",
    focus: "Clinic Management System",
    description:
      "Engineered a full-stack Clinic Management System featuring patient dashboards, appointment scheduling, and a robust admin panel for hospital management workflows.",
    skills: ["React.js", "Node.js", "Tailwind CSS", "Full-Stack", "Admin Panel"],
  },
];

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <SectionHeader
        label="Career Path"
        title="Core Technical Experience"
        description="Professional experience building production-grade applications and working with modern web technologies."
      />

      <div className="relative">
        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />

        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative sm:pl-20"
              data-testid={`card-experience-${exp.id}`}
            >
              <div className="absolute left-2 sm:left-6 top-6 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary hidden sm:flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold" data-testid={`text-exp-title-${exp.id}`}>{exp.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase className="w-3.5 h-3.5 text-primary" />
                        <span className="text-sm text-primary font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="font-mono text-xs text-primary/70 mb-2">Focus: {exp.focus}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs font-mono">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
