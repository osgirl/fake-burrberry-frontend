import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "flexboxgrid2";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
