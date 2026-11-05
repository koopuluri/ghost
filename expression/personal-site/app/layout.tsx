import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { socialMetadata } from "@/lib/social-metadata";

// The same variable Inter font used by benji.org. Global CSS sets the measured
// 14px / 20px typography, with weight 460 for body text and 500 for page titles.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Geist Mono (variable) — used for numbers in visualizations.
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  ...socialMetadata({ title: site.name, path: "/", image: "home" }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
