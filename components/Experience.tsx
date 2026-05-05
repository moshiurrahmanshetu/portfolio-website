"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  ChevronRight,
  X,
  Building2,
  Code2,
  Users,
  Award,
  ExternalLink,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const experiences = [
  {
    id: 1,
    type: "work",
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "Remote",
    duration: "2022 - Present",
    icon: Building2,
    summary: "Leading development of enterprise web applications using Laravel and Next.js.",
    details: [
      "Architected and developed scalable microservices handling 1M+ daily requests",
      "Led a team of 5 developers, implementing Agile methodologies and CI/CD pipelines",
      "Reduced application load time by 40% through optimization and caching strategies",
      "Implemented real-time features using WebSockets and Redis for live dashboards",
    ],
    technologies: ["Laravel", "Next.js", "PostgreSQL", "Redis", "AWS"],
    link: "#",
  },
  {
    id: 2,
    type: "work",
    title: "Full Stack Developer",
    company: "Digital Innovations Ltd",
    location: "New York, USA",
    duration: "2020 - 2022",
    icon: Code2,
    summary: "Developed custom e-commerce solutions and integrated payment systems.",
    details: [
      "Built 15+ custom Shopify themes and headless e-commerce solutions",
      "Integrated Stripe, PayPal, and custom payment gateways processing $2M+ annually",
      "Developed RESTful APIs and GraphQL endpoints for mobile applications",
      "Collaborated with design team to implement responsive, pixel-perfect UIs",
    ],
    technologies: ["React", "Node.js", "MongoDB", "GraphQL", "Stripe"],
    link: "#",
  },
  {
    id: 3,
    type: "work",
    title: "Junior Web Developer",
    company: "StartUp Hub",
    location: "San Francisco, USA",
    duration: "2019 - 2020",
    icon: Users,
    summary: "Started my professional journey building MVPs for early-stage startups.",
    details: [
      "Developed 8+ MVP applications for Y Combinator and Techstars startups",
      "Implemented authentication systems, admin dashboards, and analytics tools",
      "Worked closely with founders to rapidly iterate based on user feedback",
      "Gained expertise in rapid prototyping and lean development methodologies",
    ],
    technologies: ["PHP", "Laravel", "Vue.js", "MySQL", "Tailwind"],
    link: "#",
  },
  {
    id: 4,
    type: "education",
    title: "BS in Computer Science",
    company: "University of Technology",
    location: "Boston, USA",
    duration: "2015 - 2019",
    icon: GraduationCap,
    summary: "Graduated with honors, specializing in Software Engineering.",
    details: [
      "GPA: 3.8/4.0 - Dean's List for all semesters",
      "Specialized in Algorithms, Database Systems, and Web Technologies",
      "Capstone Project: AI-powered study assistant using NLP (won Best Project award)",
      "Teaching Assistant for Data Structures and Algorithms course",
      "Active member of ACM and Hackathon club",
    ],
    technologies: ["Python", "Java", "C++", "SQL", "Machine Learning"],
    link: "#",
  },
];

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function ExperienceDrawer({ isOpen, onClose }: DrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[480px] bg-card border-l border-border z-50 overflow-hidden"
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-xl font-bold">Experience & Education</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Close drawer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                {/* Experience Section */}
                <div>
                  <h3 className="text-sm font-semibold text-[#f59e0b] uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Briefcase size={16} />
                    Work Experience
                  </h3>
                  <div className="space-y-6">
                    {experiences
                      .filter((item) => item.type === "work")
                      .map((item) => (
                        <div
                          key={item.id}
                          className="bg-muted/50 rounded-xl p-5 border border-border/50 hover:border-[#f59e0b]/30 transition-colors"
                        >
                          <div className="flex items-start gap-3 mb-3">
                            <div className="p-2 rounded-lg bg-[#f59e0b]/10">
                              <item.icon size={18} className="text-[#f59e0b]" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground">{item.title}</h4>
                              <p className="text-sm text-muted-foreground">{item.company}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar size={12} />
                              {item.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={12} />
                              {item.location}
                            </span>
                          </div>
                          <ul className="space-y-2">
                            {item.details.map((detail, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-[#f59e0b] mt-1.5">•</span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-1.5 mt-4">
                            {item.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs px-2 py-1 rounded-md bg-background border border-border text-muted-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Education Section */}
                <div>
                  <h3 className="text-sm font-semibold text-[#f59e0b] uppercase tracking-wider mb-4 flex items-center gap-2">
                    <GraduationCap size={16} />
                    Education
                  </h3>
                  {experiences
                    .filter((item) => item.type === "education")
                    .map((item) => (
                      <div
                        key={item.id}
                        className="bg-muted/50 rounded-xl p-5 border border-border/50 hover:border-[#f59e0b]/30 transition-colors"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-[#f59e0b]/10">
                            <item.icon size={18} className="text-[#f59e0b]" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.company}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {item.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {item.location}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <Award size={14} className="text-[#f59e0b] mt-0.5 shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-2 py-1 rounded-md bg-background border border-border text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>

                {/* Download CV Button */}
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#f59e0b] text-[#0f172a] font-semibold hover:bg-[#f59e0b]/90 transition-colors"
                >
                  <ExternalLink size={18} />
                  Download Full CV
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Experience() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <section id="experience" className="py-20 lg:py-25">
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
              My Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Experience & <span className="text-[#f59e0b]">Education</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A timeline of my professional growth and academic foundation
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative max-w-3xl mx-auto"
          >
            {/* Center Line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#f59e0b]/50 via-border to-[#f59e0b]/30 sm:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {experiences.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  className={`relative flex items-start gap-4 sm:gap-8 ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-[#f59e0b] border-2 border-background sm:-translate-x-1/2 z-10 mt-6" />

                  {/* Content Card */}
                  <div
                    className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                      index % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="bg-card border border-border rounded-xl p-5 hover:border-[#f59e0b]/30 transition-colors group"
                    >
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          index % 2 === 0 ? "sm:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="p-2 rounded-lg bg-[#f59e0b]/10 group-hover:bg-[#f59e0b]/20 transition-colors">
                          <item.icon size={18} className="text-[#f59e0b]" />
                        </div>
                        <div className={index % 2 === 0 ? "sm:text-right" : ""}>
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.company}</p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                        <Calendar size={12} />
                        {item.duration}
                      </p>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.summary}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View Full Details Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsDrawerOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#f59e0b] text-[#0f172a] font-semibold hover:bg-[#f59e0b]/90 transition-colors"
              >
                View Full Details
                <ChevronRight size={18} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Drawer */}
      <ExperienceDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
