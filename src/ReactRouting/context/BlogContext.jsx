import React from "react";

export const BlogContext = React.createContext({ state: { blogs: [] } });
export const actionTypes = {
  add: "ADD POST",
  edit: "EDIT POST",
  update: "UPDATE POST",
  delete: "DELETE POST",
};

// blog = {heading, content, author}

// action = {type: "ADD_POST", payload: data}
const initialState = {
  blogs: [
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
  ],
  blogToEdit: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    // Handle create
    // Payload should send blog with author
    case actionTypes.add:
      return {
        ...state,
        blogs: [
          { ...action.payload, id: state.blogs.length + 1 },
          ...state.blogs,
        ],
      };

    // Payload should send ID
    case actionTypes.delete:
      return {
        ...state,
        blogs: [...state.blogs.filter((blog) => blog.id !== action.payload)],
      };
    case actionTypes.edit:
      // Todo: Set blog to edit
      const blogToEdit = state.blogs.find((blog) => blog.id === action.payload);
      return { ...state, blogToEdit };

    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};
