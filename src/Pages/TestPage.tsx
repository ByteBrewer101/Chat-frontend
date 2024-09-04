import React, { useState } from "react";
import { useSendMessage, useWebSocket } from "../Connectionlogic/Connectionlogic";

export const TestPage: React.FC = () => {
  const [roomId, setRoomId] = useState<string>("");
   useWebSocket("ws://localhost:3000");
  const sendMessage = useSendMessage();

  const handleJoinRoom = () => {
    // Construct the message object
    const message = {
      type: "joinRoom",
      id: roomId,
    };

    // Send the message as a JSON string
    sendMessage(JSON.stringify(message));
  };

  return (
    <div>
      <h2>Join Room</h2>
      <input
        type="text"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        placeholder="Enter Room ID"
      />
      <button onClick={handleJoinRoom}>Join Room</button>
    </div>
  );
};

