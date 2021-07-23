import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex" }}>
      <h3>Brand</h3>
      <ul className="nav-links" style={{ display: "inline-flex" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li style={{ marginLeft: "1rem" }}>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
