import { db } from "~/server/db";
import Posts from "./_components/posts";

const dynamic = "force-dynamic";

export default async function BlogPage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  return (
    <main>
      <h1>Blog</h1>
      <div className="flex flex-wrap gap-3">
        {images.map((image) => (
          <div className="flex w-72 flex-col items-start gap-2">
            <img src={image.ufsUrl} key={image.id} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
      <Posts />
    </main>
  );
}
