import { SectionWrapper, SectionHeader } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, ExternalLink, ArrowUp } from "lucide-react";

export function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <SectionHeader
        label="Get In Touch"
        title="Let's Build Something Together"
        description="Whether you have a project in mind or want to discuss opportunities, I'm always open to connecting."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-start gap-4" data-testid="contact-email">
                <div className="p-2 rounded-md bg-primary/10 shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:2022cs656@student.uet.edu.pk"
                    className="text-sm text-muted-foreground font-mono"
                    data-testid="link-contact-email"
                  >
                    2022cs656@student.uet.edu.pk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4" data-testid="contact-location">
                <div className="p-2 rounded-md bg-primary/10 shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">Location</h4>
                  <p className="text-sm text-muted-foreground">
                    Khayaban-e-Amin, Lahore, Pakistan
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="text-sm font-semibold mb-4">Connect</h4>
                <div className="flex gap-3">
                  <a
                    href="https://linkedin.com/in/muzammil-abbas-404b80266"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="link-contact-linkedin"
                  >
                    <Button variant="outline" className="gap-2">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                  </a>
                  <a
                    href="https://github.com/Muzammil592"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="link-contact-github"
                  >
                    <Button variant="outline" className="gap-2">
                      <Github className="w-4 h-4" />
                      GitHub
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="h-full">
            <CardContent className="p-6 flex flex-col justify-between h-full">
              <div>
                <h4 className="font-semibold mb-3">Quick Overview</h4>
                <div className="space-y-3">
                  {[
                    { label: "Specialization", value: "Full-Stack (MERN) & AI/ML" },
                    { label: "Education", value: "BS CS @ UET Lahore" },
                    { label: "Experience", value: "Frontend Intern + Freelance" },
                    { label: "Availability", value: "Open to opportunities" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between gap-4 py-2 border-b border-border last:border-0" data-testid={`text-overview-${item.label.toLowerCase().replace(/\s/g, "-")}`}>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider font-mono">{item.label}</span>
                      <span className="text-sm font-medium text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <a href="mailto:2022cs656@student.uet.edu.pk" data-testid="link-send-email">
                  <Button className="w-full gap-2">
                    <Mail className="w-4 h-4" />
                    Send an Email
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <footer className="mt-20 pt-8 border-t border-border" data-testid="footer">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-bold">
              <span className="text-primary">Muzammil</span>
              <span className="text-muted-foreground"> Abbas</span>
            </span>
          </div>

          <p className="text-xs text-muted-foreground font-mono">
            Designed & Built with precision
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-muted-foreground"
            data-testid="button-scroll-top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </SectionWrapper>
  );
}
