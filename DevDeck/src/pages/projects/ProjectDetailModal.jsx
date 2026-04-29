import { useState } from "react";
import ProjectEditModal from "./ProjectEditModal";
import ProjectDisplayModal from "./ProjectDisplayModal";
import "./ProjectsModal.css";
import axios from "axios";

export default function ProjectDetailModal({
  user,
  setUser,
  currentProject,
  setCurrentProject,
  setIsDetailModalOpen,
}) {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [isEditing, setIsEditing] = useState(false);

  const closeModal = () => {
    setIsDetailModalOpen(false);
  };

  const deleteItem = () => {
    setUser((prev) => {
      const updated = {
        ...prev,
        projects: prev.projects.filter((item) => item.id !== currentProject.id),
      };

      axios.put(`${API_BASE_URL}/users/${prev.id}`, updated);

      return updated;
    });
    setIsDetailModalOpen(false);
    alert("Project deleted successfully.");
  };

  return (
    <div className="modal-bg">
      <div className="modal-box">
        {isEditing && (
          <ProjectEditModal
            user={user}
            setUser={setUser}
            currentProject={currentProject}
            setCurrentProject={setCurrentProject}
            setIsEditing={setIsEditing}
            deleteItem={deleteItem}
          />
        )}

        {!isEditing && (
          <ProjectDisplayModal
            closeModal={closeModal}
            currentProject={currentProject}
            setIsEditing={setIsEditing}
            deleteItem={deleteItem}
          />
        )}
      </div>
    </div>
  );
}
