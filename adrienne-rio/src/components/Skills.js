import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import "../css/Skills.css";
import { description } from "../constants";

export default function Skills(props) {
  return (
    <div style={{ fontSize: "0.9em" }}>
      <h1>{props.title}</h1>
      {props.skills.map((skill) => (
        <Tooltip placement="top" title={description[skill]} enterDelay={130}>
          <h2 className="skillTitle">{skill}</h2>
        </Tooltip>
      ))}
    </div>
  );
}
