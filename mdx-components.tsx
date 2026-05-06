import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ImgHTMLAttributes } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ className, ...props }: ComponentPropsWithoutRef<"h1">) => (
      <h1
        className={cn(
          "mt-8 mb-4 text-3xl font-bold tracking-tight text-foreground",
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }: ComponentPropsWithoutRef<"h2">) => (
      <h2
        className={cn(
          "mt-8 mb-4 text-2xl font-semibold tracking-tight text-foreground",
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }: ComponentPropsWithoutRef<"h3">) => (
      <h3
        className={cn(
          "mt-6 mb-3 text-xl font-semibold tracking-tight text-foreground",
          className
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }: ComponentPropsWithoutRef<"h4">) => (
      <h4
        className={cn(
          "mt-6 mb-3 text-lg font-semibold tracking-tight text-foreground",
          className
        )}
        {...props}
      />
    ),
    p: ({ className, ...props }: ComponentPropsWithoutRef<"p">) => (
      <p
        className={cn(
          "mb-4 text-muted-foreground leading-7",
          className
        )}
        {...props}
      />
    ),
    a: ({ className, ...props }: ComponentPropsWithoutRef<"a">) => (
      <a
        className={cn(
          "text-primary underline underline-offset-4 hover:text-primary/80 transition-colors",
          className
        )}
        {...props}
      />
    ),
    ul: ({ className, ...props }: ComponentPropsWithoutRef<"ul">) => (
      <ul
        className={cn(
          "mb-4 ml-6 list-disc text-muted-foreground",
          className
        )}
        {...props}
      />
    ),
    ol: ({ className, ...props }: ComponentPropsWithoutRef<"ol">) => (
      <ol
        className={cn(
          "mb-4 ml-6 list-decimal text-muted-foreground",
          className
        )}
        {...props}
      />
    ),
    li: ({ className, ...props }: ComponentPropsWithoutRef<"li">) => (
      <li
        className={cn(
          "mb-2",
          className
        )}
        {...props}
      />
    ),
    blockquote: ({ className, ...props }: ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote
        className={cn(
          "mt-4 mb-4 border-l-4 border-primary pl-4 italic text-muted-foreground",
          className
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }: ComponentPropsWithoutRef<"code">) => (
      <code
        className={cn(
          "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground",
          className
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }: ComponentPropsWithoutRef<"pre">) => (
      <pre
        className={cn(
          "mb-4 mt-4 overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm",
          className
        )}
        {...props}
      />
    ),
    hr: ({ className, ...props }: ComponentPropsWithoutRef<"hr">) => (
      <hr
        className={cn(
          "my-8 border-border",
          className
        )}
        {...props}
      />
    ),
    img: ({ className, alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
      <img
        className={cn(
          "rounded-lg border border-border",
          className
        )}
        alt={alt}
        {...props}
      />
    ),
    table: ({ className, ...props }: ComponentPropsWithoutRef<"table">) => (
      <div className="my-6 w-full overflow-y-auto">
        <table
          className={cn(
            "w-full border-collapse text-sm",
            className
          )}
          {...props}
        />
      </div>
    ),
    thead: ({ className, ...props }: ComponentPropsWithoutRef<"thead">) => (
      <thead
        className={cn(
          "border-b border-border",
          className
        )}
        {...props}
      />
    ),
    tbody: ({ className, ...props }: ComponentPropsWithoutRef<"tbody">) => (
      <tbody
        className={cn(
          "divide-y divide-border",
          className
        )}
        {...props}
      />
    ),
    tr: ({ className, ...props }: ComponentPropsWithoutRef<"tr">) => (
      <tr
        className={cn(
          "m-0 border-t border-border p-0",
          className
        )}
        {...props}
      />
    ),
    th: ({ className, ...props }: ComponentPropsWithoutRef<"th">) => (
      <th
        className={cn(
          "border border-border px-4 py-2 text-left font-bold text-foreground",
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }: ComponentPropsWithoutRef<"td">) => (
      <td
        className={cn(
          "border border-border px-4 py-2 text-muted-foreground",
          className
        )}
        {...props}
      />
    ),
    ...components,
  };
}
