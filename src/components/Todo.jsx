import React from "react";

export default function Todo(props) {
  const { id, todo, completed, onChange, handleDelete, handleEdit } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "1rem",
      }}
      key={id}
    >
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
        Id: {id} {todo}
      </li>
      <Button bgColor="red" onClick={() => handleDelete(id)}>
        Delete
      </Button>
      <Button bgColor="green" onClick={() => handleEdit(id)}>
        Edit
      </Button>
    </div>
  );
}

export const Button = ({ children, onClick, bgColor }) => (
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
    {children}
  </button>
);
