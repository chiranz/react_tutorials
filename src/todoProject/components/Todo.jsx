import React, { useEffect } from "react";
import { actionTypes } from "../Todos";

export default function Todo(props) {
  const { id, todo, completed, dispatch } = props;

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
        onChange={() => dispatch({ type: actionTypes.TOGGLE, payload: id })}
      />

      <li
        style={{
          textDecorationLine: `${completed ? "line-through" : ""}`,
        }}
      >
        Id: {id} {todo}
      </li>
      <Button
        bgColor="red"
        onClick={() => dispatch({ payload: id, type: actionTypes.DELETE })}
      >
        Delete
      </Button>
      <Button
        bgColor="green"
        onClick={() => dispatch({ type: actionTypes.EDIT, payload: id })}
      >
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
