import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "$pages/Home";
import { CreateVolunteer } from "$pages/CreateVolunteer";
import { RoutesBuilder } from "$models";

export const Routes: FunctionComponent = () => (
  <Router>
    <Switch>
      <Route exact path={RoutesBuilder.volunteers.home()}>
        <Home />
      </Route>
      <Route exact path={RoutesBuilder.volunteers.create()}>
        <CreateVolunteer />
      </Route>
    </Switch>
  </Router>
);
