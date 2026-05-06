"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Wrench,
  FileCode,
  Palette,
  Braces,
  Atom,
  Rocket,
  Server,
  CircleDot,
  GitBranch,
  Table2,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-primary to-orange-400",
    skills: [
      { name: "HTML5", level: 95, icon: FileCode },
      { name: "CSS3", level: 90, icon: Palette },
      { name: "JavaScript", level: 92, icon: Braces },
      { name: "React", level: 88, icon: Atom },
      { name: "Next.js", level: 85, icon: Rocket },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    color: "from-secondary to-emerald-400",
    skills: [
      { name: "PHP", level: 90, icon: CircleDot },
      { name: "Laravel", level: 88, icon: Server },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "Git", level: 85, icon: GitBranch },
      { name: "MySQL", level: 82, icon: Table2 },
    ],
  },
];

function SkillBar({
  skill,
  color,
  index,
}: {
  skill: { name: string; level: number; icon: React.ElementType };
  color: string;
  index: number;
}) {
  const Icon = skill.icon;

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className="p-2 rounded-lg transition-colors"
          style={{
            backgroundColor: `hsl(var(--muted))`
          }}
        >
          <Icon
            size={18}
            className="transition-colors"
            style={{
              color: `hsl(var(--muted-foreground))`
            }}
          />
        </div>
        <span className="font-medium">{skill.name}</span>
        <span className="ml-auto text-sm text-muted-foreground font-semibold">
          {skill.level}%
        </span>
      </div>

      {/* Progress Bar Background */}
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        {/* Animated Progress Fill */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: index * 0.1 + 0.3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className={`h-full rounded-full bg-gradient-to-r ${color} relative`}
        >
          {/* Shimmer Effect */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function CategoryCard({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -5 }}
      className="bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/20 transition-all duration-300"
    >
      {/* Card Header */}
      <div className="flex items-center gap-4 mb-8">
        <div
          className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}
        >
          <Icon size={28} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold">{category.title}</h3>
          <p className="text-sm text-muted-foreground">
            {category.skills.length} technologies
          </p>
        </div>
      </div>

      {/* Skills List */}
      <div className="space-y-6">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            color={category.color}
            index={skillIndex}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-muted/30">
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
            My Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <CategoryCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-lg font-semibold mb-6">Also familiar with</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "TypeScript",
              "Tailwind CSS",
              "REST APIs",
              "GraphQL",
              "Docker",
              "AWS",
              "Linux",
              "Figma",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 text-sm rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
