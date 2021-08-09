import React from "react";
import Blog from "./Blog";
import { UserContext } from "../context/UserContext";
import CreateBlog from "./CreateBlog";
import { actionTypes, BlogContext } from "../context/BlogContext";

export default function Home() {
  const { user } = React.useContext(UserContext);
  const { blogs, dispatch } = React.useContext(BlogContext);
  const handleCreate = (blog) => {
    dispatch({ type: actionTypes.add, payload: blog });
  };
  return (
    <div>
      <h1>This is a homepage</h1>

      <p>User logged in as {user}</p>

      <CreateBlog handleCreate={handleCreate} />

      {blogs.map((blog, index) => (
        <Blog key={index} heading={blog.heading} content={blog.content} />
      ))}
    </div>
  );
}
