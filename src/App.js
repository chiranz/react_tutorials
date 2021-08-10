import React from "react";
import ReactRouting from "./ReactRouting";
import { UserProvider } from "./ReactRouting/context/UserContext";

import "./styles/App.css";

function App() {
  return (
    <div className="App" style={{ maxWidth: "900px", margin: "0 auto" }}>
      <UserProvider>
        <ReactRouting />
      </UserProvider>
    </div>
  );
}

export default App;
