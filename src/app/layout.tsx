import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "M. Faizan Munir | Full-Stack Software Engineer (AI & Intelligent Systems)",
  description:
    "Portfolio of M. Faizan Munir — Full-Stack Software Engineer specializing in AI-driven and LLM-powered applications. Building intelligent systems with React, FastAPI, RAG pipelines, and vector search.",
  keywords: [
    "Full-Stack Engineer",
    "AI Developer",
    "LLM Applications",
    "RAG Pipelines",
    "React",
    "FastAPI",
    "Pinecone",
    "LangChain",
  ],
  authors: [{ name: "M. Faizan Munir" }],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "M. Faizan Munir | AI & Full-Stack Engineer",
    description:
      "Building intelligent systems that think, scale, and deliver.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-obsidian antialiased">{children}</body>
    </html>
  );
}
