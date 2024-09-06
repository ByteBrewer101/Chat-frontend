import {  useRecoilValue, useSetRecoilState } from "recoil";
import { IsConnected, popupStateCreate, popupStateJoin } from "../Recoil/Atoms"; // Import the popupState atom

export function TopBar() {
  const setPopupHandle = useSetRecoilState(popupStateJoin);
  const setPopupHandleCreate = useSetRecoilState(popupStateCreate);
  const isconnected = useRecoilValue(IsConnected)

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-2 bg-opacity-5 bg-white backdrop-blur-sm z-50">
      <div>
        <button className="text-3xl font-bold text-red-500 px-2">
          ChatterBox
        </button>
      </div>
      <div className="flex">
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
