import React from "react";

export default function Blog({ heading, content }) {
  return (
    <div className="card">
      <h1>{heading}</h1>
      <p>{content}</p>
    </div>
  );
}
