export default function ProjectDetailModal({
  currentProject,
  setCurrentProject,
  setIsDetailModalOpen,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setCurrentProject({
      ...currentProject,
      [name]: value,
    });
  };

  const closeModal = () => {
    setIsDetailModalOpen(false);
  };

  return (
    <div className="modal-bg">
      <div className="modal-box">
        {/* <h2>Add Project</h2>

        <input
          name="title"
          placeholder="Project title"
          value={currentProject.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Project description"
          value={currentProject.description}
          onChange={handleChange}
        />

        <input
          name="tags"
          placeholder="Tags: React, CSS, API"
          value={currentProject.tags}
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
        </select> */}
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
          {currentProject.tags.map((tag) => {
            return <div className="project-tag">{tag}</div>;
          })}
        </div>

        <div className="modal-buttons">
          <button onClick={closeModal}>Cancel</button>
          <button onClick={() => {}}>Save</button>
        </div>
      </div>
    </div>
  );
}
