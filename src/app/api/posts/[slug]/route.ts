import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { db } from "@/db";
import { posts } from "@/db/schema";
import { eq } from "drizzle-orm";

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

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const session = await getSession();
  if (!session) return unauthorized();
  if (session.user.role !== "admin") return forbidden();

  const { slug } = await params;
  const body = await request.json();

  const [post] = await db
    .update(posts)
    .set({
      title: body.title,
      slug: body.slug,
      date: new Date(body.date),
      author: body.author,
      excerpt: body.excerpt,
      content: body.content,
    })
    .where(eq(posts.slug, slug))
    .returning();

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const session = await getSession();
  if (!session) return unauthorized();
  if (session.user.role !== "admin") return forbidden();

  const { slug } = await params;

  const [post] = await db
    .delete(posts)
    .where(eq(posts.slug, slug))
    .returning();

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
