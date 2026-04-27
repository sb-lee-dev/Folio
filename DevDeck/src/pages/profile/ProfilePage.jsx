import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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
  const { userId } = useParams();
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const getUserProfile = async () => {
      const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
      setUserData(response.data.profile);
    };
    getUserProfile();
  }, [userId]);

  return (
    <div className="profile-page">
      {isEditing ? (
        <ProfileEditView
          userData={userData}
          setIsEditing={setIsEditing}
          setUserData={setUserData}
        />
      ) : (
        <div className="profile-section">
          <div className="avatar">
            {userData.name ? getInitials(userData.name) : getInitials("")}
          </div>
          <div className="profile-info">
            <h3>{userData.name}</h3>
            <p>{userData.school}</p>
            <p>{userData.bio}</p>
            <div className="links">
              <a href={userData.github} target="_blank">
                GitHub
              </a>
              <a href={userData.linkedin} target="_blank">
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
