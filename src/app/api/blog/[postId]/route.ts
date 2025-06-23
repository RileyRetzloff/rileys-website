import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { blogPosts } from "~/server/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { auth } from "@clerk/nextjs/server";
import { env } from "~/env";
import { unauthorized } from "next/navigation";
import { success } from "zod/v4";

const updatePostSchema = z.object({
  title: z.string().min(1),
  content: z.string(),
});

export async function PATCH(
  req: Request,
  { params }: { params: { postId: string } },
) {
  const userId = (await auth()).userId;
  if (userId !== env.CLERK_ADMIN_USER_ID)
    return NextResponse.json({ success: false }, { status: 401 });

  const id = Number(params.postId);
  const body = await req.json();

  const parse = updatePostSchema.safeParse(body);
  if (!parse.success) {
    return NextResponse.json(
      { error: "validation-error", issues: parse.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { title, content } = parse.data;

  await db
    .update(blogPosts)
    .set({ title, content })
    .where(eq(blogPosts.id, id));

  return NextResponse.json({ success: true });
}
