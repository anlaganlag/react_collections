import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./hoc/ErrorBoundary";
import { Provider } from "react-redux";
import store from "./store";

let app = (
  <Provider store={store}>
    <Router>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Router>
  </Provider>
);

ReactDOM.render(app, document.querySelector("#root"));
registerServiceWorker();
