import React from "react";
import { BlogContext } from "./context/BlogContext";

export default function BlogPage() {
  const blogId = 1;
  const { blogs, setBlogs } = React.useContext(BlogContext);
  const [blog, setBlog] = React.useState(null);
  React.useEffect(() => {
    setBlog(blogs.find((blog) => blog.id === blogId));
  });

  return (
    <div>
      <h1>{blog.heading}</h1>
    </div>
  );
}
