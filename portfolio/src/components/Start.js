import React from "react";
import { motion } from "framer-motion";
import "./Start.css";

const Start = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100%",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        background: "#2C2C38",
        overflow: "hidden",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="88.59"
        height="100.502"
        viewBox="0 0 88.59 100.502"
        className="loadSvg"
      >
        <g transform="translate(0.499 0.598)">
          <path
            d="M45.377,98.392a3.858,3.858,0,0,1-3.467,0L2.23,75.647a3.814,3.814,0,0,1-1.729-3L.64,26.913a3.856,3.856,0,0,1,1.738-3l39.837-23a3.858,3.858,0,0,1,3.467,0l39.68,22.75a3.814,3.814,0,0,1,1.729,3l-.139,45.739a3.856,3.856,0,0,1-1.738,3Z"
            fill="none"
            stroke="#f9a958"
            strokeMiterlimit="10"
            strokeWidth="2"
            className="loadPath"
          />
          <motion.text
            transform="translate(14 42)"
            fill="#f9a958"
            fontSize="40"
            fontFamily="Poppins-Light, Poppins"
            fontWeight="300"
            //   initial={{ transform: "scale(1.2)" }}
            //   animate={{ transform: "scale(1)" }}
          >
            <tspan x="18" y="21">
              V
            </tspan>
          </motion.text>
        </g>
      </svg>
    </div>
  );
};

export default Start;
