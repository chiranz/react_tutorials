import React from "react";

export const BlogContext = React.createContext(null);

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = React.useState([
    {
      id: 1,
      heading: "This is heading",
      body: "this is body",
      author: "Someone ",
    },
    {
      id: 2,
      heading: "This is heading",
      body: "this is body",
      author: "Someone ",
    },
    {
      id: 3,
      heading: "This is heading",
      body: "this is body",
      author: "Someone ",
    },
  ]);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};
