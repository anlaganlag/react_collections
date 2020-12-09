import React, { Component } from "react";
import "./App.css";
// const { HashRouter, Switch, Route, Link, Redirect } = ReactRouterDOM;y
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
  Link,
  Redirect,
} from "react-router-dom";

const HelloBanner = () => {
  return (
    <div id="banner_hello" className="banner">
      <span>
        Hello Banner is currently displayed. We are currently in path "/hello"
      </span>
    </div>
  );
};

const WorldBanner = () => {
  return (
    <div id="banner_world" className="banner">
      <span>
        Hello Banner is currently displayed. We are currently in path "/world"
      </span>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div id="div_app_container" className="app-container">
          <div id="div_nav" className="nav-bar">
            <span>Navigation bar</span>
            <Link to="/hello">
              <span>Link to /hello</span>
            </Link>
            <Link to="/world">
              <span>Link to /world</span>
            </Link>
            <Link to="/clearlyinvalidpath">
              <span>Link to a clearly invalid path.</span>
            </Link>
        </div>
        <div id="main_container" className="main-container">
          <span>Main Container</span>
              <Route exact path="/">
                <div>
                  <span>Default container. We are in root path</span>
                </div>
              </Route>
              <Route path="/hello" component={HelloBanner} />
              <Route path="/world">
                <WorldBanner />
              </Route>
              <Redirect to="/" />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
