import { getInitials } from "../../utils/getInitials";
import "./ProfileSection.css";

export default function ProfileSection({ profileData }) {
  return (
    <div className="profile-container">
      <div className="icon">
        {profileData.name
          ? getInitials(profileData.name)
          : getInitials("")}
      </div>
      <div className="profile-details">
        <h3 style={{ color: "#3c3489" }}>{profileData.name}</h3>
        <p>{profileData.school}</p>
        <p>{profileData.bio}</p>
        <div className="profile-links">
          <a href={profileData.profilgithub} target="_blank">
            GitHub
          </a>
          <a href={profileData.linkedin} target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
