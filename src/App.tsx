import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Routes } from "./routes";

export const App: FunctionComponent = () => (
  <Router>
    <Switch>
      <Routes />
    </Switch>
  </Router>
);
