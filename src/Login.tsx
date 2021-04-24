import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { isLogin } from "./Services";
import { LoginProtectRoute, ProtectRoute } from "./Components/ProtectRoute";
import LoginPage from "./Pages/LoginPage";
import LandingPage from "./Pages/LandingPage";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <LoginProtectRoute path="/login" component={LoginPage} />
          <ProtectRoute path="/home" component={LandingPage} />
          <Route
            path="/"
            render={() =>
              isLogin() ? <Redirect to="/home" /> : <Redirect to="/login" />
            }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
