import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProfilePage.css";
import ProfileEditView from "./ProfileEditView";
import SkillsBar from "./SkillsBar";

function getInitials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

export default function ProfilePage() {
  const { userId } = useParams();
  const [userData, setUserData] = useState({
    profile: {},
    projects: [],
    skills: [],
    roadmap: [],
  });
  const [isEditing, setIsEditing] = useState(false);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const getUserData = async () => {
      const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
      setUserData(response.data);
    };
    getUserData();
  }, [userId]);

  return (
    <div className="profile-page">
      {isEditing ? (
        <ProfileEditView
          userProfileData={userData.profile}
          setIsEditing={setIsEditing}
          setUserProfileData={setUserData}
        />
      ) : (
        <div className="profile-section">
          <div className="avatar">
            {userData.profile.name
              ? getInitials(userData.profile.name)
              : getInitials("")}
          </div>
          <div className="profile-info">
            <h3>{userData.profile.name}</h3>
            <p>{userData.profile.school}</p>
            <p>{userData.profile.bio}</p>
            <div className="links">
              <a href={userData.profile.github} target="_blank">
                GitHub
              </a>
              <a href={userData.profile.linkedin} target="_blank">
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
      <SkillsBar skillsData={userData.skills} setSkillsData={setUserData}/>
    </div>
  );
}
