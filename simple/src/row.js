import React from "react";
import Cell from "./cell";

function Row({ pos, vals, handleIt ,m}) {
  return (
    <div>
      <Cell pos={pos[0]} val={vals[0]} handleIt={handleIt} m={m} />
      <Cell pos={pos[1]} val={vals[1]} handleIt={handleIt} m={m}/>
      <Cell pos={pos[2]} val={vals[2]} handleIt={handleIt} m={m}/>
    </div>
  );
}

export default Row;
