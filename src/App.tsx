import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HomePage } from "./Pages/Home";
import { useWebSocketServer } from "./Connectionlogic/Connectionlogic";


function App() {

  const apiUrl = "wss://livegroupchat-backend.onrender.com";

  
  useWebSocketServer(apiUrl);
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        
        </Routes>
      </Router>
   
  );
}

export default App;
