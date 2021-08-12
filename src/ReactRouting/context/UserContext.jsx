import React from "react";

export const UserContext = React.createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(
    window.localStorage.getItem("blog_user")
  );
  const handleLogin = (name) => {
    setUser(name);
    window.localStorage.setItem("blog_user", name);
  };

  return (
    <UserContext.Provider value={{ user, setUser: handleLogin }}>
      {children}
    </UserContext.Provider>
  );
};
