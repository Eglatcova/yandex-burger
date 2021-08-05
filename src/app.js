import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppHeader from "./components/nav/nav";

import { getAllIngredients } from "./sevices/actions/ingredients";

import { ConstructorPage } from "./pages/home";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { ForgotPassword } from "./pages/forgot-password";
import { ResetPassword } from "./pages/reset-password";
import { Profile } from "./pages/profile";

import appStyles from "./app.module.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllIngredients());
  }, [dispatch]);

  return (
    <div className={appStyles.app}>
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/" exact={true}>
            <ConstructorPage />
          </Route>
          <Route path="/login" exact={true}>
            <LoginPage />
          </Route>
          <Route path="/register" exact={true}>
            <RegisterPage />
          </Route>
          <Route path="/forgot-password" exact={true}>
            <ForgotPassword />
          </Route>
          <Route path="/reset-password" exact={true}>
            <ResetPassword />
          </Route>
          <Route path="/profile" exact={true}>
            <Profile />
          </Route>
          <Route path="/profile/:section" exact={true}>
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
