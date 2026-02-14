import { SectionWrapper, SectionHeader } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Brain, LayoutDashboard, Radio } from "lucide-react";

const services = [
  {
    id: "fullstack",
    title: "Full-Stack Application Development",
    description: "End-to-end MERN stack solutions. From database design to polished UIs, delivering complete web applications that scale.",
    icon: Code,
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description: "Injecting ML models (Vision/NLP) into web environments. Bringing intelligent automation to your existing systems.",
    icon: Brain,
  },
  {
    id: "admin-systems",
    title: "Admin & Management Systems",
    description: "Building internal tools for organizations. Custom dashboards, CRMs, and management panels with intuitive interfaces.",
    icon: LayoutDashboard,
  },
  {
    id: "realtime",
    title: "Real-time Infrastructure",
    description: "WebSockets and live data streaming solutions. Chat systems, notifications, and real-time collaborative features.",
    icon: Radio,
  },
];

export function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <SectionHeader
        label="Professional Services"
        title="Hire My Expertise"
        description="Professional development services available on Fiverr. From full-stack apps to AI-powered solutions, I deliver production-ready code."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            data-testid={`card-service-${service.id}`}
          >
            <Card className="h-full hover-elevate overflow-visible">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-md bg-primary/10 shrink-0">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2" data-testid={`text-service-title-${service.id}`}>{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
