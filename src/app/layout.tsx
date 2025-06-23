import "~/styles/globals.css";
import TopNav from "./_components/topnav";
import { type Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Link from "next/link";

const martianMono = localFont({
  src: [
    {
      path: "../../public/fonts/MartianMono/MartianMono.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/MartianMono/MartianMono-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/MartianMono/MartianMono-Medium.ttf",
      weight: "500",
    },
  ],
  variable: "--font-martian-mono",
});

export const metadata: Metadata = {
  title: "Riley Retzloff",
  description: "Riley Retzloff's website",
  icons: [{ rel: "icon", url: "/r.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${martianMono.variable} ${geist.variable} ${geistMono.variable} h-screen w-screen min-w-64 antialiased`}
        >
          <TopNav />
          <div className="mx-auto flex max-w-screen-lg flex-col p-5">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
