import Link from "next/link";
import { Clock, Calendar, ArrowRight, Tag } from "lucide-react";
import { getAllPosts, formatDate } from "@/lib/server/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-4">
              My Blog
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Thoughts & <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharing my journey as a developer, technical deep-dives, and lessons learned
              from building web applications.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {posts.map((post, index) => (
              <article
                key={post.slug}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="p-6 sm:p-8">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                        >
                          <Tag size={12} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-muted-foreground mb-6 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readingTime}
                      </span>
                      <span className="flex items-center gap-1 text-primary group-hover:translate-x-1 transition-transform">
                        Read More
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No blog posts yet. Coming soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
