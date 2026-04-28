import { useEffect, useState } from "react";
import "./ProjectsPage.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProjectsPage() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
      setUser({
        ...response.data,
      });
    };

    getUser();
  }, [userId]);

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    tags: "",
    progress: "In progress",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewProject({
      ...newProject,
      [name]: value,
    });
  };

  const addProject = async () => {
    const projectToAdd = {
      id: Math.random(),
      title: newProject.title,
      description: newProject.description,
      tags: newProject.tags.split(",").map((tag) => tag.trim()),
      progress: newProject.progress,
    };

    const updatedUser = {
      ...user,
      projects: [projectToAdd, ...user.projects],
    };

    await axios.put(`${API_BASE_URL}/users/${userId}`, updatedUser);
    setUser(updatedUser);
    setIsModalOpen(false);
    setNewProject({
      title: "",
      description: "",
      tags: "",
      progress: "In progress",
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewProject({
      title: "",
      description: "",
      tags: "",
      progress: "In progress",
    });
  };

  return (
    <>
      <>
        <title>Projects</title>

        <div className="projects-title-container">
          <div className="projects-title">My Projects</div>
          <div
            className="projects-title-button"
            onClick={() => setIsModalOpen(true)}
          >
            + Add Project
          </div>
        </div>
        <div className="projects-container">
          {user &&
            user.projects.map((project) => {
              return (
                <div className="project-container">
                  <div className="project-header">
                    <div className="project-header-title">{project.title}</div>
                    <div className="project-header-progress">
                      {project.progress}
                    </div>
                  </div>
                  <div className="project-desc">{project.description}</div>
                  <div className="project-tags">
                    {project.tags.map((tag) => {
                      return <div className="project-tag">{tag}</div>;
                    })}
                  </div>
                </div>
              );
            })}
        </div>

        {/*modal template is genereated by chatGPT*/}
        {isModalOpen && (
          <div className="modal-bg">
            <div className="modal-box">
              <h2>Add Project</h2>

              <input
                name="title"
                placeholder="Project title"
                value={newProject.title}
                onChange={handleChange}
              />

              <textarea
                name="description"
                placeholder="Project description"
                value={newProject.description}
                onChange={handleChange}
              />

              <input
                name="tags"
                placeholder="Tags: React, CSS, API"
                value={newProject.tags}
                onChange={handleChange}
              />

              <select
                name="progress"
                value={newProject.progress}
                onChange={handleChange}
              >
                <option>In progress</option>
                <option>Completed</option>
                <option>Planning</option>
              </select>

              <div className="modal-buttons">
                <button onClick={closeModal}>Cancel</button>
                <button onClick={addProject}>Save</button>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
}
