import React from "react";
import { UserContext } from "../context/UserContext";

export default function Login() {
  const { setUser, user } = React.useContext(UserContext);
  const [name, setName] = React.useState("");

  const handleLogin = () => {
    if (name.length < 3) {
      return;
    }
    setUser(name);
    setName("");
  };
  return (
    <div>
      <h1>This is a login page! {user}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}> Login</button>
    </div>
  );
}
