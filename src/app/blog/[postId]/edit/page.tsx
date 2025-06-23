import { db } from "~/server/db";
import { notFound, redirect } from "next/navigation";
import EditPostForm from "./EditPostForm";
import { auth } from "@clerk/nextjs/server";
import { env } from "~/env";

export default async function EditPostPage({
  params,
}: {
  params: { postId: string };
}) {
  const { userId } = await auth();
  if (userId !== env.CLERK_ADMIN_USER_ID) redirect(`/blog/${params.postId}`);

  const id = parseInt(params.postId);
  if (isNaN(id)) notFound();

  const post = await db.query.blogPosts.findFirst({
    where: (posts, { eq }) => eq(posts.id, id),
  });
  if (!post) notFound();

  return <EditPostForm post={post} />;
}
