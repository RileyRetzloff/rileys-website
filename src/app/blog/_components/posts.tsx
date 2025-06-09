"use client";

import { UploadButton } from "~/utils/uploadthing";

export default function Posts() {
  return (
    <UploadButton
      endpoint={"image"}
      onClientUploadComplete={(res) => {
        console.log("Files: ", res);
        alert("Upload Completed");
      }}
      onUploadError={(error: Error) => {
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}
