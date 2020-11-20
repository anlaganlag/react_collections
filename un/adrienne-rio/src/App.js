import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import { Element } from "react-scroll";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

import Navbar from "./components/Navbar";
import InProgressPage from "./pages/InProgressPage";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import Background from "./components/Background";
import Avatar from "@material-ui/core/Avatar";
import Footer from "./components/Footer";
import "./css/global.css";

const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "1.2em",
        color: "#3b444b",
        padding: 20,
        fontFamily: "TT Commons Bold",
        backgroundColor: "white",
        borderRadius: 10,
      },
    },
  },
});

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={defaultTheme}>
        <Helmet>
          <title>Adrienne Rio</title>
          <style>{"body { background-color: #f0f5f9; }"}</style>
        </Helmet>

        <Navbar />

        <Element name="Home">
          <LandingPage />
        </Element>

        <MuiThemeProvider theme={theme}>
          <Element name="About">
            <AboutPage name="About" />
          </Element>
        </MuiThemeProvider>

        <Element name="Projects">
          <ProjectPage name="Projects" />
        </Element>

        <Footer />
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
