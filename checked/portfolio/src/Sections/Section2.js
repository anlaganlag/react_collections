import React, { useEffect } from "react";
import "./Section2.css";
import UnderLineHead from "../components/UnderLineHead";
import { BiRightArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

const Section2 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-2">
      <div className="section-2" id="section2">
        <div className="section-2-left">
          <UnderLineHead text="Contact" />
          <div className="content-head">
            <p
              className="content-subHead1"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              Any Type Of Query & Discurssion.
            </p>
            <p
              className="content-subHead2 "
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-delay="100"
              style={{ marginBottom: "2rem" }}
            >
              Whether you have an idea for a project or just want to chat, feel
              free to shoot me an email!
            </p>
          </div>
        </div>
        <div className="section-2-right">
          <div
            className="content-head"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <p className="content-subHead1 content-right-top content-subHead1-mob">
              You can't use up creativity, the more you use, more you have in
              your significant mind.
            </p>
            <p
              className="content-subHead2"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-delay="100"
            >
              I develop exceptional websites and web apps that provide
              intuitive, pixel-perfect user interfaces with efficient and modern
              backends.
            </p>
          </div>
        </div>
      </div>
      <div className="experience-tab">
        <motion.div
          style={{ width: "fit-content" }}
          whileHover={{ x: 10 }}
          transition={{ duration: 0.3 }}
        >
          <a
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            href="mailto:vishals0134@gmail.com"
            className="links section-2-link"
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
        <div
          className="ex-tab-content"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-delay="100"
        >
          <div className="ex-tab-1">
            <span>2</span>
            <span className="ex-num">Years of Experience</span>
          </div>
          <div className="ex-tab-1">
            <span>5</span>
            <span className="ex-num">Successful Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
