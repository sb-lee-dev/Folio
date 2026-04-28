import { Fragment } from "react";
import "./ProjectsModal.css";
import "./ProjectDisplayModal.css";

export default function ProjectDisplayModal({
  currentProject,
  setIsEditing,
  closeModal,
  deleteItem,
}) {
  return (
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
          currentProject.tags.map((tag, index) => {
            return (
              <div key={index} className="project-tag">
                {tag}
              </div>
            );
          })}
      </div>

      <div className="modal-buttons">
        <button onClick={deleteItem}>Delete</button>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={closeModal}>Close</button>
      </div>
    </Fragment>
  );
}
