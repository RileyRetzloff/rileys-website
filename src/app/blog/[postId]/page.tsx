import { db } from "~/server/db";
import { notFound } from "next/navigation";
import EditPostForm from "./EditPostForm";

export default async function EditPostPage({
  params,
}: {
  params: { postId: string };
}) {
  const id = parseInt(params.postId);
  const post = await db.query.blogPosts.findFirst({
    where: (posts, { eq }) => eq(posts.id, id),
  });

  if (!post) notFound();

  return <EditPostForm post={post} />;
}
