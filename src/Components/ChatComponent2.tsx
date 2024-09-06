import { useRecoilValue } from "recoil";
import { chatArray, IsConnected } from "../Recoil/Atoms";
import { Message } from "./Message";
import { Message2 } from "./Message2";
import { useEffect, useRef, useState } from "react";
import { useCreateChat } from "../Connectionlogic/Connectionlogic";

export function Chat2() {
  const chatCreate = useCreateChat();
   const isconnected = useRecoilValue(IsConnected);
  
  const messages = useRecoilValue(chatArray);
  const [currentchat, setCurrentchat] = useState("");
  const scrollref = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => {
    if (scrollref.current) {
      scrollref.current.scrollTop = scrollref.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  function chatHandler() {
    if(currentchat && currentchat.trim() !== "")
    {
          chatCreate(currentchat);
          setCurrentchat("");
    }
  
  }

  return (
    <div
      className={`flex flex-col h-5/6 w-full bg-white bg-opacity-5 backdrop-blur-sm md:w-2/3 lg:w-1/2 rounded-xl ${
        !isconnected ? "animate-pulse" : ""
      } `}
    >
      <div
        ref={scrollref}
        className=" w-full h-full p-2 rounded-xl flex flex-col-reverse overflow-y-auto"
      >
        {messages
          .slice()
          .reverse()
          .map((msg) => {
            const MessageComponent = msg.sr === "1" ? Message : Message2;
            return (
              <MessageComponent
                key={msg.id}
                content={msg.message}
                time={msg.time}
              />
            );
          })}
      </div>
      <div className=" w-full flex flex-row justify-center p-4 ">
        <input
          value={currentchat}
          type="text"
          className="w-full px-4 rounded-xl focus:outline-none text-lg text-bold text-white bg-opacity-10 bg-white "
          onChange={(e) => setCurrentchat(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") chatHandler();
          }}
          disabled={!isconnected}
        />
        <button
          className={`w-1/5 ml-2 p-2 rounded-xl text-white  ${
            isconnected ? "bg-blue-500" : "bg-white opacity-5 "
          }`}
          onClick={chatHandler}
          disabled={!isconnected}
        >
          Send
        </button>
      </div>
    </div>
  );
}
