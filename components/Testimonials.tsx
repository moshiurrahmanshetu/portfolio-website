"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useDemo } from "./DemoContext";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Alex delivered our e-commerce platform ahead of schedule with exceptional code quality. The Laravel backend handles thousands of transactions daily without issues. Highly recommend!",
    rating: 5,
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager, InnovateSoft",
    content: "Working with Alex was a game-changer for our startup. His Next.js expertise helped us achieve perfect Lighthouse scores and significantly improved our SEO rankings.",
    rating: 5,
    avatar: "MC",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder, Creative Agency",
    content: "The attention to detail in both design and functionality is remarkable. Alex transformed our outdated CMS into a modern, fast, and user-friendly platform.",
    rating: 5,
    avatar: "ER",
  },
  {
    id: 4,
    name: "David Park",
    role: "CTO, DataFlow Systems",
    content: "Outstanding API design and documentation. Alex built our internal tools with Laravel and they have been running flawlessly for over a year now.",
    rating: 5,
    avatar: "DP",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { demo } = useDemo();

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const getSectionStyles = () => {
    switch (demo) {
      case "minimal":
        return "bg-white";
      case "creative":
        return "bg-slate-900";
      case "developer":
      default:
        return "bg-slate-950";
    }
  };

  const getCardStyles = () => {
    switch (demo) {
      case "minimal":
        return "bg-slate-50 border-slate-200";
      case "creative":
        return "bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-white/10";
      case "developer":
      default:
        return "bg-slate-900 border-slate-800";
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

  const getAccentColor = () => {
    switch (demo) {
      case "minimal":
        return "text-blue-500";
      case "creative":
        return "text-purple-400";
      case "developer":
      default:
        return "text-amber-400";
    }
  };

  return (
    <section className={`py-20 lg:py-32 ${getSectionStyles()}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${demo === "minimal" ? "bg-slate-100 text-slate-600" : demo === "creative" ? "bg-white/10 text-white/70" : "bg-slate-800 text-slate-400"}`}>
            Testimonials
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${getTextColor()}`}>
            What Clients Say
          </h2>
          <p className={`max-w-xl mx-auto ${getMutedTextColor()}`}>
            Feedback from people I have had the pleasure of working with
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`relative border rounded-2xl p-8 lg:p-12 ${getCardStyles()}`}
            >
              {/* Quote Icon */}
              <div className={`absolute -top-4 left-8 p-2 rounded-lg ${demo === "minimal" ? "bg-blue-500" : demo === "creative" ? "bg-purple-500" : "bg-amber-500"}`}>
                <Quote size={20} className="text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={18} className={`fill-current ${getAccentColor()}`} />
                ))}
              </div>

              {/* Content */}
              <p className={`text-lg lg:text-xl leading-relaxed mb-8 ${getTextColor()}`}>
                &ldquo;{testimonials[current].content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold ${demo === "minimal" ? "bg-slate-200 text-slate-700" : demo === "creative" ? "bg-purple-500/30 text-purple-300" : "bg-amber-500/20 text-amber-400"}`}>
                  {testimonials[current].avatar}
                </div>
                <div>
                  <div className={`font-semibold ${getTextColor()}`}>
                    {testimonials[current].name}
                  </div>
                  <div className={`text-sm ${getMutedTextColor()}`}>
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className={`p-3 rounded-full border transition-colors ${demo === "minimal" ? "border-slate-300 hover:bg-slate-100 text-slate-700" : demo === "creative" ? "border-white/20 hover:bg-white/10 text-white" : "border-slate-700 hover:bg-slate-800 text-slate-400"}`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${index === current ? (demo === "minimal" ? "bg-blue-500" : demo === "creative" ? "bg-purple-500" : "bg-amber-500") : demo === "minimal" ? "bg-slate-300" : "bg-slate-600"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className={`p-3 rounded-full border transition-colors ${demo === "minimal" ? "border-slate-300 hover:bg-slate-100 text-slate-700" : demo === "creative" ? "border-white/20 hover:bg-white/10 text-white" : "border-slate-700 hover:bg-slate-800 text-slate-400"}`}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
