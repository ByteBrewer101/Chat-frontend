import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  IsConnected,
  popupStateCreate,
  popupStateJoin,
  RoomIDatom,
} from "../Recoil/Atoms"; // Import the popupState atom
import { useNavigate } from "react-router-dom";

export function TopBar() {
  const setPopupHandle = useSetRecoilState(popupStateJoin);
  const RoomIdCurrent = useRecoilValue(RoomIDatom);
  const setPopupHandleCreate = useSetRecoilState(popupStateCreate);
  const isconnected = useRecoilValue(IsConnected);
  const nav = useNavigate();
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
          onClick={() => {
            navigator.clipboard.writeText(RoomIdCurrent);
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
          className={`px-2 bg-white bg-opacity-10 rounded-xl  text-white mx-2  transition ease-in-out duration-200 w-fit ${
            isconnected
              ? "bg-blue-500 hover:bg-slate-600"
              : "animate-pulse text-opacity-0"
          }`}
          onClick={() => setPopupHandle(true)} // Toggle popup on button click
          disabled={!isconnected}
        >
          <span className="hidden sm:inline">Join Room</span>
          <span className="inline sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
          </span>
        </button>
        <button
          className={`px-2 bg-white bg-opacity-10 rounded-xl  text-white mx-2  transition ease-in-out duration-200  ${
            isconnected
              ? "bg-blue-500 hover:bg-slate-600"
              : "animate-pulse text-opacity-0 "
          }`}
          onClick={() => setPopupHandleCreate(true)} // Toggle popup on button click
          disabled={!isconnected}
        >
          <span className="hidden sm:inline">Create Room</span>
          <span className="inline sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
