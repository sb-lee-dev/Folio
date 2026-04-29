import axios from "axios";
import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectsModal.css";
import "./ProjectEditModal.css";

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
  const [tagsInput, setTagsInput] = useState(
    Array.isArray(currentProject.tags)
      ? currentProject.tags.join(", ")
      : currentProject.tags,
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCurrentProject({
      ...currentProject,
      [name]: value,
    });
  };

  const modifyProject = async () => {
    const updatedUser = {
      ...user,
      projects: user.projects.map((project) =>
        project.id === currentProject.id
          ? {
              ...currentProject,
              tags: tagsInput
                .split(",")
                .map((tag) => tag.trim())
                .filter((tag) => tag !== ""),
            }
          : project,
      ),
    };

    await axios.put(`${API_BASE_URL}/users/${userId}`, updatedUser);
    setUser(updatedUser);
    setCurrentProject({
      ...currentProject,
      tags: tagsInput
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== ""),
    });
    setIsEditing(false);
    alert("Project updated successfully.");
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
        value={tagsInput}
        onChange={(e) => setTagsInput(e.target.value)}
      />

      <div className="modal-buttons">
        <button className="modal-delete-button" onClick={deleteItem}>
          Delete
        </button>
        <button className="modal-edit-button" onClick={modifyProject}>
          Save
        </button>
        <button
          className="modal-cancel-button"
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
      </div>
    </Fragment>
  );
}
