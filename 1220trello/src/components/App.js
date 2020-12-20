import React, { PureComponent } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import TrelloBoard from "./TrelloBoard";
import Home from "./Home";

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/:boardID" component={TrelloBoard} />
        </div>
      </Router>
    );
  }
}

export default App;
