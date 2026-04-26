import "./Roadmap.css";
import RoadmapProgressButton from "./RoadmapProgressButton";

export default function RoadmapPage() {
  return (
    <>
      <title>Roadmap</title>
      <div className="roadmap-title-container">
        <div className="roadmap-title">Learning Roadmap</div>
        <div className="roadmap-title-button">+ Add topic</div>
      </div>
      <div className="roadmap-skills-container">
        <div className="roadmap-skill-container">
          <div className="roadmap-skill-left">
            <div
              className="roadmap-dot"
              style={{ backgroundColor: "greenyellow" }}
            />
            <div>
              <div className="roadmap-skill-title">React hooks</div>
              <div className="roadmap-skill-desc">
                useState, useEffect, custom hooks
              </div>
            </div>
          </div>
          <RoadmapProgressButton />
        </div>
        <div className="roadmap-skill-container">
          <div className="roadmap-skill-left">
            <div
              className="roadmap-dot"
              style={{ backgroundColor: "purple" }}
            />
            <div>
              <div className="roadmap-skill-title">React Router</div>
              <div className="roadmap-skill-desc">
                Client-side routing and navigation
              </div>
            </div>
          </div>
          <RoadmapProgressButton />
        </div>
        <div className="roadmap-skill-container">
          <div className="roadmap-skill-left">
            <div
              className="roadmap-dot"
              style={{ backgroundColor: "darkgray" }}
            />
            <div>
              <div className="roadmap-skill-title">Node.js + Express</div>
              <div className="roadmap-skill-desc">
                Backend APIs - starts next semester
              </div>
            </div>
          </div>
          <RoadmapProgressButton />
        </div>
      </div>
    </>
  );
}
