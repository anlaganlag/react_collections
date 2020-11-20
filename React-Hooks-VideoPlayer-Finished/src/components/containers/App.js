import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BestPlayer from "./BestPlayer";
import GlobalStyle from "../styles/GlobalStyle";

const App = () => (
  <Router>
      <>
        <Switch>
          <Route exact path="/" component={BestPlayer} />
          <Route exact path="/:activeVideo" component={BestPlayer} />
        </Switch>
        <GlobalStyle />
      </>
  </Router>
);

export default App;