import { db } from "~/server/db";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  return (
    <main>
      <h1>welcome to my website :)</h1>
      <p>it's good to finally have a visitor.</p>
      <p>please, make yourself at home.</p>
      <SignedOut>
        <p>
          if you feel so inclined (and want to comment on my blog posts [not
          working yet]), you can create an account or sign in using the buttons
          below.
        </p>
        <div className="mt-5 flex gap-5">
          <SignUpButton>
            <button className="btn btn-primary">sign up</button>
          </SignUpButton>
          <SignInButton>
            <button className="btn btn-secondary">sign in</button>
          </SignInButton>
          <div>
            <p className="text-muted text-sm">(no personal info required)</p>
          </div>
        </div>
      </SignedOut>
    </main>
  );
}
