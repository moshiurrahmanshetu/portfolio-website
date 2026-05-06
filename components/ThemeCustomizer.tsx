"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Settings, X, Moon, Sun, Palette, Type } from "lucide-react";
import { useTheme } from "next-themes";
import { useThemeContext } from "./ThemeContext";
import { cn } from "@/lib/utils";

const colorOptions = [
  { id: "gold", name: "Gold", primary: "hsl(38 92% 50%)", secondary: "hsl(142 71% 45%)" },
  { id: "blue", name: "Ocean", primary: "hsl(217 91% 60%)", secondary: "hsl(199 89% 48%)" },
  { id: "green", name: "Forest", primary: "hsl(142 71% 45%)", secondary: "hsl(160 84% 39%)" },
];

const fontOptions = [
  { id: "inter", name: "Inter", description: "Clean & Modern" },
  { id: "geist", name: "Geist", description: "Geometric & Sharp" },
  { id: "manrope", name: "Manrope", description: "Elegant & Rounded" },
];

export default function ThemeCustomizer() {
  const { colorTheme, setColorTheme, fontFamily, setFontFamily, isOpen, setIsOpen } = useThemeContext();
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/* Floating Settings Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-24 right-6 z-50 p-3 rounded-full",
          "bg-primary text-primary-foreground shadow-lg shadow-primary/25",
          "hover:scale-110 hover:shadow-xl hover:shadow-primary/30",
          "transition-all duration-300"
        )}
        aria-label="Open theme settings"
      >
        <Settings size={24} className="animate-spin-slow" style={{ animationDuration: '8s' }} />
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
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Slide-out Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={cn(
              "fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm",
              "bg-card border-l border-border shadow-2xl"
            )}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-xl font-bold">Theme Settings</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Close settings"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                {/* Dark/Light Toggle */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Sun size={18} className="text-muted-foreground" />
                    <h3 className="font-semibold">Appearance</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2 p-1 bg-muted rounded-xl">
                    <button
                      onClick={() => setTheme("light")}
                      className={cn(
                        "flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all",
                        theme === "light"
                          ? "bg-card text-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <Sun size={16} />
                      Light
                    </button>
                    <button
                      onClick={() => setTheme("dark")}
                      className={cn(
                        "flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all",
                        theme === "dark"
                          ? "bg-card text-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <Moon size={16} />
                      Dark
                    </button>
                  </div>
                </section>

                {/* Color Theme */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Palette size={18} className="text-muted-foreground" />
                    <h3 className="font-semibold">Color Theme</h3>
                  </div>
                  <div className="space-y-2">
                    {colorOptions.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setColorTheme(color.id as "gold" | "blue" | "green")}
                        className={cn(
                          "w-full flex items-center gap-3 p-3 rounded-xl border transition-all",
                          colorTheme === color.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/30 hover:bg-muted/50"
                        )}
                      >
                        <div className="flex gap-1">
                          <div
                            className="w-6 h-6 rounded-full"
                            style={{ background: color.primary }}
                          />
                          <div
                            className="w-6 h-6 rounded-full"
                            style={{ background: color.secondary }}
                          />
                        </div>
                        <span className="flex-1 text-left font-medium">{color.name}</span>
                        {colorTheme === color.id && (
                          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                            <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </section>

                {/* Font Family */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Type size={18} className="text-muted-foreground" />
                    <h3 className="font-semibold">Font Family</h3>
                  </div>
                  <div className="space-y-2">
                    {fontOptions.map((font) => (
                      <button
                        key={font.id}
                        onClick={() => setFontFamily(font.id as "inter" | "geist" | "manrope")}
                        className={cn(
                          "w-full text-left p-3 rounded-xl border transition-all",
                          fontFamily === font.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/30 hover:bg-muted/50"
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{font.name}</span>
                          {fontFamily === font.id && (
                            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                              <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <span className="text-sm text-muted-foreground">{font.description}</span>
                      </button>
                    ))}
                  </div>
                </section>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-border bg-muted/30">
                <p className="text-xs text-muted-foreground text-center">
                  Changes are applied instantly and saved to your browser.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
