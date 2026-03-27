import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionHeader({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <div className="mb-12 sm:mb-16">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-3 mb-4"
        data-testid={`text-section-label-${label.toLowerCase().replace(/\s/g, "-")}`}
      >
        <span className="h-px w-6 bg-primary/60 block" />
        <span className="font-mono text-xs tracking-widest uppercase text-primary">
          {label}
        </span>
      </motion.div>
      <h2
        className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 leading-tight"
        data-testid={`text-section-title-${title.toLowerCase().replace(/\s/g, "-")}`}
      >
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
