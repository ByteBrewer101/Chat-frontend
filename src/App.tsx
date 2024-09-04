import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HomePage } from "./Pages/Home";
import { useWebSocketServer } from "./Connectionlogic/Connectionlogic";


function App() {

  
  useWebSocketServer("ws://localhost:3000");
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        
        </Routes>
      </Router>
   
  );
}

export default App;
