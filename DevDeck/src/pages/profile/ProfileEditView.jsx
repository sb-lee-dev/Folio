import "./ProfileEditView.css";

export default function ProfileEditView({ profileData, setIsEditing }) {
  return (
    <div className="profile-edit-view">
      <div className="labels">Name</div>
      <input
        className="profile-input"
        name="name"
        defaultValue={profileData.name}
      />
      <div className="labels">Education</div>
      <input
        className="profile-input"
        name="school"
        defaultValue={profileData.school}
      />
      <div className="labels">Bio</div>
      <textarea
        className="bio-input"
        name="bio"
        placeholder="Add a bio"
        defaultValue={profileData.bio}
      />
      <div className="labels">GitHub</div>
      <input
        className="profile-input"
        name="github"
        placeholder="Link to your GitHub..."
        defaultValue={profileData.github}
      />
      <div className="labels">LinkedIn</div>
      <input
        className="profile-input"
        name="linkedin"
        placeholder="Link to your LinkedIn..."
        defaultValue={profileData.linkedin}
      />
      <div className="buttons">
        <button className="save-profile-button">Save</button>
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
