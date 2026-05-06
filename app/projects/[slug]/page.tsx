import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Calendar, 
  Clock, 
  User, 
  ChevronRight,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { projects, getProjectBySlug } from "@/lib/projects-data";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <div className="mb-8">
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors hover:-translate-x-1 duration-200"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
          </div>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
                {project.category}
              </span>
              <span className="text-sm text-muted-foreground">{project.year}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {project.shortDescription}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/25"
            >
              <ExternalLink size={18} />
              Live Preview
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border text-foreground font-semibold rounded-xl hover:bg-muted hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <Github size={18} />
              View Code
            </a>
          </div>

          {/* Main Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <span className="text-6xl opacity-50">💼</span>
            </div>
          </div>

          {/* Project Info Grid */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <div className="bg-card border border-border rounded-xl p-4 hover:border-primary/20 transition-colors">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Clock size={16} />
                <span className="text-sm">Duration</span>
              </div>
              <p className="font-semibold">{project.duration}</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4 hover:border-primary/20 transition-colors">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <User size={16} />
                <span className="text-sm">Role</span>
              </div>
              <p className="font-semibold">{project.role}</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4 hover:border-primary/20 transition-colors">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Calendar size={16} />
                <span className="text-sm">Year</span>
              </div>
              <p className="font-semibold">{project.year}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold mb-4">About the Project</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle size={20} className="text-primary" />
                  <h2 className="text-xl font-bold">Technical Challenges</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              {/* Gallery */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-video rounded-xl overflow-hidden bg-muted border border-border hover:scale-[1.02] hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                        <span className="text-4xl opacity-50">
                          {index === 0 ? "🖥️" : index === 1 ? "📱" : "⚡"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tech Stack */}
              <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground border border-border hover:border-primary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border space-y-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <ExternalLink size={18} />
                    Live Preview
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 border-2 border-border text-foreground font-semibold rounded-xl hover:bg-muted hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Navigation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-card border border-border rounded-2xl hover:border-primary/20 transition-colors">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Want to see more?</p>
              <h3 className="text-xl font-semibold">Explore other projects</h3>
            </div>
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-muted hover:bg-muted/80 font-semibold rounded-xl hover:scale-[1.02] hover:translate-x-1 transition-all"
            >
              View All Projects
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
