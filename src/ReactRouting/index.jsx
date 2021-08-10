import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { BlogProvider } from "./context/BlogContext";
import { UserContext } from "./context/UserContext";

export default function Index() {
  const { user } = React.useContext(UserContext);
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <BlogProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login">
              {user ? <Redirect to="/" /> : <Login />}
            </Route>
          </Switch>
        </BlogProvider>
        <Footer />
      </div>
    </Router>
  );
}
