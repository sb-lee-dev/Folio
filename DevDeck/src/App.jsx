import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/profile/ProfilePage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import RoadmapPage from "./pages/roadmap/RoadmapPage";
import PublicPage from "./pages/public/PublicPage";
import UserSelector from "./pages/user-select/UserSelectorPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<UserSelector />} />
        <Route
          path="/public/:userId"
          element={
            <>
              <Navbar />
              <PublicPage />
            </>
          }
        />
        <Route
          path="/profile/:userId"
          element={
            <>
              <Navbar />
              <ProfilePage />
            </>
          }
        />
        <Route
          path="/projects/:userId"
          element={
            <>
              <Navbar />
              <ProjectsPage />
            </>
          }
        />
        <Route
          path="/roadmap/:userId"
          element={
            <>
              <Navbar />
              <RoadmapPage />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
