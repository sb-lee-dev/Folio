// SelectUser.jsx
import { Link } from "react-router-dom";
import "./UserSelectorPage.css";

const users = [
  {
    id: 1,
    name: "Shu ma wa",
    initials: "SM",
  },
  {
    id: 2,
    name: "Seongbae Lee",
    initials: "SL",
  },
];

export default function UserSelector() {
  return (
    <div className="select-page">
      <span className="select-logo">Folio</span>

      <div className="select-card">
        <h2>Choose your profile</h2>
        <p>Select a user to view their portfolio.</p>

        <div className="user-list">
          {users.map((user) => (
            <Link
              to={`/roadmap/${user.id}`}
              className="user-card"
              key={user.id}
            >
              <div className="avatar">{user.initials}</div>

              <div>
                <h3>{user.name}</h3>
                <p>{user.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
