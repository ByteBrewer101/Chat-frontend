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



interface Message {
  id: string; 
  sr: string;
  username:string
  message: string;
  time: string;
}

export const chatArray = atom<Message[]>({
  key : "chatArray",
  default: []
})

export const username = atom({

  key:"username",
  default:""

})





// export const chatIds = atom({
//   key : "chatIds",
//   default : 0
// })





export const RoomIDatom = atom({
  key:"RoomIDatom",
  default : ""
})

export const IsConnected = atom({
  key:"IsConnected",
  default: false
})