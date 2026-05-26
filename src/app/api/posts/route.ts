import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { db } from "@/db";
import { posts } from "@/db/schema";
import { eq, desc } from "drizzle-orm";

async function getSession() {
  const h = await headers();
  return auth.api.getSession({ headers: h });
}

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function forbidden() {
  return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}

export async function GET() {
  const allPosts = await db.select().from(posts).orderBy(desc(posts.date));
  return NextResponse.json(allPosts);
}

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) return unauthorized();
  if (session.user.role !== "admin") return forbidden();

  const body = await request.json();

  const existing = await db
    .select()
    .from(posts)
    .where(eq(posts.slug, body.slug))
    .limit(1);

  if (existing.length > 0) {
    return NextResponse.json({ error: "A post with this slug already exists" }, { status: 409 });
  }

  const [post] = await db
    .insert(posts)
    .values({
      slug: body.slug,
      title: body.title,
      date: new Date(body.date),
      author: body.author,
      excerpt: body.excerpt,
      content: body.content,
    })
    .returning();

  return NextResponse.json(post, { status: 201 });
}
