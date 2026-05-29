import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.title}`,
  description: siteConfig.tagline,
  keywords: ["software engineer", "full-stack developer", "portfolio", "React", "Next.js", "GCP"],
  authors: [{ name: siteConfig.name }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
