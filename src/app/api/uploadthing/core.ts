import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const uploadRouter = {
  image: f(["image", "video", "text", "pdf", "audio"])
    .middleware(async ({ req }) => {
      const user = await auth();

      if (!user.userId) throw new UploadThingError("Unauthorized");

      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log(`Upload complete for userId: ${metadata.userId}`);

      await db.insert(images).values({
        name: file.name,
        ufsUrl: file.ufsUrl,
      });
    }),
} satisfies FileRouter;

export type UploadRouter = typeof uploadRouter;
