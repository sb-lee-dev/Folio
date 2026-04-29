import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getInitials } from "../../utils/getInitials";
import axios from "axios";
import "./PublicPage.css";

export default function PublicPage() {
  const { userId } = useParams();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [userData, setUserData] = useState({
    profile: {},
    projects: [],
    skills: [],
    roadmap: [],
  });

  useEffect(() => {
    const getUserData = async () => {
      const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
      setUserData(response.data);
    };
    getUserData();
  }, [userId]);

  return (
    <div className="profile-container">
      <div className="icon">
        {userData.profile.name
          ? getInitials(userData.profile.name)
          : getInitials("")}
      </div>
      <div className="profile-details">
        <h3 style={{ color: '#3c3489' }}>{userData.profile.name}</h3>
        <p>{userData.profile.school}</p>
        <p>{userData.profile.bio}</p>
        <div className="profile-links">
          <a href={userData.profile.github} target="_blank">
            GitHub
          </a>
          <a href={userData.profile.linkedin} target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
