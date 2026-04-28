import axios from "axios";
import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetailModal({
  user,
  setUser,
  currentProject,
  setCurrentProject,
  setIsDetailModalOpen,
}) {
  const { userId } = useParams();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [isEditing, setIsEditing] = useState(false);
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

  const closeModal = () => {
    setIsDetailModalOpen(false);
  };

  return (
    <div className="modal-bg">
      <div className="modal-box">
        {isEditing && (
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
              <button onClick={modifyProject}>Edit</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </Fragment>
        )}

        {!isEditing && (
          <Fragment>
            <h2>Project Detail</h2>

            <div className="modal-project-header">
              <h3 className="modal-project-title">{currentProject.title}</h3>
              <span
                className="project-header-progress"
                style={{ alignSelf: "flex-start" }}
              >
                {currentProject.progress}
              </span>
            </div>

            <p className="modal-desc">{currentProject.description}</p>

            <div className="project-tags project-tags-underline">
              {currentProject &&
                currentProject.tags.map((tag) => {
                  return <div className="project-tag">{tag}</div>;
                })}
            </div>

            <div className="modal-buttons">
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={closeModal}>Close</button>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}
