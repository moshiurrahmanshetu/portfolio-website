"use client";

import { motion } from "framer-motion";
import { User, Mail, MapPin, Calendar, Briefcase, Code2, Users, CheckCircle } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const personalInfo = [
  { icon: User, label: "Name", value: "[Your Name]" },
  { icon: Mail, label: "Email", value: "hello@example.com" },
  { icon: MapPin, label: "Location", value: "[Your City, Country]" },
  { icon: Calendar, label: "Experience", value: "5+ Years" },
];

const stats = [
  { icon: Code2, value: "50+", label: "Projects Completed" },
  { icon: Briefcase, value: "5+", label: "Years Experience" },
  { icon: Users, value: "30+", label: "Happy Clients" },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Know Who <span className="text-gradient">I Am</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate developer dedicated to creating impactful digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio Card */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeInUp}
              className="bg-card border border-border rounded-2xl p-8 h-full"
            >
              <h3 className="text-2xl font-bold mb-6">Short Bio</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hello! I&apos;m a Full Stack Developer with a passion for building robust
                  and scalable web applications. I specialize in Laravel and Next.js,
                  combining backend power with modern frontend experiences.
                </p>
                <p>
                  My journey in web development started 5 years ago, and since then,
                  I&apos;ve had the privilege of working with diverse clients from startups
                  to established enterprises, helping them bring their digital visions to life.
                </p>
                <p>
                  I believe in writing clean, maintainable code and staying up-to-date
                  with the latest technologies. When I&apos;m not coding, you&apos;ll find me
                  exploring new frameworks, contributing to open-source projects, or
                  mentoring aspiring developers.
                </p>
              </div>

              {/* Highlights */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold mb-4">Highlights</h4>
                <div className="flex flex-wrap gap-3">
                  {["Problem Solver", "Team Player", "Fast Learner", "Detail Oriented"].map(
                    (trait) => (
                      <span
                        key={trait}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full bg-muted text-muted-foreground"
                      >
                        <CheckCircle size={14} className="text-secondary" />
                        {trait}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Info & Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Personal Info Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-card border border-border rounded-2xl p-8 hover-lift"
            >
              <h3 className="text-xl font-bold mb-6">Personal Info</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {personalInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-muted">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Stats Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={fadeInUp}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-colors"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
