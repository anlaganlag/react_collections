import React from "react";
import classes from "./BuildControl.module.css";

const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={props.removed}
        disabled={props.disabled}
      >
        减
      </button>
      <button className={classes.More} onClick={props.added}>
        加
      </button>
    </div>
  );
};

export default buildControl;
