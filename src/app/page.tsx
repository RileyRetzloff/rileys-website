import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  return (
    <main>
      <h1>riley's website</h1>
      <h2>it's good to finally have a visitor :)</h2>
      <h3>pages</h3>
      <div className="flex flex-col">
        <Link href="/">home</Link>
        <span>
          <Link href="/about">about</Link>&nbsp;(only good one so far)
        </span>
        <Link href="/blog">blog</Link>
      </div>
      <h3>posts</h3>
      <div className="flex flex-wrap gap-3">
        {posts.map((post) => (
          <div
            className="flex w-fit place-items-center rounded border border-zinc-700 bg-zinc-800 p-8"
            key={post.id}
          >
            {post.name}
          </div>
        ))}
      </div>
    </main>
  );
}
