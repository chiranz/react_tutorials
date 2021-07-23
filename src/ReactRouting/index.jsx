import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

export default function Index() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
