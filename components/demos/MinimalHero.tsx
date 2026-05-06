"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MinimalHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Simple Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-slate-500 text-sm tracking-widest uppercase mb-6"
          >
            Full Stack Developer
          </motion.p>

          {/* Large Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-slate-900 mb-8"
          >
            Alex Reed
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed mb-12 max-w-xl"
          >
            I craft digital experiences using Laravel and Next.js. 
            Focused on clean design, solid architecture, and attention to detail.
          </motion.p>

          {/* Minimal CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-8"
          >
            <Link 
              href="/projects"
              className="group inline-flex items-center text-slate-900 font-medium hover:text-slate-600 transition-colors"
            >
              View Projects
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact"
              className="text-slate-500 hover:text-slate-900 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Stats - Minimal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-24 pt-8 border-t border-slate-200"
          >
            <div className="grid grid-cols-3 gap-8 max-w-md">
              <div>
                <div className="text-3xl font-light text-slate-900">5+</div>
                <div className="text-sm text-slate-500 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-light text-slate-900">50+</div>
                <div className="text-sm text-slate-500 mt-1">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl font-light text-slate-900">30+</div>
                <div className="text-sm text-slate-500 mt-1">Happy Clients</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute right-24 top-0 bottom-0 w-px bg-slate-200 origin-top hidden lg:block"
      />
    </section>
  );
}
