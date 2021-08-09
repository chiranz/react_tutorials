import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { UserContext, UserProvider } from "./context/UserContext";
import { BlogProvider } from "./context/BlogContext";

export default function Index() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <UserProvider>
          <BlogProvider>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </BlogProvider>
        </UserProvider>
        <Footer />
      </div>
    </Router>
  );
}
