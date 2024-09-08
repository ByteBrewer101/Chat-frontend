
interface MessageProps {
  sender:string
  content: string;
  time: string;
}



export function Message(props:MessageProps){



    return (
      <div className="w-full p-4">
        <p className="text-white justify-end my-1 flex text-blue-500">
          {props.sender}
        </p>
        <div className="flex justify-end">
          <h4 className="w-1/2 rounded-xl bg-blue-500 bg-opacity-20 backdrop-blur-lg text-white p-2">
            {props.content}
          </h4>
        </div>
        <div className="flex justify-end">
          <p className="text-white">{props.time}</p>
        </div>
      </div>
    );
}


