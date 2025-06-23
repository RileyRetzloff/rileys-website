import { SignedIn, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="flex items-center justify-between border-b border-white p-3">
      <div id="links" className="flex w-full items-center justify-start">
        <Link href="/" className="text-lg">
          rileyretzloff.xyz
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <Link href="/">home</Link>|<Link href="/about">about</Link>|
        <Link href="/blog">blog</Link>
      </div>
      <div className="flex w-full items-center justify-end gap-5">
        <SignedIn>
          <UserButton appearance={{ baseTheme: dark }} />
        </SignedIn>
        <Link href="/">
          <div className="h-8 w-8 rounded-full bg-white shadow-white transition-all duration-300 hover:scale-90 hover:shadow-lg/50"></div>
        </Link>
      </div>
    </nav>
  );
}
