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
    <div className="card">
      <form
        onSubmit={handleSubmit}
        className="h-container flex flex-col space-y-6"
      >
        <h1 className="mb-6 border-b border-zinc-700 pb-2">Edit Post</h1>

        <div className="flex-grow space-y-5">
          <div className="space-y-2">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              id="title"
              className="form-input"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
            />
          </div>

          <div className="flex flex-grow flex-col space-y-2">
            <label htmlFor="content" className="form-label">
              Content
            </label>
            <textarea
              id="content"
              className="form-input flex-grow resize-y"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post content here..."
              style={{ minHeight: "calc(100vh - 350px)" }}
            />
          </div>
        </div>

        <div className="section-divider flex justify-end">
          <button
            type="button"
            onClick={() => router.back()}
            className="btn btn-secondary mr-3"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className={`btn btn-primary px-6 ${saving ? "cursor-not-allowed opacity-70" : ""}`}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
