"use client";

import { useState, memo, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import Image from "next/image";
import { fadeInUp } from "@/lib/animations";

const categories = ["All", "Laravel", "React"];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with payment integration, admin dashboard, and real-time inventory management.",
    image: "/img/ecommerce.jpg",
    tech: ["Laravel", "React", "MySQL", "Stripe"],
    category: "Laravel",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, drag-and-drop interface, and team analytics.",
    image: "/img/task-management.jpg",
    tech: ["React", "Next.js", "TypeScript", "Prisma"],
    category: "React",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Blog CMS",
    description:
      "Content management system with markdown editor, SEO optimization, and multi-user support.",
    image: "/img/blog-site.jpg",
    tech: ["Laravel", "Vue.js", "MySQL", "Tailwind"],
    category: "Laravel",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Portfolio Dashboard",
    description:
      "Analytics dashboard for tracking portfolio performance with charts and real-time data visualization.",
    image: "/img/portfolio_dashboard.jpg",
    tech: ["Next.js", "React", "D3.js", "API"],
    category: "React",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "API Gateway Service",
    description:
      "RESTful API service with authentication, rate limiting, and comprehensive documentation.",
    image: "/img/api_connection.jpg",
    tech: ["Laravel", "PHP", "Redis", "Docker"],
    category: "Laravel",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Social Media App",
    description:
      "Modern social platform with feeds, messaging, notifications, and responsive design.",
    image: "/img/social_media_app.jpg",
    tech: ["React", "Next.js", "Socket.io", "MongoDB"],
    category: "React",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectCard = memo(function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-muted to-muted/50">
        {/* Lazy loaded project image */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABdAAAACt3dHB0AAAABAAAAAQHdGV4dAAAAAAYAAAAAENvcmUgNS4wLTAyMzYgMjAxNy0wNzI5ADEAAAG1dHB0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAACPZhY3NTAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmRlc2MAAAD8AAAAB1RyVFMAAAABAAAABkNoQVQgAAA8AAAACzYzNjM2LTAwMDAgVjAAAAEAGAAAACH//wAAADZgYXRlAAAAAf//AAH/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAgACADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/iiiigD/2Q=="
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full ${
              project.category === "Laravel"
                ? "bg-orange-500/20 text-orange-400"
                : "bg-blue-500/20 text-blue-400"
            }`}
          >
            {project.category}
          </span>
        </div>

        {/* Action Buttons on Hover */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-lg hover:bg-muted/80 transition-colors"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs rounded-md bg-muted text-muted-foreground border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = useCallback((category: string) => {
    setActiveFilter(category);
  }, []);

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-4">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects I&apos;ve worked on
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => handleFilterChange(category)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground bg-muted hover:bg-muted/80"
              }`}
            >
              {activeFilter === category && (
                <motion.span
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
          >
            <Github size={18} />
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
