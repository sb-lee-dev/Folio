import "./RoadmapProgressButton.css";

export default function RoadmapProgressButton({
  statusData,
  modifyMode,
  onChangeHandler,
}) {
  return (
    <div>
      {!modifyMode ? (
        <button
          className={`status-select status-select-${statusData} status-select-inactivate`}
        >
          {statusData}
        </button>
      ) : (
        <select
          className={`status-select status-select-${statusData}`}
          name="status"
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
