"use server";

import { z } from "zod";
import { auth } from "@clerk/nextjs/server";
import { env } from "~/env";
import { db } from "~/server/db";
import { blogPosts, posts } from "~/server/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const updatePostSchema = z.object({
  postId: z.coerce.number().int(),
  title: z.string().min(1),
  content: z.string(),
});

export async function updatePost(formData: FormData) {
  const userId = (await auth()).userId;
  if (userId !== env.CLERK_ADMIN_USER_ID) throw new Error("Unauthorized");

  const raw = {
    postId: formData.get("postId"),
    title: formData.get("title"),
    content: formData.get("content"),
  };

  const parse = updatePostSchema.safeParse(raw);
  if (!parse.success) {
    throw new Error(
      "Validation failed: " + JSON.stringify(parse.error.flatten()),
    );
  }
  const { postId, title, content } = parse.data;

  await db
    .update(blogPosts)
    .set({ title: title, content: content })
    .where(eq(blogPosts.id, postId));

  revalidatePath(`/blog/${postId}`);
  revalidatePath("/blog");

  redirect(`/blog/${postId}`);
}
