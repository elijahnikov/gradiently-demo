import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistMono } from "geist/font/mono";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gradiently",
  description:
    "A minimal, lightweight colour picker to generate beautiful colours and gradients.",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistMono.className}>{children}</body>
      <Toaster />
    </html>
  );
}
