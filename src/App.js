import React from "react";
import SudokuGame from "./SudokuGame";

import "./styles/App.css";

function App() {
  return (
    <div className="App" style={{ maxWidth: "900px", margin: "0 auto" }}>
      <SudokuGame />
    </div>
  );
}

export default App;
