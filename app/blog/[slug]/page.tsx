import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Tag } from "lucide-react";
import { getPostBySlug, getAllPostSlugs, formatDate } from "@/lib/server/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Dynamically import and render MDX content
  const { default: MDXContent } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors hover:-translate-x-1 duration-200"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <article>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary"
                >
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <span className="flex items-center gap-2">
                <User size={16} />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                {post.readingTime}
              </span>
            </div>
          </article>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <MDXContent />
          </div>
        </div>
      </section>

      {/* Newsletter / More Articles */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-card border border-border rounded-2xl">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Enjoyed this article?</p>
              <h3 className="text-xl font-semibold">Read more posts</h3>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-muted hover:bg-muted/80 font-semibold rounded-xl hover:scale-[1.02] hover:translate-x-1 transition-all"
            >
              View All Posts
              <ArrowLeft size={18} className="rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}
