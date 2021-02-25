import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
// import Signin from "../pages/Signin";
import SignIn from "../pages/Signin";
import Signup from "../pages/Signup";
import Category from "../categories/Category";
// import Signup from "../pages/Signup";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/category/:slug" component={Category} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default AppRouter;
