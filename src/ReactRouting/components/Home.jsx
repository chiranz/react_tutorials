import React from "react";
import Blog from "./Blog";
import CreateBlog from "./CreateBlog";
import { actionTypes, BlogContext } from "../context/BlogContext";

export default function Home() {
  const {
    state: { blogs },
    dispatch,
  } = React.useContext(BlogContext);
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
