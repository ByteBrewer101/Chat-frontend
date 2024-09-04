import { useEffect } from "react"
import {  useRecoilValue, useSetRecoilState } from "recoil";
import { socketAtom } from "../Recoil/Atoms";

export function useWebSocketServer(url:string){

  const socketAtomSetter = useSetRecoilState(socketAtom)

  useEffect(()=>{
    const socket = new WebSocket(url);
    socketAtomSetter(socket)

    socket.onmessage = (event) => {
     console.log(event.data);
    };
     return () => {
       socket.close();
     };


  },[socketAtomSetter,url])

 
  
}


export function useJoinMessage(){
  const socket = useRecoilValue(socketAtom)

  

  const sendMessage = (roomId:string)=>{
    const message = {
      type: "joinRoom",
      id: roomId,
    };

    socket?.send(JSON.stringify(message))

  }
  return sendMessage;
  

}


export function useCreateMessage() {
  const socket = useRecoilValue(socketAtom);

  const sendMessage = (roomId: string) => {
    const message = {
      type: "createRoom",
      id: roomId,
    };

    socket?.send(JSON.stringify(message));
  };
  return sendMessage;
}