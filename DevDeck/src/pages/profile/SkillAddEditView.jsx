import { useRef, useState } from "react";
import { Check, X } from "lucide-react";
import "./SkillAddEditView.css";

export default function SkillAddEditView({ skill, saveSkill, cancelNewSkill }) {
  const nameRef = useRef(null);
  const levelRef = useRef(null);
  const [copySkill, setCopySkill] = useState(skill);

  const onChangeHandler = (e) => {
    const {name, value} = e.target;
    setCopySkill({...copySkill, [name]: value})
  }

  return (
    <div className="skill-item">
      <div className="skill-inputs">
        <input
          name="name"
          className="skill-name-input"
          required
          ref={nameRef}
          placeholder="Skill name"
          value={copySkill.name}
          onChange={onChangeHandler}
        />
        <input
          name="level"
          className="level-input"
          required
          ref={levelRef}
          placeholder="Level"
          value={copySkill.level}
          onChange={onChangeHandler}
        />
      </div>
      <div className="skill-buttons">
        <button
          className="skill-right-button"
          onClick={() => saveSkill(copySkill, nameRef, levelRef)}
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
