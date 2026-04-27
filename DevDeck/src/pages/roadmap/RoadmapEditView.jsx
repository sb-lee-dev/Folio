import RoadmapProgressButton from "./RoadmapProgressButton";
import { Trash2, Check, X } from "lucide-react";
import "./RoadmapEditView.css";
import { useRef, useState } from "react";
import axios from "axios";
import { sortRoadmap } from "../../utils/sortRoadmap";

export default function RoadmapEditView({
  data,
  setUser,
  setIsEditing,
  isEditing,
}) {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [copy, setCopy] = useState(data);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  const addItem = () => {
    if (!titleRef.current.reportValidity()) return;
    if (!descRef.current.reportValidity()) return;

    setUser((prev) => {
      const newRoadmap = prev.roadmap.map((origin) =>
        origin.id === copy.id ? { ...copy, isNew: false } : origin,
      );
      const updated = {
        ...prev,
        roadmap: sortRoadmap(newRoadmap),
      };
      axios.put(`${API_BASE_URL}/users/${prev.id}`, updated);

      return updated;
    });

    setIsEditing(false);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setCopy({ ...copy, [name]: value });
  };

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

  return !copy.isNew ? (
    <div className="roadmap-skill-container">
      <div className="roadmap-skill-left">
        <div className="roadmap-dot" style={{ backgroundColor: copy.bColor }} />
        <div>
          <div className="roadmap-skill-title">
            <input
              name="title"
              ref={titleRef}
              required
              value={copy.title}
              onChange={onChangeHandler}
            />
          </div>
          <div className="roadmap-skill-desc">
            <input
              name="desc"
              ref={descRef}
              required
              value={copy.desc}
              onChange={onChangeHandler}
            />
          </div>
        </div>
      </div>
      <div className="roadmap-skill-right">
        <RoadmapProgressButton
          statusData={copy.progress}
          isEditing={isEditing}
          onChangeHandler={onChangeHandler}
        />

        <button className="roadmap-skill-right-button" onClick={addItem}>
          <Check size={18} />
        </button>

        <button
          className="roadmap-skill-right-button"
          onClick={() => setIsEditing(false)}
        >
          <X size={18} />
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
  ) : (
    <div className="roadmap-skill-container">
      <div className="roadmap-skill-left">
        <div className="roadmap-dot" style={{ backgroundColor: copy.bColor }} />
        <div>
          <div className="roadmap-skill-title">
            <input
              name="title"
              ref={titleRef}
              required
              placeholder="Title"
              value={copy.title}
              onChange={onChangeHandler}
            />
          </div>
          <div className="roadmap-skill-desc">
            <input
              name="desc"
              ref={descRef}
              required
              placeholder="Description"
              value={copy.desc}
              onChange={onChangeHandler}
            />
          </div>
        </div>
      </div>
      <div className="roadmap-skill-right">
        <RoadmapProgressButton
          statusData={copy.progress}
          isEditing={isEditing}
          isNew={copy.isNew}
          onChangeHandler={onChangeHandler}
        />

        <button className="roadmap-skill-right-button" onClick={addItem}>
          <Check size={18} />
        </button>

        <button className="roadmap-skill-right-button" onClick={deleteItem}>
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
