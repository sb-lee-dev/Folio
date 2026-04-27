import "./SkillsBar.css";

export default function SkillsBar({ skillsData }) {
  return (
    <div className="skills-container">
      <div className="skills-header">
        <div className="label">Skills</div>

        <div className="add-skill-button">+ Add Skill</div>
      </div>
      {skillsData.map((skill) => {
        return (
          <div key={skill.name} className="skill-item">
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="percent-bar">
              <div
                className="filled-bar"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
