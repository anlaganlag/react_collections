import React from "react";

const Title = ({ title,subtitle }) => {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <div />
      <br/>
      <p>({subtitle})</p>

    </div>
  );
};

export default Title;
