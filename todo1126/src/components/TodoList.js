import React, { useContext } from "react";
import { IDContext } from "./IdContext.js";
import Todo from "./Todo";
export default function TodoList(props) {
  return (
    <IDContext.Consumer>
      {(value) => {
        console.log("this is the context value being consumed", value);
        return <p>{props.todo}</p>;
      }}
    </IDContext.Consumer>
  );
}
