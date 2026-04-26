import { useState } from "react";
import "./RoadmapItem.css";
import RoadmapDisplayView from "./RoadmapDisplayView";
import RoadmapEditView from "./RoadmapEditView";

export default function RoadmapItem({ data, setOriginData }) {
  const [modifyMode, setModifyMode] = useState(false);

  return !modifyMode ? (
    <RoadmapDisplayView
      data={data}
      setOriginData={setOriginData}
      setModifyMode={setModifyMode}
      modifyMode={modifyMode}
    />
  ) : (
    <RoadmapEditView
      data={data}
      setOriginData={setOriginData}
      setModifyMode={setModifyMode}
      modifyMode={modifyMode}
    />
  );
}
