import React from "react";
import Cell from "./cell";

function Row({vals}) {
  return (
    <div>
      <Cell val={vals[0]}/>
      <Cell val={vals[1]}/>
      <Cell val={vals[2]}/>
    </div>
  );
}

export default Row;
