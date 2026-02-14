import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@assets/image_2_1771072611398.png";

export function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/3 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(190 100% 50% / 0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-row items-center gap-8 sm:gap-12 lg:gap-16">
        <div className="flex-1 min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary font-mono text-xs tracking-wider mb-6" data-testid="badge-status">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
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
            <span className="text-primary">AI-Driven Intelligence</span>.
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
            className="font-mono text-sm text-primary/80 mb-10"
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
              data-testid="button-view-work"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollTo("#contact")}
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </Button>
            <div className="flex items-center gap-1 ml-2">
              <a
                href="https://github.com/Muzammil592"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-github"
              >
                <Button size="icon" variant="ghost">
                  <Github />
                </Button>
              </a>
              <a
                href="https://linkedin.com/in/muzammil-abbas-404b80266"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-linkedin"
              >
                <Button size="icon" variant="ghost">
                  <Linkedin />
                </Button>
              </a>
              <a
                href="mailto:2022cs656@student.uet.edu.pk"
                data-testid="link-email"
              >
                <Button size="icon" variant="ghost">
                  <Mail />
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16"
          >
            <div className="text-center inline-block" data-testid="stat-years-exp">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-primary">2+</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Years Exp</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="shrink-0 hidden sm:block"
          data-testid="img-profile"
        >
          <div className="relative w-52 h-52 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/20">
              <img
                src={profileImage}
                alt="Muzammil Abbas"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-primary border-4 border-background" />
          </div>
        </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollTo("#experience")}
          className="text-muted-foreground animate-bounce"
          data-testid="button-scroll-down"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </motion.div>
    </section>
  );
}
