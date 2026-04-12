"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IconCalendar, IconUser } from "@tabler/icons-react";
import blogData from "@/data/blog.json";

export function BlogList() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
          Blog
        </h1>
        <p className="text-muted-foreground text-lg">
          News and updates from the Vesper team
        </p>
      </motion.div>

      <div className="space-y-6">
        {blogData.posts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="block rounded-xl bg-card/60 border border-border p-6 hover:border-brand-accent/40 transition-all duration-200 group"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <IconCalendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <IconUser className="w-3.5 h-3.5" />
                    {post.author}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-foreground group-hover:text-brand-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground">{post.excerpt}</p>
                <span className="text-sm font-medium text-brand-accent group-hover:underline">
                  Read more →
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
