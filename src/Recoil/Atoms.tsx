import { atom } from "recoil";

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