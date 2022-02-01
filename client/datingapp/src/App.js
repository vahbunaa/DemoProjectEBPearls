import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Dashboard, SignUp, FilterUsers } from "./page";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        {/* <Route exact path="/filterusers">
          <FilterUsers />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
