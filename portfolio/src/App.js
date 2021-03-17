import "./App.css";
import Landing from "./Components/Landing/Landing";
import NavBar from "./Components/Navigation/NavBar";
import Main from "./Components/Main/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Route path="/" component={Landing} />
                <Main />
            </div>
        </Router>
    );
}

export default App;
