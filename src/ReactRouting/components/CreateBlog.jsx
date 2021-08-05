import React from "react";

export default function CreateBlog({ handleCreate }) {
  const [blog, setBlog] = React.useState({ heading: "", content: "" });
  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };
  const handlePost = () => {
    console.log("Posting....");
    handleCreate(blog);
    setBlog({});
  };
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
