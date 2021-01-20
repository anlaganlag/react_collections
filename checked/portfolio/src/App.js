import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Root from "./Sections/Root";

function App() {

  return (
    <Router>
      <Switch>
        <Route to="/" component={Root} exact />
      </Switch>
    </Router>
  );
}

export default App;
