// SelectUser.jsx
import { Link } from "react-router-dom";
import "./UserSelectorPage.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserSelector() {
  const [users, setUsers] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`${API_BASE_URL}/users`);
      setUsers(response.data);
    };

    getUser();
  }, []);

  return (
    <div className="select-page">
      <span className="select-logo">Folio</span>

      <div className="select-card">
        <h2>Choose your profile</h2>
        <p>Select a user to view their portfolio.</p>

        <div className="user-list">
          {users &&
            users.map((user) => (
              <Link
                to={`/profile/${user.id}`}
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
