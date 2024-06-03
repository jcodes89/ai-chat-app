'use client'
import { useChat } from "ai/react"
import userAvatar from '/public/Images/Firefly -Create an avatar for a Dungeons and Dragons hero. He is a savior to all, brave and mighty, .jpg'
import chatAvatar from '/public/Images/Firefly A detailed illustration of an all-knowing and powerful Dungeons and Dragons wizard to be use.jpg'
import Image from "next/image";


const Chat = () => {
    const { messages,input, handleInputChange, handleSubmit} = useChat({
        api: '/api/generate'
    })

    const renderedResponse = () => {
        return (
            <div className="mt-4 ">
                {messages.map(message => (
                    <div key={message.id} className={message.content  ? 'bg-gray-300 p-4 m-4 rounded-md' : 'bg-none hidden'}>
                        {message.role === 'user' ? 'User: ' : 'Grand Master: '}
                        <Image alt="image of avatar" src={message.role === 'user' ? userAvatar : chatAvatar} width={50} height={50}/>
                        {message.content}
                    </div>
                ))}
            </div>
        )
    }

  return (
    <>
        {renderedResponse()}
        <form onSubmit={handleSubmit} className="h-auto w-full flex md:flex-row flex-col justify-center items-center px-4">
          <textarea onChange={handleInputChange} typeof="text" value={input} placeholder='Message Grand Master'  className="h-32 bg-gray-100 text-gray-100 rounded-md outline-none p-4 w-full resize-none placeholder:text-black "/>
          <button type="submit" className="btn md:ml-3 my-3">Submit</button>
        </form>
    </>
  )
}

export default Chat