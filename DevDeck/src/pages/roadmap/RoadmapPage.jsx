import "./RoadmapPage.css";
import RoadmapItem from "./RoadmapItem";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { sortRoadmap } from "../../utils/sortRoadmap";

export default function RoadmapPage() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const colors = [
    "#A3A3A3",
    "#8EA7E9",
    "#A8D5BA",
    "#F6C177",
    "#E5A4CB",
    "#F4A261",
    "#2A9D8F",
    "#E76F51",
    "#9B5DE5",
    "#00BBF9",
    "#00F5D4",
    "#F15BB5",
    "#FEE440",
    "#90BE6D",
    "#577590",
  ];

  const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
      setUser({
        ...response.data,
        roadmap: sortRoadmap(response.data.roadmap),
      });
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
          bColor: randomColor(),
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
