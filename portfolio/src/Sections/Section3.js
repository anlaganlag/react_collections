import React, { useEffect } from "react";
import "./Section3.css";
import { BiCube } from "react-icons/bi";
import { FiPenTool } from "react-icons/fi";
import { MdDesktopMac } from "react-icons/md";
import UnderLineHead from "../components/UnderLineHead";
import Projects from "../components/Projects";
import { BiRightArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

const Section3 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="container-3">
      <div className="Sub-container-3" id="section3">
        <div className="extra-box">
          <div className="box-parent">
            <div
              className="box"
              style={{ background: "rgb(245 174 16)" }}
              data-aos="fade-up-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300"
            >
              <div className="box-content">
                <BiCube size="30" />
                <div>
                  <p className="box-title">Product Designer.</p>
                  <p className="box-para" style={{ color: "#fff" }}>
                    7 projects
                  </p>
                </div>
              </div>
            </div>
            <div
              className="box"
              style={{ background: "rgb(55 55 62)" }}
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300"
            >
              <div className="box-content">
                <MdDesktopMac size="30" />
                <div>
                  <p className="box-title">Full Stack Developer.</p>
                  <p className="box-para" style={{ color: "rgb(137 141 150)" }}>
                    5 projects
                  </p>
                </div>
              </div>
            </div>
            <div
              className="box"
              style={{ background: "rgb(55 55 62)" }}
              data-aos="fade-up-left"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300"
            >
              <div className="box-content">
                <FiPenTool size="30" />
                <div>
                  <p className="box-title">UI/UX Designer.</p>
                  <p className="box-para" style={{ color: "rgb(137 141 150)" }}>
                    7 projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-3">
          <div className="section-2-left">
            <UnderLineHead text="Portfolio" />
            <div className="content-head">
              <p
                className="content-subHead1"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
              >
                All Creative Works, Selected Projects.
              </p>
              <p
                className="content-subHead2"
                style={{ marginBottom: "2rem" }}
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-delay="300"
              >
                I've been doing web development for about 2 years now, and I'm
                always eager to learn more in this fast paced industry. Here's
                some my selected projects.
              </p>
              <motion.div
                style={{ width: "fit-content" }}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-delay="1000"
                  data-aos-duration="300"
                  style={{ display: "flex", alignItems: "center" }}
                  href="https://github.com/VishalSingh4310"
                  target="_blank"
                  className="links"
                >
                  Explore more{" "}
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
                </a>
              </motion.div>
            </div>
            <div className="project-img-sec-3"></div>
          </div>
          <div className="section-2-right"></div>
        </div>
        <div style={{ width: "100%" }} className="project-section">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Section3;
