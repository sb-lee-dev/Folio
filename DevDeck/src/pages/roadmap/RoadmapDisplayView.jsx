import { Pencil, Trash2 } from "lucide-react";
import RoadmapProgressButton from "./RoadmapProgressButton";
import "./RoadmapDisplayView.css";
import axios from "axios";

export default function RoadmapDisplayView({
  data,
  setUser,
  setIsEditing,
  isEditing,
}) {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const deleteItem = () => {
    setUser((prev) => {
      const updated = {
        ...prev,
        roadmap: prev.roadmap.filter((item) => item.id !== data.id),
      };

      axios.put(`${API_BASE_URL}/users/${prev.id}`, updated);

      return updated;
    });
  };

  return (
    <div className="roadmap-skill-container">
      <div className="roadmap-skill-left">
        <div className="roadmap-dot" style={{ backgroundColor: data.bColor }} />
        <div>
          <div className="roadmap-skill-title">{data.title}</div>
          <div className="roadmap-skill-desc">{data.desc}</div>
        </div>
      </div>
      <div className="roadmap-skill-right">
        <RoadmapProgressButton
          statusData={data.progress}
          isEditing={isEditing}
        />
        <button
          className="roadmap-skill-right-button"
          onClick={() => setIsEditing(true)}
        >
          <Pencil size={18} />
        </button>

        <button
          className="roadmap-skill-right-button"
          style={{ border: "1px solid #f0c5c0" }}
          onClick={deleteItem}
        >
          <Trash2 size={18} color="red" />
        </button>
      </div>
    </div>
  );
}
