# Portfolio Website

A modern, feature-rich portfolio website built with Next.js 15, Tailwind CSS, and Framer Motion. Includes multiple homepage demos, blog system, project showcase, testimonials, services, and theme customization.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Customization Guide](#customization-guide)
- [Deployment Guide](#deployment-guide)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)

## Features

### Core Features
- ⚡ **Next.js 15** with App Router and Server Components
- 🎨 **Multiple Homepage Demos** (Developer, Minimal, Creative)
- 🌓 **Dark/Light Mode** with theme toggle
- 🎨 **Theme Customizer** with 3 color themes and 3 fonts
- 📱 **Fully Responsive** (mobile, tablet, desktop)
- ✨ **Smooth Animations** with Framer Motion
- 📝 **Blog System** with MDX support
- 💼 **Project Showcase** with detail pages
- 💬 **Testimonials Carousel**
- 🛠️ **Services Section**
- 📧 **Working Contact Form** with EmailJS
- 🖱️ **Custom Cursor** (desktop)
- 📊 **Scroll Progress Indicator**

### Demo Variants
1. **Developer Demo** - Dark theme with terminal aesthetics
2. **Minimal Demo** - Clean white space design
3. **Creative Demo** - Bold colors and artistic style

### Blog System
- MDX-based blog posts
- Reading time calculation
- Syntax highlighting
- Responsive typography

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter, Geist, Manrope (Google Fonts) |
| Themes | next-themes |
| Forms | EmailJS |
| Toasts | Sonner |
| MDX | @next/mdx |

## Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Step 1: Clone and Install

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio-website

# Install dependencies
npm install
```

### Step 2: Environment Setup

Create a `.env.local` file in the root directory:

```env
# EmailJS Configuration (for contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

To get EmailJS credentials:
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Add an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Copy your Public Key from Account settings

### Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Folder Structure

```
portfolio-website/
├── app/                          # Next.js App Router
│   ├── (routes)/
│   │   ├── about/
│   │   │   └── page.tsx          # About page
│   │   ├── blog/
│   │   │   ├── page.tsx          # Blog listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Single blog post
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact page
│   │   └── projects/
│   │       ├── page.tsx          # Projects listing
│   │       └── [slug]/
│   │           └── page.tsx      # Project detail
│   ├── globals.css               # Global styles & CSS variables
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage with demo switcher
├── components/                   # React components
│   ├── demos/                    # Homepage demo variants
│   │   ├── DeveloperHero.tsx
│   │   ├── MinimalHero.tsx
│   │   └── CreativeHero.tsx
│   ├── ui/                       # Reusable UI components
│   ├── BlogCard.tsx
│   ├── Contact.tsx               # Contact form with EmailJS
│   ├── DemoContext.tsx           # Demo state management
│   ├── DemoSwitcher.tsx          # Demo switcher UI
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── Projects.tsx
│   ├── Services.tsx              # Services section
│   ├── Testimonials.tsx          # Testimonials carousel
│   ├── ThemeContext.tsx          # Theme customizer state
│   ├── ThemeCustomizer.tsx       # Theme customizer UI
│   └── ...
├── content/                      # MDX content
│   └── blog/                     # Blog posts
│       ├── building-scalable-apis-with-laravel.mdx
│       ├── mastering-react-hooks.mdx
│       └── nextjs-deployment-guide.mdx
├── lib/                          # Utilities & data
│   ├── animations.ts             # Framer Motion variants
│   ├── blog.ts                   # Blog utilities
│   ├── projects-data.ts          # Project data
│   └── utils.ts                  # Helper functions
├── public/                       # Static assets
│   ├── img/                      # Images
│   └── ...
├── mdx-components.tsx           # MDX component styling
├── tailwind.config.ts            # Tailwind configuration
├── next.config.ts                # Next.js configuration
└── README.md                     # This file
```

## Customization Guide

### 1. Personal Information

Update your personal details in these files:

**`app/layout.tsx`** - Metadata:
```tsx
export const metadata: Metadata = {
  title: "Your Name | Full Stack Developer",
  description: "Your description here",
  // ... update other metadata
};
```

**`app/page.tsx`** - Hero content:
- Update name, title, description in each demo hero component
- Update featured projects

**`components/Contact.tsx`** - Contact info:
```tsx
const contactInfo = [
  { icon: Mail, label: "Email", value: "your@email.com", href: "mailto:your@email.com" },
  // ...
];
```

### 2. Colors & Themes

#### Global CSS Variables (`app/globals.css`)

The design uses CSS custom properties for theming:

```css
:root {
  --background: 222 47% 11%;    /* Dark background */
  --foreground: 220 13% 91%;    /* Light text */
  --primary: 38 92% 50%;        /* Honey gold */
  --secondary: 142 71% 45%;      /* Soft green */
  /* ... */
}
```

#### Theme Customizer

The theme customizer panel (bottom-right settings button) allows visitors to:
- Switch between 3 color themes: Gold, Ocean (Blue), Forest (Green)
- Toggle dark/light mode
- Change font family: Inter, Geist, Manrope

To modify available themes, edit `components/ThemeContext.tsx`.

#### Demo Themes

Each demo has its own color scheme. Edit `components/DemoContext.tsx` to customize:

```typescript
const demoThemes = {
  developer: { /* dark slate + amber */ },
  minimal: { /* white + blue */ },
  creative: { /* purple gradient */ },
};
```

### 3. Content

#### Blog Posts

Add new blog posts in `content/blog/`:

```mdx
---
title: "Your Post Title"
excerpt: "Brief description"
date: "2024-01-01"
author: "Your Name"
tags: ["Tag1", "Tag2"]
---

# Your content here
```

#### Projects

Update `lib/projects-data.ts` to add/modify projects:

```typescript
export const projects: Project[] = [
  {
    slug: "project-name",
    title: "Project Title",
    description: "Short description",
    fullDescription: "Detailed description...",
    techStack: ["React", "Node.js"],
    liveUrl: "https://...",
    githubUrl: "https://github.com/...",
    // ...
  },
];
```

#### Services

Edit `components/Services.tsx` to update service offerings.

#### Testimonials

Edit `components/Testimonials.tsx` to add client feedback.

### 4. Images

Place images in `public/img/` and reference them:

```tsx
<img src="/img/your-image.jpg" alt="Description" />
```

For optimal performance:
- Use WebP format when possible
- Keep images under 500KB
- Use appropriate dimensions

### 5. Fonts

The project uses Google Fonts (Inter, Geist, Manrope). To add more fonts:

1. Import in `app/layout.tsx`:
```tsx
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  subsets: ["latin"],
  variable: "--font-yourfont",
});
```

2. Add CSS variable in `globals.css`:
```css
:root {
  --font-yourfont: 'Your Font', sans-serif;
}
```

3. Update Tailwind config:
```typescript
fontFamily: {
  sans: ["var(--font-sans)", ...],
  yourfont: ["var(--font-yourfont)", ...],
}
```

### 6. Animations

Animation variants are defined in `lib/animations.ts`. Modify or add new variants:

```typescript
export const yourAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};
```

## Deployment Guide

### Option 1: Vercel (Recommended)

The easiest deployment option with optimal performance for Next.js.

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Project Settings
   - Deploy

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your domain and follow DNS instructions

### Option 2: Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Environment Variables**
   - Add all variables from `.env.local` in Site Settings

3. **Deploy**
   - Connect GitHub repo for auto-deploys
   - Or drag `dist` folder after local build

### Option 3: Self-Hosted (Node.js)

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

3. **Use PM2 for process management**
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   ```

### Option 4: Static Export

For static hosting (GitHub Pages, etc.):

1. **Configure `next.config.ts`**
   ```typescript
   const nextConfig = {
     output: 'export',
     distDir: 'dist',
   };
   ```

2. **Build**
   ```bash
   npm run build
   ```

3. **Deploy `dist` folder**

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID | Yes (for contact form) |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID | Yes (for contact form) |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key | Yes (for contact form) |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | No |

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |
| `npm run type-check` | Run TypeScript type checking |

## Performance Tips

1. **Optimize Images**: Use WebP format and appropriate sizes
2. **Lazy Loading**: Images and heavy components load on demand
3. **Font Optimization**: Use `next/font` for automatic optimization
4. **Code Splitting**: Automatic route-based code splitting
5. **Static Generation**: Use `generateStaticParams` for dynamic routes

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - feel free to use this template for your own portfolio.

## Support

If you encounter issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [Tailwind CSS docs](https://tailwindcss.com/docs)
3. Open an issue in this repository

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion.
