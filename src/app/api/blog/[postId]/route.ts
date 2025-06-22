import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { blogPosts } from "~/server/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

const updatePostSchema = z.object({
  title: z.string().min(1),
  content: z.string(),
});

export async function PATCH(
  req: Request,
  { params }: { params: { postId: string } },
) {
  console.log(
    `[PATCH] /api/blog/${params.postId}  –  body:`,
    await req.clone().text(),
  );
  const id = Number(params.postId);
  const json = await req.json();
  const { title, content } = updatePostSchema.parse(json);

  await db
    .update(blogPosts)
    .set({ title, content })
    .where(eq(blogPosts.id, id));

  return NextResponse.json({ success: true });
}
