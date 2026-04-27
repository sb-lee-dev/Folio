import { useState } from "react";
import "./ProfileEditView.css";

export default function ProfileEditView({
  profileData,
  setIsEditing,
  setProfileData,
}) {
  const [copyProfileData, setCopyProfileData] = useState(profileData);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setCopyProfileData({ ...copyProfileData, [name]: value });
  };

  const saveProfileData = () => {
    setProfileData(copyProfileData);
    setIsEditing(false);
  };

  return (
    <div className="profile-edit-view">
      <div className="labels">Name</div>
      <input
        className="profile-input"
        name="name"
        value={copyProfileData.name}
        onChange={onChangeHandler}
      />
      <div className="labels">Education</div>
      <input
        className="profile-input"
        name="school"
        value={copyProfileData.school}
        onChange={onChangeHandler}
      />
      <div className="labels">Bio</div>
      <textarea
        className="bio-input"
        name="bio"
        placeholder="Add a bio"
        value={copyProfileData.bio}
        onChange={onChangeHandler}
      />
      <div className="labels">GitHub</div>
      <input
        className="profile-input"
        name="github"
        placeholder="Link to your GitHub..."
        value={copyProfileData.github}
        onChange={onChangeHandler}
      />
      <div className="labels">LinkedIn</div>
      <input
        className="profile-input"
        name="linkedin"
        placeholder="Link to your LinkedIn..."
        value={copyProfileData.linkedin}
        onChange={onChangeHandler}
      />
      <div className="buttons">
        <button
          className="save-profile-button"
          onClick={() => saveProfileData()}
        >
          Save
        </button>
        <button
          className="cancel-profile-button"
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
