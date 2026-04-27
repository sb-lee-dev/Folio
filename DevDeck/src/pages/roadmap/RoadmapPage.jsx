import "./RoadmapPage.css";
import RoadmapItem from "./RoadmapItem";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function RoadmapPage() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`${API_BASE_URL}/users/${userId}`);

      setUser(response.data);
    };

    getUser();
  }, [userId]);

  const addRoadmap = () => {
    setUser({
      ...user,
      roadmap: [
        {
          id: Math.random(),
          title: "",
          desc: "",
          progress: "not-started",
          bColor: "darkgray",
          isNew: true,
        },
        ...user.roadmap,
      ],
    });
  };

  return (
    <>
      <title>Roadmap</title>

      <div className="roadmap-title-container">
        <div className="roadmap-title">Learning Roadmap</div>
        <div className="roadmap-title-button" onClick={addRoadmap}>
          + Add topic
        </div>
      </div>
      <div className="roadmap-skills-container">
        {user && user.roadmap.length > 0 ? (
          user.roadmap.map((data) => {
            return <RoadmapItem key={data.id} data={data} setUser={setUser} />;
          })
        ) : (
          <div className="roadmap-display-empty">There is no roadmap.</div>
        )}
      </div>
    </>
  );
}
