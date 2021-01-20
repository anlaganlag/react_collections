import React, { useState } from "react";
import * as Scroll from "react-scroll";
import "./Navbar.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ScrollLink = Scroll.Link;

const Navbar = (props) => {
  const [active, setActive] = useState({
    link1: true,
    link2: false,
    link3: false,
  });
  //   let classname = props.active ? "remove-link" : "";
  return (
    <div className={`mobile-nav ${props.active}`}>
      <>
        <AiOutlineCloseCircle
          size="40"
          className="close-icon"
          onClick={() => props.function()}
        />
        <ul className={`mobile-nav-ul ${props.active}`}>
          <li>
            <div className="navlink">
              <ScrollLink
                className="navlink-text"
                smooth={true}
                duration={500}
                to="section1"
                onClick={(e) => {
                  console.log("cikc");
                  props.function();
                  setActive({ link1: true });
                }}
                style={{
                  color: active.link1
                    ? "rgb(255, 206, 44)"
                    : "rgb(137, 141, 150)",
                }}
              >
                <span className="navlink-link">About</span>
              </ScrollLink>
              <span
                style={{ visibility: active.link1 ? "visible" : "hidden" }}
                className="navlink-point"
              ></span>
              {/* <span className="navlink-span"></span> */}
            </div>
          </li>
          <li>
            <div className="navlink">
              <ScrollLink
                className="navlink-text"
                smooth={true}
                duration={1000}
                to="section3"
                onClick={() => {
                  console.log("cikc");
                  props.function();
                  setActive({ link2: true });
                }}
                style={{
                  color: active.link2
                    ? "rgb(255, 206, 44)"
                    : "rgb(137, 141, 150)",
                }}
              >
                <span className="navlink-link">Works</span>
              </ScrollLink>
              <span
                style={{ visibility: active.link2 ? "visible" : "hidden" }}
                className="navlink-point"
              ></span>
              {/* <span className="navlink-span"></span> */}
            </div>
          </li>
          <li>
            <div className="navlink">
              <ScrollLink
                smooth={true}
                duration={1000}
                to="footer"
                className="navlink-text"
                onClick={() => {
                  console.log("cikc");
                  props.function();
                  setActive({ link3: true });
                }}
                style={{
                  color: active.link3
                    ? "rgb(255, 206, 44)"
                    : "rgb(137, 141, 150)",
                }}
              >
                <span className="navlink-link">Contact</span>
              </ScrollLink>
              <span
                style={{ visibility: active.link3 ? "visible" : "hidden" }}
                className="navlink-point"
              ></span>
              {/* <span className="navlink-span"></span> */}
            </div>
          </li>
        </ul>
      </>
    </div>
  );
};

export default Navbar;
