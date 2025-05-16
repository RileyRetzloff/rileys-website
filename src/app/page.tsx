import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const fileUrls = [
  "https://34ggzkze9s.ufs.sh/f/QUrPhpHwWNxUnTWIuK0atRjHTdu4XvcMD1S6gyL5WNQCzP3Z",
];

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  return (
    <main className="flex h-full w-full flex-col place-items-center px-3">
      <div className="w-full">
        <h1>Riley Retzloff</h1>
        <div className="relative h-40 w-full rounded-xl outline outline-white sm:h-48 md:h-64 lg:h-72 xl:h-96">
          <img
            src={fileUrls[0]}
            alt="Image 1"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <h2>this is my website</h2>
        <h3>that&apos;s just what it is.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ut
          assumenda facere rerum eligendi eaque nulla molestias dolore!
          Laboriosam necessitatibus minima corporis non aut optio voluptates
          consectetur nisi, molestias placeat.
        </p>
        <code>test</code>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos magnam
          ullam, optio dolore dicta nemo. Aspernatur ea doloremque alias odio
          tenetur recusandae ad qui expedita, quasi eos animi aperiam
          perspiciatis voluptate, obcaecati magnam, neque sapiente? Labore eaque
          aliquam consectetur voluptatibus illo iure similique.
        </p>
        <p>&macr;&#92;_(&#12484;)_/&macr;</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus amet
          esse sed nobis quaerat, ex totam, minima deleniti dolorem nihil libero
          voluptate. Eos voluptatibus libero cupiditate obcaecati laboriosam ad
          reprehenderit?
        </p>
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
        <h1>heading 1</h1>
        <h2>heading 2</h2>
        <h3>heading 3</h3>
        <h4>heading 4</h4>
        <h5>heading 5</h5>
        <h6>heading 6</h6>
      </div>
    </main>
  );
}
