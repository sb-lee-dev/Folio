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
  const [copyProject, setCopyProject] = useState(currentProject);
  const { userId } = useParams();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [tagsInput, setTagsInput] = useState(
    Array.isArray(copyProject.tags)
      ? copyProject.tags.join(", ")
      : copyProject.tags,
  );

  const formattedTags = tagsInput
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag !== "");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCopyProject({
      ...copyProject,
      [name]: value,
    });
  };

  const modifyProject = async () => {
    if (!copyProject.title.trim() || !copyProject.description.trim()) {
      alert("Project title and descriptions are required.");
      return;
    }

    const updatedUser = {
      ...user,
      projects: user.projects.map((project) =>
        project.id === copyProject.id
          ? {
              ...copyProject,
              tags: formattedTags,
            }
          : project,
      ),
    };

    await axios.put(`${API_BASE_URL}/users/${userId}`, updatedUser);
    setUser(updatedUser);
    setCurrentProject({
      ...copyProject,
      tags: formattedTags,
    });
    setIsEditing(false);
    alert("Project updated successfully.");
  };

  return (
    <Fragment>
      <h2>Edit Project</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          style={{ flexGrow: 1 }}
          name="title"
          placeholder="Project title"
          value={copyProject.title}
          onChange={handleChange}
        />
        <select
          name="progress"
          value={copyProject.progress}
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
        value={copyProject.description}
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
