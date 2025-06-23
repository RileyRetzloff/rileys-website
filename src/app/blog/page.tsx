import Link from "next/link";
import { db } from "~/server/db";
import { auth } from "@clerk/nextjs/server";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const blogPosts = await db.query.blogPosts.findMany();
  const isAdmin = (await auth()).userId === "user_2yHYs3WRSbs3BAS6he40RKpz7nO";

  return (
    <main>
      <div className="flex items-center justify-between">
        <h1>Blog</h1>
        <button
          hidden={!isAdmin}
          className="rounded p-3 outline outline-white hover:cursor-pointer"
        >
          + Add Post
        </button>
      </div>
      <div className="flex flex-wrap gap-5">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="flex w-full flex-col gap-3 rounded p-3 outline outline-white"
          >
            <Link href={`/blog/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <div>{post.createdAt.toDateString()}</div>
            <div>{post.authorId}</div>
            <div>{post.content}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
