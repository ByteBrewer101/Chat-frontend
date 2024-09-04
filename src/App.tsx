import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil"; // Import RecoilRoot
import { HomePage } from "./Pages/Home";
import { TestPage } from "./Pages/TestPage";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage/>} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
