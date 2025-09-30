import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://next-mdx-blog.vercel.app"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Personal Goals 2025",
    template: "%s | Personal Goals 2025",
  },
  description: "My portfolio, blog, and personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="antialiased tracking-tight">
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
          <main className="max-w-[60ch] mx-auto w-full space-y-6">
            {children}
          </main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center tracking-tight text-gray-400 dark:text-gray-500">
        Memento Mori
      </div>
    </footer>
  );
}
