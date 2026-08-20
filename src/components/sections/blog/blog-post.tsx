"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconCalendar, IconUser, IconArrowLeft } from "@tabler/icons-react";
import ReactMarkdown from "react-markdown";
import type { Post } from "@/db/schema";

function SlideIn({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface BlogPostProps {
  post: Post;
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <div className="max-w-2xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-accent transition-colors mb-12"
        >
          <IconArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article>
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1.5">
                <IconCalendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="text-muted-foreground/30">·</span>
              <span className="flex items-center gap-1.5">
                <IconUser className="w-4 h-4" />
                {post.author}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
              {post.title}
            </h1>
          </header>

          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <SlideIn>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight">{children}</h2>
                  </SlideIn>
                ),
                h3: ({ children }) => (
                  <SlideIn>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">{children}</h3>
                  </SlideIn>
                ),
                p: ({ children }) => (
                  <SlideIn>
                    <p className="text-muted-foreground leading-relaxed mb-6">{children}</p>
                  </SlideIn>
                ),
                strong: ({ children }) => (
                  <strong className="text-foreground font-semibold">{children}</strong>
                ),
                ul: ({ children }) => (
                  <SlideIn>
                    <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">{children}</ul>
                  </SlideIn>
                ),
                ol: ({ children }) => (
                  <SlideIn>
                    <ol className="list-decimal list-inside text-muted-foreground mb-6 space-y-2">{children}</ol>
                  </SlideIn>
                ),
                li: ({ children }) => (
                  <li className="text-muted-foreground leading-relaxed">{children}</li>
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
                        className="text-brand-accent hover:underline cursor-pointer font-medium"
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
                      className="text-brand-accent hover:underline font-medium"
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
                  <SlideIn>
                    <blockquote className="border-l-4 border-brand-accent/50 pl-6 my-8 italic text-muted-foreground/90">
                      {children}
                    </blockquote>
                  </SlideIn>
                ),
                hr: () => <hr className="border-border my-12" />,
                table: ({ children }) => (
                  <SlideIn>
                    <div className="overflow-x-auto my-8">
                      <table className="w-full text-sm text-left">{children}</table>
                    </div>
                  </SlideIn>
                ),
                thead: ({ children }) => (
                  <thead className="border-b border-border">{children}</thead>
                ),
                tbody: ({ children }) => (
                  <tbody className="divide-y divide-border">{children}</tbody>
                ),
                tr: ({ children }) => (
                  <tr className="hover:bg-muted/30 transition-colors">{children}</tr>
                ),
                th: ({ children }) => (
                  <th className="px-4 py-3 font-semibold text-foreground">{children}</th>
                ),
                td: ({ children }) => (
                  <td className="px-4 py-3 text-muted-foreground">{children}</td>
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
