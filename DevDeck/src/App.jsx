import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/profile/ProfilePage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import PublicPage from "./pages/public/PublicPage";
import RoadmapPage from "./pages/roadmap/RoadmapPage";

function App() {
  return (
    <div className="app">
      <Navbar /> 
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
      </Routes>
    </div>
  );
}

export default App;
