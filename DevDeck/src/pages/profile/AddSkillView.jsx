import { useRef } from "react";
import { Check, X } from "lucide-react";
import "./AddSkillView.css";

export default function AddSkillView({ skill, saveSkill, cancelNewSkill }) {
  const nameRef = useRef(null);
  const levelRef = useRef(null);

  return (
    <div className="skill-item">
      <div className="skill-inputs">
        <input
          name="name"
          className="skill-name-input"
          required
          ref={nameRef}
          placeholder="Skill name"
        />
        <input
          name="level"
          className="level-input"
          required
          ref={levelRef}
          placeholder="Level"
        />
      </div>
      <div className="skill-buttons">
        <button
          className="skill-right-button"
          onClick={() => saveSkill(skill.id, nameRef, levelRef)}
        >
          <Check size={18} />
        </button>
        <button
          className="skill-right-button"
          onClick={() => cancelNewSkill(skill.id)}
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
