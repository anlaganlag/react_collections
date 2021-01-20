import React from "react";
import "./UnderLineHead.css";

const UnderLineHead = (props) => {
  return (
    <div className="head-topic">
      <span className="head-line"></span>
      <p>{props.text}</p>
    </div>
  );
};

export default UnderLineHead;
