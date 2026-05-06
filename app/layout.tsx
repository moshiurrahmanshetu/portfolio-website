import type { Metadata, Viewport } from "next";
import { Inter, Geist, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider as CustomThemeProvider } from "@/components/ThemeContext";
import ThemeCustomizer from "@/components/ThemeCustomizer";
import { DemoProvider } from "@/components/DemoContext";
import DemoSwitcher from "@/components/DemoSwitcher";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://yourdomain.com"
      : "http://localhost:3000"
  ),
  title: {
    default: "Portfolio | Full Stack Developer (Laravel + Next.js)",
    template: "%s | Portfolio",
  },
  description: "Experienced Full Stack Developer specializing in Laravel and Next.js. Building scalable web applications with modern technologies.",
  keywords: ["Full Stack Developer", "Laravel", "Next.js", "React", "PHP", "JavaScript", "Web Development", "Portfolio"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Name",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "Portfolio | Full Stack Developer",
    title: "Portfolio | Full Stack Developer (Laravel + Next.js)",
    description: "Experienced Full Stack Developer specializing in Laravel and Next.js. Building scalable web applications with modern technologies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Full Stack Developer (Laravel + Next.js)",
    description: "Experienced Full Stack Developer specializing in Laravel and Next.js. Building scalable web applications with modern technologies.",
    images: ["/og-image.jpg"],
    creator: "@yourhandle",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://yourdomain.com",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geist.variable} ${manrope.variable} antialiased`}
      >
        <ThemeProvider>
          <CustomThemeProvider>
            <DemoProvider>
              <PageTransition>
                <div className="flex min-h-screen flex-col bg-background text-foreground">
                  <ScrollProgress />
                  <CustomCursor />
                  <Navbar />
                  <main className="flex-1">{children}</main>
                  <Footer />
                  <BackToTop />
                  <ThemeCustomizer />
                  <DemoSwitcher />
                  <Toaster position="bottom-right" richColors />
                </div>
              </PageTransition>
            </DemoProvider>
          </CustomThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
