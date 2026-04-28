import { useState } from "react";
import ProjectEditModal from "./ProjectEditModal";
import ProjectDisplayModal from "./ProjectDisplayModal";
import "./ProjectsModal.css";

export default function ProjectDetailModal({
  user,
  setUser,
  currentProject,
  setCurrentProject,
  setIsDetailModalOpen,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const closeModal = () => {
    setIsDetailModalOpen(false);
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
          />
        )}

        {!isEditing && (
          <ProjectDisplayModal
            closeModal={closeModal}
            currentProject={currentProject}
            setIsEditing={setIsEditing}
          />
        )}
      </div>
    </div>
  );
}
