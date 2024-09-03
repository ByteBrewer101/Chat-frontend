



export function Message(props){



    return (
      <div className="w-full p-4">
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


