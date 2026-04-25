import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/profile/ProfilePage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import RoadmapPage from "./pages/roadmap/RoadmapPage";
import PublicPage from "./pages/public/PublicPage";

function App() {
  return (
    <div className="app">
      <Navbar /> 
      <Routes>
        <Route path="/public" element={<PublicPage />} />
        <Route path="/" element={<ProfilePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
      </Routes>
    </div>
  );
}

export default App;