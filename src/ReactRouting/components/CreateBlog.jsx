import React from "react";
import { UserContext } from "../context/UserContext";

export default function CreateBlog({
  handleCreate,
  actionText = "create blog",
}) {
  const { user } = React.useContext(UserContext);
  const [blog, setBlog] = React.useState({ heading: "", content: "" });
  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };
  const handlePost = () => {
    handleCreate({ ...blog, author: user });
    setBlog({});
  };
  if (user) {
    return (
      <div className="card">
        <div>
          <input
            type="text"
            value={blog.heading || ""}
            onChange={handleChange}
            name="heading"
            className="inputfield"
          />
        </div>
        <div>
          <textarea
            className="inputfield"
            type="text"
            value={blog.content || ""}
            onChange={handleChange}
            name="content"
          />
        </div>
        <button onClick={handlePost}>Post Blog</button>
      </div>
    );
  }
  return null;
}
