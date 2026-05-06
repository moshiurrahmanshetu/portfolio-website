"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useDemo } from "@/components/DemoContext";
import DeveloperHero from "@/components/demos/DeveloperHero";
import MinimalHero from "@/components/demos/MinimalHero";
import CreativeHero from "@/components/demos/CreativeHero";
import Testimonials from "@/components/Testimonials";

const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Laravel",
    description: "Full-featured online store with payment integration",
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Next.js",
    description: "Collaborative project management tool",
  },
  {
    id: 3,
    title: "Blog CMS",
    category: "Full Stack",
    description: "Content management with markdown editor",
  },
];

export default function Home() {
  const { demo } = useDemo();

  const renderHero = () => {
    switch (demo) {
      case "minimal":
        return <MinimalHero />;
      case "creative":
        return <CreativeHero />;
      case "developer":
      default:
        return <DeveloperHero />;
    }
  };

  const getProjectsSectionStyles = () => {
    switch (demo) {
      case "minimal":
        return "py-24 bg-slate-50";
      case "creative":
        return "py-24 bg-gradient-to-b from-purple-950 to-slate-900";
      case "developer":
      default:
        return "py-24 bg-slate-950";
    }
  };

  const getCardStyles = () => {
    switch (demo) {
      case "minimal":
        return "bg-white border-slate-200 hover:border-slate-400";
      case "creative":
        return "bg-white/5 border-white/10 hover:border-purple-500/50";
      case "developer":
      default:
        return "bg-slate-900 border-slate-800 hover:border-amber-500/50";
    }
  };

  const getTextColor = () => {
    switch (demo) {
      case "minimal":
        return "text-slate-900";
      case "creative":
        return "text-white";
      case "developer":
      default:
        return "text-slate-100";
    }
  };

  const getMutedTextColor = () => {
    switch (demo) {
      case "minimal":
        return "text-slate-500";
      case "creative":
        return "text-white/60";
      case "developer":
      default:
        return "text-slate-400";
    }
  };

  return (
    <div className="animate-fade-in">
      {renderHero()}

      {/* Featured Projects Preview */}
      <section className={getProjectsSectionStyles()}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${demo === "minimal" ? "bg-slate-200 text-slate-600" : demo === "creative" ? "bg-white/10 text-white/70" : "bg-slate-800 text-slate-400"}`}>
              Featured Work
            </span>
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${getTextColor()}`}>
              Recent Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group border rounded-xl p-6 transition-all duration-300 ${getCardStyles()}`}
              >
                <div className={`h-32 rounded-lg mb-4 flex items-center justify-center ${demo === "minimal" ? "bg-slate-100" : demo === "creative" ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20" : "bg-gradient-to-br from-amber-500/20 to-emerald-500/20"}`}>
                  <span className="text-4xl opacity-50">💼</span>
                </div>
                <span className={`text-xs font-medium uppercase tracking-wider ${demo === "minimal" ? "text-blue-600" : demo === "creative" ? "text-purple-400" : "text-amber-400"}`}>
                  {project.category}
                </span>
                <h3 className={`text-xl font-semibold mt-2 mb-2 ${getTextColor()}`}>{project.title}</h3>
                <p className={`text-sm ${getMutedTextColor()}`}>{project.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${demo === "minimal" ? "bg-slate-900 text-white hover:bg-slate-800" : demo === "creative" ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : "bg-amber-500 text-slate-900 hover:bg-amber-400"}`}
              >
                View All Projects
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className={`py-20 lg:py-32 ${demo === "minimal" ? "bg-white" : demo === "creative" ? "bg-slate-900" : "bg-slate-950"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`relative rounded-2xl p-8 lg:p-12 text-center overflow-hidden ${demo === "minimal" ? "bg-slate-50 border border-slate-200" : demo === "creative" ? "bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10" : "bg-slate-900 border border-slate-800"}`}
          >
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${getTextColor()}`}>
                Let&apos;s Work Together
              </h2>
              <p className={`mb-8 ${getMutedTextColor()}`}>
                Have a project in mind? I&apos;m always open to discussing new opportunities
                and interesting collaborations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl transition-all duration-300 ${demo === "minimal" ? "bg-slate-900 text-white hover:bg-slate-800" : demo === "creative" ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : "bg-amber-500 text-slate-900 hover:bg-amber-400"}`}
                  >
                    Get in Touch
                    <ArrowRight size={18} className="ml-2" />
                  </motion.button>
                </Link>
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl transition-all duration-300 border-2 ${demo === "minimal" ? "border-slate-300 text-slate-700 hover:bg-slate-100" : demo === "creative" ? "border-white/30 text-white hover:bg-white/10" : "border-slate-700 text-slate-300 hover:bg-slate-800"}`}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
