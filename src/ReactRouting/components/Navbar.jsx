import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Navbar() {
  const { user, setUser } = React.useContext(UserContext);
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <nav style={{ display: "flex" }}>
      <h3>Brand</h3>
      <ul className="nav-links" style={{ display: "inline-flex" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {user ? (
          <li style={{ marginLeft: "1rem" }}>
            <button onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <li style={{ marginLeft: "1rem" }}>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
