import React from "react";

export const BlogContext = React.createContext({ blogs: [] });

// blog = {heading, content, author}

// action = {type: "ADD_POST", payload: data}

export const actionTypes = {
  add: "ADD POST",
  edit: "EDIT POST",
  delete: "DELETE POST",
};

export const BlogProvider = ({ children }) => {
  const [blogs, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        // Handle create
        // Payload should send blog with author
        case actionTypes.add:
          return [{ ...action.payload, id: state.length + 1 }, ...state];

        // Payload should send ID
        case actionTypes.delete:
          return [...state.filter((blog) => blog.id !== action.payload)];

        default:
          return state;
      }
    },
    [
      {
        id: 1,
        heading: "This is heading",
        content: "this is content",
        author: "Ram",
      },
      {
        id: 2,
        heading: "This is heading",
        content: "this is content",
        author: "Vivek",
      },
      {
        id: 3,
        heading: "This is heading",
        content: "this is content",
        author: "Gandhi",
      },
    ]
  );

  return (
    <BlogContext.Provider value={{ blogs, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};
