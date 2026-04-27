import { useState } from "react";
import "./RoadmapItem.css";
import RoadmapDisplayView from "./RoadmapDisplayView";
import RoadmapEditView from "./RoadmapEditView";

export default function RoadmapItem({ data, setUser }) {
  const [isEditing, setIsEditing] = useState(false);

  return !isEditing && !data.isNew ? (
    <RoadmapDisplayView
      data={data}
      setUser={setUser}
      setIsEditing={setIsEditing}
      isEditing={isEditing}
    />
  ) : (
    <RoadmapEditView
      data={data}
      setUser={setUser}
      setIsEditing={setIsEditing}
      isEditing={isEditing}
    />
  );
}
