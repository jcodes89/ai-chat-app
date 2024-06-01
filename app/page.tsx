'use client'
import { log } from "console";
import Nav from "./components/nav/page";
import { useState } from "react";


export default function Home() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

  }

  return (
    <>
      <Nav/>
      <main className="flex flex-col h-full w-auto justify-center">
        <div className="m-3 border-black border-2 bg-gray-200">
          <p className="p-4"></p>
        </div>
        <form onSubmit={handleSubmit} className="h-40 w-full flex md:flex-row flex-col justify-center items-center px-4">
          <textarea onChange={(e) => {
            setMessage(e.target.value)
            
          }} typeof="text" value={message} placeholder="Please type your message here ..." className="h-32 bg-gray-100 rounded-md outline-none p-4 w-full resize-none placeholder:text-black "/>
          <button type="submit" className="btn md:ml-3 mt-3">Submit</button>
        </form>
      </main>
    </>
  );
}
