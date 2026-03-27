import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import profileImage from "@assets/image_2_1771072611398.png";

export function HeroSection() {
  const { data: githubData } = useQuery<{ public_repos: number; followers: number }>({
    queryKey: ["/api/github/profile"],
    staleTime: 10 * 60 * 1000,
  });

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/6 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[100px]" />
        <div className="absolute top-2/3 left-1/2 w-72 h-72 rounded-full bg-blue-500/3 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(190 100% 50% / 0.6) 1px, transparent 0)`,
            backgroundSize: "44px 44px",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to bottom, transparent 70%, hsl(var(--background)) 100%)`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-row items-center gap-8 sm:gap-12 lg:gap-20">
          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/8 text-primary font-mono text-xs tracking-wider mb-8"
                data-testid="badge-status"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow animate-pulse" />
                AVAILABLE FOR WORK
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
              data-testid="text-hero-headline"
            >
              Building Scalable Web Systems &{" "}
              <span className="text-gradient">AI-Driven Intelligence</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mb-3 leading-relaxed"
              data-testid="text-hero-subheadline"
            >
              Full-Stack Engineer | BS Computer Science @ UET Lahore.
              From mastering the MERN stack to engineering real-time Computer Vision solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="font-mono text-sm text-primary/70 mb-10 border-l-2 border-primary/30 pl-3"
              data-testid="text-hero-pitch"
            >
              {"// I don't just build apps; I build systems that think."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Button
                onClick={() => scrollTo("#projects")}
                className="gap-2 shadow-lg shadow-primary/20"
                data-testid="button-view-work"
              >
                <Sparkles className="w-4 h-4" />
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollTo("#contact")}
                className="border-border/80 hover:border-primary/40 hover:text-primary transition-colors"
                data-testid="button-get-in-touch"
              >
                Get In Touch
              </Button>
              <div className="flex items-center gap-0.5 ml-1">
                <a
                  href="https://github.com/Muzammil592"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-github"
                >
                  <Button size="icon" variant="ghost" className="hover:text-primary hover:bg-primary/8 transition-colors">
                    <Github className="w-4 h-4" />
                  </Button>
                </a>
                <a
                  href="https://linkedin.com/in/muzammil-abbas-404b80266"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-linkedin"
                >
                  <Button size="icon" variant="ghost" className="hover:text-primary hover:bg-primary/8 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </a>
                <a
                  href="mailto:2022cs656@student.uet.edu.pk"
                  data-testid="link-email"
                >
                  <Button size="icon" variant="ghost" className="hover:text-primary hover:bg-primary/8 transition-colors">
                    <Mail className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-14 flex gap-5"
            >
              <div
                className="px-5 py-4 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm text-center min-w-[90px]"
                data-testid="stat-years-exp"
              >
                <div className="font-mono text-2xl sm:text-3xl font-bold text-primary leading-none">2+</div>
                <div className="text-xs text-muted-foreground mt-1.5 uppercase tracking-wider font-mono">Years Exp</div>
              </div>
              <div
                className="px-5 py-4 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm text-center min-w-[90px]"
                data-testid="stat-repos"
              >
                <div className="font-mono text-2xl sm:text-3xl font-bold text-primary leading-none">15+</div>
                <div className="text-xs text-muted-foreground mt-1.5 uppercase tracking-wider font-mono">Repositories</div>
              </div>
              <div className="px-5 py-4 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm text-center min-w-[90px]">
                <div className="font-mono text-2xl sm:text-3xl font-bold text-primary leading-none">3+</div>
                <div className="text-xs text-muted-foreground mt-1.5 uppercase tracking-wider font-mono">Projects</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="shrink-0 hidden sm:block"
            data-testid="img-profile"
          >
            <div className="relative w-52 h-52 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[340px] xl:h-[340px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-primary/15 to-transparent blur-2xl scale-110" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-6px] rounded-full border border-dashed border-primary/15"
              />
              <div className="absolute inset-[-12px] rounded-full border border-primary/8" />
              <div className="relative w-full h-full rounded-full overflow-hidden border border-primary/25 shadow-[0_0_40px_hsl(190_100%_50%/0.12)]">
                <img
                  src={profileImage}
                  alt="Muzammil Abbas"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-primary animate-pulse-glow" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <button
          onClick={() => scrollTo("#experience")}
          className="text-muted-foreground/50 hover:text-primary transition-colors flex flex-col items-center gap-1"
          data-testid="button-scroll-down"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground/40">scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
