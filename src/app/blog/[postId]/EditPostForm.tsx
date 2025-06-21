"use client";

import React, { useState } from "react";

export interface Post {
  id: number;
  title: string;
  content: string;
}

interface EditPostFormProps {
  post: Post;
}

export default function EditPostForm({ post }: EditPostFormProps) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // call api route to save...
  }

  return (
    <form onSubmit={submit}>
      <h1>Edit Post</h1>
      <label>
        Title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Content
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}
