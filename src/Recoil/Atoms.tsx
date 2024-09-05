import { atom } from "recoil";
import { Message } from "../Components/ChatComponent";

export const popupStateJoin = atom({
  key: "popupStateJoin", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const popupStateCreate = atom({
  key: "popupStateCreate", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});



export const chatStatus = atom({
    key: "chatStatus",
    default:false,
})

export const socketAtom = atom<WebSocket | null>({
  key: "socketAtom",
  default: null, 
});

export const chatArray = atom<Message[]>({
  key : "chatArray",
  default: []
})

export const RoomIDatom = atom({
  key:"RoomIDatom",
  default : ""
})