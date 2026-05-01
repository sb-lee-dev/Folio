import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProjectAddModal from "./ProjectAddModal";
import ProjectDetailModal from "./ProjectDetailModal";
import "./ProjectsPage.css";
import "./ProjectsModal.css";
import AddButton from "../../components/AddButton";

export default function ProjectsPage() {
  const { userId } = useParams();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [user, setUser] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
      setUser({
        ...response.data,
      });
    };

    getUser();
  }, [userId]);

  const [currentProject, setCurrentProject] = useState(null);

  const openProjectDetail = (project) => {
    setCurrentProject({
      ...project,
      title: project.title,
      description: project.description,
      tags: project.tags,
      progress: project.progress,
    });
    setIsDetailModalOpen(true);
  };

  console.log(currentProject);
  return (
    <>
      <>
        <title>Projects</title>

        <div className="projects-title-container">
          <div className="projects-title">My Projects</div>
          <AddButton
            onClick={() => setIsAddModalOpen(true)}
            fontSize={"18px"}
            item={"Project"}
          />
        </div>
        <div className="projects-container">
          {user ? (
            user.projects.map((project) => {
              let progressColors = { backgroundColor: "", color: "" };
              if (project.progress === "Completed") {
                progressColors.backgroundColor = "#eaf6df";
                progressColors.color = "#285f13";
              }
              if (project.progress === "In progress") {
                progressColors.backgroundColor = "#f9ead4";
                progressColors.color = "#6b3d00";
              }
              if (project.progress === "Planning") {
                progressColors.backgroundColor = "#eeeeeb";
                progressColors.color = "#444";
              }

              return (
                <div
                  key={project.id}
                  className="project-container"
                  onClick={() => openProjectDetail(project)}
                >
                  <div className="project-header">
                    <div className="project-header-title">{project.title}</div>
                    <div
                      className="project-header-progress"
                      style={{
                        backgroundColor: progressColors.backgroundColor,
                        color: progressColors.color,
                      }}
                    >
                      {project.progress}
                    </div>
                  </div>
                  <div className="project-desc">{project.description}</div>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => {
                      return (
                        <div key={index} className="project-tag">
                          {tag}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="project-display-empty">There is no project.</div>
          )}
        </div>

        {/*modal template is genereated by chatGPT*/}
        {isAddModalOpen && (
          <ProjectAddModal
            setIsAddModalOpen={setIsAddModalOpen}
            setUser={setUser}
            user={user}
          />
        )}

        {isDetailModalOpen && (
          <ProjectDetailModal
            currentProject={currentProject}
            setCurrentProject={setCurrentProject}
            setIsDetailModalOpen={setIsDetailModalOpen}
            setUser={setUser}
            user={user}
          />
        )}
      </>
    </>
  );
}
