import { Link } from "react-router";
import "./Navbar.css";

export default function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <div className="right-section">
          <span className="logo">
            <Link to="/profile">Folio</Link>
          </span>
        </div>
        <div className="left-section">
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
          <Link className="nav-link" to="/roadmap">
            Roadmap
          </Link>
          <Link className="nav-link" to="/public">
            Public
          </Link>
        </div>
      </div>
    </>
  );
}
