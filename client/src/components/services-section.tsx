import { SectionWrapper, SectionHeader } from "@/components/section-wrapper";
import { motion } from "framer-motion";
import { Code, Brain, LayoutDashboard, Radio, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "fullstack",
    title: "Full-Stack Application Development",
    description: "End-to-end MERN stack solutions. From database design to polished UIs, delivering complete web applications that scale.",
    icon: Code,
    number: "01",
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description: "Injecting ML models (Vision/NLP) into web environments. Bringing intelligent automation to your existing systems.",
    icon: Brain,
    number: "02",
  },
  {
    id: "admin-systems",
    title: "Admin & Management Systems",
    description: "Building internal tools for organizations. Custom dashboards, CRMs, and management panels with intuitive interfaces.",
    icon: LayoutDashboard,
    number: "03",
  },
  {
    id: "realtime",
    title: "Real-time Infrastructure",
    description: "WebSockets and live data streaming solutions. Chat systems, notifications, and real-time collaborative features.",
    icon: Radio,
    number: "04",
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

      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            data-testid={`card-service-${service.id}`}
          >
            <div className="group h-full rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/25 hover:shadow-[0_0_0_1px_hsl(190_100%_50%/0.12),0_8px_32px_hsl(190_100%_50%/0.07)]">
              <div className="flex items-start gap-4">
                <div className="relative shrink-0">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/18 transition-colors duration-300 group-hover:shadow-[0_0_20px_hsl(190_100%_50%/0.2)]">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 font-mono text-[10px] text-primary/40 group-hover:text-primary/60 transition-colors">
                    {service.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 group-hover:text-foreground transition-colors" data-testid={`text-service-title-${service.id}`}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 text-center"
      >
        <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl border border-primary/15 bg-primary/5 backdrop-blur-sm">
          <p className="text-sm text-muted-foreground max-w-md">
            Available for freelance projects on Fiverr. Let's discuss your requirements and build something impactful.
          </p>
          <a
            href="https://www.fiverr.com"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-fiverr"
          >
            <Button className="gap-2 shadow-lg shadow-primary/20">
              Hire Me on Fiverr
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
