import "./SkillsBar.css";
import { Pencil, Trash2 } from "lucide-react";
import axios from "axios";
import { useState } from "react";
import SkillAddEditView from "./SkillAddEditView";

export default function SkillsBar({ skillsData, setSkillsData }) {
  const [editingId, setEditingId] = useState(null);
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
      level: "",
      isNew: true,
      id: Math.random(),
    };
    setSkillsData((prev) => ({
      ...prev,
      skills: [...prev.skills, newSkill],
    }));
  };

  const saveSkill = (copySkill, nameRef, levelRef) => {
    if (!nameRef.current.reportValidity()) return;
    if (!levelRef.current.reportValidity()) return;
    const newSkill = { ...copySkill, isNew: false };
    setSkillsData((prev) => {
      const updated = {
        ...prev,
        skills: prev.skills.map((skill) =>
          skill.id === copySkill.id ? newSkill : skill,
        ),
      };
      axios.put(`${API_BASE_URL}/users/${prev.id}`, updated);
      return updated;
    });
    setEditingId(null);
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
          skill.isNew || editingId === skill.id ? (
            <SkillAddEditView
              key={skill.id}
              skill={skill}
              saveSkill={saveSkill}
              cancelNewSkill={
                skill.isNew ? cancelNewSkill : () => setEditingId(null)
              }
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
                  <Pencil size={18} onClick={() => setEditingId(skill.id)} />
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
