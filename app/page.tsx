"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { fadeInUp, staggerContainer, fadeInScale } from "@/lib/animations";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Home() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const offset = 80;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden"
      >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div variants={textVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={textVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
            >
              <span className="text-foreground">Hi, I&apos;m</span>{" "}
              <motion.span
                className="text-gradient inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                [Your Name]
              </motion.span>
            </motion.h1>

            {/* Title */}
            <motion.div
              variants={textVariants}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground mb-6"
            >
              Full Stack Developer
              <span className="text-primary"> (Laravel + Next.js)</span>
            </motion.div>

            {/* Intro */}
            <motion.p
              variants={textVariants}
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              I craft robust web applications with clean code and modern technologies.
              <br />
              Turning ideas into scalable, user-focused digital solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={textVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-muted-foreground/30 text-foreground font-semibold rounded-xl hover:bg-muted hover:border-muted-foreground/50 transition-all duration-300"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {["Laravel", "Next.js", "React", "TypeScript", "Tailwind"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-md bg-muted text-muted-foreground border border-border"
                  >
                    {tech}
                  </span>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image / Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-2xl border-2 border-dashed border-primary/30 scale-110"
              />

              {/* Main Image Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 border border-muted">
                {/* Placeholder for Profile Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted border-4 border-primary/30 flex items-center justify-center">
                      <span className="text-4xl">👨‍💻</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Profile Image</p>
                  </div>
                </div>

                {/* Floating Badge - Laravel */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -left-4 top-8 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-xl border border-muted shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🟠</span>
                    <span className="text-sm font-medium">Laravel</span>
                  </div>
                </motion.div>

                {/* Floating Badge - Next.js */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute -right-4 bottom-16 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-xl border border-muted shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">⚫</span>
                    <span className="text-sm font-medium">Next.js</span>
                  </div>
                </motion.div>

                {/* Decorative Dots */}
                <div className="absolute -right-8 -top-8 grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-primary/40"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          aria-label="Scroll to next section"
        >
          <span className="text-xs font-medium tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>

    <About />
    <Skills />
    <Projects />
    <Contact />
  </>
  );
}
