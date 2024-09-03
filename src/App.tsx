import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil"; // Import RecoilRoot
import { HomePage } from "./Pages/Home";

function App() {
  return (
    <RecoilRoot>
     
      <Router>
        <Routes>
          
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
