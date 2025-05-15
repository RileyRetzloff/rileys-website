import "~/styles/globals.css";

import { type Metadata } from "next";
import localFont from "next/font/local";
import { Geist } from "next/font/google";

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

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

function TopNav() {
  return (
    <nav className="flex items-center justify-between border-b border-white p-3">
      <div id="links">
        <a href="#" className="text-4xl hover:underline">
          home
        </a>
      </div>
      <div className="h-8 w-8 rounded-full bg-white shadow-white transition-all duration-300 hover:scale-95 hover:shadow-lg/50"></div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${martianMono.variable} ${geist.variable}`}>
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
