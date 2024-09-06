
import { useRecoilValue, useSetRecoilState } from "recoil";
import { chatArray, chatStatus, popupStateJoin, RoomIDatom } from "../Recoil/Atoms"; // Import t
import { useJoinMessage } from "../Connectionlogic/Connectionlogic";

export function JoinPopup() {
 
  const chatHandle = useSetRecoilState(chatStatus);
  const popupHandler = useSetRecoilState(popupStateJoin)
  const setRoomID=useSetRecoilState(RoomIDatom)
  const roomID = useRecoilValue(RoomIDatom)
  const messager = useJoinMessage()
  const chatsArr = useSetRecoilState(chatArray)

  const handler = ()=>{
    popupHandler(false);
    chatHandle(true); 
    chatsArr([])
    messager(roomID)
    

  }


    return (
      <div className=" absolute  w-screen  h-screen bg-opacity-5 bg-black rounded-xl backdrop-blur-xl z-50">
        <div className="p-4 sm:p-6 md:p-10 absolute top-1/2 left-1/2 w-full max-w-md shadow-xl h-auto bg-opacity-20 bg-black rounded-xl backdrop-blur-3xl z-50 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center text-white p-4">
            <h1 className="font-extrabold text-2xl sm:text-3xl text-white">
              Enter your Room Id
            </h1>
          </div>
          <div className="flex items-center justify-center text-white mt-2">
            <input
              type="text"
              placeholder="Room Id"
              className="rounded-xl p-4 w-full bg-opacity-20 bg-red-500 shadow-lg backdrop-blur-sm focus:outline-none "
              onChange={(e)=>setRoomID(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center text-white mt-2">
            <button
              onClick={handler}
              className="rounded-xl shadow-xl p-4 w-32 sm:w-40 bg-opacity-5 bg-red-500 backdrop-blur-sm mt-2 text-sm sm:text-lg hover:bg-opacity-10 transition ease-in-out duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
}
