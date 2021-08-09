import React from "react";

export const BlogContext = React.createContext({ blogs: [] });

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
        case actionTypes.add:
          return [action.payload, ...state];

        default:
          return state;
      }
    },
    [
      {
        id: 1,
        heading: "This is heading",
        content: "this is content",
        author: "Someone ",
      },
      {
        id: 2,
        heading: "This is heading",
        content: "this is content",
        author: "Someone ",
      },
      {
        id: 3,
        heading: "This is heading",
        content: "this is content",
        author: "Someone ",
      },
    ]
  );

  return (
    <BlogContext.Provider value={{ blogs, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};
