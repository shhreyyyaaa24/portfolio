import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "[YOUR_NAME] — Software Engineer",
  description:
    "Portfolio of [YOUR_NAME], a full-stack Software Engineer specializing in scalable systems, modern web applications, and developer tooling.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "portfolio",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "[YOUR_NAME]" }],
  openGraph: {
    title: "[YOUR_NAME] — Software Engineer",
    description:
      "Full-stack Software Engineer building scalable systems and modern web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "[YOUR_NAME] — Software Engineer",
    description:
      "Full-stack Software Engineer building scalable systems and modern web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-offwhite text-ink antialiased">{children}</body>
    </html>
  );
}
