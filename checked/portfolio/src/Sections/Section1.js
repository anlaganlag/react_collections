import React, { useState, useEffect } from "react";
import "./Section1.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import UnderLineHead from "../components/UnderLineHead";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import * as Scroll from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";

const ScrollLink = Scroll.Link;

const Section1 = () => {
  const [active, setActive] = useState({
    link1: true,
    link2: false,
    link3: false,
  });

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const activeHandler = () => {
    console.log("click");
    setActiveLink((prev) => !prev);
  };

  const [activeLink, setActiveLink] = useState(false);
  let classname = activeLink ? "visible" : "";
  return (
    <div className="container-1">
      <div className="section-1" id="section1">
        <Navbar active={classname} function={activeHandler} />
        <div className="section-1_sub-cont-left">
          <div className="content-left">
            <div className="logo">
              <img src="/Images/Group 6.svg" alt="logo" />
              <HiOutlineMenuAlt3
                size="33"
                className="ham-menu"
                onClick={activeHandler}
              />
            </div>
            <div className="sub-content-left">
              <div
                className="name"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
              >
                <span>Vishal Singh.</span>
              </div>
              <span className="underline"> </span>
            </div>
            <div className="social social-section">
              <span className="insta">
                <motion.div
                  style={{ width: "fit-content" }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <a target="_blank" href="">
                    <FaInstagram />
                  </a>
                </motion.div>
              </span>
              <span className="linked">
                <motion.div
                  style={{ width: "fit-content" }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/vishal-singh-4a7914188/"
                  >
                    <FaLinkedinIn />
                  </a>
                </motion.div>
              </span>
              <span className="linked">
                <motion.div
                  style={{ width: "fit-content" }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <a target="_blank" href="https://github.com/VishalSingh4310">
                    <AiFillGithub />
                  </a>
                </motion.div>
              </span>
            </div>
            <div className="img-cont">
              <img src="/Images/main1.svg" alt="main1" />
            </div>
          </div>
        </div>
        <div className="section-1_sub-cont-right">
          <div className="navbar">
            <ul>
              <li>
                <div className="navlink">
                  <ScrollLink
                    className="navlink-text"
                    smooth={true}
                    duration={500}
                    to="section1"
                    onClick={() => setActive({ link1: true })}
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
                    onClick={() => setActive({ link2: true })}
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
                    onClick={() => setActive({ link3: true })}
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
          </div>

          <div className="content-right">
            <UnderLineHead text="Introduction" />
            <div className="content-head">
              <p
                className="content-subHead1"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-easing="ease-in-sine"
              >
                Full Stack Web Developer and Web Designer UI/UX.
              </p>
              <p
                className="content-subHead2"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-easing="ease-in-sine"
              >
                Hey! My name is Vishal and I'm a web developer with a passion
                for front end development and design. I aspire toward a career
                that will allow me to channel my creativity through crafting
                beautiful software and engaging experiences.
              </p>
              <motion.div
                style={{ width: "fit-content" }}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  data-aos="fade-left"
                  data-aos-delay="1000"
                  data-aos-duration="300"
                  data-aos-easing="ease-in-sine"
                  style={{ display: "flex", alignItems: "center" }}
                  to="/Images/Resume.pdf"
                  target="_blank"
                  className="links"
                >
                  My Resume{" "}
                  <span>
                    <BiRightArrowAlt
                      size="20"
                      style={{
                        marginLeft: "0.5rem",
                        textDecoration: "underline",
                        display: "flex",
                      }}
                    />
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
