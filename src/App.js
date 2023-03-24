import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Following from "./pages/Following";
import Home from "./pages/Home";
import Upload from "./pages/Upload";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/following" element={<Following />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
