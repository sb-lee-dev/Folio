import "./RoadmapSection.css";
import RoadmapProgressButton from "../roadmap/RoadmapProgressButton";

export default function RoadmapSection({ roadmapData }) {
  return (
    <>
      <div className="roadmap-header">
        <div className="roadmap-label">Learning Roadmap</div>
      </div>
      <div className="roadmap-skills-container">
        {roadmapData.map((item) => {
          return (
            <div className="roadmap-skill-container">
              <div className="roadmap-skill-left">
                <div
                  className="roadmap-dot"
                  style={{ backgroundColor: item.bColor }}
                />
                <div>
                  <div className="roadmap-skill-name">{item.title}</div>
                  <div className="roadmap-skill-des">{item.desc}</div>
                </div>
              </div>
              <RoadmapProgressButton
                statusData={item.progress}
                isEditing={false}
                isNew={false}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
