"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { IconCalendar, IconUser, IconArrowLeft } from "@tabler/icons-react";
import ReactMarkdown from "react-markdown";
import blogData from "@/data/blog.json";

interface BlogPostProps {
  slug: string;
}

export function BlogPost({ slug }: BlogPostProps) {
  const post = blogData.posts.find((p) => p.slug === slug);

  if (!post) {
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-accent transition-colors mb-8"
        >
          <IconArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <IconCalendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <IconUser className="w-4 h-4" />
                {post.author}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              {post.title}
            </h1>
          </header>

          <div className="text-foreground leading-relaxed space-y-4">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="text-muted-foreground mb-4">{children}</p>
                ),
                strong: ({ children }) => (
                  <strong className="text-foreground font-semibold">{children}</strong>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside text-muted-foreground mb-4 space-y-1">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="text-muted-foreground">{children}</li>
                ),
                a: ({ href, children }) => {
                  const isGitHubModal = href === "#github";
                  if (isGitHubModal) {
                    return (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          window.dispatchEvent(new CustomEvent("vesper:open-github"));
                        }}
                        className="text-brand-accent hover:underline cursor-pointer"
                      >
                        {children}
                      </button>
                    );
                  }
                  return (
                    <a
                      href={href || "#"}
                      target={href?.startsWith("http") ? "_blank" : undefined}
                      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-brand-accent hover:underline"
                    >
                      {children}
                    </a>
                  );
                },
                code: ({ children }) => (
                  <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-brand-accent">
                    {children}
                  </code>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-brand-accent/50 pl-4 italic text-muted-foreground my-4">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </motion.div>
    </div>
  );
}
