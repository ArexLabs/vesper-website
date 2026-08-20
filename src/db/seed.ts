import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { posts } from "./schema";
import blogData from "@/data/blog.json";

async function seed() {
  const client = postgres(process.env.DATABASE_URL!);
  const db = drizzle(client);

  for (const post of blogData.posts) {
    await db
      .insert(posts)
      .values({
        slug: post.slug,
        title: post.title,
        date: new Date(post.date),
        author: post.author,
        excerpt: post.excerpt,
        content: post.content,
      })
      .onConflictDoNothing();
  }

  console.log("Seeded posts from blog.json");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
