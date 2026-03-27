import { SectionWrapper, SectionHeader } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Monitor, Server, Brain, Wrench, Layers } from "lucide-react";

const stackCategories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Monitor,
    skills: ["React.js", "React-Native", "Redux", "HTML5/CSS3", "Tailwind CSS", "Bootstrap", "JavaScript (ES6+)"],
    iconColor: "text-chart-1",
    iconBg: "bg-chart-1/10",
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "SQL", "JWT", "Middleware", ".NET Core"],
    iconColor: "text-chart-2",
    iconBg: "bg-chart-2/10",
  },
  {
    id: "ai-ml",
    label: "AI/ML & Data",
    icon: Brain,
    skills: ["Python", "Machine Learning", "Model Training", "NLP", "Computer Vision", "I3D", "RetinaFace"],
    iconColor: "text-chart-3",
    iconBg: "bg-chart-3/10",
  },
  {
    id: "tools",
    label: "Tools & DevOps",
    icon: Wrench,
    skills: ["AWS", "GitHub Actions", "Postman", "OpenAPI", "Git/GitHub", "VS Code", "MongoDB Atlas"],
    iconColor: "text-chart-4",
    iconBg: "bg-chart-4/10",
  },
  {
    id: "legacy",
    label: "Legacy / Low-Level",
    icon: Layers,
    skills: ["C", "C++", "Assembly Language", "jQuery", "Ajax"],
    iconColor: "text-chart-5",
    iconBg: "bg-chart-5/10",
  },
];

export function TechStackSection() {
  return (
    <SectionWrapper id="tech-stack">
      <SectionHeader
        label="Tech Stack Matrix"
        title="Skills & Technologies"
        description="A comprehensive toolkit spanning frontend frameworks, backend infrastructure, AI/ML, and low-level systems programming."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stackCategories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={cat.id === "legacy" ? "sm:col-span-2 lg:col-span-1" : ""}
            data-testid={`card-stack-${cat.id}`}
          >
            <div className="group h-full rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/20 hover:bg-card/80">
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-lg ${cat.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                  <cat.icon className={`w-4 h-4 ${cat.iconColor}`} />
                </div>
                <h3 className="font-semibold text-sm">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs font-mono hover:bg-primary/12 hover:text-primary transition-colors cursor-default border border-transparent hover:border-primary/15"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
