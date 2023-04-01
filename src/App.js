import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Following from "./pages/Following/Following";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";
import Search from "./layouts/components/Search/Search";
import { config } from './config/config'
import Explore from "./pages/Explore/Explore";
import Live from "./pages/Live/Live";
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path={config.routes.home} element={<Home />} />
          <Route path={config.routes.following} element={<Following />} />
          <Route path={config.routes.explore} element={<Explore />} />
          <Route path={config.routes.live} element={<Live />} />
          <Route path={config.routes.upload} element={<Upload />} />
          <Route path={config.routes.profile} element={<Profile />} />
          <Route path={config.routes.search} element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
