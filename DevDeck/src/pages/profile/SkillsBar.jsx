import "./SkillsBar.css";
import { Pencil, Trash2} from "lucide-react";
import axios from "axios";
import AddSkillView from "./AddSkillView"

export default function SkillsBar({ skillsData, setSkillsData }) {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const deleteSkill = (skillId) => {
    setSkillsData((prev) => {
      const updated = {
        ...prev,
        skills: prev.skills.filter((skill) => skill.id !== skillId),
      };
      axios.put(`${API_BASE_URL}/users/${prev.id}`, updated);
      return updated;
    });
  };

  const addNewSkill = () => {
    const newSkill = {
      name: "",
      level: "0",
      isNew: true,
      id: Math.random(),
    };
    setSkillsData((prev) => ({
      ...prev,
      skills: [...prev.skills, newSkill],
    }));
  };

  const saveSkill = (skillId, nameRef, levelRef) => {
    if (!nameRef.current.reportValidity()) return;
    if (!levelRef.current.reportValidity()) return;
    const newSkill = {
      name: nameRef.current.value,
      level: levelRef.current.value,
      isNew: false,
      id: skillId,
    };
    setSkillsData((prev) => {
      const updated = {
        ...prev,
        skills: prev.skills.map((skill) => (skill.id === skillId ? newSkill : skill)),
      };
      axios.put(`${API_BASE_URL}/users/${prev.id}`, updated);
      return updated;
    });
  };

  const cancelNewSkill = (skillId) => {
    setSkillsData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill.id !== skillId),
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
            <AddSkillView
    key={skill.id}
    skill={skill}
    saveSkill={saveSkill}
    cancelNewSkill={cancelNewSkill}
  />
          ) : (
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
              <div className="skill-buttons">
                <button className="skill-right-button">
                  <Pencil size={18} />
                </button>
                <button
                  className="skill-right-button"
                  style={{ border: "1px solid #f0c5c0" }}
                  onClick={() => deleteSkill(skill.id)}
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
