import React from 'react'
import Image from 'next/image'
import img from '@/public/Images/Firefly A detailed illustration of an all-knowing and powerful Dungeons and Dragons wizard to be use.jpg'


const Nav = () => {
  return (
    <header>
        <nav className="h-fit p-2 bg-black text-gray-50"> 
        <div className="flex flex-row items-center justify-between">
          <Image src={img} alt="image of all knowing wizard from dungeons and dragons" className="h-28 w-auto rounded-full "/>
          <h1 className="h-fit mr-4 font-extrabold text-xl">QuestMaster</h1>
        </div>
        </nav>
        <div className='bg-gray-200'>
          <h2 className='text-center'> A D & D Storytelling Chatbot</h2>
        </div>
      </header>
  )
}

export default Nav