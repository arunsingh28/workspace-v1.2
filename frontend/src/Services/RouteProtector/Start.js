import React, { useState,useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";

import ProtectedRoute from "./RouteProtector";
import Secret from "./Secret";

import Dashboard from '../../App/UI/index'

function Start() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  useEffect(()=>{
      document.title = "Dashboard"
  })

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard" exact>
            {
                isAuthenticated ? (
                <Redirect to="/" />
                ) : (
                <div>
                    Login to see thing
                    <button onClick={login}>Log in</button>
                </div>
                )
            }
            
          </Route>

          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            path="/"
            logout={logout}
            component={Dashboard}
          />
          
          <Route path="*">
            <div>404 Not found </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Start;