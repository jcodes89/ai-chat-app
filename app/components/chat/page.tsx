'use client'
import { useChat } from "ai/react"
import userAvatar from '/public/Images/user-image.webp'
import chatAvatar from '/public/Images/grandmaster-image.webp'
import Image from "next/image";
import { useRef , useEffect} from "react";


const Chat = () => {
    const { messages,input, handleInputChange, handleSubmit} = useChat({
        api: '/api/generate'
    })


    const renderedResponse = () => {
        return (
            <div className="mt-4 h-fit">
                {messages.map(message => (
                    <div key={message.id} className={message.content  ? 'bg-slate-200 text-gray-950 p-4 m-4 rounded-md shadow-md shadow-black' : 'bg-none hidden'}>
                        <Image loading="eager" className="rounded-badge" alt="image of avatar" src={message.role === 'user' ? userAvatar : chatAvatar} width={50} height={50}/>
                        <div className="font-bold">{message.role === 'user' ? 'User: ' : 'Grand Master: '}</div>
                        <div>{message.content}</div>
                    </div>
                ))}
            </div> 
        )
    }

  return (
   
    <div className=" w-full lg:w-1/2  ">
        {renderedResponse()}
        <form onSubmit={handleSubmit} className="h-auto w-full flex flex-col justify-center items-center px-4 ">
          <textarea onChange={handleInputChange} typeof="text" value={input} placeholder='Message Grand Master'  className="h-32 bg-gray-100 shadow-md shadow-black rounded-md outline-none p-4 w-full resize-none placeholder:text-gray-400 "/>
          <button type="submit" className="btn md:ml-3 my-3 bg-gray-50 hover:bg-secondary hover:text-gray-50 hover:shadow-md hover:shadow-black">Submit</button>
        </form>
    </div>
  )
}

export default Chat