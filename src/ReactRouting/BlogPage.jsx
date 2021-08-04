import React from "react";
import { BlogContext } from "./context/BlogContext";

export default function BlogPage() {
  const blogId = 1;
  const { blogs } = React.useContext(BlogContext);

  return (
    <div>
      {blogs[blogId].heading}
      {blogs[blogId].author}
      {blogs[blogId].body}
    </div>
  );
}
