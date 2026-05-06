"use client";

import { motion } from "framer-motion";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-4">
              My Work
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A collection of my best work, showcasing full-stack development
              expertise across various technologies and industries.
            </p>
          </motion.div>
        </div>
      </section>

      <Projects />
    </motion.div>
  );
}
