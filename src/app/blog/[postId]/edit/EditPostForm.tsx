"use client";

import { updatePost } from "./actions";

interface Post {
  id: number;
  title: string;
  content: string;
}

interface EditPostFormProps {
  post: Post;
}

export default function EditPostForm({ post }: EditPostFormProps) {
  return (
    <div className="card">
      <form action={updatePost} className="h-container flex flex-col space-y-6">
        <h1 className="mb-6 border-b border-zinc-700 pb-2">Edit Post</h1>

        <input type="hidden" name="postId" value={post.id} />

        <div className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              id="title"
              name="title"
              className="form-input"
              type="text"
              defaultValue={post.title}
              placeholder="Enter post title"
            />
          </div>

          <div className="flex flex-grow flex-col space-y-2">
            <label htmlFor="content" className="form-label">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              className="form-input resize-y"
              defaultValue={post.content}
              placeholder="Speak your truth..."
              style={{ minHeight: "calc(100vh - 350px)" }}
            />
          </div>
        </div>

        <div className="section-divider flex justify-end">
          <button
            type="button"
            onClick={() => history.back()}
            className="btn btn-secondary"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
