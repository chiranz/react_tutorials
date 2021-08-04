import React from "react";
import { UserContext } from "../context/UserContext";

export default function Home() {
  const { user } = React.useContext(UserContext);
  return (
    <div>
      <h1>This is a homepage</h1>

      <p>User logged in as {user}</p>
    </div>
  );
}
