"use client";

import { UploadButton } from "~/utils/uploadthing";

export default function BlogPage() {
  return (
    <main>
      <h1>Blog</h1>
      <UploadButton
        endpoint={"image"}
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
