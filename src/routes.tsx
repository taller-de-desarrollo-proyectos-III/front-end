import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "$pages/Home";
import { EditVolunteer } from "$pages/EditVolunteer";
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
      <Route exact path={RoutesBuilder.volunteers.edit(":uuid")}>
        <EditVolunteer />
      </Route>
    </Switch>
  </Router>
);
