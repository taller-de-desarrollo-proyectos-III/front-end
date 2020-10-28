import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "$pages/Home";
import { AddVolunteer } from "$pages/AddVolunteer";

export const Routes: FunctionComponent = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path={"/addVolunteer"}>
        <AddVolunteer />
      </Route>
    </Switch>
  </Router>
);
