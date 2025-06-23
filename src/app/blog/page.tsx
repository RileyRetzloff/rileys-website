import Link from "next/link";
import { db } from "~/server/db";
import { auth } from "@clerk/nextjs/server";
import ReactMarkdown from "react-markdown";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const blogPosts = await db.query.blogPosts.findMany();
  const isAdmin = (await auth()).userId === "user_2yHYs3WRSbs3BAS6he40RKpz7nO";

  return (
    <main>
      <div className="flex items-center justify-between">
        <h1>Blog</h1>
        <button hidden={!isAdmin} className="btn btn-primary">
          + Add Post
        </button>
      </div>
      <div className="flex flex-wrap gap-5">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="flex w-full flex-col gap-3 rounded p-3 outline outline-white"
          >
            <article className="prose lg:prose-xl h-container p-4">
              <Link href={`/blog/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <div className="text-sm text-gray-500">
                {new Date(post.createdAt).toLocaleDateString()}
                {post.updatedAt && (
                  <span className="text-sm text-gray-500">
                    &nbsp;(Updated{" "}
                    {new Date(post.updatedAt).toLocaleDateString()})
                  </span>
                )}
              </div>
              <hr className="my-5" />
              <ReactMarkdown>{post.content}</ReactMarkdown>
              {isAdmin && (
                <div>
                  <div className="flex w-full justify-end gap-3">
                    <Link
                      href={`/blog/${post.id}/edit`}
                      className="btn btn-secondary"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              )}
            </article>
          </div>
        ))}
      </div>
    </main>
  );
}
