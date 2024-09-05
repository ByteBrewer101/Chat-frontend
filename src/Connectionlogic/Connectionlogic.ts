import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { chatArray, IsConnected, RoomIDatom, socketAtom } from "../Recoil/Atoms";





export function useWebSocketServer(url: string) {
  const socketAtomSetter = useSetRecoilState(socketAtom);
  const messageArray = useSetRecoilState(chatArray)
  const connected = useSetRecoilState(IsConnected)

  useEffect(() => {
    const socket = new WebSocket(url);
    socketAtomSetter(socket);

     socket.onopen = () => {
       console.log("WebSocket connected");
       connected(true); // Set IsConnected to true
     };

    socket.onmessage = (event) => {
      console.log(event.data);

      
 

  
      const messageform = {
        id: "0",
        message: event.data,
        time:Date()
      };

      
     messageArray((prevMessages) => [...prevMessages,messageform]);

    };

     socket.onclose = () => {
       console.log("WebSocket disconnected");
       connected(false); // Set IsConnected to false
     };

    return () => {
      socket.close();
    };
  }, [socketAtomSetter, url,messageArray,connected]);
}

export function useJoinMessage() {
  const socket = useRecoilValue(socketAtom);

  const sendMessage = (roomId: string) => {
    const message = {
      type: "joinRoom",
      id: roomId,
    };

    socket?.send(JSON.stringify(message));
  };
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

export function useCreateChat(){
  const socket = useRecoilValue(socketAtom);
  const messageArray = useSetRecoilState(chatArray);
  const roomID = useRecoilValue(RoomIDatom)
  const sendMessage = (msg:string)=>{
    const message = {
      type:"chat",
      id:roomID,
      chat : msg
    }

    const chatupdate = {
      id:"1",
      message : msg,
      time : Date()
    }
   messageArray((prevMessages) => [...prevMessages, chatupdate]);
    socket?.send(JSON.stringify(message))
  }
  return sendMessage
}