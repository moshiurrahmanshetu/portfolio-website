"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Smartphone, Database, ArrowUpRight } from "lucide-react";
import { useDemo } from "./DemoContext";

const services = [
  {
    id: 1,
    icon: Code2,
    title: "Full Stack Development",
    description: "End-to-end web application development using Laravel for robust backends and Next.js for modern, performant frontends.",
    features: ["Custom APIs", "Authentication Systems", "Real-time Features"],
  },
  {
    id: 2,
    icon: Globe,
    title: "Web Applications",
    description: "Scalable, responsive web apps with exceptional user experience. From e-commerce platforms to SaaS solutions.",
    features: ["Progressive Web Apps", "E-commerce", "CMS Development"],
  },
  {
    id: 3,
    icon: Smartphone,
    title: "API Development",
    description: "RESTful and GraphQL APIs designed for performance, security, and scalability. Perfect for mobile apps and third-party integrations.",
    features: ["RESTful APIs", "GraphQL", "WebSocket Integration"],
  },
  {
    id: 4,
    icon: Database,
    title: "Database Architecture",
    description: "Optimized database design and management. From schema design to query optimization and data migration strategies.",
    features: ["Schema Design", "Query Optimization", "Data Migration"],
  },
];

export default function Services() {
  const { demo } = useDemo();

  const getSectionStyles = () => {
    switch (demo) {
      case "minimal":
        return "bg-slate-50";
      case "creative":
        return "bg-gradient-to-b from-purple-950 to-slate-900";
      case "developer":
      default:
        return "bg-slate-950";
    }
  };

  const getCardStyles = () => {
    switch (demo) {
      case "minimal":
        return "bg-white border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10";
      case "creative":
        return "bg-white/5 border-white/10 hover:border-purple-500/50 hover:bg-white/10";
      case "developer":
      default:
        return "bg-slate-900 border-slate-800 hover:border-amber-500/50 hover:bg-slate-800/50";
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

  const getIconBg = () => {
    switch (demo) {
      case "minimal":
        return "bg-blue-100 text-blue-600";
      case "creative":
        return "bg-purple-500/20 text-purple-400";
      case "developer":
      default:
        return "bg-amber-500/20 text-amber-400";
    }
  };

  const getFeatureBadge = () => {
    switch (demo) {
      case "minimal":
        return "bg-slate-100 text-slate-600";
      case "creative":
        return "bg-purple-500/20 text-purple-300";
      case "developer":
      default:
        return "bg-slate-800 text-slate-400";
    }
  };

  return (
    <section className={`py-20 lg:py-32 ${getSectionStyles()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${demo === "minimal" ? "bg-white text-slate-600" : demo === "creative" ? "bg-white/10 text-white/70" : "bg-slate-800 text-slate-400"}`}>
            Services
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${getTextColor()}`}>
            What I Can Help You With
          </h2>
          <p className={`max-w-2xl mx-auto ${getMutedTextColor()}`}>
            Specialized development services tailored to bring your ideas to life with modern technologies and best practices
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group relative border rounded-2xl p-8 transition-all duration-300 ${getCardStyles()}`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${getIconBg()}`}>
                  <Icon size={28} />
                </div>

                {/* Title & Arrow */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`text-xl font-semibold ${getTextColor()}`}>
                    {service.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className={`opacity-0 group-hover:opacity-100 transition-opacity ${demo === "minimal" ? "text-blue-500" : demo === "creative" ? "text-purple-400" : "text-amber-400"}`}
                  />
                </div>

                {/* Description */}
                <p className={`mb-6 leading-relaxed ${getMutedTextColor()}`}>
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${getFeatureBadge()}`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
