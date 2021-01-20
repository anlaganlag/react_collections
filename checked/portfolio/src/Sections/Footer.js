import React, { useEffect } from "react";
import "./Footer.css";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-footer">
      <div className="Sub-container-3" id="footer">
        <div className="section-footer">
          <div className="footer-left">
            <div
              className="content-head"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              <p className="content-subHead1">Got a project ? Let' talk.</p>
              {/* <p className="content-subHead2">
              
            </p> */}
              <motion.div
                style={{ width: "fit-content" }}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-delay="300"
                  data-aos-duration="300"
                  href="mailto:vishals0134@gmail.com"
                  className="links"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span>vishals0134@gmail.com</span>
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
          </div>
          <div className="footer-right">
            <div className="content-head">
              <p
                className="content-subHead1"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
              >
                Estimate your project ?<br />
                Let me know here.
              </p>
              <p className="content-subHead2">
                <motion.div
                  style={{ width: "fit-content" }}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    target="_blank"
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="300"
                    data-aos-duration="300"
                    href="https://angry-shockley-752147.netlify.app/"
                    className="links"
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span>Previous Portfolio V-1</span>
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
              </p>
            </div>
          </div>
        </div>
        <div className="footer">
          <img src="/Images/Group 6.svg" alt="footer-logo" />
          <br />
          <p
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-delay="400"
          >
            Thanks for scrolling.{" "}
            <span
              style={{ color: "rgb(137 141 150)" }}
              data-aos="zoom-in-up"
              data-aos-easing="ease-in-sine"
              data-aos-delay="600"
            >
              That's all folks.
            </span>
          </p>
          <div className="social social-footer">
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
