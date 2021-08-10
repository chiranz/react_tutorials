import React from "react";
import Blog from "./Blog";
import { UserContext } from "../context/UserContext";
import CreateBlog from "./CreateBlog";
import { actionTypes, BlogContext } from "../context/BlogContext";

export default function Home() {
  const { blogs, dispatch } = React.useContext(BlogContext);
  const handleCreate = (blog) => {
    dispatch({ type: actionTypes.add, payload: blog });
  };
  return (
    <div>
      <CreateBlog handleCreate={handleCreate} />

      {blogs.map((blog, index) => (
        <Blog key={index} {...blog} />
      ))}
    </div>
  );
}
