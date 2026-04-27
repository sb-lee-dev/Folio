import "./RoadmapProgressButton.css";

export default function RoadmapProgressButton({
  statusData,
  isEditing,
  onChangeHandler,
  isNew,
}) {
  return (
    <div>
      {!isEditing && !isNew ? (
        <button
          className={`status-select status-select-${statusData} status-select-inactivate`}
        >
          {(statusData[0].toUpperCase() + statusData.slice(1))
            .split("-")
            .join(" ")}
        </button>
      ) : (
        <select
          className={`status-select status-select-${statusData}`}
          name="progress"
          value={statusData}
          onChange={onChangeHandler}
        >
          <option className="status-select-done" value="done">
            Done
          </option>
          <option className="status-select-learning" value="learning">
            Learning
          </option>
          <option className="status-select-not-started" value="not-started">
            Not started
          </option>
        </select>
      )}
    </div>
  );
}
