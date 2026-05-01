import { Fragment } from "react";
import "./ProjectsModal.css";
import "./ProjectDisplayModal.css";

export default function ProjectDisplayModal({
  currentProject,
  setIsEditing,
  closeModal,
  deleteItem,
}) {
  let progressColors = { backgroundColor: "", color: "" };
  if (currentProject.progress === "Completed") {
    progressColors.backgroundColor = "#eaf6df";
    progressColors.color = "#285f13";
  }
  if (currentProject.progress === "In progress") {
    progressColors.backgroundColor = "#f9ead4";
    progressColors.color = "#6b3d00";
  }
  if (currentProject.progress === "Planning") {
    progressColors.backgroundColor = "#eeeeeb";
    progressColors.color = "#444";
  }

  return (
    <Fragment>
      <h2>Project Detail</h2>

      <div className="modal-project-header">
        <h3 className="modal-project-title">{currentProject.title}</h3>
        <span
          className="project-header-progress"
          style={{
            alignSelf: "flex-start",
            backgroundColor: progressColors.backgroundColor,
            color: progressColors.color,
          }}
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
        <button className="modal-delete-button" onClick={deleteItem}>
          Delete
        </button>
        <button
          className="modal-edit-button"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
        <button className="modal-cancel-button" onClick={closeModal}>
          Close
        </button>
      </div>
    </Fragment>
  );
}
