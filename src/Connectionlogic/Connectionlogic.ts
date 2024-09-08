import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  chatArray,
  IsConnected,
  RoomIDatom,
  socketAtom,
  username,
} from "../Recoil/Atoms";
import { v4 as uuidv4 } from "uuid";

export function useWebSocketServer(url: string) {
  const socketAtomSetter = useSetRecoilState(socketAtom);
  const messageArray = useSetRecoilState(chatArray);
  const connected = useSetRecoilState(IsConnected);

  useEffect(() => {
    const socket = new WebSocket(url);
    socketAtomSetter(socket);

    socket.onopen = () => {
      console.log("WebSocket connected");
      connected(true); // Set IsConnected to true
    };

    socket.onmessage = (event) => {
      console.log(event.data);
      const recievedData = JSON.parse(event.data);

      const id = uuidv4();

      const currentAtom = {
        id,
        sr: "0",
        username : recievedData.recepient,
        message: recievedData.message,
        time: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      };

      messageArray((prevMessages) => [...prevMessages, currentAtom]);
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
      connected(false); // Set IsConnected to false
    };

    return () => {
      socket.close();
    };
  }, [socketAtomSetter, url, messageArray, connected]);
}

export function useJoinMessage() {
  const socket = useRecoilValue(socketAtom);
  const uname = useRecoilValue(username)

  const sendMessage = (roomId: string) => {
    const message = {
      type: "joinRoom",
      id: roomId,
      username:uname
    };

    socket?.send(JSON.stringify(message));
  };
  return sendMessage;
}

export function useCreateMessage() {
  const socket = useRecoilValue(socketAtom);
  const uname = useRecoilValue(username)

  const sendMessage = (roomId: string) => {
    const message = {
      type: "createRoom",
      id: roomId,
      username : uname
    };

    socket?.send(JSON.stringify(message));
  };
  return sendMessage;
}

export function useCreateChat() {
  const socket = useRecoilValue(socketAtom);
  const messageArray = useSetRecoilState(chatArray);
  const roomID = useRecoilValue(RoomIDatom);
  const uname = useRecoilValue(username)
  const sendMessage = (msg: string) => {
    const message = {
      type: "chat",
      id: roomID,
      username:uname,
      chat: msg,
    };
    const id = uuidv4();
    const chatupdate = {
      id,
      sr: "1",
      message: msg,
      username:uname,
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
    };
    messageArray((prevMessages) => [...prevMessages, chatupdate]);
    socket?.send(JSON.stringify(message));
   
  };
  return sendMessage;
}



