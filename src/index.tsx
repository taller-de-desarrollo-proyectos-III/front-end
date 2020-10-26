import React from "react";
import ReactDOM from "react-dom";
import "./styles/_base.scss";
import "normalize.css";
import { App } from "./App";
import { unregister } from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

unregister();
