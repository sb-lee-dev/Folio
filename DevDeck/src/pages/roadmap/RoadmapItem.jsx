import { useState } from "react";
import "./RoadmapItem.css";
import RoadmapDisplayView from "./RoadmapDisplayView";
import RoadmapEditView from "./RoadmapEditView";

export default function RoadmapItem({ data, setOriginData }) {
  const [isEditing, setIsEditing] = useState(false);

  return !isEditing && !data.isNew ? (
    <RoadmapDisplayView
      data={data}
      setOriginData={setOriginData}
      setIsEditing={setIsEditing}
      isEditing={isEditing}
    />
  ) : (
    <RoadmapEditView
      data={data}
      setOriginData={setOriginData}
      setIsEditing={setIsEditing}
      isEditing={isEditing}
    />
  );
}
