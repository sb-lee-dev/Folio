import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProjectsModal.css";

export default function ProjectAddModal({ user, setUser, setIsAddModalOpen }) {
  const { userId } = useParams();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
    setIsAddModalOpen(false);
    setNewProject({
      title: "",
      description: "",
      tags: "",
      progress: "In progress",
    });

    alert("Project added successfully.");
  };

  const closeModal = () => {
    setIsAddModalOpen(false);
    setNewProject({
      title: "",
      description: "",
      tags: "",
      progress: "In progress",
    });
  };

  return (
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
  );
}
