import React, { useEffect } from "react";
import Background from "../components/Background";
import Introduction from "../components/Introduction";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import "../App.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default function LandingPage(props) {
  return (
    <div className="App">
      <Background />
      <Introduction />
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link
            to="About"
            spy={true}
            smooth={true}
            duration={450}
            style={{ cursor: "pointer" }}
          >
            <KeyboardArrowDownIcon className="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}
