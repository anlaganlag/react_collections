import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Root from "./Sections/Root";
import { analytics } from "./Database";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    analytics.logEvent("launch");
  }, []);
  return (
    <Router>
      <Switch>
        <Route to="/" component={Root} exact />
      </Switch>
    </Router>
  );
}

export default App;
