// hooks/useWebSocket.ts
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { socketAtom } from "../Recoil/Atoms";

export const useWebSocket = (url: string) => {
  const setSocketConnection = useSetRecoilState<WebSocket | null>(socketAtom);

 useEffect(() => {
   const newSocket = new WebSocket(url);
 
   newSocket.onmessage = (message) => {
     console.log("Message received:", message.data);
   };
   setSocketConnection(newSocket);
   return () => newSocket.close();
 }, [setSocketConnection,url]);
};

export const useSendMessage = () => {
  const socket = useRecoilValue(socketAtom)

  const sendMessage = (message: string) => {
   socket?.send(message)
   if(!socket){
    console.log("error in usesendmessage");
   }
  }

  return sendMessage;
};


