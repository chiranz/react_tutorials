import React from "react";
import { actionTypes, BlogContext } from "../context/BlogContext";
import EditModal from "./EditModal";
import { UserContext } from "../context/UserContext";

export default function Blog({ heading, content, author, id }) {
  const { user } = React.useContext(UserContext);
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
        {user === author && (
          <React.Fragment>
            <button
              onClick={() =>
                dispatch({ type: actionTypes.delete, payload: id })
              }
            >
              Delete
            </button>

            <EditModal blogId={id} />
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
