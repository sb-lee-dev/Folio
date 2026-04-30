import { Link, useNavigate, useParams } from "react-router";
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

  console.log(user);

  return (
    <>
      <div className="nav-bar">
        <div className="left-section">
          <span className="logo">
            <Link to={`/profile/${userId}`}>Folio</Link>
          </span>
        </div>
        <div className="right-section">
          <Link className="nav-link" to={`/profile/${userId}`}>
            Profile
          </Link>
          <Link className="nav-link" to={`/projects/${userId}`}>
            Projects
          </Link>
          <Link className="nav-link" to={`/roadmap/${userId}`}>
            Roadmap
          </Link>
          <Link className="nav-link" to={`/public/${userId}`}>
            Public
          </Link>
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
