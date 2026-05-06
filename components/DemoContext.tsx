"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type DemoType = "developer" | "minimal" | "creative";

interface DemoContextType {
  demo: DemoType;
  setDemo: (demo: DemoType) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

const demoThemes = {
  developer: {
    background: "222 47% 11%",
    foreground: "220 13% 91%",
    primary: "38 92% 50%",
    secondary: "142 71% 45%",
    muted: "217 33% 17%",
    mutedForeground: "215 20% 65%",
    card: "222 47% 11%",
    border: "217 33% 17%",
  },
  minimal: {
    background: "0 0% 100%",
    foreground: "222.2 84% 4.9%",
    primary: "221 83% 53%",
    secondary: "210 40% 96.1%",
    muted: "210 40% 96.1%",
    mutedForeground: "215.4 16.3% 46.9%",
    card: "0 0% 100%",
    border: "214.3 31.8% 91.4%",
  },
  creative: {
    background: "270 50% 5%",
    foreground: "0 0% 95%",
    primary: "280 65% 60%",
    secondary: "340 75% 55%",
    muted: "270 30% 15%",
    mutedForeground: "270 20% 60%",
    card: "270 40% 12%",
    border: "280 30% 20%",
  },
};

export function DemoProvider({ children }: { children: ReactNode }) {
  const [demo, setDemoState] = useState<DemoType>("developer");
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("demo-type") as DemoType;
    if (saved && demoThemes[saved]) {
      setDemoState(saved);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    const theme = demoThemes[demo];
    
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--foreground", theme.foreground);
    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--secondary", theme.secondary);
    root.style.setProperty("--muted", theme.muted);
    root.style.setProperty("--muted-foreground", theme.mutedForeground);
    root.style.setProperty("--card", theme.card);
    root.style.setProperty("--card-foreground", theme.foreground);
    root.style.setProperty("--border", theme.border);
    root.style.setProperty("--popover", theme.card);
    root.style.setProperty("--popover-foreground", theme.foreground);
    root.style.setProperty("--accent", theme.muted);
    root.style.setProperty("--accent-foreground", theme.foreground);
    root.style.setProperty("--ring", theme.primary);
    localStorage.setItem("demo-type", demo);
  }, [demo, mounted]);

  const setDemo = (newDemo: DemoType) => {
    setDemoState(newDemo);
  };

  return (
    <DemoContext.Provider value={{ demo, setDemo, isOpen, setIsOpen }}>
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const context = useContext(DemoContext);
  if (context === undefined) {
    throw new Error("useDemo must be used within a DemoProvider");
  }
  return context;
}
