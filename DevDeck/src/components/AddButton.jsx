import "./AddButton.css";

export default function AddButton({ onClick, fontSize, item }) {
  return (
    <div
      className="add-button"
      onClick={() => onClick()}
      style={{ fontSize: fontSize }}
    >
      + Add {item ? item : "Skill"}
    </div>
  );
}
