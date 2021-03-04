import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./index.css";
import App from "./App";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

window.addEventListener(
  "message",
  (event: any) => {
    if (event.data.type) {
      switch (event.data.type) {
        case "consoleEvent":
          console.log('iframe page:',event);
          break;
      }
    }
  },
  false
);
