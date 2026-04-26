import RoadmapProgressButton from "./RoadmapProgressButton";
import { Trash2, Check, X } from "lucide-react";
import "./RoadmapEditView.css";
import { useState } from "react";

export default function RoadmapEditView({
  data,
  setOriginData,
  setModifyMode,
  modifyMode,
}) {
  const [copy, setCopy] = useState(data);

  const sendData = () => {
    setOriginData((prev) =>
      prev.map((origin) =>
        origin.id === copy.id ? { ...copy, isNew: false } : origin,
      ),
    );

    setModifyMode(false);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setCopy({ ...copy, [name]: value });
  };

  const deleteItem = () => {
    setOriginData((prev) => prev.filter((origin) => origin.id !== data.id));
  };

  console.log(copy);

  return !copy.isNew ? (
    <div className="roadmap-skill-container">
      <div className="roadmap-skill-left">
        <div className="roadmap-dot" style={{ backgroundColor: copy.bColor }} />
        <div>
          <div className="roadmap-skill-title">
            <input name="title" value={copy.title} onChange={onChangeHandler} />
          </div>
          <div className="roadmap-skill-desc">
            <input name="desc" value={copy.desc} onChange={onChangeHandler} />
          </div>
        </div>
      </div>
      <div className="roadmap-skill-right">
        <RoadmapProgressButton
          statusData={copy.progress}
          modifyMode={modifyMode}
          onChangeHandler={onChangeHandler}
        />

        <button className="roadmap-skill-right-button" onClick={sendData}>
          <Check size={18} />
        </button>

        <button
          className="roadmap-skill-right-button"
          onClick={() => setModifyMode(false)}
        >
          <X size={18} />
        </button>

        <button
          className="roadmap-skill-right-button"
          style={{ border: "1px solid #f0c5c0" }}
          onClick={deleteItem}
        >
          <Trash2 size={18} color="red" />
        </button>
      </div>
    </div>
  ) : (
    <div className="roadmap-skill-container">
      <div className="roadmap-skill-left">
        <div className="roadmap-dot" style={{ backgroundColor: copy.bColor }} />
        <div>
          <div className="roadmap-skill-title">
            <input name="title" value={copy.title} onChange={onChangeHandler} />
          </div>
          <div className="roadmap-skill-desc">
            <input name="desc" value={copy.desc} onChange={onChangeHandler} />
          </div>
        </div>
      </div>
      <div className="roadmap-skill-right">
        <RoadmapProgressButton
          statusData={copy.progress}
          modifyMode={modifyMode}
          isNew={copy.isNew}
          onChangeHandler={onChangeHandler}
        />

        <button className="roadmap-skill-right-button" onClick={sendData}>
          <Check size={18} />
        </button>

        <button className="roadmap-skill-right-button" onClick={deleteItem}>
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
