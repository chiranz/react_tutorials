import React, { useEffect } from "react";
import { actionTypes } from "../Todos";

export default function MessageBox({ message, dispatch, type = "success" }) {
  const color = type === "success" ? "green" : type === "fail" ? "red" : "";
  useEffect(() => {
    if (message) {
      setTimeout(() => {
        dispatch({ type: actionTypes.CLEAR_INFO });
      }, 5000);
    }
  }, [message]);

  if (message) {
    return (
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "4px",
          color: color,
          width: "300px",
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
          padding: "1rem 3rem",
        }}
      >
        {message}
      </div>
    );
  }
  return null;
}
