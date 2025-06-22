"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export interface Post {
  id: number;
  title: string;
  content: string;
}

interface EditPostFormProps {
  post: Post;
}

export default function EditPostForm({ post }: EditPostFormProps) {
  const router = useRouter();
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    const res = await fetch(`/api/blog/${post.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    setSaving(false);
    if (!res.ok) {
      // how to show Zod error here?
      alert("Failed to save");
      return;
    }

    router.push(`/blog/${post.id}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Post</h1>
      <div className="flex flex-col place-items-start gap-5 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <label className="flex flex-col gap-2">
          <span className="font-bold">Title</span>
          <input
            className="rounded p-2 outline outline-white"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-bold">Content</span>
          <input
            className="rounded p-2 outline outline-white"
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <button
          type="submit"
          disabled={saving}
          className="rounded p-2 outline outline-white"
        >
          {saving ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
}
