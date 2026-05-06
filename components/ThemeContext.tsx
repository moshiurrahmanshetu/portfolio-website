"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type ColorTheme = "gold" | "blue" | "green";
type FontFamily = "inter" | "geist" | "manrope";

interface ThemeContextType {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
  fontFamily: FontFamily;
  setFontFamily: (font: FontFamily) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const colorThemes = {
  gold: {
    primary: "38 92% 50%",
    secondary: "142 71% 45%",
  },
  blue: {
    primary: "217 91% 60%",
    secondary: "199 89% 48%",
  },
  green: {
    primary: "142 71% 45%",
    secondary: "160 84% 39%",
  },
};

const fonts = {
  inter: "var(--font-inter)",
  geist: "var(--font-geist)",
  manrope: "var(--font-manrope)",
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colorTheme, setColorThemeState] = useState<ColorTheme>("gold");
  const [fontFamily, setFontFamilyState] = useState<FontFamily>("inter");
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedColor = localStorage.getItem("color-theme") as ColorTheme;
    const savedFont = localStorage.getItem("font-family") as FontFamily;
    if (savedColor && colorThemes[savedColor]) {
      setColorThemeState(savedColor);
    }
    if (savedFont && fonts[savedFont]) {
      setFontFamilyState(savedFont);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    const theme = colorThemes[colorTheme];
    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--secondary", theme.secondary);
    root.style.setProperty("--ring", theme.primary);
    localStorage.setItem("color-theme", colorTheme);
  }, [colorTheme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.style.setProperty("--font-sans", fonts[fontFamily]);
    document.body.style.fontFamily = fonts[fontFamily];
    localStorage.setItem("font-family", fontFamily);
  }, [fontFamily, mounted]);

  const setColorTheme = (theme: ColorTheme) => {
    setColorThemeState(theme);
  };

  const setFontFamily = (font: FontFamily) => {
    setFontFamilyState(font);
  };

  return (
    <ThemeContext.Provider
      value={{
        colorTheme,
        setColorTheme,
        fontFamily,
        setFontFamily,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
}
