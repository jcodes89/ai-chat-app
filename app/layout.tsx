import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI chat app",
  description: "App uses AI to create prompts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <script src="https://kit.fontawesome.com/5c59429581.js" defer crossOrigin="anonymous"></script>

      </head>
      <body className={`${inter.className}  h-screen w-auto`}>{children}</body>
    </html>
  );
}
