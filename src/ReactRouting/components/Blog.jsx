import React from "react";
import { actionTypes, BlogContext } from "../context/BlogContext";

export default function Blog({ heading, content, author, id }) {
  const { dispatch } = React.useContext(BlogContext);
  return (
    <div className="card">
      <h1>
        {id} {heading}
        <small
          style={{
            fontSize: "16px",
            color: "grey",
            marginLeft: "10px",
            fontWeight: "normal",
          }}
        >
          By {author}
        </small>
      </h1>
      <p>{content}</p>
      <div>
        <button
          onClick={() => dispatch({ type: actionTypes.delete, payload: id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
