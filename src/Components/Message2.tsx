
interface MessageProps {
  content: string;
  time: string;
}



export function Message2(props:MessageProps) {


  return (
    <div className="w-full p-4">
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
