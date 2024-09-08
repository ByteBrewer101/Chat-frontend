
interface MessageProps {
  sender:string,
  content: string;
  time: string;
}



export function Message2(props:MessageProps) {


  return (
    <div className="w-full p-4">
      <p className="text-white my-1 flex text-blue-500">
        {props.sender}
      </p>
      <div className="">
        <h4 className="w-1/2 rounded-xl bg-blue-500 text-white p-2">
          {props.content}
        </h4>
      </div>
      <div className=" ">
        <p className="text-white">{props.time}</p>
      </div>
    </div>
  );
}
