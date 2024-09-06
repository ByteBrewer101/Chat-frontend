import {  useRecoilValue, useSetRecoilState } from "recoil";
import { IsConnected, popupStateCreate, popupStateJoin, RoomIDatom } from "../Recoil/Atoms"; // Import the popupState atom
import { useNavigate } from "react-router-dom";

export function TopBar() {
  const setPopupHandle = useSetRecoilState(popupStateJoin);
  const RoomIdCurrent = useRecoilValue(RoomIDatom)
  const setPopupHandleCreate = useSetRecoilState(popupStateCreate);
  const isconnected = useRecoilValue(IsConnected)
const nav = useNavigate()
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-2 bg-opacity-5 bg-white backdrop-blur-sm z-50">
      <div>
        <button
          className="text-3xl font-bold text-red-500 px-2"
          onClick={() => {
            nav("/");
          }}
        >
          ChatterBox
        </button>
      </div>
      <div className="flex">
        <button
        onClick={()=>{
          navigator.clipboard.writeText(RoomIdCurrent)
        }}
          className={` ${
            RoomIdCurrent === ""
              ? "opacity-0"
              : "bg-white bg-opacity-5 backdrop-blur-sm text-white  p-2 rounded-xl flex items-center hover:bg-opacity-10 transition ease-in-out duration-200 mx-2"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
            />
          </svg>
          <strong className=" px-2 ">{RoomIdCurrent}</strong>
        </button>

        <button
          className={`p-2 bg-white bg-opacity-10 rounded-xl text-lg text-white mx-2  transition ease-in-out duration-200 ${
            isconnected
              ? "bg-blue-500 hover:bg-slate-600"
              : "animate-pulse text-opacity-0"
          }`}
          onClick={() => setPopupHandle(true)} // Toggle popup on button click
          disabled={!isconnected}
        >
          Join Room
        </button>
        <button
          className={`p-2 bg-white bg-opacity-10 rounded-xl text-lg text-white mx-2  transition ease-in-out duration-200 ${
            isconnected
              ? "bg-blue-500 hover:bg-slate-600"
              : "animate-pulse text-opacity-0 "
          }`}
          onClick={() => setPopupHandleCreate(true)} // Toggle popup on button click
          disabled={!isconnected}
        >
          Create Room
        </button>
      </div>
    </div>
  );
}
