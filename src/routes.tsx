import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "$pages/Home";
import { CreateVolunteer } from "$pages/CreateVolunteer";

export const Routes: FunctionComponent = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path={"/volunteers/create"}>
        <CreateVolunteer />
      </Route>
    </Switch>
  </Router>
);
