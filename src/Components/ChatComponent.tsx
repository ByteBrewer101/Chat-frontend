import { useState, useRef, useEffect } from "react";
import { Message } from "./Message";
import { Message2 } from "./Message2";

interface Message {
  id: string;
  message: string;
  time:string
}

const initialMessages: Message[] = [];

export function ChatComponent() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState<string>("");
  const messageListRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg: Message = {
        id: "1", 
        message: newMessage,
        time : currentTime
      };
      setMessages((prevMessages) => [...prevMessages, newMsg]);
      setNewMessage(""); 
    }
  };

  
function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

const currentTime = getCurrentTime()




  return (
    <div className="h-full bg-white bg-opacity-5 backdrop-blur-sm md:w-2/3 lg:w-1/2 w-full flex flex-col-reverse">
      <div className="flex flex-row justify-center p-10">
        <input
          type="text"
          className="w-full px-4 text-lg bg-opacity-10 backdrop-blur-sm bg-white text-white rounded-full"
          placeholder="Message here"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
        <button
          className="bg-white bg-opacity-5 backdrop-blur-sm text-white text-lg mx-2 p-4 rounded-full w-1/5 hover:bg-opacity-10 transition ease-in-out duration-200"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
      <div
        ref={messageListRef}
        className="flex flex-col-reverse overflow-y-auto h-full" // Set a fixed height for scrolling
      >
        {messages
          .slice()
          .reverse()
          .map((msg) => {
            if (msg.id === "1") {
              return (
                <Message key={msg.id + msg.message} content={msg.message} time ={msg.time}/>
              );
            } else {
              return (
                <Message2 key={msg.id + msg.message} content={msg.message} time={msg.time}/>
              );
            }
          })}
      </div>
    </div>
  );
}
