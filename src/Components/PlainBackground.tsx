import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { username } from "../Recoil/Atoms";




export function Plain() {


   const [input1, setInput1] = useState("");
   const usernameSetter = useSetRecoilState(username);
   const usernameGet = useRecoilValue(username)
  const [nameExists,setNameExists]=useState(false)

  if(nameExists){
    return (
      <div>
        <h1 className="text-white w-96 font-extrabold text-5xl ">
          Welcome <span className="text-green-500"> {usernameGet}</span>, Join or Create a room to start
          the <span className="ml-2 text-red-500 ">Chatterbox</span>{" "}
        </h1>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white bg-opacity-10 backdrop-blur-xl rounded-xl shadow-xl p-4 ">
        <h1 className="text-white w-96 font-bold ">Guest Username</h1>
        <input
          className="px-4 w-full my-4 bg-white bg-opacity-10 backdrop-blur-xl p-2 rounded-xl focus:outline-none text-white "
          type="text"
          placeholder="Username"
          value={input1}
          onChange={(e) => {
            setInput1(e.target.value);
          }}
        />
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 rounded-xl p-2 px-4 text-white transition ease-in-out duration-200 hover:bg-opacity-10 focus:outline-none"
            onClick={() => {
              usernameSetter(input1);
              setInput1("");
              setNameExists(true)
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
