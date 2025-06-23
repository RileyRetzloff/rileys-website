import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";
import { db } from "~/server/db";
import { env } from "~/env";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export default async function BlogPostPage({
  params,
}: {
  params: { postId: string };
}) {
  const id = parseInt(params.postId);
  if (isNaN(id)) notFound();

  const post = await db.query.blogPosts.findFirst({
    where: (posts, { eq }) => eq(posts.id, id),
  });

  if (!post) notFound();

  const { userId } = await auth();
  const isAdmin = userId === env.CLERK_ADMIN_USER_ID;

  return (
    <article className="prose lg:prose-xl p-4">
      {isAdmin && (
        <div className="mb-4">
          <Link
            href={`/blog/${post.id}/edit`}
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white no-underline hover:bg-blue-700"
          >
            Edit Post
          </Link>
        </div>
      )}
      <h1>{post.title}</h1>
      <div className="text-sm text-gray-500">
        {new Date(post.createdAt).toLocaleDateString()}
        {post.updatedAt && (
          <span className="text-sm text-gray-500">
            &nbsp;(Updated {new Date(post.updatedAt).toLocaleDateString()})
          </span>
        )}
      </div>
      <hr className="my-5" />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
