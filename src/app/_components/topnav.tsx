import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="flex items-center justify-between border-b border-white p-3">
      <div id="links" className="flex">
        <Link href="/" className="text-lg">
          rileyretzloff.xyz
        </Link>
      </div>
      <div className="flex gap-3">
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton showName={true} appearance={{ baseTheme: dark }} />
        </SignedIn>
        <div className="h-8 w-8 rounded-full bg-white shadow-white transition-all duration-300 hover:scale-90 hover:shadow-lg/50"></div>
      </div>
    </nav>
  );
}
