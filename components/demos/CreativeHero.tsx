"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

const floatingShapes = [
  { size: 300, x: "10%", y: "20%", color: "from-purple-500/30", delay: 0 },
  { size: 200, x: "80%", y: "60%", color: "from-pink-500/30", delay: 0.2 },
  { size: 150, x: "70%", y: "15%", color: "from-cyan-500/30", delay: 0.4 },
];

export default function CreativeHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-950 via-slate-900 to-pink-950">
      {/* Animated Background Shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ 
            opacity: { delay: shape.delay, duration: 0.8 },
            scale: { delay: shape.delay, duration: 0.8 },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className={`absolute w-[${shape.size}px] h-[${shape.size}px] rounded-full bg-gradient-to-br ${shape.color} to-transparent blur-3xl`}
          style={{ 
            left: shape.x, 
            top: shape.y,
            width: shape.size,
            height: shape.size,
          }}
        />
      ))}

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-6"
            >
              <Sparkles size={14} className="text-pink-400" />
              Creative Developer
            </motion.div>

            {/* Name with Gradient */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                Alex Reed
              </span>
            </h1>

            {/* Role */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
              <span className="text-xl text-white/70">Full Stack Developer</span>
            </div>

            {/* Description */}
            <p className="text-lg text-white/60 mb-8 max-w-lg leading-relaxed">
              Transforming ideas into stunning digital experiences. 
              Laravel backend magic meets Next.js frontend wizardry.
            </p>

            {/* CTA Buttons - Creative Style */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center">
                    Explore Work
                    <ArrowRight size={18} className="ml-2" />
                  </span>
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
                >
                  <Zap size={18} className="mr-2 text-yellow-400" />
                  Start Project
                </motion.button>
              </Link>
            </div>

            {/* Tech Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {["Laravel", "Next.js", "React", "Tailwind"].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm backdrop-blur-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Creative Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Abstract Profile Card */}
            <div className="relative">
              {/* Main Card */}
              <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 backdrop-blur-sm p-8">
                {/* Inner Content */}
                <div className="h-full flex flex-col items-center justify-center text-center">
                  {/* Avatar Circle */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="relative w-32 h-32 mb-6"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
                    <div className="absolute inset-2 rounded-full bg-slate-900 flex items-center justify-center">
                      <span className="text-4xl font-bold bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent">AR</span>
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-2">Alex Reed</h3>
                  <p className="text-white/60">Full Stack Developer</p>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400"
                />
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-8 left-4 w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-yellow-400"
                />
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-4 top-1/3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4"
              >
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-xs text-white/60">Years</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -right-4 bottom-1/3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4"
              >
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-white/60">Projects</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
