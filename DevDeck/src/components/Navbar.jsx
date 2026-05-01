import { NavLink, useNavigate, useParams } from "react-router";
import "./Navbar.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NavBar() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
      setUser(response.data);
    };

    getUser();
  }, [userId]);

  return (
    <>
      <div className="nav-bar">
        <div className="left-section">
          <span className="logo">
            <NavLink to={`/profile/${userId}`}>Folio</NavLink>
          </span>
        </div>
        <div className="right-section">
          <NavLink className="nav-link" to={`/profile/${userId}`}>
            Profile
          </NavLink>
          <NavLink className="nav-link" to={`/projects/${userId}`}>
            Projects
          </NavLink>
          <NavLink className="nav-link" to={`/roadmap/${userId}`}>
            Roadmap
          </NavLink>
          <NavLink className="nav-link" to={`/public/${userId}`}>
            Public
          </NavLink>
          {user ? (
            <div className="nav-avatar" onClick={() => navigate("/")}>
              {user.initials}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
