import { useRecoilState } from "recoil";
import { popupState } from "../Recoil/Atoms"; // Import t

export function Popup() {
  const [working, setWorking] = useRecoilState(popupState);

  if (!working) {
    return null;
  } else
    return (
      <div className=" absolute  w-screen  h-screen bg-opacity-5 bg-black rounded-xl backdrop-blur-xl z-50">
        <div className="p-4 sm:p-6 md:p-10 absolute top-1/2 left-1/2 w-full max-w-md h-auto bg-opacity-10 white rounded-xl backdrop-blur-lg z-50 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center text-white p-4">
            <h1 className="font-extrabold text-2xl sm:text-3xl">
              Enter your Room Id
            </h1>
          </div>
          <div className="flex items-center justify-center text-white mt-2">
            <input
              type="text"
              placeholder="Room Id"
              className="rounded-xl p-4 w-full bg-opacity-10 bg-white backdrop-blur-sm"
            />
          </div>
          <div className="flex items-center justify-center text-white mt-2">
            <button
              onClick={() => {
                setWorking(false); // Close the popup
              }}
              className="rounded-xl p-4 w-32 sm:w-40 bg-opacity-5 bg-white backdrop-blur-sm mt-2 text-sm sm:text-lg hover:bg-opacity-10 transition ease-in-out duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
}
