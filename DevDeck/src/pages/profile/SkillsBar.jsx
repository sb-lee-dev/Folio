import "./SkillsBar.css";
import { Pencil, Trash2, Check, X } from "lucide-react";
import { useRef } from "react";
import axios from "axios";

export default function SkillsBar({ skillsData, setSkillsData }) {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const nameRef = useRef(null);
  const levelRef = useRef(null);

  const deleteSkill = (skillName) => {
    setSkillsData((prev) => {
      const updated = {
        ...prev,
        skills: prev.skills.filter((skill) => skill.name !== skillName),
      };
      axios.put(`${API_BASE_URL}/users/${prev.id}`, updated);
      return updated;
    });
  };

  const addNewSkill = () => {
    const newSkill = {
      name: "",
      level: 0,
      isNew: true,
    };
    setSkillsData((prev) => ({
      ...prev,
      skills: [...prev.skills, newSkill],
    }));
  };

  const saveSkill = () => {
    const newSkill = {
      name: nameRef.current.value,
      level: levelRef.current.value,
      isNew: false,
    };
    setSkillsData((prev) => {
      const updated = {
        ...prev,
        skills: prev.skills.map((skill) => (skill.isNew ? newSkill : skill)),
      };
      axios.put(`${API_BASE_URL}/users/${prev.id}`, updated);
      return updated;
    });
  };

  const cancelNewSkill = () => {
    setSkillsData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => !skill.isNew),
    }));
  };

  return (
    <div className="skills-container">
      <div className="skills-header">
        <div className="label">Skills</div>

        <div className="add-skill-button" onClick={() => addNewSkill()}>
          + Add Skill
        </div>
      </div>
      <div className="skills-list">
        {skillsData.map((skill) =>
          skill.isNew ? (
            <div key={skill.name} className="skill-item">
              <div className="skill-inputs">
                <input
                  className="skill-name-input"
                  placeholder="Skill name"
                  ref={nameRef}
                />
                <input
                  className="level-input"
                  placeholder="Level"
                  ref={levelRef}
                />
              </div>
              <div className="skill-buttons">
                <button
                  className="skill-right-button"
                  onClick={() => saveSkill(skill)}
                >
                  <Check size={18} />
                </button>

                <button
                  className="skill-right-button"
                  onClick={() => cancelNewSkill()}
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          ) : (
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
              <div className="skill-buttons">
                <button className="skill-right-button">
                  <Pencil size={18} />
                </button>
                <button
                  className="skill-right-button"
                  style={{ border: "1px solid #f0c5c0" }}
                  onClick={() => deleteSkill(skill.name)}
                >
                  <Trash2 size={18} color="red" />
                </button>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
