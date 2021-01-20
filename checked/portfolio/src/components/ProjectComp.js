import React, { useState, useEffect } from "react";
import UnderLineHead from "./UnderLineHead";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import "./Projects.css";
import Aos from "aos";
import "aos/dist/aos.css";

const ProjectComp = (props) => {
  const [custom, setCustom] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  useEffect(() => {
    if (props.id % 2 == 0) {
      setCustom(true);
    } else {
      setCustom(false);
    }
  }, [props.id]);
  return (
    <div className="project-container">
      <div className="project-left">
        <div id="project1">
          <UnderLineHead
            text="Featured Project"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="300"
          />
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-delay="100"
          >
            {props.title}{" "}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <motion.div
                style={{ width: "fit-content" }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <a href={props.link} target="_blank">
                  <AiFillGithub color="#707070" className="repo-icon" />
                </a>
              </motion.div>
              {props.openLink !== "" && (
                <motion.div
                  style={{ width: "fit-content" }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={props.openLink}
                    style={{ marginLeft: "0.7rem" }}
                    target="_blank"
                  >
                    <FiExternalLink color="#707070" className="repo-icon" />
                  </a>
                </motion.div>
              )}
            </div>
          </h2>
          <div
            class="content"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-delay="300"
          >
            {props.desc}
          </div>
          <div
            class="content-1"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-delay="500"
            data-aos-duration="300"
          >
            {props.techs.map((item) => (
              <span key={item}>{item}</span>
            ))}
            <br />
          </div>
        </div>
      </div>
      <div
        className="project-right"
        data-aos="fade-left"
        data-aos-easing="ease-in-sine"
        data-aos-duration="300"
      >
        <motion.div
          className="project-img-cont"
          whileHover={{ y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <a href={props.link} target="_blank">
            <img
              className="project-img"
              src={props.img}
              style={{
                transform: custom ? "scale(1.5)" : "scale(1)",
                height: custom ? "auto" : "",
              }}
              alt="restrau"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectComp;
