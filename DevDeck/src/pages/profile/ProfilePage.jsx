import { useState } from "react";
import { users } from "../../data";
import "./ProfilePage.css";
import ProfileEditView from "./ProfileEditView";

function getInitials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

export default function ProfilePage() {
  const [profileData, setProfileData] = useState(users[1].profile);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="profile-page">
      {isEditing ? (
        <ProfileEditView
          profileData={profileData}
          setIsEditing={setIsEditing}
          setProfileData={setProfileData}
        />
      ) : (
        <div className="profile-section">
          <div className="avatar">{getInitials(profileData.name)}</div>
          <div className="profile-info">
            <h3>{profileData.name}</h3>
            <p>{profileData.school}</p>
            <p>{profileData.bio}</p>
            <div className="links">
              <a href={profileData.github} target="_blank">
                GitHub
              </a>
              <a href={profileData.linkedin} target="_blank">
                LinkedIn
              </a>
            </div>
          </div>
          <div
            className="edit-profile-button"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </div>
        </div>
      )}
    </div>
  );
}
