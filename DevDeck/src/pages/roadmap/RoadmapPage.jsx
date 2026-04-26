import "./RoadmapPage.css";
import RoadmapItem from "./RoadmapItem";
import { users } from "../../data";
import { useState } from "react";

export default function RoadmapPage() {
  const [originData, setOriginData] = useState(users[1].roadmap);

  const addRoadmap = () => {
    setOriginData([
      {
        id: Math.random(),
        title: "",
        desc: "",
        progress: "not-started",
        bColor: "darkgray",
        isNew: true,
      },
      ...originData,
    ]);
  };

  return (
    <>
      <title>Roadmap</title>

      <div className="roadmap-title-container">
        <div className="roadmap-title">Learning Roadmap</div>
        <div className="roadmap-title-button" onClick={addRoadmap}>
          + Add topic
        </div>
      </div>
      <div className="roadmap-skills-container">
        {originData.length > 0 ? (
          originData.map((data) => {
            return (
              <RoadmapItem
                key={data.id}
                data={data}
                setOriginData={setOriginData}
              />
            );
          })
        ) : (
          <div className="roadmap-display-empty">There is no roadmap.</div>
        )}
      </div>
    </>
  );
}
