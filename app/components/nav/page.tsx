import React from 'react'
import Image from 'next/image'
import img from '@/public/Images/Firefly A detailed illustration of an all-knowing and powerful Dungeons and Dragons wizard to be use.jpg'


const Nav = () => {
  return (
    <header>
        <nav className="h-fit p-2 bg-primary text-gray-50"> 
        <div className="flex flex-row items-center justify-between">
          <Image src={img} alt="image of all knowing wizard from dungeons and dragons" className="h-28 w-auto rounded-full "/>
          <h1 className="h-fit mr-4 font-extrabold text-xl lg:text-2xl hover:text-secondary hover:cursor-default">QuestMaster</h1>
        </div>
        </nav>
        <div className=' w-full flex justify-center'>
          <h2 className='text-center w-fit bg-gray-50 text-gray-950 font-bold text-md lg:text-lg p-2 rounded-b-md shadow-md shadow-black'> Dungeons and Dragons Grand Master Chatbot</h2>
        </div>
      </header>
  )
}

export default Nav