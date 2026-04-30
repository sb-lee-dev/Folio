import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ProfileSection from "./ProfileSection";
import ProjectSection from "./ProjectSection";
import SkillSection from "./SkillSection";
import RoadmapSection from "./RoadmapSection";

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
    <>
      <ProfileSection profileData={userData.profile} />
      <ProjectSection projectData={userData.projects} />
      <SkillSection skillsData={userData.skills} />
      <RoadmapSection roadmapData={userData.roadmap} />
    </>
  );
}
