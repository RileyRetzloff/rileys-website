import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { blogPosts } from "~/server/db/schema";
import { z } from "zod";
import { auth } from "@clerk/nextjs/server";
import { env } from "~/env";

const createPostSchema = z.object({
  title: z.string().min(1),
  content: z.string(),
});

export async function CREATE(
  req: Request,
  {}: { params: { title: string; content: string } },
) {
  const { userId } = await auth();
  if (userId !== env.CLERK_ADMIN_USER_ID)
    return NextResponse.json({ success: false }, { status: 401 });

  const body = await req.json();

  const parse = createPostSchema.safeParse(body);
  if (!parse.success) {
    return NextResponse.json(
      { error: "validation-error", issues: parse.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { title, content } = parse.data;

  await db.insert(blogPosts).values({
    title: title,
    content: content,
    authorId: userId,
  });
}
