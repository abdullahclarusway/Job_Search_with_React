import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import SignIn from "../pages/Signin";
import Signup from "../pages/Signup";
import Category from "../categories/Category";
import Detail from "../pages/Detail";
import { FirebaseAuthContext } from "../context/AuthContext";
import SavedJobs from "../pages/SavedJobs";

function AppRouter() {
  const { currentUser } = useContext(FirebaseAuthContext);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/register" component={Signup} />
        <Route
          exact
          path="/category/:slug"
          component={currentUser ? Category : SignIn}
        />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/:savedjobs" component={SavedJobs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default AppRouter;
