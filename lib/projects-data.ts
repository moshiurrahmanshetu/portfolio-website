export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  tech: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
  features: string[];
  challenges: string;
  duration: string;
  role: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    shortDescription: "Full-featured online store with payment integration, admin dashboard, and real-time inventory management.",
    fullDescription: "A comprehensive e-commerce solution built for a retail client looking to expand their business online. The platform handles thousands of products, multiple payment methods, and real-time inventory synchronization across multiple warehouses. The admin dashboard provides detailed analytics, order management, and customer insights.",
    image: "/img/ecommerce.jpg",
    gallery: ["/img/ecommerce.jpg", "/img/ecommerce-2.jpg", "/img/ecommerce-3.jpg"],
    tech: ["Laravel", "React", "MySQL", "Stripe", "Redis", "Tailwind CSS"],
    category: "Laravel",
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/example/ecommerce",
    features: [
      "Multi-vendor marketplace support",
      "Real-time inventory tracking",
      "Advanced search with filters",
      "Secure payment processing",
      "Order tracking and notifications",
      "Admin analytics dashboard"
    ],
    challenges: "Implementing real-time inventory sync across multiple warehouses while maintaining performance during high-traffic sales events required careful optimization of database queries and implementation of Redis caching.",
    duration: "4 months",
    role: "Full Stack Lead Developer",
    year: "2023"
  },
  {
    id: 2,
    slug: "task-management-app",
    title: "Task Management App",
    shortDescription: "Collaborative project management tool with real-time updates, drag-and-drop interface, and team analytics.",
    fullDescription: "A modern project management application designed for remote teams. Features real-time collaboration, intuitive drag-and-drop task organization, and comprehensive analytics to track team productivity. Built with performance and scalability in mind.",
    image: "/img/task-management.jpg",
    gallery: ["/img/task-management.jpg", "/img/task-2.jpg", "/img/task-3.jpg"],
    tech: ["React", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
    category: "React",
    liveUrl: "https://taskapp-demo.com",
    githubUrl: "https://github.com/example/taskapp",
    features: [
      "Real-time collaboration",
      "Drag-and-drop task board",
      "Team workload analytics",
      "Time tracking integration",
      "File attachments and comments",
      "Email and in-app notifications"
    ],
    challenges: "Building a seamless real-time experience required implementing WebSockets for live updates while ensuring data consistency across multiple concurrent users editing the same board.",
    duration: "3 months",
    role: "Frontend Lead & Architect",
    year: "2023"
  },
  {
    id: 3,
    slug: "blog-cms",
    title: "Blog CMS",
    shortDescription: "Content management system with markdown editor, SEO optimization, and multi-user support.",
    fullDescription: "A lightweight yet powerful content management system built for content creators. Features a custom markdown editor with live preview, automatic SEO optimization, and a multi-user workflow with role-based permissions. Designed for performance with static generation capabilities.",
    image: "/img/blog-site.jpg",
    gallery: ["/img/blog-site.jpg", "/img/blog-2.jpg", "/img/blog-3.jpg"],
    tech: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS", "Markdown", "Algolia"],
    category: "Laravel",
    liveUrl: "https://blogcms-demo.com",
    githubUrl: "https://github.com/example/blogcms",
    features: [
      "Custom markdown editor with preview",
      "Automatic SEO optimization",
      "Multi-user role management",
      "Content scheduling",
      "Advanced search with Algolia",
      "Media library with optimization"
    ],
    challenges: "Creating a performant markdown editor with live preview and implementing efficient content search across thousands of articles required careful frontend optimization.",
    duration: "2.5 months",
    role: "Full Stack Developer",
    year: "2022"
  },
  {
    id: 4,
    slug: "portfolio-dashboard",
    title: "Portfolio Dashboard",
    shortDescription: "Analytics dashboard for tracking portfolio performance with charts and real-time data visualization.",
    fullDescription: "A financial analytics dashboard for investors to track their portfolio performance. Features real-time stock data, interactive charts, and detailed performance analytics. Built with a focus on data visualization and user experience.",
    image: "/img/portfolio_dashboard.jpg",
    gallery: ["/img/portfolio_dashboard.jpg", "/img/dashboard-2.jpg", "/img/dashboard-3.jpg"],
    tech: ["Next.js", "React", "D3.js", "API", "TypeScript", "Chart.js"],
    category: "React",
    liveUrl: "https://portfolio-dash-demo.com",
    githubUrl: "https://github.com/example/portfolio-dash",
    features: [
      "Real-time stock price tracking",
      "Interactive performance charts",
      "Portfolio allocation visualization",
      "Risk analysis tools",
      "Dividend tracking",
      "Export reports to PDF"
    ],
    challenges: "Integrating multiple financial data APIs while maintaining performance and creating responsive, interactive charts that work well on mobile devices.",
    duration: "3 months",
    role: "Frontend Developer",
    year: "2022"
  },
  {
    id: 5,
    slug: "api-gateway-service",
    title: "API Gateway Service",
    shortDescription: "RESTful API service with authentication, rate limiting, and comprehensive documentation.",
    fullDescription: "A scalable API gateway service designed to handle authentication, rate limiting, and request routing for microservices architecture. Includes comprehensive API documentation, monitoring dashboards, and automated testing.",
    image: "/img/api_connection.jpg",
    gallery: ["/img/api_connection.jpg", "/img/api-2.jpg", "/img/api-3.jpg"],
    tech: ["Laravel", "PHP", "Redis", "Docker", "PostgreSQL", "Swagger"],
    category: "Laravel",
    liveUrl: "https://api-docs-demo.com",
    githubUrl: "https://github.com/example/api-gateway",
    features: [
      "JWT authentication system",
      "Rate limiting per client",
      "Request/response logging",
      "Auto-generated API docs",
      "Docker containerization",
      "Health monitoring endpoints"
    ],
    challenges: "Designing a rate limiting system that works across distributed servers while maintaining low latency required implementing Redis-based sliding window counters.",
    duration: "2 months",
    role: "Backend Lead Developer",
    year: "2023"
  },
  {
    id: 6,
    slug: "social-media-app",
    title: "Social Media App",
    shortDescription: "Modern social platform with feeds, messaging, notifications, and responsive design.",
    fullDescription: "A feature-rich social media application with real-time feeds, direct messaging, push notifications, and a fully responsive design. Built to handle high traffic with efficient database queries and caching strategies.",
    image: "/img/social_media_app.jpg",
    gallery: ["/img/social_media_app.jpg", "/img/social-2.jpg", "/img/social-3.jpg"],
    tech: ["React", "Next.js", "Socket.io", "MongoDB", "Redis", "AWS S3"],
    category: "React",
    liveUrl: "https://socialapp-demo.com",
    githubUrl: "https://github.com/example/socialapp",
    features: [
      "Real-time news feed",
      "Direct messaging",
      "Push notifications",
      "Image/video uploads",
      "Like, comment, share system",
      "User following/followers"
    ],
    challenges: "Building a scalable real-time feed system that efficiently handles thousands of concurrent connections and delivers updates instantly to all connected clients.",
    duration: "5 months",
    role: "Full Stack Developer",
    year: "2023"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
