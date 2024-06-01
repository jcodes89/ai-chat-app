'use client'
import { log } from "console";
import Nav from "./components/nav/page";
import { useState } from "react";
import Chat from "./components/chat/page";


export default function Home() {

  return (
    <>
      <Nav/>
      <main className="flex flex-col h-screen w-auto ">
        <Chat/>
      </main>
    </>
  );
}
