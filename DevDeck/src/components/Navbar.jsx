import { Link, useParams } from "react-router";
import "./Navbar.css";

export default function NavBar() {
  const { userId } = useParams();

  return (
    <>
      <div className="nav-bar">
        <div className="right-section">
          <span className="logo">
            <Link to="/profile">Folio</Link>
          </span>
        </div>
        <div className="left-section">
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
        </div>
      </div>
    </>
  );
}
