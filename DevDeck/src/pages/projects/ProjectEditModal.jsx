import axios from "axios";
import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectsModal.css";

export default function ProjectEditModal({
  user,
  setUser,
  currentProject,
  setCurrentProject,
  setIsEditing,
  deleteItem,
}) {
  const { userId } = useParams();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [tempTags, setTempTags] = useState([...currentProject.tags]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCurrentProject({
      ...currentProject,
      [name]: value,
    });
  };

  const handleTagsChange = (e) => {
    setTempTags(e.target.value);
  };

  const modifyProject = async () => {
    const updatedUser = {
      ...user,
      projects: user.projects.map((project) =>
        project.id === currentProject.id
          ? {
              ...currentProject,
              tags: tempTags.split(",").map((tag) => tag.trim()),
            }
          : project,
      ),
    };

    await axios.put(`${API_BASE_URL}/users/${userId}`, updatedUser);
    setUser(updatedUser);
    setCurrentProject({
      ...currentProject,
      tags: tempTags.split(",").map((tag) => tag.trim()),
    });
    setIsEditing(false);
  };

  return (
    <Fragment>
      <h2>Add Project</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          style={{ flexGrow: 1 }}
          name="title"
          placeholder="Project title"
          value={currentProject.title}
          onChange={handleChange}
        />
        <select
          name="progress"
          value={currentProject.progress}
          onChange={handleChange}
        >
          <option>In progress</option>
          <option>Completed</option>
          <option>Planning</option>
        </select>
      </div>

      <textarea
        name="description"
        placeholder="Project description"
        value={currentProject.description}
        onChange={handleChange}
      />

      <input
        name="tags"
        placeholder="Tags: React, CSS, API"
        value={tempTags}
        onChange={handleTagsChange}
      />

      <div className="modal-buttons">
        <button onClick={deleteItem}>Delete</button>
        <button onClick={modifyProject}>Edit</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    </Fragment>
  );
}
