"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Code2, Braces, Database } from "lucide-react";
import Link from "next/link";

const codeLines = [
  { line: 1, content: "const developer = {", indent: 0 },
  { line: 2, content: "name: 'Alex Reed',", indent: 1, highlight: true },
  { line: 3, content: "role: 'Full Stack Developer',", indent: 1 },
  { line: 4, content: "stack: ['Laravel', 'Next.js'],", indent: 1, highlight: true },
  { line: 5, content: "available: true,", indent: 1 },
  { line: 6, content: "};", indent: 0 },
];

const typingVariants = [
  "role: Full Stack Developer;",
  "available: true;",
  'status: "building cool things";',
  'status: "open to work";',
];

function TypingAnimation() {
  const [displayText, setDisplayText] = useState("");
  const [variantIndex, setVariantIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  const currentText = typingVariants[variantIndex];

  // Cursor blink when idle
  useEffect(() => {
    if (isTyping) {
      setCursorVisible(true);
      return;
    }

    const blinkInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);

    return () => clearInterval(blinkInterval);
  }, [isTyping]);

  // Typing animation
  useEffect(() => {
    if (!isTyping) return;

    const targetText = currentText;

    if (displayText.length < targetText.length) {
      // Typing phase
      const timeout = setTimeout(() => {
        setDisplayText(targetText.slice(0, displayText.length + 1));
      }, 80 + Math.random() * 60); // Natural typing speed variation

      return () => clearTimeout(timeout);
    } else {
      // Finished typing, wait then start deleting
      const timeout = setTimeout(() => {
        setIsTyping(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [displayText, currentText, isTyping]);

  // Deleting animation
  useEffect(() => {
    if (isTyping || displayText.length === 0) return;

    const timeout = setTimeout(() => {
      setDisplayText((prev) => prev.slice(0, -1));
    }, 40); // Faster delete speed

    return () => clearTimeout(timeout);
  }, [displayText, isTyping]);

  // Switch to next variant after deleting
  useEffect(() => {
    if (!isTyping && displayText.length === 0) {
      const timeout = setTimeout(() => {
        setVariantIndex((prev) => (prev + 1) % typingVariants.length);
        setIsTyping(true);
      }, 400);

      return () => clearTimeout(timeout);
    }
  }, [displayText, isTyping]);

  return (
    <div className="flex">
      <span className="w-8 text-slate-600 select-none text-right mr-4">7</span>
      <span className="text-emerald-400" style={{ marginLeft: "20px" }}>
        {displayText}
        <span
          className="inline-block w-2 h-5 ml-0.5 align-middle"
          style={{
            backgroundColor: "#f59e0b",
            opacity: cursorVisible ? 1 : 0,
            transition: "opacity 0.1s ease",
          }}
        />
      </span>
    </div>
  );
}

export default function DeveloperHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-sm text-emerald-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for hire
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 font-mono">
              <span className="text-slate-400">&lt;</span>
              <span className="text-amber-400">Alex</span>
              <span className="text-slate-400"> /&gt;</span>
            </h1>

            {/* Title */}
            <div className="flex items-center gap-3 mb-6">
              <Terminal size={20} className="text-amber-400" />
              <span className="text-xl sm:text-2xl text-slate-300 font-mono">
                Full Stack Developer
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
              Building scalable web applications with Laravel and Next.js.
              Clean code, modern architecture, and pixel-perfect execution.
            </p>

            {/* Tech Stack Icons */}
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-slate-500">
                <Code2 size={18} />
                <span className="text-sm">Laravel</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Braces size={18} />
                <span className="text-sm">Next.js</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Database size={18} />
                <span className="text-sm">PostgreSQL</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-colors font-mono"
                  style={{
                    backgroundColor: `hsl(var(--primary))`,
                    color: `hsl(var(--primary-foreground))`
                  }}
                >
                  <span className="mr-2">$</span> ls projects/
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-6 py-3 border font-semibold rounded-lg transition-colors font-mono"
                  style={{
                    borderColor: `hsl(var(--border))`,
                    color: `hsl(var(--foreground))`
                  }}
                >
                  npm run contact
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right - Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Code Editor Window */}
            <div className="rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-sm text-slate-500 font-mono">developer.ts</span>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={line.line}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex"
                  >
                    <span className="w-8 text-slate-600 select-none text-right mr-4">
                      {line.line}
                    </span>
                    <span
                      className={line.highlight ? "text-amber-400" : "text-slate-300"}
                      style={{ marginLeft: `${line.indent * 20}px` }}
                    >
                      {line.content}
                    </span>
                  </motion.div>
                ))}
                
                {/* Typing Animation */}
                <div className="mt-2">
                  <TypingAnimation />
                </div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -left-8 top-1/4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-3 shadow-xl"
            >
              <div className="text-xs text-slate-400">Experience</div>
              <div className="text-lg font-bold text-emerald-400">5+ Years</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -right-4 bottom-1/4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-3 shadow-xl"
            >
              <div className="text-xs text-slate-400">Projects</div>
              <div className="text-lg font-bold text-amber-400">50+</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
