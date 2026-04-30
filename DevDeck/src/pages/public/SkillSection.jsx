import './SkillSection.css'

export default function SkillSection({ skillsData }) {
  return (
    <>
    <div className="skills-header">
        <div className="skill-label">Skills</div>
      </div>
    <div className="skills-box">
      <div className="skills-list">
        {skillsData.map((skill) => (
          <div key={skill.id} className="skill-item">
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
        ))}
      </div>
    </div>
    </>
  );
}
