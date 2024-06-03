import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav/page";

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
    <html lang="en" className="">
      <head>
      <script src="https://kit.fontawesome.com/5c59429581.js" defer crossOrigin="anonymous"></script>

      </head>
      <body className={`${inter.className} `}>
        <Nav/>
        <div className="">
          {children}
        </div>
        
        <div className="flex justify-center mt-3">
          <audio controls autoPlay loop controlsList="nodownload noremoteplayback" className="scale-90">
            <source src="/Audio/the-enchantress-dark-celtic-background-music-114207.mp3" type="audio/mp3"/>
            Your browser does not support the audio element.
          </audio>
        </div>
        
      </body>
    </html>
  );
}
