import React from "react";
import Blog from "./Blog";
import { UserContext } from "../context/UserContext";
import CreateBlog from "./CreateBlog";

export default function Home() {
  const [blogs, setBlogs] = React.useState([
    {
      heading: "Blog Heading",
      content: "This is my blog content.",
    },
  ]);
  const { user } = React.useContext(UserContext);
  const handleCreate = (blog) => {
    setBlogs([blog, ...blogs]);
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
