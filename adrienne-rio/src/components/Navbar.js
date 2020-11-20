import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "../css/Links.css";

import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "transparent",
    boxShadow: "none",
    width: "28%",
  },
  toolbar: {
    justifyContent: "flex-end",
    marginRight: 20,
  },
}));

export default function Navbar(props) {
  const classes = useStyles();

  const { landingRef } = props;

  const state = {
    labels: [
      { name: "Home", link: "/" },
      { name: "About", link: "/about" },
      { name: "Projects", link: "/projects" },
      // { name: "Blog", link: "/blog" },
    ],
  };

  return (
    <AppBar color="transparent" position="fixed" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        {state.labels.map((label) => {
          return (
            <Link
              className="styledLink"
              style={{
                height: 80,
                marginRight: 40,
                paddingTop: 20,
                cursor: "pointer",
              }}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={450}
              to={label.name}
            >
              <h1 style={{ fontSize: "1.7vw", fontFamily: "TT Commons Bold" }}>
                {label.name}
              </h1>
            </Link>
          );
        })}
      </Toolbar>
    </AppBar>
  );
}
