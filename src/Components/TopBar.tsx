import { useSetRecoilState } from "recoil";
import { popupState } from "../Recoil/Atoms"; // Import the popupState atom

export function TopBar() {
  const setPopupHandle = useSetRecoilState(popupState);

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-2 bg-opacity-5 bg-white backdrop-blur-sm z-50">
      <div>
        <button className="text-3xl font-bold text-white px-2">
          Site name
        </button>
      </div>
      <div className="flex">
        <button
          className="p-2 bg-white bg-opacity-10 rounded-xl text-lg text-white mx-2 hover:bg-slate-600 transition ease-in-out duration-200"
          onClick={() => setPopupHandle(true)} // Toggle popup on button click
        >
          Join Room
        </button>
        <button
          className="p-2 bg-white bg-opacity-10 rounded-xl text-lg text-white mx-2 hover:bg-slate-600 transition ease-in-out duration-200"
          onClick={() => setPopupHandle(true)} // Toggle popup on button click
        >
          Create Room
        </button>
      </div>
    </div>
  );
}
