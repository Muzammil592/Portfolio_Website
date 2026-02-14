import { SectionWrapper, SectionHeader } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Monitor, Server, Brain, Wrench, Layers } from "lucide-react";

const stackCategories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Monitor,
    skills: ["React.js", "React-Native", "Redux", "HTML5/CSS3", "Tailwind CSS", "Bootstrap", "JavaScript (ES6+)"],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "SQL", "JWT", "Middleware", ".NET Core"],
  },
  {
    id: "ai-ml",
    label: "AI/ML & Data",
    icon: Brain,
    skills: ["Python", "Machine Learning", "Model Training", "NLP", "Computer Vision", "I3D", "RetinaFace"],
  },
  {
    id: "tools",
    label: "Tools & DevOps",
    icon: Wrench,
    skills: ["AWS", "GitHub Actions", "Postman", "OpenAPI", "Git/GitHub", "VS Code", "MongoDB Atlas"],
  },
  {
    id: "legacy",
    label: "Legacy / Low-Level",
    icon: Layers,
    skills: ["C", "C++", "Assembly Language", "jQuery", "Ajax"],
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

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-md bg-primary/10">
                    <cat.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
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
    </SectionWrapper>
  );
}
