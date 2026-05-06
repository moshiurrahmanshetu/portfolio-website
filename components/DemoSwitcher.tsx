"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Layers, X, Code, Minimize2, Palette } from "lucide-react";
import { useDemo } from "./DemoContext";
import { cn } from "@/lib/utils";

const demos = [
  {
    id: "developer" as const,
    name: "Developer",
    description: "Dark theme with terminal aesthetics",
    icon: Code,
    gradient: "from-amber-500 to-emerald-500",
    bgColor: "bg-slate-900",
  },
  {
    id: "minimal" as const,
    name: "Minimal",
    description: "Clean white space design",
    icon: Minimize2,
    gradient: "from-slate-700 to-slate-500",
    bgColor: "bg-white",
  },
  {
    id: "creative" as const,
    name: "Creative",
    description: "Bold colors and artistic",
    icon: Palette,
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-950",
  },
];

export default function DemoSwitcher() {
  const { demo, setDemo, isOpen, setIsOpen } = useDemo();

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.3 }}
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-44 right-6 z-40 p-3 rounded-full",
          "bg-card border border-border shadow-lg",
          "hover:scale-110 hover:shadow-xl",
          "transition-all duration-300"
        )}
        aria-label="Switch demo"
      >
        <Layers size={22} className="text-primary" />
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div>
                  <h2 className="text-xl font-bold">Choose Your Style</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Select a homepage demo
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Demo Cards */}
              <div className="p-6 space-y-3">
                {demos.map((d) => {
                  const Icon = d.icon;
                  const isActive = demo === d.id;

                  return (
                    <button
                      key={d.id}
                      onClick={() => {
                        setDemo(d.id);
                        setTimeout(() => setIsOpen(false), 300);
                      }}
                      className={cn(
                        "w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all",
                        !isActive && "border-border hover:border-primary/30 hover:bg-muted/30"
                      )}
                      style={isActive ? {
                        borderColor: `hsl(var(--primary))`,
                        backgroundColor: `hsl(var(--primary) / 0.05)`
                      } : undefined}
                    >
                      {/* Preview */}
                      <div
                        className={cn(
                          "w-16 h-16 rounded-lg flex items-center justify-center shrink-0",
                          d.bgColor,
                          "border border-border/50"
                        )}
                      >
                        <div
                          className={cn(
                            "w-8 h-8 rounded-full bg-gradient-to-br",
                            d.gradient
                          )}
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 text-left">
                        <div className="flex items-center gap-2">
                          <Icon size={16} className="text-primary" />
                          <span className="font-semibold">{d.name}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {d.description}
                        </p>
                      </div>

                      {/* Checkmark */}
                      {isActive && (
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: `hsl(var(--primary))`,
                            color: `hsl(var(--primary-foreground))`
                          }}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-muted/30 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  All demos share the same components with different layouts and styling.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
