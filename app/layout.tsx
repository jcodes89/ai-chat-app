import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav/page";
import Link from "next/link";
import img from '@/public/Images/grandmaster-image.webp'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Quest Master - Chatbot for Dungeons and Dragons ",
  description: `AI Quest Master is an innovative chatbot designed to enhance the Dungeons and Dragons experience.  The AI acts as the Dungeon Master. This cutting-edge application leverages advanced natural language processing to create immersive narratives tailored to each player's actions and decisions. With seamless integration of modern web technologies and the OpenAI API, AI Dungeon Master offers dynamic storytelling, character creation options, and an engaging gameplay experience. Embark on epic adventures, shape your own destiny, and experience the thrill of Dungeons and Dragons like never before.
Keywords: AI, Chatbot, Dungeons and Dragons, RPG, Role-playing Game, OpenAI, Tailwind, JavaScript, React.js, Next.js, Storytelling, Character Creation, Immersive Experience. D & D QuestMaster is not affiliated with Wizards of the Cost or Dungeons and Dragons. `,
  
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
      <link rel="icon" type="image/x-icon" href="/Images/grandmaster-image.webp" className="rounded-full scale-150"></link>
      </head>
      <body className={`${inter.className} `}>
        <Nav/>
        <div className="flex justify-center mt-3">
          <audio controls autoPlay loop controlsList="nodownload noremoteplayback" className="scale-90">
            <source src="/Audio/the-enchantress-dark-celtic-background-music-114207.mp3" type="audio/mp3"/>
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="">
          {children}
        </div>
        
        
      </body>
    </html>
  );
}
