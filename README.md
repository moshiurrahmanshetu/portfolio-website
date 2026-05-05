# Portfolio Website

A modern, responsive portfolio website built with Next.js 15 and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)
- **Themes:** next-themes (dark/light mode)

## Features

- ⚡ Next.js 15 with App Router
- 🎨 Dark/Light theme toggle
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Smooth animations with Framer Motion
- 🖼️ Image optimization
- 🔧 Reusable component architecture
- 🧭 Sticky navbar with scroll-based blur effect
- 🎯 Active section highlighting
- 📜 Smooth scroll navigation

## Color Palette (Dark)

- **Background:** `#0f172a` (dark blue/black)
- **Primary:** `#f59e0b` (honey gold)
- **Secondary:** `#22c55e` (soft green)
- **Text:** `#e5e7eb` (light gray)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles with CSS variables
│   ├── layout.tsx           # Root layout with ThemeProvider
│   └── page.tsx             # Home page
├── components/
│   ├── Navbar.tsx           # Sticky navigation with theme toggle
│   ├── Footer.tsx           # Footer with social links
│   ├── Container.tsx        # Layout container
│   └── ThemeProvider.tsx    # Theme context provider
├── lib/
│   ├── animations.ts        # Framer Motion variants
│   └── utils.ts             # Utility functions
├── tailwind.config.ts       # Tailwind configuration
└── next.config.ts           # Next.js configuration
```

## Navbar Features

- Transparent background initially, blur effect on scroll
- Active link highlighting with animated background
- Theme toggle (sun/moon icon with animation)
- Mobile hamburger menu with smooth animations
- Smooth scroll to sections (Home, About, Skills, Projects, Contact)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
