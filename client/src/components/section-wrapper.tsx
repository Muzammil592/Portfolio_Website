import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
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
      <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block" data-testid={`text-section-label-${label.toLowerCase().replace(/\s/g, "-")}`}>
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" data-testid={`text-section-title-${title.toLowerCase().replace(/\s/g, "-")}`}>
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
