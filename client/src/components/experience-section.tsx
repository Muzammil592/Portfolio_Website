import { SectionWrapper, SectionHeader } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    id: "devieo",
    title: "Frontend Developer Intern",
    company: "DEVIEO",
    period: "March 2023 – July 2023",
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
        <div className="absolute left-4 sm:left-[2.15rem] top-3 bottom-3 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden sm:block" />

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
              <div className="absolute left-2 sm:left-[1.35rem] top-6 w-6 h-6 rounded-full bg-background border-2 border-primary hidden sm:flex items-center justify-center z-10 shadow-[0_0_12px_hsl(190_100%_50%/0.35)]">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className="group rounded-xl border border-border/60 bg-card/70 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/25 hover:shadow-[0_0_0_1px_hsl(190_100%_50%/0.15),0_8px_32px_hsl(190_100%_50%/0.06)]">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-foreground transition-colors" data-testid={`text-exp-title-${exp.id}`}>
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-primary" />
                      <span className="text-sm text-primary font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono shrink-0 border border-border/50 rounded-full px-3 py-1 bg-background/40">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </div>
                </div>

                <p className="font-mono text-xs text-primary/60 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary/50" />
                  {exp.focus}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{exp.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs font-mono hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
