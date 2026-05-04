import "./ProjectSection.css";
import { getProgressColors } from "../../utils/getProgressColors";

export default function ProjectSection({ projectData }) {
  return (
    <>
      <div className="project-headline">Projects</div>
      <div className="project-list">
        {projectData.map((project, index) => {
          return (
            <div key={index} className="project-item">
              <div className="project-header">
                <div className="project-title">{project.title}</div>
                <div
                  className="project-progress"
                  style={{
                    alignSelf: "flex-start",
                    ...getProgressColors(project.progress),
                  }}
                >
                  {project.progress}
                </div>
              </div>

              <div className="project-labels">
                {project.tags.map((tag, index) => {
                  return (
                    <div key={index} className="project-label">
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
