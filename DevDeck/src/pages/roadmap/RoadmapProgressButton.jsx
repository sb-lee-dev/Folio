import { useState } from "react";
import "./RoadmapProgressButton.css";

export default function RoadmapProgressButton() {
  const [status, setStatus] = useState("not-started");

  return (
    <div>
      <select
        className={`status-select status-select-${status}`}
        value={status}
        onChange={(e) => setStatus(e.target.value)}
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
    </div>
  );
}
