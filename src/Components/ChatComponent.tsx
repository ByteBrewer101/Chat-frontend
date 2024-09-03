import { Message } from "./Message"
import { Message2 } from "./Message2";





export function ChatComponent() {
  return (
    <div className="h-full bg-white bg-opacity-5 backdrop-blur-sm md:w-2/3 lg:w-1/2 w-full flex flex-col-reverse  ">
      <div className="flex flex-row justify-center p-10">
        <input
          type="text"
          className="w-full px-4 text-lg bg-opacity-10 backdrop-blur-sm bg-white text-white rounded-full"
          placeholder="Message here"
        />
        <button className="bg-white bg-opacity-5 backdrop-blur-sm text-white text-lg mx-2 p-4 rounded-full w-1/5 hover:bg-opacity-10 transition ease-in-out duration-200">
          Send
        </button>
      </div>
      <div className="flex flex-col-reverse overflow-y-auto ">
        <Message />
        <Message2 />
        <Message />
        <Message2 />
        <Message2 />
        <Message2 />
      </div>
    </div>
  );
}
