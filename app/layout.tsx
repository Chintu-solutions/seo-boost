// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEO Expert - Premium Off-page SEO Services",
  description:
    "Professional Off-page SEO services including Podcast backlinks, Cloud backlinks, and Google Stack backlinks to boost your online presence.",
  keywords:
    "SEO services, off-page SEO, podcast backlinks, cloud backlinks, google stack backlinks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
