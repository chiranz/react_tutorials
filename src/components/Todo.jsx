import React from "react";

export default function Todo(props) {
  const { id, todo, completed, onChange } = props;
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }} key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onChange(id)}
      />

      <li
        style={{
          textDecorationLine: `${completed ? "line-through" : ""}`,
        }}
      >
        {todo}
      </li>
    </div>
  );
}

export const Button = ({ actionText, onClick, bgColor }) => (
  <button
    style={{
      marginRight: "1rem",
      backgroundColor: bgColor,
      padding: "10px 25px",
      border: "none",
      borderRadius: "10%",
      cursor: "pointer",
    }}
    onClick={onClick}
  >
    {actionText}
  </button>
);
